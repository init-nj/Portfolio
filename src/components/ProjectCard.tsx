import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, FolderGit2, Terminal } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (slug: string) => void;
  featuredHero?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featuredHero = false
}) => {
  return (
    <article
      className={`group relative flex flex-col justify-between bg-[#121212] border border-[#262626] hover:border-[#383838] transition-all duration-200 rounded-sm p-6 sm:p-7 ${
        featuredHero ? 'lg:col-span-2' : ''
      }`}
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between font-mono text-xs text-[#737373] mb-4 pb-3 border-b border-[#262626]">
          <span className="text-[#81A1C1] tracking-wider uppercase">{project.category}</span>
          <span className="tracking-widest">{project.year}</span>
        </div>

        {/* Visual Header / Terminal Minimalist Placeholder */}
        <div className="mb-5 p-3.5 bg-[#0D0D0D] border border-[#262626] rounded font-mono text-xs text-[#737373] flex items-center justify-between group-hover:border-[#383838] transition-colors">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#81A1C1]" />
            <span className="text-[#A3A3A3] truncate">{project.slug}</span>
          </div>
          <span className="text-[10px] uppercase text-[#737373] tracking-widest hidden sm:inline">
            {project.technologies[0]}
          </span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelect(project.slug)}
          className={`font-bold tracking-tight text-[#EDEDED] group-hover:text-[#81A1C1] transition-colors cursor-pointer mb-3 ${
            featuredHero ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          }`}
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-[#A3A3A3] text-sm leading-relaxed mb-6 line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      {/* Footer & Actions */}
      <div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] px-2 py-0.5 bg-[#181818] text-[#A3A3A3] border border-[#262626] rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-[#262626]">
          <button
            onClick={() => onSelect(project.slug)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#81A1C1] hover:underline underline-offset-4"
          >
            <span>Case Study</span>
            <span className="text-[10px]">→</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#737373] hover:text-[#EDEDED] transition-colors"
              title="View repository on GitHub"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Source</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
