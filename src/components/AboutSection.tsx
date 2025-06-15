
import { CheckCircle, Target, Lightbulb, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Expert-Led Learning",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: Lightbulb,
      title: "Interactive Content",
      description: "Engaging videos, quizzes, and hands-on projects"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with fellow learners and get help when needed"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certificates upon course completion"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Learn anytime, anywhere with our mobile-friendly platform"
    }
  ];

  const benefits = [
    "Lifetime access to courses",
    "30-day money-back guarantee",
    "Mobile app for learning on-the-go",
    "Regular content updates",
    "Career support services"
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose EduMim?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're committed to providing the highest quality online education experience. 
              Our platform combines cutting-edge technology with proven teaching methodologies 
              to help you achieve your learning goals.
            </p>
            
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button size="lg">
                Start Learning Today
              </Button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
