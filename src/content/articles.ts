import { Article } from "../types";

export const articles: Article[] = [
    {
        id: "language-entropy-lstm",
        title: "How Much Does Context Matter in Language? Exploring Character Entropy with an LSTM",
        date: "2026-08-30",
        year: "2026",
        publication: "Personal Blog",
        url: "https://sustaining-poultry-2e7.notion.site/Predicting-the-next-character-using-historical-context-3cc2ffbbceca80ff88abc98ecd7bc1d4#3cc2ffbbceca81d785a7e2eeac6f9745",
        description:
            "An information-theoretic experiment exploring language redundancy and conditional entropy using an 8-million-character corpus, exact n-gram statistics, and a character-level LSTM.",
        tags: [
            "Machine Learning",
            "Information Theory",
            "PyTorch",
            "LSTM",
            "NLP",
        ],
        readTime: "10 min read",
        featured: true,
    },
];
