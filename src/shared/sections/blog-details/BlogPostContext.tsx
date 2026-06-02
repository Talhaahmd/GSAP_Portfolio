import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogPost, type BlogPost } from "@/lib/supabase";

interface BlogPostCtx {
  data: BlogPost | null;
  loading: boolean;
}

const Ctx = createContext<BlogPostCtx>({ data: null, loading: true });

const FALLBACK_SLUG = "how-ai-automation-is-changing-businesses-2025";

export function BlogPostProvider({ children }: { children: React.ReactNode }) {
  const { slug } = useParams<{ slug?: string }>();
  const [data, setData] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPost(slug ?? FALLBACK_SLUG).then((d) => {
      setData(d);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  return <Ctx.Provider value={{ data, loading }}>{children}</Ctx.Provider>;
}

export function useBlogPost() {
  return useContext(Ctx);
}
