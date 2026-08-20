# Nayan — Editorial Portfolio

A lightweight, fast, Swiss/editorial-style personal portfolio website for **Nayan**, a BCA (AI & ML) student at Lovely Professional University, Punjab, India.

Inspired by dark Arch Linux + Hyprland aesthetics, minimalist independent publications, and technical notebooks.

---

## Quick Start

### 1. Run Locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### 2. Build for Production
```bash
npm run build
```

---

## Content Management (How to update your portfolio)

All portfolio content is decoupled into clean, typed files located under `src/content/`. You do not need to touch any UI components to update your site!

### 1. How to Add a New Project
Open `src/content/projects.ts` and add an object to the `projects` array:

```typescript
{
  slug: "your-project-name",
  title: "Your Project Title",
  shortDescription: "A clear, authentic description of what it does.",
  year: "2026",
  category: "Computer Vision / AI", // or "Linux / Systems", "AI / ML", "DSA / Web"
  technologies: ["Python", "OpenCV", "NumPy"],
  githubUrl: "https://github.com/nayan-jha/your-repo",
  liveUrl: "https://your-demo-url.com", // optional
  featured: true, // true to display on the homepage
  details: {
    overview: "What the project is.",
    whyIBuiltIt: "Your motivation and learning goal.",
    howItWorks: "Technical breakdown and architecture.",
    challengesAndLearnings: "What obstacles you hit and what you learned.",
    codeSnippet: {
      language: "python",
      filename: "main.py",
      code: "print('Hello world')"
    }
  }
}
```

The homepage and `/work` archive will automatically index and format your new project with a dedicated case study page!

---

### 2. How to Add an Article
Open `src/content/articles.ts` and append an article item:

```typescript
{
  id: "article-slug",
  title: "Your Article Title",
  date: "2026-08-20",
  year: "2026",
  publication: "Dev.to", // or "Medium", "Hashnode", "Personal Notes"
  url: "https://dev.to/nayanjha/your-article-link",
  description: "A short synopsis explaining the key concept covered.",
  tags: ["Linux", "C", "Systems"],
  readTime: "5 min read",
  featured: true // true to show on homepage
}
```

---

### 3. How to Update the "Now" Section
Open `src/content/now.ts` and edit the current learning goals, active experiments, or reading list:

```typescript
export const nowData: NowData = {
  lastUpdated: "August 2026",
  location: "Lovely Professional University, Punjab, India",
  statusHeadline: "Currently learning, building experimental projects, and exploring systems.",
  sections: [
    {
      category: "Currently Exploring & Learning",
      items: [
        "Strengthening Data Structures & Algorithms",
        "Experimenting with Computer Vision pipelines",
        "Exploring Linux kernel internals"
      ]
    },
    // ...
  ]
};
```

---

### 4. How to Update Personal Info & Social Links
Open `src/content/profile.ts` to change your bio, email, GitHub/LinkedIn links, or location.

---

### 5. Where to Change the Color Scheme
All colors and typography are centralized in `src/index.css` via CSS variables:

```css
:root {
  /* Arch Linux + Hyprland dark theme */
  --bg-primary: #0b0c10;
  --bg-surface: #12141a;
  --bg-surface-elevated: #181b22;
  
  --text-primary: #ededee;
  --text-secondary: #9aa0a6;
  --text-muted: #646a78;
  
  --border-subtle: #1c202a;
  --border-default: #262b38;
  --border-strong: #3b4254;
  
  /* Hyprland/Arch cyan accent */
  --accent: #53b7e8;
  --accent-dim: #1793d1;
}
```

---

## Architectural Principles
- **No bloat**: Zero heavy UI libraries, zero fake database backends.
- **Editorial Typography**: Pairing modern geometric sans-serif with JetBrains Mono.
- **Accessible & Fast**: Semantic HTML, full keyboard navigation, lightweight bundle.
