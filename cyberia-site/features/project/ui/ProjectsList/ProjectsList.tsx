'use client';
import { ProjectCard } from '@/entities/project/ui';
import { Project } from '@/entities/project/model/types';

interface ProjectsListProps {
  initialProjects: Project[];
}

export const ProjectsList = ({ initialProjects }: ProjectsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {initialProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};