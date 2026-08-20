import { Project } from "../types";

export const projects: Project[] = [
    {
        slug: "Baller-Finder",
        title: "Clustering Algorithm to find Players of similar Datasets",
        shortDescription:
            "KNN Similarity finding engine that tracks for players with similar statistics such as Goals,Assits, etc",
        year: "2026",
        category: "Unsupervised Learning",
        technologies: [
            "Python",
            "NumPy",
            "Matplotlib",
            "Pandas",
            "Scikit-learn",
        ],
        githubUrl: "https://github.com/init-nj/baller-finder",
        liveUrl: "https://baller-finder-nnyuo6gzefbaudknx53gli.streamlit.app",
        featured: true,
        order: 1,
        details: {
            overview: `It currently indexes 28,665 player careers and uses a K-Nearest Neighbors (KNN) model to determine similarity. The similarity is based on per-90 performance metrics, rather than simply comparing raw career totals.`,
            whyIBuiltIt: `To hone my EDA skills and understand how real-world datasets are actually like, instead of completed sets, Real-World Data is inconsistent and unevenly distributed.`,
            howItWorks:
                "The algorithm clusters the players into similar groups based on their per-90 performance metrics. KNN -> K-Nearest Neighbors based on cosine distance.",
            architectureNotes: [
                "Feature engineering pipeline that converts player data into a 6-dimensional profile using Bayesian-shrunk per-90 stats, discipline, minutes per game, age, and position",
                "StandardScaler preprocessing followed by a K-Nearest Neighbors similarity engine using cosine distance to identify statistically similar players",
                "Streamlit application layer combining ranked similarity results, Plotly radar comparisons, and real-time Gemini 2.0 Flash scout reports",
            ],
            keyFeatures: ["EDA", "P90 Metrics", "Normalized Database"],
            challengesAndLearnings:
                "Handling uneven statistics for different players, some players registered more minutes of game time while the others lacked it, To solve this, I applied Bayersian Shrinkage to compare all players and give them an equal shot",
            codeSnippet: {
                language: "python",
                filename: "app.py",
                code: `@st.cache_resource\ndef build_model(df):\n    df = df.copy()\n    df['position_encoded'] = LabelEncoder().fit_transform(df['sub_position'])\n    feature_cols = ['goals_p90','assists_p90','total_cards','mins_per_game','age','position_encoded']\n    X = df[feature_cols].fillna(0)\n    scaler = StandardScaler()\n    X_scaled = scaler.fit_transform(X)\n    knn = NearestNeighbors(n_neighbors=11, metric='cosine')\n    knn.fit(X_scaled)\n    return knn, X_scaled, scaler`,
            },
        },
    },
];
