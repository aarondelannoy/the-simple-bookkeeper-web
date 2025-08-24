import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-section-bg px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/8f4307b1-fe5c-47f5-af84-9f74f6281d89.png" 
            alt="The Simple Bookkeeper" 
            className="mx-auto mb-8 max-w-md w-full h-auto"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Professional Bookkeeping
            <span className="block text-primary">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Focus on growing your business while we handle your books. 
            Accurate, reliable, and refreshingly straightforward bookkeeping services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;