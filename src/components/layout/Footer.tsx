import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '@/assets/laksar-logo.png';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Offices & IT Buildings',
    'Industrial Buildings',
    'Green Buildings',
    'Data Centers',
    'Residential Buildings',
  ];

  const quickLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Services', path: '/' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Laksar Design Consultancy LLP"
              className="h-12 w-auto mb-6 "
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Laksar Design Consultancy LLP is a leading MEP engineering consultancy
              delivering innovative and sustainable solutions for diverse building projects.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Plot No. 2A, <br /> Royal Nagar 1st Main Road, <br />
                  Royal Nagar, Kovoor, <br /> Chennai – 600 128. <br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+911234567890" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:arul@laksardesign.in" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  arul@laksardesign.in 
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:admin@laksardesign.in" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  admin@laksardesign.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

{/* Copyright */}
<div className="border-t border-primary-foreground/20">
  <div className="container-max px-4 py-6">
    <p className="text-sm text-primary-foreground/70 text-center">
      © {currentYear} Laksar Design Consultancy LLP. All rights reserved.
    </p>
  </div>
</div>

    </footer>
  );
};

export default Footer;
