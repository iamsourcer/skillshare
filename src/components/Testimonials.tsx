
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Software Developer",
      company: "Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      content: "EduMim completely transformed my career. The courses are well-structured and the instructors are amazing. I landed my dream job within 3 months of completing the web development bootcamp.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Johnson",
      role: "Digital Marketing Manager",
      company: "Growth Agency",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "The digital marketing course exceeded my expectations. The practical approach and real-world examples helped me implement strategies that increased our ROI by 200%.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "UX Designer",
      company: "Design Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "I loved the UI/UX design course! The hands-on projects and feedback from instructors helped me build a portfolio that got me hired at a top design agency.",
      rating: 5
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Data Scientist",
      company: "Analytics Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "The data science program is comprehensive and up-to-date. The Python courses and machine learning modules prepared me perfectly for my current role.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content: "The business strategy course gave me the frameworks and tools I needed to advance to a product management role. Highly recommend to anyone looking to grow their career.",
      rating: 5
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Mobile Developer",
      company: "App Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      content: "The mobile app development course was exactly what I needed to transition from web to mobile. The instructors were knowledgeable and the support was excellent.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real stories from learners who achieved their goals with EduMim
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-500 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
