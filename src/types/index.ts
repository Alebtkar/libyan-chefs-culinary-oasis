
export interface Chef {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  avatar: string;
  bio: {
    ar: string;
    en: string;
  };
  specialty: {
    ar: string;
    en: string;
  };
  achievements: {
    ar: string[];
    en: string[];
  };
  cvLink?: string;
}

export interface Recipe {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  image: string;
  ingredients: {
    ar: string[];
    en: string[];
  };
  steps: {
    ar: string[];
    en: string[];
  };
  sources?: {
    ar: string[];
    en: string[];
  };
  history?: {
    ar: string;
    en: string;
  };
  category: {
    ar: string;
    en: string;
  };
}

export interface Article {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
  type: "news" | "conference" | "article";
  createdAt: string;
  image?: string;
  author: {
    ar: string;
    en: string;
  };
  tags: {
    ar: string[];
    en: string[];
  };
}

export interface Certificate {
  id: string;
  chefName: {
    ar: string;
    en: string;
  };
  issuedDate: string;
  certificateNumber: string;
  specialization: {
    ar: string;
    en: string;
  };
  description?: {
    ar: string;
    en: string;
  };
  status: "active" | "expired";
}

export interface Member {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  email: string;
  phone: string;
  membershipType: "basic" | "premium" | "lifetime";
  joinDate: string;
  status: "active" | "pending" | "suspended";
}

export type Language = 'ar' | 'en';
