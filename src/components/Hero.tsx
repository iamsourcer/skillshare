
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-100 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232D7D7D' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="mb-8">
              <h1 className="text-5xl tracking-tight font-bold text-gray-900 sm:text-6xl md:text-7xl">
                <span className="block text-teal-600">¡Hola!</span>
                <span className="block text-gray-800">Bienvenido a</span>
                <span className="block text-teal-700 font-extrabold">IFTS18 Skillswap</span>
              </h1>
            </div>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Conecta, aprende y comparte habilidades con otros estudiantes. 
              Intercambia conocimientos y haz crecer tu red profesional.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold">
                Explorar Habilidades
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="bg-white/60 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-6 w-6 text-teal-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Estudiantes</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <BookOpen className="h-6 w-6 text-teal-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">200+</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Habilidades</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Award className="h-6 w-6 text-teal-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">95%</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">Satisfacción</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/0d6658c3-e56c-4cb3-8a1a-ce13119f7d93.png"
                  alt="Estudiante IFTS18 Skillswap"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-orange-500 rounded-full p-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-teal-600 rounded-full p-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
