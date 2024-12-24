'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    image: '/placeholder.svg?height=200&width=300',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    image: '/placeholder.svg?height=200&width=300',
    link: '#',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    image: '/placeholder.svg?height=200&width=300',
    link: '#',
  },
]

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
  )
}

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          layout="responsive"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle>{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

export default Projects

