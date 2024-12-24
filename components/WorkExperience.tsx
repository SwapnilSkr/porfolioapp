'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const workExperience = [
  {
    company: 'Beta Factory',
    positions: [
      {
        title: 'Software Developer',
        duration: 'Sep 2024 - Nov 2024 · 3 mos',
        skills: ['Software Construction', 'Amazon Web Services (AWS)', '3 more skills'],
      }
    ],
    location: 'India · Remote',
  },
  {
    company: '株式会社キャリアサバイバル | Career Survival',
    positions: [
      {
        title: 'Software Developer',
        duration: 'Jun 2024 - Sep 2024 · 4 mos',
        skills: ['Project Management', 'Systems Design', '10 more skills'],
      },
      {
        title: 'Associate Software Developer',
        duration: 'Dec 2023 - May 2024 · 6 mos',
        skills: ['Software Construction', 'Tailwind CSS', '5 more skills'],
      }
    ],
    location: 'Remote',
  },
]

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ job, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card>
      <CardHeader>
        <CardTitle>{job.company}</CardTitle>
        <p className="text-sm text-muted-foreground">{job.location}</p>
      </CardHeader>
      <CardContent>
        {job.positions.map((position, posIndex) => (
          <motion.div
            key={posIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: posIndex * 0.1 }}
            className={posIndex > 0 ? 'mt-4 pt-4 border-t' : ''}
          >
            <p className="font-semibold">{position.title}</p>
            <p className="text-sm text-muted-foreground">{position.duration}</p>
            <div className="mt-2">
              <p className="text-sm font-semibold">Skills:</p>
              <p className="text-sm text-muted-foreground">{position.skills.join(', ')}</p>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
)

export default WorkExperience
