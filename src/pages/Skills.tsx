
import { useState } from "react";
import { Search, MapPin, Filter, Star, Calendar, Users, BookOpen, Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const allMentors = [
    {
      id: 1,
      name: "Ana María Rodríguez",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=300&q=80",
      location: "CABA, Buenos Aires",
      email: "ana.rodriguez@ifts18.edu.ar",
      course: "Análisis de Sistemas",
      year: "3er Año",
      rating: 4.9,
      reviews: 23,
      sessions: 45,
      availability: "Disponible",
      skills: ["React", "Python", "JavaScript", "Node.js", "Desarrollo Web"],
      categories: ["Tecnología", "Programación"],
      socialMedia: {
        linkedin: "ana-rodriguez-dev",
        twitter: "@ana_codes",
        instagram: "@ana.tech"
      },
      experience: [
        "Desarrolladora Frontend Junior en Startup Local (6 meses)",
        "Freelance Web Developer (4 meses)",
        "Tutora de programación en IFTS18"
      ],
      bio: "Estudiante apasionada por el desarrollo web. Especializada en React y Python, con experiencia mentoreando a más de 40 estudiantes."
    },
    {
      id: 2,
      name: "Carlos López",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      location: "La Plata, Buenos Aires",
      email: "carlos.lopez@ifts18.edu.ar",
      course: "Desarrollo Web",
      year: "2do Año",
      rating: 4.8,
      reviews: 19,
      sessions: 38,
      availability: "Disponible",
      skills: ["Node.js", "MongoDB", "Express", "Vue.js", "Backend Development"],
      categories: ["Tecnología", "Bases de Datos"],
      socialMedia: {
        linkedin: "carlos-lopez-backend",
        twitter: "@carlos_dev"
      },
      experience: [
        "Desarrollador Backend Junior en empresa local",
        "Colaborador en proyectos open source",
        "Asistente de cátedra en IFTS18"
      ],
      bio: "Especialista en desarrollo backend y bases de datos. Me gusta enseñar arquitectura de software y buenas prácticas."
    },
    {
      id: 3,
      name: "María González",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      location: "Córdoba, Córdoba",
      email: "maria.gonzalez@ifts18.edu.ar",
      course: "Matemática Aplicada",
      year: "3er Año",
      rating: 4.7,
      reviews: 21,
      sessions: 42,
      availability: "Ocupado",
      skills: ["Matemáticas", "Estadística", "Análisis de Datos", "Excel Avanzado", "R"],
      categories: ["Matemáticas", "Análisis de Datos"],
      socialMedia: {
        linkedin: "maria-gonzalez-math",
        instagram: "@math.maria"
      },
      experience: [
        "Tutora de matemáticas en centro de apoyo",
        "Analista junior en consultora de datos",
        "Participante en olimpiadas de matemática"
      ],
      bio: "Apasionada por las matemáticas y el análisis de datos. Ayudo a estudiantes a superar sus dificultades con números y estadística."
    },
    {
      id: 4,
      name: "Diego Fernández",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      location: "CABA, Buenos Aires",
      email: "diego.fernandez@ifts18.edu.ar",
      course: "Comunicación",
      year: "2do Año",
      rating: 4.6,
      reviews: 15,
      sessions: 28,
      availability: "Disponible",
      skills: ["Redacción", "LinkedIn", "Redes Sociales", "Marketing Digital", "Escritura Creativa"],
      categories: ["Comunicación", "Marketing", "Desarrollo Profesional"],
      socialMedia: {
        linkedin: "diego-fernandez-comm",
        twitter: "@diego_writes",
        instagram: "@diego.content"
      },
      experience: [
        "Community Manager en agencia de marketing",
        "Redactor freelance para blogs",
        "Creador de contenido en redes sociales"
      ],
      bio: "Especialista en comunicación digital y desarrollo profesional. Te ayudo con CV, LinkedIn y estrategias de redes sociales."
    },
    {
      id: 5,
      name: "Lucía Martínez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      location: "Rosario, Santa Fe",
      email: "lucia.martinez@ifts18.edu.ar",
      course: "Diseño Gráfico",
      year: "3er Año",
      rating: 4.6,
      reviews: 18,
      sessions: 31,
      availability: "Disponible",
      skills: ["Photoshop", "Illustrator", "Figma", "UX/UI", "Branding", "Diseño Web"],
      categories: ["Diseño", "Creatividad", "Tecnología"],
      socialMedia: {
        linkedin: "lucia-martinez-design",
        instagram: "@lucia.designs",
        twitter: "@lucia_ux"
      },
      experience: [
        "Diseñadora UX/UI en startup",
        "Freelance en proyectos de branding",
        "Mentora de diseño en bootcamp"
      ],
      bio: "Diseñadora especializada en UX/UI y branding. Te ayudo a crear interfaces atractivas y funcionales."
    },
    {
      id: 6,
      name: "Joaquín Morales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      location: "Mendoza, Mendoza",
      email: "joaquin.morales@ifts18.edu.ar",
      course: "Física",
      year: "1er Año",
      rating: 4.4,
      reviews: 8,
      sessions: 15,
      availability: "Disponible",
      skills: ["Física", "Química", "Laboratorio", "Investigación", "Método Científico"],
      categories: ["Ciencias", "Investigación"],
      socialMedia: {
        linkedin: "joaquin-morales-physics"
      },
      experience: [
        "Asistente de laboratorio en universidad",
        "Tutor de física en preparatoria",
        "Participante en ferias de ciencias"
      ],
      bio: "Estudiante de física con pasión por la investigación. Ayudo con conceptos complejos de ciencias exactas."
    }
  ];

  const locations = ["CABA, Buenos Aires", "La Plata, Buenos Aires", "Córdoba, Córdoba", "Rosario, Santa Fe", "Mendoza, Mendoza"];
  const allSkills = ["React", "Python", "JavaScript", "Node.js", "Matemáticas", "Estadística", "Photoshop", "Illustrator", "Redacción", "LinkedIn", "Física", "Química"];
  const categories = ["Tecnología", "Matemáticas", "Diseño", "Comunicación", "Ciencias", "Desarrollo Profesional"];
  const experienceLevels = ["Sin experiencia", "Menos de 1 año", "1-2 años", "Más de 2 años"];

  const filteredMentors = allMentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         mentor.experience.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !selectedLocation || selectedLocation === "all" || mentor.location === selectedLocation;
    const matchesSkill = !selectedSkill || selectedSkill === "all" || mentor.skills.includes(selectedSkill);
    const matchesCategory = !selectedCategory || selectedCategory === "all" || mentor.categories.includes(selectedCategory);
    
    return matchesSearch && matchesLocation && matchesSkill && matchesCategory;
  });

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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'twitter':
        return <Twitter className="h-4 w-4" />;
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explorar Habilidades
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Encuentra mentores para cualquier habilidad que quieras aprender
          </p>
          <p className="text-gray-500 mt-2">
            Desde programación hasta matemáticas, diseño, comunicación y más
          </p>
        </div>

        {/* Advanced Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nombre, habilidad o experiencia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ubicaciones</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger>
                <SelectValue placeholder="Habilidad específica" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las habilidades</SelectItem>
                {allSkills.map(skill => (
                  <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="object-cover"
                    />
                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <p className="text-teal-600 font-medium text-sm">{mentor.course} - {mentor.year}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3" />
                      {mentor.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <Mail className="h-3 w-3" />
                      {mentor.email}
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Object.entries(mentor.socialMedia).map(([platform, handle]) => (
                      <button
                        key={platform}
                        className="p-1 rounded-full hover:bg-gray-100 text-gray-600 hover:text-teal-600"
                        title={`${platform}: ${handle}`}
                      >
                        {getSocialIcon(platform)}
                      </button>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Bio */}
                <p className="text-sm text-gray-700">{mentor.bio}</p>

                {/* Rating and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {renderStars(mentor.rating)}
                    </div>
                    <span className="font-semibold text-sm">{mentor.rating}</span>
                    <span className="text-gray-500 text-xs">({mentor.reviews})</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {mentor.sessions} sesiones
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Habilidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Experiencia:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {mentor.experience.slice(0, 2).map((exp, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-teal-600 mt-1">•</span>
                        {exp}
                      </li>
                    ))}
                    {mentor.experience.length > 2 && (
                      <li className="text-gray-500 italic">
                        +{mentor.experience.length - 2} más...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Availability and Action */}
                <div className="flex items-center justify-between pt-2">
                  <Badge 
                    className={mentor.availability === "Disponible" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                    }
                  >
                    {mentor.availability}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = `/profile/${mentor.id}`}
                    >
                      Ver Perfil
                    </Button>
                    <Button 
                      className="bg-teal-600 hover:bg-teal-700" 
                      size="sm"
                      disabled={mentor.availability === "Ocupado"}
                    >
                      Solicitar Mentoría
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              No se encontraron mentores con los criterios seleccionados.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Prueba ajustando los filtros o busca por otros términos.
            </p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">{allMentors.length}</div>
              <div className="text-sm text-gray-500">Mentores Activos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">{categories.length}</div>
              <div className="text-sm text-gray-500">Categorías</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">{allSkills.length}</div>
              <div className="text-sm text-gray-500">Habilidades</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">
                {allMentors.reduce((sum, mentor) => sum + mentor.sessions, 0)}
              </div>
              <div className="text-sm text-gray-500">Sesiones Completadas</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Skills;
