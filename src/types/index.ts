export type SafetyLevel = 'low' | 'moderate' | 'high' | 'danger';

export interface CauseTableRow {
  cause: string;
  notice: string;
  safeCheck: string;
}

// Alias for convenience
export type CauseItem = CauseTableRow;

export interface TroubleshootingStep {
  stepNumber: number;
  title: string;
  explanation: string;
  warning?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourceReference {
  name: string;
  url?: string;
  description?: string;
}

export interface RepairVsReplacement {
  explanation: string;
  factors: {
    name: string;
    advice: string;
  }[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  path: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategorySlug: string;
  description: string;
  excerpt: string;
  quickAnswer: string;
  introduction: string[];
  tableOfCauses?: CauseTableRow[];
  troubleshootingSteps: TroubleshootingStep[];
  safeChecks: string[];
  whatNotToDo: string[];
  whenToCallProfessional: string[];
  repairVsReplacement?: RepairVsReplacement;
  faqs: FaqItem[];
  relatedArticleSlugs: string[];
  sources: SourceReference[];
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  keywords: string[];
  safetyLevel: SafetyLevel;
  safetyNotice?: string;
}

export interface Subcategory {
  slug: string;
  name: string;
  path: string;
  description: string;
  longDescription?: string;
  parentCategorySlug?: string;
  featuredArticleSlugs?: string[];
}

export interface Category {
  slug: string;
  name: string;
  path: string;
  description: string;
  longDescription: string;
  parentCategorySlug?: string;
  featuredArticleSlugs: string[];
  icon?: string;
  subcategories?: Subcategory[];
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}
