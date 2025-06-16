
import { useState } from "react";
import { Menu, X, BookOpen, Users, Briefcase, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import PointsDisplay from "@/components/PointsDisplay";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Explorar Habilidades", href: "/skills", icon: BookOpen },
    { name: "Trabajos", href: "/jobs", icon: Briefcase },
    { name: "Novedades", href: "/novedades", icon: Newspaper },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">IFTS Skillswap</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Points Display */}
            <div className="flex items-center gap-4">
              <PointsDisplay size="md" clickable={true} />
              <Button className="bg-teal-600 hover:bg-teal-700">
                Iniciar Sesión
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <PointsDisplay size="sm" showLabel={false} clickable={true} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="px-3 py-2">
              <PointsDisplay size="md" clickable={true} />
            </div>
            <div className="px-3 py-2">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
