
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
      logo: "https://logoeps.com/wp-content/uploads/2013/03/mercado-libre-vector-logo.png"
    },
    {
      name: "Globant",
      logo: "https://www.globant.com/sites/default/files/image/2021-06/globant-logo.png"
    },
    {
      name: "Uala",
      logo: "https://d1fdloi71mui9q.cloudfront.net/hqdefault_3SiCYGp6TSmBG71lc7ba.png"
    },
    {
      name: "Banco Galicia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Banco_Galicia_logo.svg/2560px-Banco_Galicia_logo.svg.png"
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
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      name: "Telefónica",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Telefonica_logo.svg/2560px-Telefonica_logo.svg.png"
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png"
    },
    {
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png"
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
