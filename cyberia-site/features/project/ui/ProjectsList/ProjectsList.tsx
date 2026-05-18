'use client';
import { useEffect } from 'react';
import { useProjectStore } from '@/entities/project/model/projectStore';
import { ProjectCard } from '@/entities/project/ui/ProjectCard';

export const ProjectsList = () => {
  const { projects, isLoading, fetchProjects } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, []);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};