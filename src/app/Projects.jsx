import Image from 'next/image';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import { RainbowButton } from '@/components/Buttons';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates and team communication features.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'Data visualization and analytics dashboard for financial performance monitoring.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop',
    techStack: ['React', 'D3.js', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Healthcare Portal',
    description:
      'Secure patient management system with appointment scheduling and medical record tracking.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1170&auto=format&fit=crop',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <div className="space-y-10 px-6 md:px-0">
      <p className="whitespace-break-spaces bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:mt-8 md:text-5xl">
        Projects
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            className="bg-background/30 overflow-hidden rounded-lg border border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-105"
            key={project.id}
          >
            <div className="flex h-full flex-col">
              <div className="relative h-40 overflow-hidden">
                <Image
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  src={project.image}
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-lg font-bold text-transparent dark:from-blue-300 dark:to-violet-300">
                  {project.title}
                </h3>

                <p className="mb-3 line-clamp-2 text-sm text-white">{project.description}</p>

                <div className="mb-3 flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      className="bg-primary/10 rounded-full border border-white/10 px-2 py-0.5 text-xs font-light text-white backdrop-blur-xl"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2">
                  {project.githubUrl && (
                    <RainbowButton
                      className="h-8 space-x-2 px-3 py-1 text-xs"
                      href={project.githubUrl}
                    >
                      <FaGithub className="text-white" size={14} />
                      <span>Code</span>
                    </RainbowButton>
                  )}
                  {project.liveUrl && (
                    <RainbowButton
                      className="h-8 space-x-2 px-3 py-1 text-xs"
                      href={project.liveUrl}
                    >
                      <FaExternalLinkAlt className="text-white" size={14} />
                      <span>Demo</span>
                    </RainbowButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
