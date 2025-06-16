
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PointsProvider } from "@/contexts/PointsContext";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Jobs from "./pages/Jobs";
import EmployerDashboard from "./pages/EmployerDashboard";
import Novedades from "./pages/Novedades";
import PointsHistory from "./pages/PointsHistory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PointsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/novedades" element={<Novedades />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PointsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
