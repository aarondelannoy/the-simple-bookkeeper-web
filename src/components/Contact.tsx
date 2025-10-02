import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(772) 206-0806",
    subtitle: "Mon-Fri, 9AM-5PM EST"
  },
  {
    icon: Mail,
    title: "Email",
    content: "simplebookkeeperfl@gmail.com",
    subtitle: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Serving the Treasure Coast",
    subtitle: "Local bookkeeping services"
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "Same-day support",
    subtitle: "Quick answers to your questions"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Simplify Your Books?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with a free consultation. We'll review your current bookkeeping 
            situation and show you how we can help streamline your financial management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-medium mb-1 text-xs">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Link to="/schedule">
                Schedule Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;