"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ReactNode } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-full bg-background/80 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-primary"
        >
          Swapnil Sarkar
        </motion.h1>
        <nav className="hidden md:flex space-x-4 items-center">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <NavLink href="#home" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
            <NavLink href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#testimonials" onClick={() => setIsOpen(false)}>
              Testimonials
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

interface NavLinkProps {
  href: string;
  children: ReactNode;
  [key: string]: unknown;
}

const NavLink = ({ href, children, ...props }: NavLinkProps) => (
  <motion.a
    href={href}
    className="text-muted-foreground hover:text-primary transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {children}
  </motion.a>
);

export default Header;
