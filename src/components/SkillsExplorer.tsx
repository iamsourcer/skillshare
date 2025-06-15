
import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SkillsExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");

  const allStudents = [
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
      availability: "Disponible"
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
      availability: "Disponible"
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
      availability: "Ocupado"
    },
    {
      id: 4,
      name: "Diego Fernández",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      location: "CABA, Buenos Aires",
      course: "Análisis de Sistemas",
      year: "2do Año",
      rating: 4.6,
      reviews: 15,
      skills: ["C#", ".NET", "Azure", "SQL"],
      availability: "Disponible"
    },
    {
      id: 5,
      name: "Lucía Martínez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      location: "Rosario, Santa Fe",
      course: "Desarrollo Web",
      year: "3er Año",
      rating: 4.6,
      reviews: 18,
      skills: ["Vue.js", "TypeScript", "AWS", "React"],
      availability: "Disponible"
    },
    {
      id: 6,
      name: "Joaquín Morales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      location: "Mendoza, Mendoza",
      course: "Análisis de Sistemas",
      year: "1er Año",
      rating: 4.4,
      reviews: 8,
      skills: ["Python", "Django", "PostgreSQL"],
      availability: "Disponible"
    }
  ];

  const locations = ["CABA, Buenos Aires", "La Plata, Buenos Aires", "Córdoba, Córdoba", "Rosario, Santa Fe", "Mendoza, Mendoza"];
  const allSkills = ["React", "Python", "JavaScript", "Node.js", "MongoDB", "Express", "Vue.js", "Java", "Spring", "SQL", "C#", ".NET", "Azure", "TypeScript", "AWS", "Django", "PostgreSQL"];

  const filteredStudents = allStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !selectedLocation || selectedLocation === "all" || student.location === selectedLocation;
    const matchesSkill = !selectedSkill || selectedSkill === "all" || student.skills.includes(selectedSkill);
    
    return matchesSearch && matchesLocation && matchesSkill;
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

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Explorar Habilidades
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra mentores por ubicación y habilidades específicas
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nombre o habilidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por ubicación" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las ubicaciones</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar por habilidad" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student) => (
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
                    {student.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between">
                  <Badge 
                    className={student.availability === "Disponible" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                    }
                  >
                    {student.availability}
                  </Badge>
                </div>

                {/* Contact Button */}
                <Button 
                  className="w-full bg-teal-600 hover:bg-teal-700" 
                  size="sm"
                  disabled={student.availability === "Ocupado"}
                >
                  Solicitar Mentoría
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron estudiantes con los criterios seleccionados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsExplorer;
