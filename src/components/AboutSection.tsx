
import { CheckCircle, Target, Lightbulb, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Intercambio de Habilidades",
      description: "Comparte lo que sabes y aprende lo que necesitas de otros estudiantes"
    },
    {
      icon: Lightbulb,
      title: "Aprendizaje Colaborativo",
      description: "Sesiones interactivas y proyectos grupales para potenciar tu aprendizaje"
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Conecta con compañeros que comparten tus intereses y objetivos"
    },
    {
      icon: Award,
      title: "Reconocimiento",
      description: "Obtén badges y reconocimientos por tu participación y enseñanza"
    },
    {
      icon: Globe,
      title: "Red Profesional",
      description: "Construye tu red de contactos profesionales desde el instituto"
    }
  ];

  const benefits = [
    "Acceso gratuito a todas las habilidades",
    "Intercambios flexibles según tu horario",
    "Certificados de participación",
    "Mentorías entre estudiantes",
    "Eventos y workshops exclusivos"
  ];

  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ¿Por qué elegir <span className="text-teal-600">IFTS Skillswap</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Somos más que una plataforma educativa. Somos una comunidad de estudiantes 
              comprometidos con el crecimiento mutuo y el intercambio de conocimientos. 
              Aquí cada uno enseña y todos aprenden.
            </p>
            
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Únete a la Comunidad
              </Button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start bg-teal-50 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
