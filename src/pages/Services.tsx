import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import serviceOffice from '@/assets/service-office.jpg';
import serviceIndustrial from '@/assets/service-industrial.jpg';
import serviceGreen from '@/assets/service-green.jpg';
import serviceWarehouse from '@/assets/service-warehouse.jpg';
import serviceSports from '@/assets/service-sports.jpg';
import serviceEducation from '@/assets/service-education.jpg';
import serviceRnd from '@/assets/service-rnd.jpg';
import serviceDatacenter from '@/assets/service-datacenter.jpg';
import serviceResidential from '@/assets/service-residential.jpg';

const services = [
  {
    title: 'Offices & IT Buildings',
    description: 'Complete MEP solutions for modern office complexes and IT parks with focus on energy efficiency and occupant comfort.',
    image: serviceOffice,
  },
  {
    title: 'Industrial Buildings',
    description: 'Specialized MEP systems for manufacturing facilities, process plants, and industrial complexes.',
    image: serviceIndustrial,
  },
  {
    title: 'Green Buildings',
    description: 'Sustainable design solutions for LEED and IGBC certified buildings with minimal environmental impact.',
    image: serviceGreen,
  },
  {
    title: 'Warehouse Buildings',
    description: 'Efficient MEP designs for logistics centers, distribution hubs, and storage facilities.',
    image: serviceWarehouse,
  },
  {
    title: 'Sports Complex',
    description: 'Advanced MEP systems for stadiums, indoor arenas, and multi-purpose sports facilities.',
    image: serviceSports,
  },
  {
    title: 'Educational Buildings',
    description: 'Safe and comfortable MEP solutions for schools, colleges, and university campuses.',
    image: serviceEducation,
  },
  {
    title: 'R & D Centers',
    description: 'Precision-controlled environments for research laboratories and innovation centers.',
    image: serviceRnd,
  },
  {
    title: 'Data Centers',
    description: 'Mission-critical MEP infrastructure for data centers with high availability and redundancy.',
    image: serviceDatacenter,
  },
  {
    title: 'Residential Buildings',
    description: 'Comfortable and sustainable MEP systems for residential towers and housing complexes.',
    image: serviceResidential,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container-max px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4 animate-fade-in">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Comprehensive MEP Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
                From concept to completion, we deliver innovative engineering solutions 
                across diverse building types and industries.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                What We Offer
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">M</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mechanical</h3>
                <p className="text-muted-foreground text-sm">
                  HVAC systems, ventilation, fire protection, plumbing, and mechanical utilities design.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">E</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Electrical</h3>
                <p className="text-muted-foreground text-sm">
                  Power distribution, lighting, LV systems, communication networks, and BMS integration.
                </p>
              </div>
              <div className="bg-card p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary-foreground">P</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Plumbing</h3>
                <p className="text-muted-foreground text-sm">
                  Water supply, drainage, sewage treatment, rainwater harvesting, and fire hydrant systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Let us help you bring your vision to life with our expert MEP engineering solutions.
            </p>
            <Link to="/contact-us">
              <Button variant="hero" size="xl">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
