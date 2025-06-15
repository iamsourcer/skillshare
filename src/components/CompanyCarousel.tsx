
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
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='60' fill='%23FFE600'/%3E%3Ctext x='100' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='%232D2D2D'%3EMercadoLibre%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Uala",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%23FF5100'/%3E%3Ctext x='60' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='white'%3EUala%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Globant",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 60'%3E%3Crect width='140' height='60' fill='%2300BAF2'/%3E%3Ctext x='70' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='bold' fill='white'%3EGlobant%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Banco Galicia",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 60'%3E%3Crect width='160' height='60' fill='%23FF6D00'/%3E%3Ctext x='80' y='30' text-anchor='middle' font-family='Arial,sans-serif' font-size='14' font-weight='bold' fill='white'%3EBanco%3C/text%3E%3Ctext x='80' y='45' text-anchor='middle' font-family='Arial,sans-serif' font-size='14' font-weight='bold' fill='white'%3EGalicia%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Accenture",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23A100FF'/%3E%3Ctext x='75' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='white'%3EAccenture%3C/text%3E%3C/svg%3E"
    },
    {
      name: "IBM",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%23053080'/%3E%3Ctext x='50' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='white'%3EIBM%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Despegar",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 60'%3E%3Crect width='140' height='60' fill='%230080FF'/%3E%3Ctext x='70' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='white'%3EDespegar%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Santander",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 60'%3E%3Crect width='150' height='60' fill='%23DC142C'/%3E%3Ctext x='75' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='white'%3ESantander%3C/text%3E%3C/svg%3E"
    },
    {
      name: "BBVA",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 60'%3E%3Crect width='120' height='60' fill='%23004C97'/%3E%3Ctext x='60' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='bold' fill='white'%3EBBVA%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Telecom",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 60'%3E%3Crect width='140' height='60' fill='%23E51680'/%3E%3Ctext x='70' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='white'%3ETelecom%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Naranja X",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 60'%3E%3Crect width='140' height='60' fill='%23FF6900'/%3E%3Ctext x='70' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='16' font-weight='bold' fill='white'%3ENaranja X%3C/text%3E%3C/svg%3E"
    },
    {
      name: "YPF",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%23008040'/%3E%3Ctext x='50' y='35' text-anchor='middle' font-family='Arial,sans-serif' font-size='18' font-weight='bold' fill='white'%3EYPF%3C/text%3E%3C/svg%3E"
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
                  <div className="p-2">
                    <div className="rounded-lg shadow-sm border border-gray-200 p-4 h-20 flex items-center justify-center hover:shadow-md transition-shadow duration-300 bg-white">
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="max-w-full max-h-full object-contain"
                        style={{ filter: 'none' }}
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
