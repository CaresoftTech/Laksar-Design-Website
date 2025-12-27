import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroCarousel from '@/components/home/HeroCarousel';
import CompanyIntro from '@/components/home/CompanyIntro';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import MilestoneCounters from '@/components/home/MilestoneCounters';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <CompanyIntro />
        <WhyChooseUs />
        <MilestoneCounters />
        
        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-[#183b5e] via-[#21a1d3]  to-[#06eb3b] text-white">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Partner with Laksar Design Consultancy for innovative MEP solutions 
              that exceed expectations. Let's build something extraordinary together.
            </p>
            <Link to="/contact-us">
              <Button variant="hero" size="xl">
                Get in Touch
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

export default Home;
