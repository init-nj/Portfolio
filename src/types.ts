export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  year: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order?: number;
  image?: string; // Optional image URL or placeholder metadata
  
  // Case Study Sections for detailed view
  details?: {
    overview: string;
    whyIBuiltIt: string;
    howItWorks: string;
    architectureNotes?: string[];
    challengesAndLearnings: string;
    keyFeatures?: string[];
    codeSnippet?: {
      language: string;
      filename: string;
      code: string;
    };
  };
}

export interface Article {
  id: string;
  title: string;
  date: string;
  year: string;
  publication: string;
  url: string;
  description: string;
  tags?: string[];
  readTime?: string;
  featured?: boolean;
}

export interface NowItem {
  category: string;
  items: string[];
}

export interface NowData {
  lastUpdated: string;
  location: string;
  statusHeadline: string;
  sections: NowItem[];
  currentlyReading?: {
    title: string;
    author: string;
    status: string;
  };
}

export interface ProfileData {
  name: string;
  year: string;
  role: string;
  education: {
    degree: string;
    major: string;
    institution: string;
    location: string;
    period: string;
  };
  headline: string;
  subheadline: string;
  statement: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    x?: string;
  };
  focusAreas: string[];
}
