import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCaseStudy, type CaseStudy } from "@/lib/supabase";

interface CaseStudyCtx {
  data: CaseStudy | null;
  loading: boolean;
}

const Ctx = createContext<CaseStudyCtx>({ data: null, loading: true });

const FALLBACK_SLUG = "growthbase-sales-automation";

export function CaseStudyProvider({ children }: { children: React.ReactNode }) {
  const { slug } = useParams<{ slug?: string }>();
  const [data, setData] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCaseStudy(slug ?? FALLBACK_SLUG).then((d) => {
      setData(d);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  return <Ctx.Provider value={{ data, loading }}>{children}</Ctx.Provider>;
}

export function useCaseStudy() {
  return useContext(Ctx);
}
