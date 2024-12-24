"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    content:
      "Working with this developer was an absolute pleasure. Their technical skills and attention to detail resulted in a product that exceeded our expectations.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Jane Smith",
    position: "CTO, InnovateTech",
    content:
      "I was impressed by the developer's ability to quickly grasp complex concepts and deliver elegant solutions. They are a valuable asset to any development team.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Alex Johnson",
    position: "Project Manager, WebSolutions",
    content:
      "The developer's expertise in both front-end and back-end technologies allowed for seamless integration and a smooth development process. Highly recommended!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          What Clients Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <Quote className="h-12 w-12 text-primary mb-6 mx-auto" />
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg md:text-xl text-center mb-6">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex items-center justify-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
