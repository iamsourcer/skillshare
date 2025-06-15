import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Habilidades", href: "#skills" },
    { name: "Estudiantes", href: "#community" },
    { name: "Empleos", href: "/jobs" },
    { name: "Empleadores", href: "/employer" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-bold text-teal-700">IFTS18 Skillswap</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 border-transparent hover:border-teal-600"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-3">
              <Button variant="outline" size="sm" className="border-teal-600 text-teal-700 hover:bg-teal-50">
                Iniciar Sesión
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                Registrarse
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-teal-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-teal-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-teal-100">
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="w-full border-teal-600 text-teal-700">
                  Iniciar Sesión
                </Button>
                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                  Registrarse
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
