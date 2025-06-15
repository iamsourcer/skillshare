
import { Users, BookOpen, Award, Globe } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Estudiantes Activos",
      description: "Intercambiando habilidades diariamente"
    },
    {
      icon: BookOpen,
      number: "200+",
      label: "Habilidades Disponibles",
      description: "En diversas áreas de conocimiento"
    },
    {
      icon: Award,
      number: "95%",
      label: "Tasa de Satisfacción",
      description: "Los estudiantes recomiendan la plataforma"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Intercambios Semanales",
      description: "Sesiones de aprendizaje colaborativo"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nuestro Impacto en Números
          </h2>
          <p className="mt-4 text-xl text-teal-100">
            Únete a miles de estudiantes que ya están intercambiando conocimientos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-orange-500 rounded-full">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-teal-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-teal-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
