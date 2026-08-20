import React, { useState } from "react";
import { projects } from "../content/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Search, SlidersHorizontal } from "lucide-react";

interface WorkViewProps {
    navigate: (route: string, slug?: string) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ navigate }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredProjects = projects.filter((project) => {
        const matchesCategory =
            selectedCategory === "ALL" ||
            project.category
                .toLowerCase()
                .includes(selectedCategory.toLowerCase());

        const query = searchQuery.toLowerCase();
        const matchesSearch =
            project.title.toLowerCase().includes(query) ||
            project.shortDescription.toLowerCase().includes(query) ||
            project.technologies.some((t) => t.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            {/* Header */}
            <div className="border-b border-[#262626] pb-8 mb-10">
                <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-2">
                    INDEX / ARCHIVE
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED] mb-4">
                    Selected Projects & Experiments
                </h1>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            onSelect={(slug) => navigate("project", slug)}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-16 text-center border border-[#262626] rounded bg-[#121212] p-8">
                    <p className="font-mono text-sm text-[#A3A3A3] mb-2">
                        No projects matched your criteria.
                    </p>
                    <button
                        onClick={() => {
                            setSelectedCategory("ALL");
                            setSearchQuery("");
                        }}
                        className="font-mono text-xs text-[#81A1C1] hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
};
