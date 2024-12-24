"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Server,
  Smartphone,
  Zap,
  Database,
  Cloud,
  Globe,
  Cpu,
  Layers,
  GitBranch,
} from "lucide-react";
import { JSX } from "react";

const features = [
  {
    title: "Full-Stack Development",
    description:
      "Expertise in both front-end and back-end technologies, creating seamless, end-to-end solutions.",
    icon: <Layers className="h-8 w-8 text-primary" />,
  },
  {
    title: "Front-End Mastery",
    description:
      "Proficient in React, Next.js, and React Native for building responsive and dynamic user interfaces.",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
  },
  {
    title: "Back-End Proficiency",
    description:
      "Skilled in Node.js, NestJS, and Express for robust server-side applications and APIs.",
    icon: <Server className="h-8 w-8 text-primary" />,
  },
  {
    title: "Database Management",
    description:
      "Experience with both SQL (PostgreSQL) and NoSQL (MongoDB) databases for efficient data storage and retrieval.",
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    title: "Cloud Services",
    description:
      "Proficient in AWS and Firebase for scalable, cloud-based solutions and serverless architectures.",
    icon: <Cloud className="h-8 w-8 text-primary" />,
  },
  {
    title: "API Development",
    description:
      "Expertise in RESTful API design and GraphQL for flexible and efficient data exchange.",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    title: "DevOps & Containerization",
    description:
      "Skilled in Docker and Kubernetes for consistent development, testing, and deployment environments.",
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    title: "AI Integration",
    description:
      "Experience with LangChain for building applications with large language models and AI capabilities.",
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
  {
    title: "Version Control",
    description:
      "Proficient in Git and GitHub for efficient code management and collaboration.",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          What I Bring to Your Project
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="h-full"
  >
    <Card className="flex flex-col h-full">
      <CardHeader className="flex-grow">
        <CardTitle className="flex items-center">
          {feature.icon}
          <span className="ml-2">{feature.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export default Features;
