import { NowData } from "../types";

export const nowData: NowData = {
    lastUpdated: "August 2026",
    location: "India (REMOTE AVAILABLE)",
    statusHeadline:
        "Currently learning, building experimental projects, and diving deep into systems & AI.",
    sections: [
        {
            category: "Currently Exploring & Learning",
            items: [
                "Strengthening Data Structures & Algorithms (Trees, Dynamic Programming, Graphs)",
                "Experimenting with Classical Computer Vision pipelines (OpenCV, edge geometry, perspective projection)",
                "Understanding Linux kernel internals and POSIX system call mechanics",
                "Exploring lightweight neural networks & on-device inference",
            ],
        },
        {
            category: "Currently Building",
            items: [
                "Making my own Operating System from scratch for machines with low-specs",
                "A lightweight Python-based computer vision telemetry tool for webcam feeds",
                "Writing small C utilities to explore the Linux `/proc` filesystem",
            ],
        },
    ],
};
