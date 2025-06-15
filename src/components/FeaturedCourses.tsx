
import { Clock, Users, Star, BookOpen, Code, Palette, Camera, Globe, Mic, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedCourses = () => {
  const skills = [
    {
      id: 1,
      title: "Desarrollo Web Frontend",
      instructor: "María González",
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
      level: "Intermedio",
      students: 45,
      duration: "3 horas",
      rating: 4.8,
      category: "Programación"
    },
    {
      id: 2,
      title: "Diseño Gráfico Digital",
      instructor: "Carlos Ruiz",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80",
      level: "Principiante",
      students: 32,
      duration: "2 horas",
      rating: 4.9,
      category: "Diseño"
    },
    {
      id: 3,
      title: "Fotografía Digital",
      instructor: "Ana López",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=500&q=80",
      level: "Intermedio",
      students: 28,
      duration: "4 horas",
      rating: 4.7,
      category: "Arte"
    },
    {
      id: 4,
      title: "Marketing Digital",
      instructor: "Diego Fernández",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      level: "Avanzado",
      students: 38,
      duration: "5 horas",
      rating: 4.6,
      category: "Marketing"
    },
    {
      id: 5,
      title: "Comunicación Oral",
      instructor: "Laura Mendez",
      icon: Mic,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      level: "Principiante",
      students: 42,
      duration: "2 horas",
      rating: 4.8,
      category: "Comunicación"
    },
    {
      id: 6,
      title: "Matemáticas Aplicadas",
      instructor: "Roberto Silva",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
      level: "Intermedio",
      students: 25,
      duration: "3 horas",
      rating: 4.5,
      category: "Matemáticas"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="text-teal-600">Habilidades</span> Destacadas
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Descubre y comparte conocimientos con otros estudiantes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <Card key={skill.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-teal-500">
              <div className="relative">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-teal-600 text-white" variant="secondary">
                  {skill.category}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-orange-100 text-orange-800">
                  {skill.level}
                </Badge>
                <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg">
                  <skill.icon className="h-5 w-5 text-teal-600" />
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-teal-600 font-medium">por {skill.instructor}</p>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{skill.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {skill.duration}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1 text-teal-600" />
                    {skill.students} estudiantes
                  </div>
                  <span className="text-lg font-bold text-orange-600">¡Gratis!</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Intercambiar Skill
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-teal-600 text-teal-700 hover:bg-teal-50">
            <BookOpen className="mr-2 h-5 w-5" />
            Ver Todas las Habilidades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
