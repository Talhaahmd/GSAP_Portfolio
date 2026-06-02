import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/product-details/Section1";
import Section2 from "@/shared/sections/product/Section3";
import Section3 from "@/shared/sections/product-details/Section2";
import Section4 from "@/shared/sections/product-details/Section3";

export default function ProductDetailsPage() {
  return (
    <>
      <PageMeta title="Orisa - ProductDetails" />
                <Section1 />
                <Section2 classList="bg-neutral-0" />
                <Section3 />
                <Section4 />
            
    </>
  );
}
