
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Estudiante de Análisis de Sistemas",
      course: "2do Año",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      content: "Gracias a Skillswap pude intercambiar mis conocimientos de Python por clases de diseño UX. Ahora tengo las habilidades para desarrollar interfaces completas.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Estudiante de Tecnicatura en Programación",
      course: "3er Año",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "El intercambio de habilidades me permitió aprender React Native a cambio de enseñar bases de datos. Una experiencia increíble de aprendizaje colaborativo.",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Estudiante de Desarrollo Web",
      course: "1er Año",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Intercambié mis conocimientos de HTML/CSS por clases de JavaScript avanzado. La comunidad de Skillswap es súper colaborativa y solidaria.",
      rating: 5
    },
    {
      id: 4,
      name: "Diego López",
      role: "Estudiante de Análisis de Sistemas",
      course: "2do Año",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "Enseñé algoritmos y estructuras de datos, y aprendí desarrollo móvil. Skillswap me ayudó a ampliar mis horizontes tecnológicos de manera gratuita.",
      rating: 5
    },
    {
      id: 5,
      name: "Lucía Fernández",
      role: "Estudiante de Tecnicatura en Programación",
      course: "3er Año",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content: "La plataforma me conectó con compañeros que necesitaban ayuda en testing, mientras yo aprendía sobre DevOps. ¡Un intercambio perfecto!",
      rating: 5
    },
    {
      id: 6,
      name: "Sebastián Torres",
      role: "Estudiante de Desarrollo Web",
      course: "2do Año",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      content: "Compartí mis habilidades en fotografía digital y recibí clases de ciberseguridad. Skillswap hace que el aprendizaje sea divertido y social.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que Dicen Nuestros Estudiantes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Historias reales de estudiantes del IFTS18 que intercambiaron conocimientos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full border-teal-100">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-teal-600 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-teal-600 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
