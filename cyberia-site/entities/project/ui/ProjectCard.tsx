import Image from 'next/image';
import { Project } from '../model/types';
import { Button } from '@/shared/ui/Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-56 w-full overflow-hidden bg-gray-200">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center text-white text-xl">
            {project.title[0]}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold font-unbounded mb-2 line-clamp-1">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{project.description}</p>
        {project.price && (
          <div className="text-blue-600 font-bold text-lg">{project.price.toLocaleString()} ₽</div>
        )}
        <Button variant="outline" size="sm" className="mt-4 w-full">
          Подробнее
        </Button>
      </div>
    </div>
  );
};