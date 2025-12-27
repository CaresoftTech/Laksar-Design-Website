import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/laksar-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-max px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +91 123 456 7890
            </a>
            <a href="mailto:info@laksardesign.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              arul@laksardesign.in
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Delivering Excellence in MEP Engineering
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-card'
      }`}>
        <div className="container-max px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/home" className="flex items-center">
              <img 
                src={logo} 
                alt="Laksar Design Consultancy LLP" 
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-medium transition-colors link-underline ${
                    isActive(link.path)
                      ? 'text-accent after:scale-x-100'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact-us">
                <Button variant="hero" size="lg">
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="container-max px-4 py-4 bg-card border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-base font-medium border-b border-border/50 ${
                  isActive(link.path) ? 'text-accent' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
