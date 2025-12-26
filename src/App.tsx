import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Terms from "./pages/Terms";
import Documents from "./pages/Documents";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Progress from "./pages/Progress";
import DocumentViewer from "./pages/DocumentViewer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/docs" element={<Documents />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:slug" element={<DocumentViewer />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
