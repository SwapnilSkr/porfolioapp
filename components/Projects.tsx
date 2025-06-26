"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Goodfit",
    description:
      "AI-powered interview automation platform where organizations post job-specific roles with custom questions. Candidates are interviewed by an AI interviewer trained on the posting. Includes role-question schema design, response tracking, and AI-based evaluation.",
    image: "/projects/goodfit.png",
    link: "https://goodfit.so",
  },
  {
    title: "Telescope",
    description:
      "Telegram group surveillance platform designed for law enforcement and intelligence teams. Tracks activity in cybercrime and extremist groups using Telegram API pipelines, FastAPI backend, and MongoDB filters for real-time analysis.",
    image: "/projects/telescope.png",
    link: "https://thetelescope.io",
  },
  {
    title: "Verideck",
    description:
      "Social intelligence tool that scrapes and filters content from social platforms based on boolean queries and topic relevance. Built for government and intelligence use cases with Puppeteer, MongoDB, and Next.js for clean, high-signal data extraction.",
    image: "/projects/verideck.png",
    link: "https://main-verideck.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          layout="responsive"
        />
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <CardTitle>{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default Projects;
