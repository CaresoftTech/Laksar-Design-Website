import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CompanyIntro = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Laksar Design<br />
              <span className="text-gradient">Consultancy LLP</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Laksar Design Consultancy LLP is a premier MEP (Mechanical, Electrical, and Plumbing) 
              engineering consultancy firm dedicated to delivering innovative and sustainable 
              building solutions. With over 15 years of experience, we have successfully completed 
              500+ projects across diverse sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of 50+ expert engineers brings together deep technical expertise and 
              creative problem-solving to address the most complex engineering challenges. 
              We pride ourselves on our commitment to quality, sustainability, and client satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about-us">
                <Button variant="default" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
            <div className="bg-primary text-primary-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-secondary-foreground/80">Projects Done</div>
            </div>
            <div className="bg-accent text-accent-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-accent-foreground/80">Expert Engineers</div>
            </div>
            <div className="bg-highlight text-highlight-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-highlight-foreground/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
