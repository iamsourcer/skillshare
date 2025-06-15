
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const benefits = [
    "Access to 500+ premium courses",
    "Learn at your own pace",
    "Certificate of completion",
    "Lifetime access to content",
    "Mobile app included"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="mt-4 text-xl text-blue-100">
          Join thousands of students and transform your career today
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-white">
              <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
            View Pricing
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-blue-200">
          No credit card required • 7-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
