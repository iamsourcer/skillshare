
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const benefits = [
    "Acceso completo a todas las habilidades",
    "Intercambios ilimitados con compañeros",
    "Certificados de participación",
    "Acceso de por vida a la comunidad",
    "App móvil incluida"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          ¿Listo para Comenzar tu Intercambio de Habilidades?
        </h2>
        <p className="mt-4 text-xl text-orange-100">
          Únete a cientos de estudiantes y transforma tu aprendizaje hoy mismo
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-white">
              <CheckCircle className="h-5 w-5 text-orange-200 mr-3 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3 bg-white text-orange-600 hover:bg-orange-50 font-semibold">
            Comenzar Gratis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-orange-600 font-semibold">
            Explorar Comunidad
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-orange-200">
          Sin costo • Registro instantáneo • Comunidad estudiantil exclusiva
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
