import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, PieChart, Clock, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Monthly Bookkeeping",
    description: "Complete monthly financial record keeping, categorization, and reconciliation for your\u00A0business."
  },
  {
    icon: FileText,
    title: "Financial Statements",
    description: "Professional profit & loss statements, balance sheets, and cash flow reports delivered on\u00A0time."
  },
  {
    icon: PieChart,
    title: "Tax Preparation Support",
    description: "Organized records and documentation to make tax season stress-free for you and your\u00A0accountant."
  },
  {
    icon: Clock,
    title: "Catch-up Bookkeeping",
    description: "Behind on your books? We'll get you caught up quickly and accurately, no\u00A0judgment."
  },
  {
    icon: Shield,
    title: "QuickBooks Setup",
    description: "Professional QuickBooks setup and training to streamline your financial management."
  },
  {
    icon: Users,
    title: "Payroll Processing",
    description: "Accurate payroll processing, tax filings, and compliance to keep your team happy."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive bookkeeping solutions tailored to your business{'\u00A0'}needs.{' '}
            <br />
            We handle the complexity so you can focus on what you do best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border bg-card">
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;