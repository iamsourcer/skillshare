
import { ArrowRight, Users, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Conecta, Aprende y 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
                {" "}Comparte
              </span>
            </h1>
            
            {/* Tagline */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-gray-600 mb-2">
                En IFTS Skillswap, intercambia conocimientos con otros estudiantes
              </p>
              <p className="text-lg md:text-xl font-semibold text-teal-700 italic">
                "Tu conocimiento es tu dinero de intercambio"
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl lg:max-w-none">
              Únete a nuestra comunidad donde estudiantes del IFTS se ayudan mutuamente
              a crecer profesionalmente a través del intercambio de habilidades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Habilidades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Crear Cuenta
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/b8319276-c3b9-43d5-ba9e-86b6ed21664a.png" 
                alt="Estudiante del IFTS usando tecnología para aprender"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">¡Conecta ya!</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidad Colaborativa</h3>
            <p className="text-gray-600">
              Conecta con estudiantes que comparten tus intereses y objetivos académicos.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intercambio de Conocimientos</h3>
            <p className="text-gray-600">
              Aprende nuevas habilidades mientras enseñas lo que ya sabes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sistema de Puntos</h3>
            <p className="text-gray-600">
              Gana puntos enseñando y úsalos para aprender. ¡Tu conocimiento tiene valor!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
