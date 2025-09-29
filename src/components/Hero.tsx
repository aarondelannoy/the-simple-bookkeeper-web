import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-br from-background to-section-bg">
      <div className="w-full relative">
        <img 
          src="/lovable-uploads/9a633460-6e3f-4b43-9544-1728525631be.png" 
          alt="The Simple Bookkeeper - Professional Financial Services" 
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover object-left"
        />
      </div>
      <div className="container mx-auto text-center flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto">
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