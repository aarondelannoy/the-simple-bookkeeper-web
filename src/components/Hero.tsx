import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-background to-section-bg">
      <h1 className="sr-only">The Simple Bookkeeper, LLC – Bookkeeping Services on the Treasure Coast</h1>
      <div className="w-full relative">
        <img 
          src="/hero-image-new.jpg" 
          alt="Bookkeeping services in Treasure Coast Florida" 
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover object-left-top"
        />
      </div>
      <div className="container mx-auto text-center flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Professional Bookkeeping
            <span className="block text-primary">Made Simple</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Focus on growing your business while we handle your books.
            <br />
            Accurate, reliable, and refreshingly straightforward bookkeeping{'\u00A0'}services.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-all duration-300 hover:shadow-lg hover:scale-105">
              <Link to="/schedule">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;