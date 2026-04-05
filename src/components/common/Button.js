const Button = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "group flex items-center gap-3 border text-sm font-medium transition-transform duration-200 border-none outline-none rounded";

  const variantClasses = {
    primary: "bg-primary-text text-primary-bg hover:scale-[1.02]",
    secondary: "text-accent hover:opacity-60",
  };

  const sizeClasses = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
