import React, { useState } from "react";
import { profile } from "../content/profile";
import {
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    Check,
    Copy,
} from "lucide-react";

export const Footer: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="w-full border-t border-[#262626] bg-[#0A0A0A] mt-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-[#262626]">
                    {/* Left Column: Direct contact statement */}
                    <div>
                        <div className="font-mono text-xs text-[#81A1C1] uppercase tracking-widest mb-3">
                            04 / GET IN TOUCH
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEDED] mb-4">
                            Let's talk!
                        </h3>

                        <p className="text-[#A3A3A3] text-sm leading-relaxed max-w-md mb-6">
                            Always open to discussing experimental projects,
                            open source collaborations, or ideas.
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href={profile.links.email}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#81A1C1]/50 text-[#EDEDED] text-sm font-mono rounded transition-all group"
                            >
                                <Mail className="w-4 h-4 text-[#81A1C1]" />
                                <span>{profile.email}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#737373] group-hover:text-[#81A1C1] transition-colors" />
                            </a>

                            <button
                                onClick={handleCopyEmail}
                                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#121212] hover:bg-[#1A1A1A] border border-[#262626] text-xs font-mono text-[#A3A3A3] hover:text-[#EDEDED] rounded transition-all"
                                title="Copy email address"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                        <span className="text-emerald-400">
                                            Copied
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Social profiles & System info */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            <div className="font-mono text-xs text-[#737373] uppercase tracking-widest mb-3">
                                ONLINE PROFILES
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={profile.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-mono text-[#A3A3A3] hover:text-[#EDEDED] hover:underline underline-offset-4 transition-colors"
                                >
                                    <Github className="w-4 h-4 text-[#81A1C1]" />
                                    <span>GitHub</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#737373]" />
                                </a>

                                <a
                                    href={profile.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-mono text-[#A3A3A3] hover:text-[#EDEDED] hover:underline underline-offset-4 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4 text-[#81A1C1]" />
                                    <span>LinkedIn</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#737373]" />
                                </a>

                                <a
                                    href={profile.links.x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-mono text-[#A3A3A3] hover:text-[#EDEDED] hover:underline underline-offset-4 transition-colors"
                                >
                                    <span className="text-xs font-bold text-[#81A1C1]">
                                        𝕏
                                    </span>
                                    <span>Twitter/X</span>
                                    <ArrowUpRight className="w-3 h-3 text-[#737373]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
                    <div>
                        © {profile.year} {profile.name} — nyn
                    </div>

                    <div className="flex items-center gap-4">
                        <span>From 🇳🇵</span>
                        <span>·</span>
                        <span>Currently in Punjab, India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
