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
import serviceAuditorium from '@/assets/picture.png';
import serviceCommercial from '@/assets/commercial.png';
import serviceHealth from '@/assets/hospital.png';

import mechanicalIcon from "@/assets/mechanical.png";
import electricalIcon from "@/assets/electrical.png";
import plumbingIcon from "@/assets/plumbing.png";


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
  {
    title: 'Auditorium & Conventional Center',
    description: 'Comfortable and sustainable MEP systems for Auditorium & Conventional Center and housing complexes.',
    image: serviceAuditorium,
  },
  {
    title: 'Commercial Buildings',
    description: 'Comfortable and sustainable MEP systems for Commercial Buildings and housing complexes.',
    image: serviceCommercial,
  },
  {
    title: 'Health Care Buildings',
    description: 'Comfortable and sustainable MEP systems for Health Care Buildings.',
    image: serviceHealth,
  },
];

const offers = [
  {
    title: "Mechanical",
    icon: mechanicalIcon,
    points: [
      "Air Conditioning System",
      "Ventilation System",
      "Fire Protection System",
      "Process Air & Water System",
      "Industrial Gas Distribution",
    ],
  },
  {
    title: "Electrical",
    icon: electricalIcon,
    points: [
      "LT / HT Electrical Systems",
      "Diesel Generator & UPS",
      "Solar Power System",
      "IBMS",
      "IT & Networking System",
    ],
  },
  {
    title: "Plumbing",
    icon: plumbingIcon,
    points: [
      "Water Supply & Drainage",
      "Rainwater & Storm Water System",
      "Water Treatment Plant",
      "Sewage Treatment Plant",
    ],
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

        {/* Services Section */}
        <section className="relative py-16 sm:py-20 bg-white overflow-hidden">

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#275781] tracking-tight">
                Our Services
              </h2>

            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="
            group relative rounded-2xl overflow-hidden
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-xl
            transition-all duration-500
            hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-400/30
          "
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />

              
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#275781] mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray/20 leading-relaxed">
                      {service.description}
                    </p>

                    {/* bottom line animation */}
                    {/* <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* What We Offer */}
        <section className="section-padding bg-muted">
          <div className="container-max">

            {/* Heading */}
            <div className="text-center mb-16">
              <span className="inline-block px-5 py-2 rounded-full bg-[#275781]/10 text-[#275781] text-sm font-semibold mb-4">
                Our Expertise
              </span>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#275781] mb-3">
                We Can Offer
              </h2>

              <p className="max-w-xl mx-auto text-muted-foreground text-sm md:text-base">
                End-to-end MEP solutions with quality, safety and sustainability.
              </p>
            </div>

            {/* Offers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className="
            relative
            bg-white
            rounded-[2.5rem]
            p-8
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            transition-all duration-300
            hover:-translate-y-2
          " >
                  {/* Icon Bubble */}
                  <div className="absolute -top-8 left-8">
                    <div className="
              w-20 h-20
              rounded-full
              bg-[#53c4d8]/15
              flex items-center justify-center
              shadow-md
            ">
                      <img
                        src={offer.icon}
                        alt={offer.title}
                        className="w-62 h-16 object-contain rounded-sm"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/icons/default.png";
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="text-xl font-semibold text-[#275781] mb-4">
                      {offer.title}
                    </h3>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {offer.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#53c4d8]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>



        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-[#183b5e] via-[#21a1d3] to-[#1fd349]">
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
