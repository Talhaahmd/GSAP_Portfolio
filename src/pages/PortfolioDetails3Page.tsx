import PageMeta from "@/seo/PageMeta";
import { CaseStudyProvider } from "@/shared/sections/portfolio-details-3/CaseStudyContext";
import Section1 from "@/shared/sections/portfolio-details-3/Section1";
import Section2 from "@/shared/sections/portfolio-details-3/Section2";
import Section3 from "@/shared/sections/portfolio-details-3/Section3";
import Section4 from "@/shared/sections/portfolio-details-3/Section4";
import Section5 from "@/shared/sections/portfolio-details-3/Section5";
import Section6 from "@/shared/sections/portfolio-details-3/Section6";
import Section7 from "@/shared/sections/portfolio-details-3/Section7";
import Section8 from "@/shared/sections/portfolio-details-3/Section8";

export default function PortfolioDetails3Page() {
  return (
    <CaseStudyProvider>
      <PageMeta title="Klarus AI - Case Study" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </CaseStudyProvider>
  );
}
