import React from "react";
import { profile } from "../content/profile";

interface HeaderProps {
    currentRoute: string;
    navigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigate }) => {
    const navItems = [
        { label: "WORK", route: "work" },
        { label: "WRITING", route: "writing" },
        { label: "NOW", route: "now" },
    ];

    return (
        <header className="sticky top-0 z-40 w-full bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Brand / Name */}
                <button
                    onClick={() => navigate("home")}
                    className="group flex items-baseline gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#81A1C1]"
                    aria-label="Go to homepage"
                >
                    <span className="font-mono text-base font-bold tracking-widest text-[#EDEDED] group-hover:text-[#81A1C1] transition-colors">
                        nyn
                    </span>
                </button>

                {/* Navigation Links */}
                <nav className="flex items-center gap-1 sm:gap-2">
                    {navItems.map((item) => {
                        const isActive = currentRoute === item.route;
                        return (
                            <button
                                key={item.route}
                                onClick={() => navigate(item.route)}
                                className={`font-mono text-xs tracking-wider px-3 py-1.5 rounded transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#81A1C1] ${
                                    isActive
                                        ? "text-[#81A1C1] bg-[#151515] border border-[#262626]"
                                        : "text-[#A3A3A3] hover:text-[#EDEDED] hover:bg-[#121212]"
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};
