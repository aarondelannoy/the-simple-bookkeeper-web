import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Over 10+ years of bookkeeping experience",
  "Certified QuickBooks ProAdvisor",
  "Dedicated support and communication",
  "Secure, cloud-based document management",
  "Flexible service packages",
  "Transparent, competitive pricing"
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose 
              <span className="text-primary block">The Simple Bookkeeper?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe bookkeeping shouldn't be complicated. Our approach combines 
              professional expertise with clear communication, giving you the financial 
              clarity you need to make confident business decisions.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-lg">
              <Link to="/schedule">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
          
          <div className="lg:order-first">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 shadow-soft">
              <blockquote className="text-lg italic text-foreground mb-6">
                "We've been working with The Simple Bookkeeper for over five years now. 
                Their attention to detail and clear monthly reports have given us 
                complete confidence in our financial position. Highly recommended!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">DF</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Danielle Forte</p>
                  <p className="text-muted-foreground">Owner, All Tech Depot, Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;