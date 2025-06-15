
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ExternalLink, BookOpen, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Novedades = () => {
  const newsItems = [
    {
      id: 1,
      title: "Curso Gratuito: Introducción a la Inteligencia Artificial",
      description: "Aprende los fundamentos de IA con profesores del IFTS18. Incluye machine learning básico y aplicaciones prácticas.",
      date: "2024-06-20",
      readTime: "5 min",
      category: "Curso Gratuito",
      type: "course",
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Nueva Especialización en Ciberseguridad Disponible",
      description: "El IFTS18 lanza su nueva carrera de especialización en ciberseguridad con certificaciones internacionales.",
      date: "2024-06-18",
      readTime: "3 min",
      category: "Educación",
      type: "news",
      link: "#"
    },
    {
      id: 3,
      title: "Workshop Gratuito: Diseño UX/UI para Principiantes",
      description: "Taller intensivo de fin de semana sobre diseño de experiencia de usuario y interfaces modernas.",
      date: "2024-06-15",
      readTime: "4 min",
      category: "Workshop",
      type: "event",
      link: "#"
    },
    {
      id: 4,
      title: "Convenio con Empresas Tech para Prácticas Profesionales",
      description: "Nuevas oportunidades de pasantías en empresas líderes del sector tecnológico argentino.",
      date: "2024-06-12",
      readTime: "6 min",
      category: "Oportunidades",
      type: "news",
      link: "#"
    },
    {
      id: 5,
      title: "Curso Libre: Python para Análisis de Datos",
      description: "Domina Python, pandas y matplotlib en este curso práctico de 8 semanas totalmente gratuito.",
      date: "2024-06-10",
      readTime: "4 min",
      category: "Curso Gratuito",
      type: "course",
      link: "#"
    },
    {
      id: 6,
      title: "Estudiantes del IFTS18 Ganan Hackathon Nacional",
      description: "El equipo 'Innovation Squad' obtuvo el primer lugar en el Hackathon de Educación Digital 2024.",
      date: "2024-06-08",
      readTime: "3 min",
      category: "Logros",
      type: "achievement",
      link: "#"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-4 w-4" />;
      case "event":
        return <Users className="h-4 w-4" />;
      case "achievement":
        return <Award className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Curso Gratuito":
        return "bg-green-100 text-green-800 border-green-200";
      case "Workshop":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Oportunidades":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Logros":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Novedades IFTS18
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Mantente al día con las últimas noticias, cursos gratuitos y oportunidades 
              del mundo educativo y tecnológico
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card 
                key={item.id} 
                className={`hover:shadow-lg transition-shadow duration-300 ${
                  item.featured ? 'ring-2 ring-teal-500 bg-teal-50' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={getCategoryColor(item.category)}
                    >
                      {getIcon(item.type)}
                      <span className="ml-1">{item.category}</span>
                    </Badge>
                    {item.featured && (
                      <Badge className="bg-teal-600 text-white">
                        Destacado
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(item.date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-teal-600 text-teal-700 hover:bg-teal-50"
                  >
                    Leer más
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿No te querés perder ninguna novedad?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Suscribite a nuestro newsletter y recibí las últimas noticias y cursos directamente en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
            />
            <Button 
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-8"
            >
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Novedades;
