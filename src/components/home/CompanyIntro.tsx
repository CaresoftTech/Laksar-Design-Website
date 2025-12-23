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
            {/* <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
              About Our Company
            </span> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[#214e75] font-bold text-foreground mb-6">
              Laksar Design<br />
              <span className="text-gradient">Consultancy LLP</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Established in 2021 in Chennai, India, LAKSAR DESIGN CONSULTANCY LLP is a dynamic and multi-disciplinary engineering consultancy. We specialize in delivering innovative and reliable engineering solutions tailored to modern industry needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our expertise spans Mechanical, Electrical, and Plumbing (MEP) services, enabling us to create cutting-edge designs that are both functional and efficient. We are committed to providing customized, sustainable solutions that align with the industry’s highest standards of quality, performance, and innovation.
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
            <div className="bg-[#275781] text-primary-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div className="bg-[#50a5d3] text-secondary-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-secondary-foreground/80">Projects Done</div>
            </div>
            <div className=" bg-[#9ec437] text-accent-foreground p-6 md:p-8 rounded-xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-accent-foreground/80">Expert Engineers</div>
            </div>
            <div className="bg-[#50a93e] text-highlight-foreground p-6 md:p-8 rounded-xl">
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
