import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/about-1/Section1";
import Section2 from "@/shared/sections/index-2/Section9";
import Section3 from "@/shared/sections/about-1/Section2";
import Section4 from "@/shared/sections/about-1/Section3";
import Section5 from "@/shared/sections/index-3/Section9";
import Section6 from "@/shared/sections/about-1/Section4";
import Section7 from "@/shared/sections/index-3/Section11";
import Section8 from "@/shared/sections/about-1/Section5";

export default function About1Page() {
  return (
    <>
      <PageMeta title="Orisa - About1" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 classList="bg-neutral-50" />
                <Section7 />
                <Section8 />
            
    </>
  );
}
