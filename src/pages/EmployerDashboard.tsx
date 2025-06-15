
import { useState } from "react";
import { Plus, Search, Eye, Star, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EmployerDashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const myJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend Junior",
      company: "TechStart SA",
      location: "CABA, Buenos Aires",
      type: "Tiempo Completo",
      posted: "2024-11-15",
      applications: 8,
      status: "Activo"
    },
    {
      id: 2,
      title: "Analista de Sistemas Trainee",
      company: "TechStart SA",
      location: "Remoto",
      type: "Trainee",
      posted: "2024-11-10",
      applications: 15,
      status: "Activo"
    }
  ];

  const talentPool = [
    {
      id: 1,
      name: "Ana María Rodríguez",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      location: "CABA, Buenos Aires",
      course: "Análisis de Sistemas",
      year: "3er Año",
      rating: 4.9,
      reviews: 23,
      skills: ["React", "Python", "JavaScript", "Node.js"],
      availability: "Buscando empleo"
    },
    {
      id: 2,
      name: "Carlos López",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      location: "La Plata, Buenos Aires",
      course: "Desarrollo Web",
      year: "2do Año",
      rating: 4.8,
      reviews: 19,
      skills: ["Node.js", "MongoDB", "Express", "Vue.js"],
      availability: "Buscando prácticas"
    },
    {
      id: 3,
      name: "María González",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      location: "Córdoba, Córdoba",
      course: "Programación",
      year: "3er Año",
      rating: 4.7,
      reviews: 21,
      skills: ["Java", "Spring", "SQL", "Python"],
      availability: "Buscando empleo"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Empleador</h1>
          <p className="text-gray-600 mt-2">Gestiona tus ofertas laborales y accede al pool de talento</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-4 py-2 border-b-2 font-medium ${
              activeTab === "jobs"
                ? "border-teal-600 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Mis Ofertas
          </button>
          <button
            onClick={() => setActiveTab("talent")}
            className={`px-4 py-2 border-b-2 font-medium ${
              activeTab === "talent"
                ? "border-teal-600 text-teal-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Pool de Talento
          </button>
        </div>

        {/* Jobs Tab */}
        {activeTab === "jobs" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Mis Ofertas Laborales</h2>
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Plus className="h-4 w-4 mr-2" />
                Nueva Oferta
              </Button>
            </div>

            <div className="grid gap-6">
              {myJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                        <p className="text-teal-600 font-medium">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <Badge variant="outline">{job.type}</Badge>
                          <span>Publicado: {job.posted}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-green-100 text-green-800">{job.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{job.applications} postulaciones</p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver
                          </Button>
                          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                            Editar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Talent Pool Tab */}
        {activeTab === "talent" && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Pool de Talento</h2>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Buscar estudiantes..." className="pl-10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {talentPool.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarImage 
                        src={student.image} 
                        alt={student.name}
                        className="object-cover"
                      />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <p className="text-teal-600 font-medium text-sm">{student.course}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {student.location}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex">
                        {renderStars(student.rating)}
                      </div>
                      <span className="font-semibold text-sm">{student.rating}</span>
                      <span className="text-gray-500 text-xs">({student.reviews})</span>
                    </div>

                    {/* Skills */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Habilidades:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {student.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{student.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Availability */}
                    <Badge className="bg-blue-100 text-blue-800 text-xs">
                      {student.availability}
                    </Badge>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Ver Perfil
                      </Button>
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700 flex-1">
                        Contactar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default EmployerDashboard;
