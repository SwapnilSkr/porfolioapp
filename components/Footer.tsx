"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-sm">
              I&apos;m a passionate full-stack developer with expertise in
              creating robust and scalable web applications. Let&apos;s build
              something amazing together!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm hover:underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SwapnilSkr"
                target="_blank"
                className="hover:text-primary-foreground/80"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/swapnilskr/"
                target="_blank"
                className="hover:text-primary-foreground/80"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/swapnilskr"
                target="_blank"
                className="hover:text-primary-foreground/80"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm">
            &copy; {currentYear} Swapnil Sarkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
