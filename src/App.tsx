import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import About1Page from "@/pages/About1Page";
import About2Page from "@/pages/About2Page";
import About3Page from "@/pages/About3Page";
import Archive1Page from "@/pages/Archive1Page";
import Archive2Page from "@/pages/Archive2Page";
import Archive3Page from "@/pages/Archive3Page";
import Archive4Page from "@/pages/Archive4Page";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import ComingSoonPage from "@/pages/ComingSoonPage";
import Contact1Page from "@/pages/Contact1Page";
import Contact2Page from "@/pages/Contact2Page";
import FaqsPage from "@/pages/FaqsPage";
import Home10Page from "@/pages/Home10Page";
import Home11Page from "@/pages/Home11Page";
import Home12Page from "@/pages/Home12Page";
import Home13Page from "@/pages/Home13Page";
import Home14Page from "@/pages/Home14Page";
import Home15Page from "@/pages/Home15Page";
import Home16Page from "@/pages/Home16Page";
import Home1Page from "@/pages/Home1Page";
import Home2Page from "@/pages/Home2Page";
import Home3Page from "@/pages/Home3Page";
import Home4Page from "@/pages/Home4Page";
import Home5Page from "@/pages/Home5Page";
import Home6Page from "@/pages/Home6Page";
import Home7Page from "@/pages/Home7Page";
import Home8Page from "@/pages/Home8Page";
import Home9Page from "@/pages/Home9Page";
import Portfolio1Page from "@/pages/Portfolio1Page";
import Portfolio2Page from "@/pages/Portfolio2Page";
import Portfolio3Page from "@/pages/Portfolio3Page";
import Portfolio4Page from "@/pages/Portfolio4Page";
import Portfolio5Page from "@/pages/Portfolio5Page";
import Portfolio6Page from "@/pages/Portfolio6Page";
import PortfolioCinemaPage from "@/pages/PortfolioCinemaPage";
import PortfolioCurtainPage from "@/pages/PortfolioCurtainPage";
import PortfolioDetails1Page from "@/pages/PortfolioDetails1Page";
import PortfolioDetails2Page from "@/pages/PortfolioDetails2Page";
import PortfolioDetails3Page from "@/pages/PortfolioDetails3Page";
import PortfolioDetails4Page from "@/pages/PortfolioDetails4Page";
import PortfolioDetails5Page from "@/pages/PortfolioDetails5Page";
import PortfolioDetails6Page from "@/pages/PortfolioDetails6Page";
import PortfolioHorizontalPage from "@/pages/PortfolioHorizontalPage";
import PortfolioSplitPage from "@/pages/PortfolioSplitPage";
import PortfolioStackPage from "@/pages/PortfolioStackPage";
import PortfolioVistaPage from "@/pages/PortfolioVistaPage";
import PortfolioZstackPage from "@/pages/PortfolioZstackPage";
import PricingPage from "@/pages/PricingPage";
import ProductArchivePage from "@/pages/ProductArchivePage";
import ProductCartPage from "@/pages/ProductCartPage";
import ProductCheckoutPage from "@/pages/ProductCheckoutPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import Services1Page from "@/pages/Services1Page";
import Services2Page from "@/pages/Services2Page";
import Services3Page from "@/pages/Services3Page";
import ServicesDetailsPage from "@/pages/ServicesDetailsPage";
import TeamDetailsPage from "@/pages/TeamDetailsPage";
import TeamPage from "@/pages/TeamPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={1} footerStyle={1} />}>
        <Route path="/" element={<Home16Page />} />
        <Route path="/index-dark" element={<Home16Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={1} footerStyle={1} noFooter />}>
        <Route path="/portfolio-curtain" element={<PortfolioCurtainPage />} />
        <Route path="/portfolio-vista" element={<PortfolioVistaPage />} />
      </Route>
      <Route element={<MainLayout headerStyle={1} footerStyle={2} />}>
        <Route path="/portfolio-details-5" element={<PortfolioDetails5Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={1} noFooter />}>
        <Route path="/portfolio-cinema" element={<PortfolioCinemaPage />} />
        <Route path="/portfolio-horizontal" element={<PortfolioHorizontalPage />} />
        <Route path="/portfolio-split" element={<PortfolioSplitPage />} />
        <Route path="/portfolio-stack" element={<PortfolioStackPage />} />
        <Route path="/portfolio-zstack" element={<PortfolioZstackPage />} />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="/about-1" element={<About1Page />} />
        <Route path="/about-2" element={<About2Page />} />
        <Route path="/about-3" element={<About3Page />} />
        <Route path="/archive-1" element={<Archive1Page />} />
        <Route path="/archive-2" element={<Archive2Page />} />
        <Route path="/archive-3" element={<Archive3Page />} />
        <Route path="/archive-4" element={<Archive4Page />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/blog-details/:slug" element={<BlogDetailsPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/contact-1" element={<Contact1Page />} />
        <Route path="/contact-2" element={<Contact2Page />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/index-2" element={<Home2Page />} />
        <Route path="/index-2-dark" element={<Home2Page />} />
        <Route path="/portfolio-1" element={<Portfolio1Page />} />
        <Route path="/portfolio-2" element={<Portfolio2Page />} />
        <Route path="/portfolio-3" element={<Portfolio3Page />} />
        <Route path="/portfolio-4" element={<Portfolio4Page />} />
        <Route path="/portfolio-5" element={<Portfolio5Page />} />
        <Route path="/portfolio-6" element={<Portfolio6Page />} />
        <Route path="/portfolio-details-1" element={<PortfolioDetails1Page />} />
        <Route path="/portfolio-details-2" element={<PortfolioDetails2Page />} />
        <Route path="/portfolio-details-3" element={<PortfolioDetails3Page />} />
        <Route path="/portfolio-details-3/:slug" element={<PortfolioDetails3Page />} />
        <Route path="/portfolio-details-4" element={<PortfolioDetails4Page />} />
        <Route path="/portfolio-details-6" element={<PortfolioDetails6Page />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product-archive" element={<ProductArchivePage />} />
        <Route path="/product-cart" element={<ProductCartPage />} />
        <Route path="/product-checkout" element={<ProductCheckoutPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
        <Route path="/services-1" element={<Services1Page />} />
        <Route path="/services-2" element={<Services2Page />} />
        <Route path="/services-3" element={<Services3Page />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
      </Route>
      <Route element={<MainLayout headerStyle={3} footerStyle={3} />}>
        <Route path="/index-3" element={<Home3Page />} />
        <Route path="/index-3-dark" element={<Home3Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={4} footerStyle={4} />}>
        <Route path="/index-4" element={<Home4Page />} />
        <Route path="/index-4-dark" element={<Home4Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={5} footerStyle={5} />}>
        <Route path="/index-5" element={<Home5Page />} />
        <Route path="/index-5-dark" element={<Home5Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={6} footerStyle={6} mainClass="bg-neutral-50" />}>
        <Route path="/index-6" element={<Home6Page />} />
        <Route path="/index-6-dark" element={<Home6Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={7} footerStyle={7} />}>
        <Route path="/index-7" element={<Home7Page />} />
        <Route path="/index-7-dark" element={<Home7Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={8} footerStyle={8} />}>
        <Route path="/index-8" element={<Home8Page />} />
        <Route path="/index-8-dark" element={<Home8Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={9} footerStyle={9} />}>
        <Route path="/index-9" element={<Home9Page />} />
        <Route path="/index-9-dark" element={<Home9Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={10} footerStyle={10} />}>
        <Route path="/index-10" element={<Home10Page />} />
        <Route path="/index-10-dark" element={<Home10Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={11} footerStyle={11} />}>
        <Route path="/index-11" element={<Home11Page />} />
        <Route path="/index-11-dark" element={<Home11Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={12} footerStyle={12} />}>
        <Route path="/index-12" element={<Home12Page />} />
        <Route path="/index-12-dark" element={<Home12Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={13} footerStyle={13} />}>
        <Route path="/index-13" element={<Home13Page />} />
        <Route path="/index-13-dark" element={<Home13Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={14} footerStyle={14} />}>
        <Route path="/index-14" element={<Home14Page />} />
        <Route path="/index-14-dark" element={<Home14Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={15} footerStyle={15} />}>
        <Route path="/index-15" element={<Home15Page />} />
        <Route path="/index-15-dark" element={<Home15Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={1} footerStyle={1} />}>
        <Route path="/index-16" element={<Home16Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
