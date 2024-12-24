"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-4" />
                <span>swapnil@veloship.co</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-4" />
                <span>+91 9474877175</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-4" />
                <span>India</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* Add your social media icons/links here */}
                <a
                  href="https://www.linkedin.com/in/swapnilskr/"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SwapnilSkr"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/swapnilskr"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={6} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
