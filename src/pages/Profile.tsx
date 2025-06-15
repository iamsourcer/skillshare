
import { useState } from "react";
import { Star, MapPin, Mail, Phone, Calendar, Languages, Code, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock student data
  const student = {
    id: 1,
    name: "Ana María Rodríguez",
    image: "/lovable-uploads/0d6658c3-e56c-4cb3-8a1a-ce13119f7d93.png",
    location: "Buenos Aires, Argentina",
    email: "ana.rodriguez@ifts18.edu.ar",
    phone: "+54 11 1234-5678",
    course: "Tecnicatura en Análisis de Sistemas",
    year: "3er Año",
    joinDate: "Marzo 2023",
    rating: 4.8,
    totalReviews: 23,
    mentorSessions: 45,
    bio: "Estudiante apasionada por el desarrollo web y la programación. Me especializo en React y Python, y disfruto enseñar a otros estudiantes. Busco constantemente aprender nuevas tecnologías.",
    skills: [
      { name: "React", level: "Avanzado", category: "Frontend" },
      { name: "Python", level: "Intermedio", category: "Backend" },
      { name: "JavaScript", level: "Avanzado", category: "Frontend" },
      { name: "HTML/CSS", level: "Avanzado", category: "Frontend" },
      { name: "SQL", level: "Básico", category: "Database" },
      { name: "Git", level: "Intermedio", category: "Tools" }
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Intermedio" },
      { name: "Portugués", level: "Básico" }
    ],
    experiences: [
      {
        title: "Desarrolladora Frontend Junior",
        company: "Startup Local",
        period: "Jun 2024 - Presente",
        description: "Desarrollo de interfaces web usando React y Tailwind CSS. Colaboración en equipo ágil."
      },
      {
        title: "Freelance Web Developer",
        company: "Proyectos Independientes",
        period: "Ene 2024 - May 2024",
        description: "Creación de sitios web para pequeños negocios locales usando HTML, CSS y JavaScript."
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Carlos López",
        rating: 5,
        date: "15 Nov 2024",
        comment: "Ana es una excelente mentora. Me ayudó a entender React de manera muy clara y práctica.",
        subject: "React Fundamentos"
      },
      {
        id: 2,
        author: "María González",
        rating: 5,
        date: "08 Nov 2024",
        comment: "Muy paciente y didáctica. Sus explicaciones de JavaScript son súper claras.",
        subject: "JavaScript Avanzado"
      },
      {
        id: 3,
        author: "Diego Fernández",
        rating: 4,
        date: "01 Nov 2024",
        comment: "Gran conocimiento técnico y muy buena disposición para enseñar.",
        subject: "Desarrollo Web"
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-orange-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const getSkillColor = (category: string) => {
    const colors = {
      Frontend: "bg-blue-100 text-blue-800",
      Backend: "bg-green-100 text-green-800",
      Database: "bg-purple-100 text-purple-800",
      Tools: "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src={student.image} alt={student.name} className="object-cover" />
                <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
                    <p className="text-lg text-teal-600 font-medium">{student.course}</p>
                    <p className="text-gray-600">{student.year}</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center gap-2 justify-end mb-2">
                      {renderStars(student.rating)}
                      <span className="text-lg font-semibold">{student.rating}</span>
                      <span className="text-gray-500">({student.totalReviews} reseñas)</span>
                    </div>
                    <p className="text-sm text-gray-600">{student.mentorSessions} sesiones de mentoría</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {student.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {student.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Miembro desde {student.joinDate}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{student.bio}</p>
                
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Solicitar Mentoría
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          {[
            { id: "overview", label: "Resumen", icon: Briefcase },
            { id: "skills", label: "Habilidades", icon: Code },
            { id: "languages", label: "Idiomas", icon: Languages },
            { id: "reviews", label: "Reseñas", icon: Star }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium ${
                selectedTab === tab.id
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {selectedTab === "overview" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Experiencia Laboral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-teal-200 pl-4">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-teal-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        <p className="text-gray-700">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === "skills" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Habilidades Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Frontend', 'Backend', 'Database', 'Tools'].map(category => (
                      <div key={category}>
                        <h3 className="font-medium text-gray-900 mb-2">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                          {student.skills
                            .filter(skill => skill.category === category)
                            .map(skill => (
                              <Badge key={skill.name} className={getSkillColor(skill.category)}>
                                {skill.name} - {skill.level}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === "languages" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="h-5 w-5" />
                    Idiomas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {student.languages.map(lang => (
                      <div key={lang.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">{lang.name}</span>
                        <Badge variant="outline">{lang.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === "reviews" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Reseñas y Comentarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {student.reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{review.author}</h4>
                            <p className="text-sm text-teal-600">{review.subject}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating)}
                            </div>
                            <p className="text-xs text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sesiones completadas</span>
                    <span className="font-semibold">{student.mentorSessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Calificación promedio</span>
                    <span className="font-semibold">{student.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total de reseñas</span>
                    <span className="font-semibold">{student.totalReviews}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{student.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{student.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
