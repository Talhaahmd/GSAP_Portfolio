import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/index-2/Section12";
import Section2 from "@/shared/sections/services-details/Section4";
import Section3 from "@/shared/sections/about-3/Section7";

export default function PricingPage() {
  return (
    <>
      <PageMeta title="Orisa - Pricing" />
                <Section1 className="pt-100" showNoise={false} />
                <Section2 />
                <Section3 />
            
    </>
  );
}
