"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Zap } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Crafting Digital <span className="text-primary">Experiences</span>{" "}
              with Code
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Full-stack developer specializing in building robust, scalable,
              and user-centric web applications. Let&apos;s turn your ideas into
              reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <SkillCard
                icon={<Code className="h-8 w-8" />}
                title="Front-end"
              />
              <SkillCard
                icon={<Server className="h-8 w-8" />}
                title="Back-end"
              />
              <SkillCard
                icon={<Zap className="h-8 w-8" />}
                title="API Integration"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/mypic.jpeg"
                alt="Swapnil Sarkar"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
              <span className="text-2xl font-bold">2+</span>
              <span className="text-sm block">Years Exp.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
}

const SkillCard = ({ icon, title }: SkillCardProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-background/50 backdrop-blur-sm p-4 rounded-lg shadow-md text-center"
  >
    <div className="text-primary mb-2">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
  </motion.div>
);

export default Hero;
