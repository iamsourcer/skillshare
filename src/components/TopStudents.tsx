
import { Star, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const TopStudents = () => {
  const navigate = useNavigate();

  const topStudents = [
    {
      id: 1,
      name: "Ana María Rodríguez",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      course: "Análisis de Sistemas",
      year: "3er Año",
      rating: 4.9,
      reviews: 23,
      sessions: 45,
      specialties: ["React", "Python", "JavaScript"],
      rank: 1
    },
    {
      id: 2,
      name: "Carlos López",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      course: "Desarrollo Web",
      year: "2do Año",
      rating: 4.8,
      reviews: 19,
      sessions: 38,
      specialties: ["Node.js", "MongoDB", "Express"],
      rank: 2
    },
    {
      id: 3,
      name: "María González",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      course: "Programación",
      year: "3er Año",
      rating: 4.7,
      reviews: 21,
      sessions: 42,
      specialties: ["Java", "Spring", "SQL"],
      rank: 3
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) ? "text-orange-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const getRankBadge = (rank: number) => {
    const badges = {
      1: { icon: "🥇", color: "bg-yellow-100 text-yellow-800" },
      2: { icon: "🥈", color: "bg-gray-100 text-gray-800" },
      3: { icon: "🥉", color: "bg-orange-100 text-orange-800" }
    };
    return badges[rank as keyof typeof badges] || { icon: `#${rank}`, color: "bg-blue-100 text-blue-800" };
  };

  const handleViewProfile = (studentId: number) => {
    // For now, navigate to profile page. In a real app, you'd check if user is logged in
    navigate(`/profile/${studentId}`);
  };

  return (
    <section id="community" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 text-teal-600" />
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Estudiantes Destacados
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Los mentores mejor calificados de nuestra comunidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topStudents.map((student) => {
            const badge = getRankBadge(student.rank);
            return (
              <Card key={student.id} className="relative overflow-hidden hover:shadow-lg transition-shadow h-fit">
                {/* Rank Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <Badge className={badge.color}>
                    {badge.icon}
                  </Badge>
                </div>

                <CardHeader className="text-center pb-3">
                  <div className="relative">
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarImage 
                        src={student.image} 
                        alt={student.name}
                        className="object-cover"
                      />
                      <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    
                    <CardTitle className="text-base">{student.name}</CardTitle>
                    <p className="text-teal-600 font-medium text-sm">{student.course}</p>
                    <p className="text-xs text-gray-500">{student.year}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {renderStars(student.rating)}
                    </div>
                    <span className="font-semibold text-sm">{student.rating}</span>
                    <span className="text-gray-500 text-xs">({student.reviews})</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="h-3 w-3 text-teal-600" />
                        <span className="font-semibold text-sm">{student.sessions}</span>
                      </div>
                      <p className="text-xs text-gray-500">Sesiones</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-3 w-3 text-orange-400" />
                        <span className="font-semibold text-sm">{student.reviews}</span>
                      </div>
                      <p className="text-xs text-gray-500">Reseñas</p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-1">
                      {student.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <button 
                    onClick={() => handleViewProfile(student.id)}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium"
                  >
                    Ver Perfil
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium text-sm">
            Ver Todos los Estudiantes
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopStudents;
