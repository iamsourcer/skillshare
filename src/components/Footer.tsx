
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#" },
    { name: "Habilidades", href: "#skills" },
    { name: "Comunidad", href: "#community" },
    { name: "Eventos", href: "#events" },
    { name: "Contacto", href: "#contact" },
  ];

  const skillCategories = [
    { name: "Programación", href: "#" },
    { name: "Diseño Gráfico", href: "#" },
    { name: "Marketing Digital", href: "#" },
    { name: "Idiomas", href: "#" },
    { name: "Matemáticas", href: "#" },
  ];

  const support = [
    { name: "Centro de Ayuda", href: "#" },
    { name: "Soporte Estudiantil", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Guía de Intercambios", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">IFTS18 Skillswap</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Conectando estudiantes del IFTS18 para intercambiar conocimientos y habilidades. 
              Únete a nuestra comunidad donde cada uno enseña y todos aprenden.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3" />
                <span>skillswap@ifts18.edu.ar</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3" />
                <span>011 4823-2477</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Gral. Lucio Norberto Mansilla 3643, C1425BPW Cdad. Autónoma de Buenos Aires</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Skill Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Categorías</h3>
            <ul className="space-y-2">
              {skillCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Soporte</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 IFTS18 Skillswap. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
