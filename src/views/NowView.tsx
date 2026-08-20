import React from "react";
import { nowData } from "../content/now";
import { Clock, MapPin, Book, Terminal, Compass } from "lucide-react";

export const NowView: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            {/* Header */}
            <div className="border-b border-[#262626] pb-8 mb-10">
                <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-2">
                    REAL-TIME SNAPSHOT
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED] mb-4">
                    What I'm Doing Now
                </h1>

                <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#737373] pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#81A1C1]" />
                        <span>Last updated: {nowData.lastUpdated}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#81A1C1]" />
                        <span>{nowData.location}</span>
                    </div>
                </div>
            </div>

            {/* Main Focus Statement */}
            <div className="p-6 bg-[#121212] border border-[#262626] rounded mb-10">
                <div className="flex items-center gap-2 font-mono text-xs text-[#81A1C1] uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>CURRENT THEME</span>
                </div>
                <p className="text-lg text-[#EDEDED] font-medium leading-relaxed">
                    {nowData.statusHeadline}
                </p>
            </div>

            {/* Now Sections */}
            <div className="space-y-10 mb-12">
                {nowData.sections.map((sec, idx) => (
                    <div key={idx} className="border-b border-[#262626] pb-8">
                        <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-4">
                            0{idx + 1} / {sec.category}
                        </div>
                        <ul className="space-y-3">
                            {sec.items.map((item, itemIdx) => (
                                <li
                                    key={itemIdx}
                                    className="flex items-start gap-3 text-sm sm:text-base text-[#EDEDED]"
                                >
                                    <span className="text-[#81A1C1] font-mono text-sm mt-0.5">
                                        →
                                    </span>
                                    <span className="leading-relaxed text-[#A3A3A3]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Currently Reading */}
                {nowData.currentlyReading && (
                    <div className="p-6 bg-[#121212] border border-[#262626] rounded">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#737373] uppercase tracking-wider mb-3">
                            <Book className="w-3.5 h-3.5 text-[#81A1C1]" />
                            <span>CURRENTLY READING</span>
                        </div>
                        <h3 className="text-base font-bold text-[#EDEDED] mb-1">
                            {nowData.currentlyReading.title}
                        </h3>
                        <p className="font-mono text-xs text-[#A3A3A3] mb-3">
                            by {nowData.currentlyReading.author}
                        </p>
                        <p className="text-xs font-mono text-[#81A1C1]">
                            Status: {nowData.currentlyReading.status}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
