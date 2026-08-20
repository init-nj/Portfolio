import React from "react";
import { profile } from "../content/profile";
import { projects } from "../content/projects";
import { articles } from "../content/articles";
import { nowData } from "../content/now";
import { ProjectCard } from "../components/ProjectCard";
import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface HomeViewProps {
    navigate: (route: string, slug?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ navigate }) => {
    const featuredProjects = projects.filter((p) => p.featured);
    const featuredArticles = articles.slice(0, 4);

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            {/* Editorial Hero Header */}
            <section className="pb-14 border-b border-[#262626]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                        <div className="flex items-baseline gap-3 mb-2">
                            <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#EDEDED]">
                                ⊰ SHOWCASE ⊱
                            </h1>
                        </div>
                    </div>

                    {/* Quick External Links */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs text-[#A3A3A3]">
                        <a
                            href={profile.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 text-[#EDEDED] rounded transition-all group"
                        >
                            <Github className="w-3.5 h-3.5 text-[#81A1C1]" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
                        </a>

                        <a
                            href={profile.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 text-[#EDEDED] rounded transition-all group"
                        >
                            <Linkedin className="w-3.5 h-3.5 text-[#81A1C1]" />
                            <span>LinkedIn</span>
                            <ArrowUpRight className="w-3 h-3 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
                        </a>

                        <a
                            href={profile.links.email}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 text-[#EDEDED] rounded transition-all group"
                        >
                            <Mail className="w-3.5 h-3.5 text-[#81A1C1]" />
                            <span>Email</span>
                            <ArrowUpRight className="w-3 h-3 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Statement / Manifesto */}
                <div className="max-w-2xl">
                    <p className="text-lg sm:text-xl text-[#EDEDED] font-normal leading-relaxed mb-4">
                        {profile.statement}
                    </p>
                    <div className="font-mono text-xs text-[#737373] flex items-center gap-2">
                        <span className="text-[#81A1C1]">→</span>
                        <span>nyn</span>
                    </div>
                </div>
            </section>

            {/* 01 / SELECTED WORK */}
            <section className="py-16 border-b border-[#262626]">
                <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#262626]">
                    <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm text-[#81A1C1] font-semibold">
                            01
                        </span>
                        <h2 className="font-mono text-base tracking-wider font-bold text-[#EDEDED] uppercase">
                            SELECTED WORK
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("work")}
                        className="font-mono text-xs text-[#A3A3A3] hover:text-[#81A1C1] inline-flex items-center gap-1 group transition-colors"
                    >
                        <span>View all projects</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Projects Grid: 1 Hero + 2 Secondary */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            onSelect={(slug) => navigate("project", slug)}
                            featuredHero={index === 0}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center sm:text-left">
                    <button
                        onClick={() => navigate("work")}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 font-mono text-xs text-[#EDEDED] rounded transition-all group"
                    >
                        <span>
                            Browse Complete Project Archive ({projects.length})
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#81A1C1] group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>

            {/* 02 / WRITING */}
            <section className="py-16 border-b border-[#262626]">
                <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#262626]">
                    <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm text-[#81A1C1] font-semibold">
                            02
                        </span>
                        <h2 className="font-mono text-base tracking-wider font-bold text-[#EDEDED] uppercase">
                            WRITING & NOTES @nepStandard
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("writing")}
                        className="font-mono text-xs text-[#A3A3A3] hover:text-[#81A1C1] inline-flex items-center gap-1 group transition-colors"
                    >
                        <span>View all writing</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Article Dot-Leader Rows */}
                <div className="divide-y divide-[#262626]">
                    {featuredArticles.map((article) => (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group py-4.5 block transition-colors hover:bg-[#121212] px-2 rounded-sm"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                <div className="flex items-baseline gap-3 min-w-0">
                                    <span className="font-mono text-xs text-[#737373] shrink-0">
                                        {article.year}
                                    </span>
                                    <h3 className="text-sm sm:text-base font-semibold text-[#EDEDED] group-hover:text-[#81A1C1] transition-colors truncate">
                                        {article.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 font-mono text-xs text-[#737373]">
                                    <span className="px-2 py-0.5 bg-[#121212] border border-[#262626] text-[#A3A3A3] rounded text-[11px]">
                                        {article.publication}
                                    </span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
                                </div>
                            </div>

                            <p className="text-xs text-[#A3A3A3] mt-1.5 sm:ml-12 line-clamp-1">
                                {article.description}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            {/* 03 / NOW */}
            <section className="py-16">
                <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#262626]">
                    <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm text-[#81A1C1] font-semibold">
                            03
                        </span>
                        <h2 className="font-mono text-base tracking-wider font-bold text-[#EDEDED] uppercase">
                            NOW
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate("now")}
                        className="font-mono text-xs text-[#A3A3A3] hover:text-[#81A1C1] inline-flex items-center gap-1 group transition-colors"
                    >
                        <span>More details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="p-6 bg-[#121212] border border-[#262626] rounded">
                    <div className="flex items-center justify-between font-mono text-xs text-[#737373] mb-4 pb-3 border-b border-[#262626]">
                        <span>{nowData.location}</span>
                        <span className="text-[#81A1C1]">
                            Updated {nowData.lastUpdated}
                        </span>
                    </div>

                    <p className="text-sm text-[#EDEDED] font-medium mb-4">
                        {nowData.statusHeadline}
                    </p>

                    <ul className="space-y-2.5">
                        {nowData.sections[0].items
                            .slice(0, 3)
                            .map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A3A3A3]"
                                >
                                    <span className="text-[#81A1C1] font-mono text-xs mt-0.5">
                                        →
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};
