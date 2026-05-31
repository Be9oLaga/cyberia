import Image from 'next/image';
import { Project } from '../model/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold font-unbounded mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
        {project.price && (
          <div className="mt-4 text-blue-600 font-semibold">{project.price.toLocaleString()} ₽</div>
        )}
      </div>
    </div>
  );
};