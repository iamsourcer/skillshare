
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/MercadoLibre_Logo.svg/2048px-MercadoLibre_Logo.svg.png"
    },
    {
      name: "Uala",
      logo: "https://seeklogo.com/images/U/uala-logo-6A2A4CE778-seeklogo.com.png"
    },
    {
      name: "Globant",
      logo: "https://seeklogo.com/images/G/globant-logo-FAE5E4D14D-seeklogo.com.png"
    },
    {
      name: "Banco Galicia",
      logo: "https://seeklogo.com/images/B/banco-galicia-logo-04D47CECE0-seeklogo.com.png"
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"
    },
    {
      name: "Despegar",
      logo: "https://seeklogo.com/images/D/despegar-logo-4B2C1F1A30-seeklogo.com.png"
    },
    {
      name: "Santander Argentina",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png"
    },
    {
      name: "BBVA Argentina",
      logo: "https://seeklogo.com/images/B/bbva-logo-4C8BCB4C65-seeklogo.com.png"
    },
    {
      name: "Telecom Argentina",
      logo: "https://seeklogo.com/images/T/telecom-argentina-logo-35A7C2E2C9-seeklogo.com.png"
    },
    {
      name: "Naranja X",
      logo: "https://seeklogo.com/images/N/naranja-x-logo-FA67B1A0D5-seeklogo.com.png"
    },
    {
      name: "YPF",
      logo: "https://seeklogo.com/images/Y/ypf-logo-BB22485A92-seeklogo.com.png"
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
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-24 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          console.log(`Failed to load image for ${company.name}:`, company.logo);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
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
