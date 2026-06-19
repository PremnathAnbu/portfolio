export const allProjects = [
  {
    img: "project1.jpeg",
    title: "AI-Powered Network Threat Detection System",
    description:
      "Developed a scalable Network Threat Detection platform that automates data ingestion, validation, transformation, and model training using Machine Learning. Integrated FastAPI APIs, MLflow + DagsHub experiment tracking, Docker containerization, and CI/CD pipelines for production-ready deployment.",
    tools: [
      "Python",
      "FastAPI",
      "ScikitLearn",
      "MLflow",
      "MongoDB",
      "Docker",
      "DagsHub",
      "GithubAction",
      "AWS",
    ],
    image: null,
    github:
      "https://github.com/PremnathAnbu/Network_Security/blob/main/README.md",
  },
  {
    img: "project2.jpeg",
    title:
      "Multi-Agent LLM Orchestration System for Intelligent Task Automation",
    description:
      "A production-ready multi-agent AI system built with LangGraph and LangChain that orchestrates specialised LLM agents through a stateful graph — each agent handling a distinct role in the reasoning pipeline. The system exposes a FastAPI backend (port 9999) and a Streamlit UI (port 8501), fully containerised with Docker and automated through a Jenkins CI/CD pipeline — demonstrating end-to-end agentic AI engineering from graph design to deployment.",

    tools: [
      "LANGGRAPH",
      "LANGCHAIN",
      "FASTAPI",
      "UVICORN",
      "DOCKER",
      "JENKINS CI/CD",
      "STREAMLIT",
      "PYDANTIC",
    ],
    image: null,
    github: "https://github.com/PremnathAnbu/Multi-Agent-LLM-Orchestration-",
  },
  {
    img: "project3.jpeg",
    title: "StayPredict — Hotel Cancellation Prediction System",
    description:
      "Built a production-grade Machine Learning system to predict hotel reservation cancellations using LightGBM and an end-to-end modular ML pipeline. Developed a Flask-based web application with Docker containerization, MLflow tracking, Jenkins CI/CD automation, and Google Cloud Run deployment with model versioning through Google Cloud Storage.",
    tools: [
      "Python",
      "Flask",
      "ScikitLearn",
      "LightGBM",
      "MLflow",
      "GoogleCloud",
      "Docker",
      "Jenkins",
    ],
    image: null,
    github:
      "https://github.com/PremnathAnbu/Hotel_reservation_using-GCP-jenkins/blob/main/README.md",
  },
];
