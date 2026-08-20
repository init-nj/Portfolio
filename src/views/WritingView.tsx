import React, { useState } from "react";
import { articles } from "../content/articles";
import { ArrowUpRight, Search, BookOpen } from "lucide-react";

export const WritingView: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedTag, setSelectedTag] = useState<string>("ALL");

    // Extract all unique tags
    const allTags = [
        "ALL",
        ...Array.from(new Set(articles.flatMap((a) => a.tags || []))),
    ];

    const filteredArticles = articles.filter((article) => {
        const matchesTag =
            selectedTag === "ALL" ||
            (article.tags && article.tags.includes(selectedTag));
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query) ||
            article.publication.toLowerCase().includes(query);

        return matchesTag && matchesSearch;
    });

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            {/* Header */}
            <div className="border-b border-[#262626] pb-8 mb-10">
                <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-2">
                    WRITING / PUBLICATIONS
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED] mb-4">
                    Articles & Technical Notes
                </h1>
                <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-2xl">
                    Writing is how I verify that I truly understand a concept.
                    Here is a curated collection of deep dives published on
                    nepStandard.
                </p>
            </div>

            {/* Filter and Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#262626]">
                {/* Tag Filters */}
                <div className="flex flex-wrap items-center gap-1.5">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`font-mono text-xs px-2.5 py-1 rounded transition-all focus:outline-none ${
                                selectedTag === tag
                                    ? "bg-[#181818] text-[#81A1C1] border border-[#262626] font-semibold"
                                    : "bg-transparent text-[#A3A3A3] hover:text-[#EDEDED] hover:bg-[#121212]"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <Search className="w-3.5 h-3.5 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles..."
                        className="w-full pl-9 pr-3 py-1.5 bg-[#121212] border border-[#262626] focus:border-[#81A1C1] text-xs font-mono text-[#EDEDED] rounded placeholder:text-[#737373] focus:outline-none"
                    />
                </div>
            </div>

            {/* Articles List */}
            {filteredArticles.length > 0 ? (
                <div className="divide-y divide-[#262626] border border-[#262626] rounded bg-[#121212]/50 overflow-hidden">
                    {filteredArticles.map((article) => (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 sm:p-7 block transition-all hover:bg-[#121212] focus:outline-none focus:bg-[#181818]"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-mono text-xs text-[#737373]">
                                        {article.date}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-[#EDEDED] group-hover:text-[#81A1C1] transition-colors">
                                        {article.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 font-mono text-xs text-[#737373]">
                                    <span className="px-2 py-0.5 bg-[#181818] border border-[#262626] text-[#A3A3A3] rounded text-[11px]">
                                        {article.publication}
                                    </span>
                                    {article.readTime && (
                                        <span className="text-[11px] text-[#737373] hidden sm:inline">
                                            {article.readTime}
                                        </span>
                                    )}
                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
                                </div>
                            </div>

                            <p className="text-sm text-[#A3A3A3] leading-relaxed mb-4 sm:ml-20">
                                {article.description}
                            </p>

                            {/* Tags */}
                            {article.tags && (
                                <div className="flex flex-wrap gap-1.5 sm:ml-20">
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] px-2 py-0.5 bg-[#0D0D0D] text-[#737373] border border-[#262626] rounded"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </a>
                    ))}
                </div>
            ) : (
                <div className="py-16 text-center border border-[#262626] rounded bg-[#121212] p-8">
                    <BookOpen className="w-6 h-6 text-[#737373] mx-auto mb-3" />
                    <p className="font-mono text-sm text-[#A3A3A3] mb-2">
                        No articles match your search.
                    </p>
                    <button
                        onClick={() => {
                            setSelectedTag("ALL");
                            setSearchQuery("");
                        }}
                        className="font-mono text-xs text-[#81A1C1] hover:underline"
                    >
                        Reset filters
                    </button>
                </div>
            )}
        </div>
    );
};
