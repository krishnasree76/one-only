import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Franchise from "./pages/Franchise";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ApplyFranchise from "./pages/ApplyFranchise";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import OurStores from "@/pages/OurStores";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-stores" element={<OurStores />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/apply-franchise" element={<ApplyFranchise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;