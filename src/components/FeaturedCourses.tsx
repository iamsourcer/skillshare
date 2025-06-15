
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80",
      price: "$99",
      originalPrice: "$199",
      rating: 4.8,
      students: 12500,
      duration: "40 hours",
      level: "Beginner",
      category: "Programming"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Mike Chen",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      price: "$79",
      originalPrice: "$159",
      rating: 4.9,
      students: 8500,
      duration: "35 hours",
      level: "Intermediate",
      category: "Marketing"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emily Davis",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80",
      price: "$89",
      originalPrice: "$179",
      rating: 4.7,
      students: 6200,
      duration: "30 hours",
      level: "Beginner",
      category: "Design"
    },
    {
      id: 4,
      title: "Data Science with Python",
      instructor: "Dr. Alex Wang",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
      price: "$129",
      originalPrice: "$249",
      rating: 4.9,
      students: 9800,
      duration: "50 hours",
      level: "Advanced",
      category: "Data Science"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "James Wilson",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
      price: "$109",
      originalPrice: "$219",
      rating: 4.8,
      students: 7300,
      duration: "45 hours",
      level: "Intermediate",
      category: "Mobile Dev"
    },
    {
      id: 6,
      title: "Business Strategy & Leadership",
      instructor: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      price: "$95",
      originalPrice: "$195",
      rating: 4.6,
      students: 5600,
      duration: "25 hours",
      level: "All Levels",
      category: "Business"
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Learn from the best instructors with our most popular courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {course.category}
                </Badge>
                <Badge className="absolute top-3 right-3 bg-green-100 text-green-800">
                  {course.level}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
