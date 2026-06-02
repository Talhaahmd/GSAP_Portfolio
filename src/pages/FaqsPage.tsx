import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/faqs/Section1";
import Section2 from "@/shared/sections/faqs/Section2";
import Section3 from "@/shared/sections/faqs/Section3";
import Section4 from "@/shared/sections/faqs/Section4";

export default function FaqsPage() {
  return (
    <>
      <PageMeta title="Orisa - Faqs" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            
    </>
  );
}
