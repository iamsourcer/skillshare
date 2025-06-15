
import { useState } from "react";
import { Search, MapPin, Calendar, Building, Users, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend Junior",
      company: "TechStart Argentina",
      location: "Buenos Aires, CABA",
      type: "Tiempo Completo",
      salary: "$150,000 - $200,000",
      posted: "2 días",
      description: "Buscamos un desarrollador frontend junior con conocimientos en React para unirse a nuestro equipo de desarrollo.",
      requirements: ["React", "JavaScript", "HTML/CSS", "Git"],
      benefits: ["Obra social", "Capacitación constante", "Home office"],
      category: "development",
      urgent: false
    },
    {
      id: 2,
      title: "Analista de Sistemas Trainee",
      company: "Banco Digital Plus",
      location: "Microcentro, CABA",
      type: "Trainee",
      salary: "$120,000 - $150,000",
      posted: "1 día",
      description: "Programa trainee para recién graduados en Análisis de Sistemas. Formación integral en tecnologías bancarias.",
      requirements: ["SQL", "Java", "Análisis de Sistemas", "Metodologías Ágiles"],
      benefits: ["Plan de carrera", "Capacitación paga", "Bonos por performance"],
      category: "analysis",
      urgent: true
    },
    {
      id: 3,
      title: "Soporte Técnico IT",
      company: "Soluciones Empresariales SA",
      location: "Remoto",
      type: "Part-time",
      salary: "$80,000 - $100,000",
      posted: "3 días",
      description: "Posición de soporte técnico para estudiantes avanzados. Horarios flexibles compatibles con estudios.",
      requirements: ["Windows/Linux", "Redes", "Hardware", "Atención al cliente"],
      benefits: ["Horarios flexibles", "Experiencia práctica", "Mentoring"],
      category: "support",
      urgent: false
    },
    {
      id: 4,
      title: "QA Tester Junior",
      company: "Software Innovation Lab",
      location: "Villa Crespo, CABA",
      type: "Tiempo Completo",
      salary: "$130,000 - $160,000",
      posted: "5 días",
      description: "Únete a nuestro equipo de QA para garantizar la calidad de nuestras aplicaciones web y móviles.",
      requirements: ["Testing Manual", "Selenium", "JIRA", "Metodologías Ágiles"],
      benefits: ["Certificaciones", "Trabajo en equipo", "Tecnologías modernas"],
      category: "testing",
      urgent: false
    },
    {
      id: 5,
      title: "Desarrollador Backend Python",
      company: "DataTech Solutions",
      location: "Palermo, CABA",
      type: "Tiempo Completo",
      salary: "$180,000 - $220,000",
      posted: "1 semana",
      description: "Desarrollador backend para trabajar con APIs y microservicios usando Python y Django.",
      requirements: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
      benefits: ["Stock options", "Capacitación internacional", "Ambiente joven"],
      category: "development",
      urgent: true
    }
  ];

  const categories = [
    { id: "all", name: "Todas las categorías" },
    { id: "development", name: "Desarrollo" },
    { id: "analysis", name: "Análisis de Sistemas" },
    { id: "testing", name: "Testing/QA" },
    { id: "support", name: "Soporte Técnico" }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      "Tiempo Completo": "bg-green-100 text-green-800",
      "Part-time": "bg-blue-100 text-blue-800",
      "Trainee": "bg-purple-100 text-purple-800",
      "Freelance": "bg-orange-100 text-orange-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Oportunidades Laborales
          </h1>
          <p className="text-xl text-gray-600">
            Conecta con empleadores que buscan talento del IFTS18
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Buscar por título, empresa o tecnología..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-teal-600 hover:bg-teal-700" : ""}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-teal-600">{jobs.length}</div>
              <div className="text-sm text-gray-600">Ofertas Activas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-500">
                {jobs.filter(job => job.urgent).length}
              </div>
              <div className="text-sm text-gray-600">Urgentes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {jobs.filter(job => job.type === "Trainee").length}
              </div>
              <div className="text-sm text-gray-600">Programas Trainee</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {jobs.filter(job => job.location === "Remoto").length}
              </div>
              <div className="text-sm text-gray-600">Remotos</div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.urgent ? 'border-orange-300 bg-orange-50' : ''}`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{job.title}</CardTitle>
                          {job.urgent && (
                            <Badge className="bg-red-100 text-red-800">Urgente</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Hace {job.posted}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getTypeColor(job.type)}>
                            {job.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-green-600">
                            <DollarSign className="h-4 w-4" />
                            <span className="font-medium">{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-teal-600 hover:bg-teal-700 shrink-0">
                    Ver Detalles
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requisitos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.requirements.map(req => (
                        <Badge key={req} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Beneficios:</h4>
                    <div className="flex flex-wrap gap-1">
                      {job.benefits.map(benefit => (
                        <Badge key={benefit} className="bg-green-100 text-green-800 text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      Ideal para estudiantes del IFTS18
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-gray-500">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No se encontraron ofertas</h3>
                <p>Intenta con otros términos de búsqueda o categorías</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Employer CTA */}
        <Card className="mt-12 bg-teal-50 border-teal-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-teal-800 mb-4">
              ¿Eres un Empleador?
            </h3>
            <p className="text-teal-700 mb-6">
              Accede a nuestra comunidad de estudiantes talentosos del IFTS18 y encuentra tu próximo colaborador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Publicar Oferta Laboral
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-700">
                Ver Base de Estudiantes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Jobs;
