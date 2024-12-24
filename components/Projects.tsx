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
    title: "JuriSync",
    description:
      "JuriSync is an advanced lawyer management system designed to simplify and enhance the operations of law firms. Tailored for efficiency and control, it equips superadmins and legal teams with the tools they need to stay organized and focused on delivering exceptional legal services.",
    image: "/projects/lawspiciousPic.png",
    link: "https://www.jurisync.swapnilsarkar.dev/",
  },
  {
    title: "Serenity",
    description:
      "Serenity is an innovative online mental health platform designed to support your emotional well-being. With cutting-edge AI, Serenity offers two core features: a comprehensive mental health assessment and real-time interaction with an AI therapist.",
    image: "/projects/serenityPic.png",
    link: "https://www.serenity.swapnilsarkar.dev/",
  },
  {
    title: "Portfolio Management System",
    description:
      "Portfolio Manager is a dedicated platform designed to help doctors organize, track, and showcase their professional journeys with ease. Built with the unique needs of medical professionals in mind, it provides tools to simplify portfolio management, ensuring a streamlined and organized approach to career growth.",
    image: "/projects/kaushikSahaPic.png",
    link: "https://www.portfoliomanager.swapnilsarkar.dev/",
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
