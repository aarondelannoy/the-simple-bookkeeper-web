import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Schedule = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-section-bg">
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="outline" className="mb-6 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose a time that works best for you
            </p>
          </div>
          
          <div 
            className="calendly-inline-widget h-[900px] md:h-[800px] lg:h-[700px]" 
            data-url="https://calendly.com/the-simple-bookkeeper/30min"
            style={{ minWidth: '320px' }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Schedule;
