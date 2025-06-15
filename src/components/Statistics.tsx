
import { Users, BookOpen, Award, Globe } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Students",
      description: "Learning and growing every day"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Online Courses",
      description: "Across various disciplines"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      description: "Students complete their courses"
    },
    {
      icon: Globe,
      number: "100+",
      label: "Countries",
      description: "Students from around the world"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join thousands of learners who have transformed their careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-blue-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
