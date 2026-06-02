import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-1/Section1";
import Section2 from "@/shared/sections/index-1/Section4";
import Section3 from "@/shared/sections/about-3/Section5";
import Section4 from "@/shared/sections/index-2/Section12";
import Section5 from "@/shared/sections/index-1/Section11";
import Section6 from "@/shared/sections/about-1/Section4";

export default function Services1Page() {
  return (
    <>
      <PageMeta title="Orisa - Services1" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 className="pt-0" showNoise={false} />
                <Section5 classList="border-top-100" />
                <Section6 classList="bg-neutral-50" />
            
    </>
  );
}
