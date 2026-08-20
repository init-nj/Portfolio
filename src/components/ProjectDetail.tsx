import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowLeft, ArrowUpRight, Github, Terminal, Copy, Check, ExternalLink, Cpu } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    if (project.details?.codeSnippet) {
      navigator.clipboard.writeText(project.details.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const details = project.details;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 font-mono text-xs text-[#A3A3A3] hover:text-[#81A1C1] mb-8 group transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
        <span>Back to all projects</span>
      </button>

      {/* Case Study Header */}
      <div className="border-b border-[#262626] pb-8 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#737373] mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#81A1C1] uppercase tracking-wider">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <span className="px-2.5 py-0.5 bg-[#121212] border border-[#262626] rounded text-[#A3A3A3]">
            STUDENT PROJECT
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#EDEDED] mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-[#A3A3A3] leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1 bg-[#121212] text-[#EDEDED] border border-[#262626] rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Links */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[#262626]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 text-sm font-mono text-[#EDEDED] rounded transition-all group"
            >
              <Github className="w-4 h-4 text-[#81A1C1]" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
            </a>
          )}

          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 text-sm font-mono text-[#EDEDED] rounded transition-all group"
            >
              <ExternalLink className="w-4 h-4 text-[#81A1C1]" />
              <span>Live Demonstration</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
            </a>
          )}
        </div>
      </div>

      {/* Case Study Sections */}
      <div className="space-y-12">
        {/* 01 Overview */}
        {details?.overview && (
          <section className="border-b border-[#262626] pb-10">
            <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
              01 / OVERVIEW
            </div>
            <h2 className="text-xl font-bold text-[#EDEDED] mb-4">Project Scope & Intent</h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              {details.overview}
            </p>
          </section>
        )}

        {/* 02 Why I Built It */}
        {details?.whyIBuiltIt && (
          <section className="border-b border-[#262626] pb-10">
            <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
              02 / MOTIVATION
            </div>
            <h2 className="text-xl font-bold text-[#EDEDED] mb-4">Why I Built This</h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              {details.whyIBuiltIt}
            </p>
          </section>
        )}

        {/* 03 How It Works */}
        {details?.howItWorks && (
          <section className="border-b border-[#262626] pb-10">
            <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
              03 / HOW IT WORKS
            </div>
            <h2 className="text-xl font-bold text-[#EDEDED] mb-4">Technical Architecture & Logic</h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed mb-6">
              {details.howItWorks}
            </p>

            {/* Architecture Notes list */}
            {details.architectureNotes && details.architectureNotes.length > 0 && (
              <div className="bg-[#121212] border border-[#262626] rounded p-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#737373] uppercase tracking-wider mb-4">
                  <Cpu className="w-3.5 h-3.5 text-[#81A1C1]" />
                  <span>Pipeline Breakdown</span>
                </div>
                <ul className="space-y-3">
                  {details.architectureNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#A3A3A3]">
                      <span className="font-mono text-[#81A1C1] text-xs mt-0.5">0{idx + 1}.</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* Key Features */}
        {details?.keyFeatures && details.keyFeatures.length > 0 && (
          <section className="border-b border-[#262626] pb-10">
            <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
              04 / KEY HIGHLIGHTS
            </div>
            <h2 className="text-xl font-bold text-[#EDEDED] mb-4">Capabilities & Outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#121212] border border-[#262626] rounded flex items-start gap-3"
                >
                  <span className="text-[#81A1C1] font-mono text-xs mt-0.5">→</span>
                  <span className="text-sm text-[#A3A3A3]">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Code Snippet Box */}
        {details?.codeSnippet && (
          <section className="border-b border-[#262626] pb-10">
            <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
              05 / CODE IMPLEMENTATION
            </div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#EDEDED]">Core Routine Sample</h2>
              <span className="font-mono text-xs text-[#737373]">
                {details.codeSnippet.language}
              </span>
            </div>

            {/* Code Box */}
            <div className="rounded border border-[#262626] bg-[#0D0D0D] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#121212] border-b border-[#262626] font-mono text-xs text-[#737373]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#81A1C1]" />
                  <span className="text-[#A3A3A3]">{details.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2 py-1 bg-[#181818] hover:bg-[#222222] border border-[#262626] text-xs font-mono text-[#A3A3A3] hover:text-[#EDEDED] rounded transition-all"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy snippet</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-[#EDEDED] leading-relaxed">
                <code>{details.codeSnippet.code}</code>
              </pre>
            </div>
          </section>
        )}

        {/* 06 Challenges & Learnings */}
        {details?.challengesAndLearnings && (
          <section className="pb-6">
            <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
              06 / REFLECTION
            </div>
            <h2 className="text-xl font-bold text-[#EDEDED] mb-4">What I Learned</h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed">
              {details.challengesAndLearnings}
            </p>
          </section>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mt-12 pt-8 border-t border-[#262626] flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#81A1C1] hover:underline underline-offset-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#737373] hover:text-[#EDEDED] transition-colors"
          >
            <span>View repo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
