import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./views/HomeView";
import { WorkView } from "./views/WorkView";
import { WritingView } from "./views/WritingView";
import { NowView } from "./views/NowView";
import { ProjectDetail } from "./components/ProjectDetail";
import { projects } from "./content/projects";

export default function App() {
    const [currentRoute, setCurrentRoute] = useState<string>("home");
    const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(
        null,
    );

    // Sync route with URL hash on load and hashchange
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace(/^#\/?/, "");
            if (!hash || hash === "home") {
                setCurrentRoute("home");
                setActiveProjectSlug(null);
            } else if (
                hash.startsWith("work/") ||
                hash.startsWith("project/")
            ) {
                const slug = hash.replace(/^(work|project)\//, "");
                setCurrentRoute("project");
                setActiveProjectSlug(slug);
            } else if (["work", "writing", "about", "now"].includes(hash)) {
                setCurrentRoute(hash);
                setActiveProjectSlug(null);
            }
            window.scrollTo({ top: 0, behavior: "instant" });
        };

        // Initial check
        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const navigate = (route: string, slug?: string) => {
        if (route === "home") {
            window.location.hash = "";
            setCurrentRoute("home");
            setActiveProjectSlug(null);
        } else if (route === "project" && slug) {
            window.location.hash = `work/${slug}`;
            setCurrentRoute("project");
            setActiveProjectSlug(slug);
        } else {
            window.location.hash = route;
            setCurrentRoute(route);
            setActiveProjectSlug(null);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentProject = activeProjectSlug
        ? projects.find((p) => p.slug === activeProjectSlug)
        : null;

    return (
        <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#EDEDED]">
            <Header currentRoute={currentRoute} navigate={navigate} />

            <main className="flex-1">
                {currentRoute === "home" && <HomeView navigate={navigate} />}

                {currentRoute === "work" && <WorkView navigate={navigate} />}

                {currentRoute === "project" && currentProject && (
                    <ProjectDetail
                        project={currentProject}
                        onBack={() => navigate("work")}
                    />
                )}

                {currentRoute === "project" && !currentProject && (
                    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                        <h2 className="text-2xl font-bold mb-3 text-[#EDEDED]">
                            Project not found
                        </h2>
                        <button
                            onClick={() => navigate("work")}
                            className="text-[#81A1C1] font-mono text-sm underline hover:text-[#EDEDED] transition-colors"
                        >
                            ← Back to all projects
                        </button>
                    </div>
                )}

                {currentRoute === "writing" && <WritingView />}

                {currentRoute === "now" && <NowView />}
            </main>

            <Footer />
        </div>
    );
}
