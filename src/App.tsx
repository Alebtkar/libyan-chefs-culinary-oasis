
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Chefs from "./pages/Chefs";
import ChefDetails from "./pages/ChefDetails";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import CertificateDetails from "./pages/CertificateDetails";
import Auth from "./pages/Auth";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminArticles from "./pages/admin/AdminArticles";
import AdminChefs from "./pages/admin/AdminChefs";
import AdminRecipes from "./pages/admin/AdminRecipes";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminCertificates from "./pages/admin/AdminCertificates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/chefs" element={<Chefs />} />
              <Route path="/chefs/:id" element={<ChefDetails />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/:id" element={<RecipeDetails />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:id" element={<ArticleDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/certificate/:number" element={<CertificateDetails />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/articles" element={<AdminArticles />} />
              <Route path="/admin/chefs" element={<AdminChefs />} />
              <Route path="/admin/recipes" element={<AdminRecipes />} />
              <Route path="/admin/members" element={<AdminMembers />} />
              <Route path="/admin/certificates" element={<AdminCertificates />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
