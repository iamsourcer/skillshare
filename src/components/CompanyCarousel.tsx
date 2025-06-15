
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CompanyCarousel = () => {
  const companies = [
    {
      name: "Mercado Libre",
      color: "#FFE600",
      textColor: "#2D2D2D"
    },
    {
      name: "Uala",
      color: "#FF5100",
      textColor: "#FFFFFF"
    },
    {
      name: "Globant",
      color: "#00BAF2",
      textColor: "#FFFFFF"
    },
    {
      name: "Banco Galicia",
      color: "#FF6D00",
      textColor: "#FFFFFF"
    },
    {
      name: "Accenture",
      color: "#A100FF",
      textColor: "#FFFFFF"
    },
    {
      name: "IBM",
      color: "#053080",
      textColor: "#FFFFFF"
    },
    {
      name: "Despegar",
      color: "#0080FF",
      textColor: "#FFFFFF"
    },
    {
      name: "Santander",
      color: "#DC142C",
      textColor: "#FFFFFF"
    },
    {
      name: "BBVA",
      color: "#004C97",
      textColor: "#FFFFFF"
    },
    {
      name: "Telecom",
      color: "#E51680",
      textColor: "#FFFFFF"
    },
    {
      name: "Naranja X",
      color: "#FF6900",
      textColor: "#FFFFFF"
    },
    {
      name: "YPF",
      color: "#008040",
      textColor: "#FFFFFF"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empresas que Apoyan Nuestro Proyecto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estas organizaciones confían en IFTS18 Skillswap para encontrar talento 
            y apoyan el desarrollo profesional de nuestros estudiantes.
          </p>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {companies.map((company, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-4">
                    <div 
                      className="rounded-lg shadow-sm border border-gray-200 p-6 h-24 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                      style={{ backgroundColor: company.color }}
                    >
                      <span 
                        className="font-bold text-sm text-center"
                        style={{ color: company.textColor }}
                      >
                        {company.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            ¿Tu empresa quiere formar parte? 
            <a href="/employer" className="text-teal-600 hover:text-teal-700 ml-1 font-medium">
              Únete como empleador
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;
