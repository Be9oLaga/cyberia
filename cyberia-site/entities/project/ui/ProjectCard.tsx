import { Project } from '../model/types';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};