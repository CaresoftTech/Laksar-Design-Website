import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: 'Engineering Excellence',
    subtitle: 'Building Tomorrow\'s Infrastructure Today',
    description: 'Comprehensive MEP design solutions for modern construction projects.',
  },
  {
    image: hero2,
    title: 'Innovative Solutions',
    subtitle: 'Smart Building Systems',
    description: 'Cutting-edge HVAC, electrical, and plumbing designs for optimal efficiency.',
  },
  {
    image: hero3,
    title: 'Sustainable Design',
    subtitle: 'Green Building Expertise',
    description: 'LEED-certified sustainable solutions for a greener future.',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full container-max px-4 flex items-center">
            <div className="max-w-2xl">
              <span 
                className={`inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4 transition-all duration-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '200ms' }}
              >
                {slide.subtitle}
              </span>
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground mb-6 transition-all duration-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '400ms' }}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-lg md:text-xl text-primary-foreground/90 mb-8 transition-all duration-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '600ms' }}
              >
                {slide.description}
              </p>
              <div 
                className={`flex flex-wrap gap-4 transition-all duration-500 ${
                  index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: '800ms' }}
              >
                <Link to="/services">
                  <Button variant="hero" size="xl">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button variant="heroOutline" size="xl">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-card/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-card/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent w-8' 
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
