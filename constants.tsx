
import React from 'react';
import { User, Briefcase, Layout, Cpu, Mail } from 'lucide-react';
import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    title: "Medical AI Assistant",
    description: "LLM-based symptom extraction and smart Q&A with RAG implementation using pgvector.",
    tags: ["AI", "Healthcare"],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI"],
  },
  {
    title: "Connected Health Platform",
    description: "Serverless Node.js + TypeScript backend with real-time React dashboards.",
    tags: ["Fintech", "IoT"],
    tech: ["Node.js", "AWS Lambda", "React", "Redux"],
  },
  {
    title: "IoT SIM Provisioning",
    description: "Enterprise platform for SIM management using Kafka-based event-driven architecture.",
    tags: ["IoT", "Scalability"],
    tech: ["Kafka", "Express.js", "React", "MongoDB"],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Gadgeon Systems Inc.",
    role: "Senior Software Engineer",
    period: "Aug 2022 – Present",
    points: [
      "Built full-stack applications using React, Next.js, Node.js (TypeScript), and FastAPI.",
      "Worked with microservices and serverless architectures on AWS.",
      "Led LLM integration in an AI-powered product for healthcare automation."
    ]
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "Jul 2021 – Aug 2022",
    points: [
      "End-to-end development of web applications for diverse global clients.",
      "Built and deployed web apps using React, Node.js, MongoDB/PostgreSQL.",
      "Conducted requirement gathering and technical documentation."
    ]
  }
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Redux", "Tailwind"],
  backend: ["Node.js", "FastAPI", "Kafka", "Python", "Go"],
  ai: ["LLMs", "Prompt Engineering", "RAG", "Fine-Tuning", "LangChain"],
  cloud: ["AWS", "GCP", "Docker", "Kubernetes"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "pgvector"]
};

export const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
  { id: 'projects', label: 'Projects', icon: <Layout size={20} /> },
  { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
] as const;
