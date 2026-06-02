import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lqtwxjwawuotptkrgtpd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxdHd4andhd3VvdHB0a3JndHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MDYzOTgsImV4cCI6MjA5NTk4MjM5OH0.EKMdA7yNHZt7YFYekjwVzUhBPUzyEdP6Iu79AW_S2-s";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Types ──────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  category_filter: string;
  title: string;
  excerpt: string;
  author: string;
  author_avatar: string | null;
  published_at: string;
  cover_image: string;
  hero_image: string | null;
  intro_heading: string | null;
  body_html: string | null;
  gallery_images: { url: string; alt: string }[];
  tags: string[];
  prev_slug: string | null;
  prev_title: string | null;
  next_slug: string | null;
  next_title: string | null;
  sort_order: number;
}

export interface GalleryCell {
  src: string;
  alt: string;
  size: "large" | "small";
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  card_image: string;
  title: string;
  metric_prefix: string;
  metric_value: string;
  metric_label: string;
  tags: string[];
  is_featured: boolean;
  featured_description: string | null;
  featured_image: string | null;
  featured_video_url: string | null;
  featured_metric_2_prefix: string | null;
  featured_metric_2_value: string | null;
  featured_metric_2_label: string | null;
  featured_tags: string[];
  eyebrow: string | null;
  client_name: string | null;
  tagline: string | null;
  demo_url: string | null;
  hero_portrait_image: string | null;
  meta_client: string | null;
  meta_year: string | null;
  meta_role: string | null;
  meta_duration: string | null;
  intro_headline: string | null;
  intro_paragraph: string | null;
  stat_1_num: string | null;
  stat_1_label: string | null;
  stat_2_num: string | null;
  stat_2_label: string | null;
  stat_3_num: string | null;
  stat_3_label: string | null;
  gallery_images: GalleryCell[];
  process_title: string | null;
  process_steps: ProcessStep[];
  quote_image: string | null;
  quote_text: string | null;
  quote_author: string | null;
  quote_role: string | null;
  solution_heading: string | null;
  solution_paragraph: string | null;
  solution_items: string[];
  outcome_heading: string | null;
  outcome_paragraph: string | null;
  outcome_items: string[];
  closing_image: string | null;
  related_slugs: string[];
  sort_order: number;
}

// ── Queries ────────────────────────────────────────────────────────────────

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data as BlogPost[];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data as BlogPost;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data as CaseStudy[];
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data as CaseStudy;
}

export async function getRelatedCaseStudies(slugs: string[]): Promise<CaseStudy[]> {
  if (!slugs.length) return [];
  const { data, error } = await supabase
    .from("case_studies")
    .select("*")
    .in("slug", slugs);
  if (error) return [];
  return data as CaseStudy[];
}
