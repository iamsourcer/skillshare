import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, MapPin, Mail, Phone, Calendar, Languages, Code, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Profile = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("overview");

  // Mock student data - find student by ID or default to first one
  const allStudents = [
    {
      id: 1,
      name: "Ana María Rodríguez",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=300&q=80",
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
    },
    {
      id: 2,
      name: "Carlos López",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      location: "La Plata, Buenos Aires",
      email: "carlos.lopez@ifts18.edu.ar",
      phone: "+54 221 1234-5678",
      course: "Tecnicatura en Desarrollo Web",
      year: "2do Año",
      joinDate: "Agosto 2023",
      rating: 4.8,
      totalReviews: 19,
      mentorSessions: 38,
      bio: "Especialista en desarrollo backend y bases de datos. Me gusta enseñar arquitectura de software y buenas prácticas de programación.",
      skills: [
        { name: "Node.js", level: "Avanzado", category: "Backend" },
        { name: "MongoDB", level: "Intermedio", category: "Database" },
        { name: "Express", level: "Avanzado", category: "Backend" },
        { name: "Vue.js", level: "Intermedio", category: "Frontend" }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio" }
      ],
      experiences: [
        {
          title: "Desarrollador Backend Junior",
          company: "Empresa Local",
          period: "Mar 2024 - Presente",
          description: "Desarrollo de APIs REST y manejo de bases de datos MongoDB."
        }
      ],
      reviews: [
        {
          id: 1,
          author: "Ana Rodríguez",
          rating: 5,
          date: "12 Nov 2024",
          comment: "Carlos explica muy bien los conceptos de backend. Excelente mentor.",
          subject: "Node.js"
        }
      ]
    },
    {
      id: 3,
      name: "María González",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      location: "Córdoba, Argentina",
      email: "maria.gonzalez@ifts18.edu.ar",
      phone: "+54 351 1234-5678",
      course: "Tecnicatura en Programación",
      year: "3er Año",
      joinDate: "Febrero 2023",
      rating: 4.7,
      totalReviews: 21,
      mentorSessions: 42,
      bio: "Especialista en Java y desarrollo de aplicaciones empresariales. Me apasiona enseñar programación orientada a objetos y buenas prácticas de código.",
      skills: [
        { name: "Java", level: "Avanzado", category: "Backend" },
        { name: "Spring", level: "Intermedio", category: "Backend" },
        { name: "SQL", level: "Avanzado", category: "Database" },
        { name: "Python", level: "Básico", category: "Backend" }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Básico" }
      ],
      experiences: [
        {
          title: "Desarrolladora Java Junior",
          company: "Consultora IT",
          period: "Abr 2024 - Presente",
          description: "Desarrollo de aplicaciones empresariales con Spring Framework."
        }
      ],
      reviews: [
        {
          id: 1,
          author: "Diego Fernández",
          rating: 5,
          date: "10 Nov 2024",
          comment: "María tiene un dominio excelente de Java. Sus clases son muy organizadas.",
          subject: "Java POO"
        }
      ]
    },
    {
      id: 4,
      name: "Diego Fernández",
      image: "https://images.unsplash.com/photo-1500648741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      location: "Buenos Aires, Argentina",
      email: "diego.fernandez@ifts18.edu.ar",
      phone: "+54 11 5678-1234",
      course: "Tecnicatura en Análisis de Sistemas",
      year: "2do Año",
      joinDate: "Mayo 2023",
      rating: 4.6,
      totalReviews: 15,
      mentorSessions: 28,
      bio: "Enfocado en tecnologías Microsoft y desarrollo en la nube. Me gusta enseñar C# y Azure, además de conceptos de arquitectura de software.",
      skills: [
        { name: "C#", level: "Avanzado", category: "Backend" },
        { name: ".NET", level: "Intermedio", category: "Backend" },
        { name: "Azure", level: "Básico", category: "Tools" },
        { name: "SQL", level: "Intermedio", category: "Database" }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Intermedio" }
      ],
      experiences: [
        {
          title: "Desarrollador .NET Junior",
          company: "Software Factory",
          period: "Jul 2024 - Presente",
          description: "Desarrollo de aplicaciones web con ASP.NET Core y Azure."
        }
      ],
      reviews: [
        {
          id: 1,
          author: "Joaquín Morales",
          rating: 5,
          date: "05 Nov 2024",
          comment: "Diego explica C# de manera muy clara. Excelente mentor para .NET.",
          subject: "C# Básico"
        }
      ]
    },
    {
      id: 5,
      name: "Lucía Martínez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
      location: "Rosario, Santa Fe",
      email: "lucia.martinez@ifts18.edu.ar",
      phone: "+54 341 1234-5678",
      course: "Tecnicatura en Desarrollo Web",
      year: "3er Año",
      joinDate: "Marzo 2023",
      rating: 4.6,
      totalReviews: 18,
      mentorSessions: 31,
      bio: "Especialista en frontend moderno con Vue.js y TypeScript. Me enfoco en crear interfaces de usuario atractivas y funcionales.",
      skills: [
        { name: "Vue.js", level: "Avanzado", category: "Frontend" },
        { name: "TypeScript", level: "Intermedio", category: "Frontend" },
        { name: "AWS", level: "Básico", category: "Tools" },
        { name: "React", level: "Básico", category: "Frontend" }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Avanzado" }
      ],
      experiences: [
        {
          title: "Frontend Developer",
          company: "Agencia Digital",
          period: "Sep 2024 - Presente",
          description: "Desarrollo de SPAs con Vue.js y integración con APIs REST."
        }
      ],
      reviews: [
        {
          id: 1,
          author: "Ana Rodríguez",
          rating: 4,
          date: "03 Nov 2024",
          comment: "Lucía es muy buena enseñando Vue.js. Sus ejemplos son muy prácticos.",
          subject: "Vue.js Fundamentos"
        }
      ]
    },
    {
      id: 6,
      name: "Joaquín Morales",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      location: "Mendoza, Argentina",
      email: "joaquin.morales@ifts18.edu.ar",
      phone: "+54 261 1234-5678",
      course: "Tecnicatura en Análisis de Sistemas",
      year: "1er Año",
      joinDate: "Agosto 2024",
      rating: 4.4,
      totalReviews: 8,
      mentorSessions: 15,
      bio: "Nuevo en el mundo de la programación pero muy entusiasta. Me especializo en Python y desarrollo web básico. Disfruto ayudar a otros principiantes.",
      skills: [
        { name: "Python", level: "Intermedio", category: "Backend" },
        { name: "Django", level: "Básico", category: "Backend" },
        { name: "PostgreSQL", level: "Básico", category: "Database" },
        { name: "HTML/CSS", level: "Intermedio", category: "Frontend" }
      ],
      languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Básico" }
      ],
      experiences: [
        {
          title: "Estudiante Mentor",
          company: "IFTS Skillswap",
          period: "Sep 2024 - Presente",
          description: "Ayudo a estudiantes de primer año con conceptos básicos de programación."
        }
      ],
      reviews: [
        {
          id: 1,
          author: "Carlos López",
          rating: 4,
          date: "01 Nov 2024",
          comment: "Joaquín es muy paciente y entiende las dificultades de los principiantes.",
          subject: "Python Básico"
        }
      ]
    }
  ];

  const student = allStudents.find(s => s.id === parseInt(id || '1')) || allStudents[0];

  console.log('Profile component loaded with ID:', id, 'Student:', student.name);

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
