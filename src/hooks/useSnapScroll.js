// hooks/useSnapScroll.js
import { useEffect, useRef, useCallback } from "react";

export const useSnapScroll = ({ prevId, nextId, threshold = 0.5 }) => {
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);
  const isScrollingRef = useRef(false);
  const touchStartY = useRef(null);

  const releaseLock = useCallback(() => {
    isScrollingRef.current = false;
  }, []);

  const scrollTo = useCallback(
    (id) => {
      if (!id || isScrollingRef.current) return;
      isScrollingRef.current = true;

      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

      // Release lock when scroll actually ends (modern browsers)
      const onScrollEnd = () => {
        releaseLock();
        window.removeEventListener("scrollend", onScrollEnd);
        clearTimeout(fallback);
      };

      // Fallback for browsers without scrollend support
      const fallback = setTimeout(() => {
        releaseLock();
        window.removeEventListener("scrollend", onScrollEnd);
      }, 1500);

      window.addEventListener("scrollend", onScrollEnd, { once: true });
    },
    [releaseLock],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold },
    );
    observer.observe(section);

    const handleWheel = (e) => {
      if (!isVisibleRef.current || isScrollingRef.current) return;
      if (e.deltaY > 0) scrollTo(nextId);
      if (e.deltaY < 0) scrollTo(prevId);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!isVisibleRef.current || touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (delta > 40) scrollTo(nextId);
      if (delta < -40) scrollTo(prevId);
      touchStartY.current = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [prevId, nextId, threshold, scrollTo]);

  return sectionRef;
};
