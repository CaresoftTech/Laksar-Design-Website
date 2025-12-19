import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & Managing Director',
    description: 'Over 25 years of experience in MEP engineering and project management.',
  },
  {
    name: 'Priya Sharma',
    role: 'Technical Director',
    description: 'Expert in sustainable building systems and green certifications.',
  },
  {
    name: 'Amit Patel',
    role: 'Head of Electrical Design',
    description: 'Specializes in high-rise buildings and data center infrastructure.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Head of Mechanical Design',
    description: 'HVAC specialist with expertise in industrial and commercial projects.',
  },
];

const coreValues = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for the highest standards in every project we undertake.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Maintaining honesty and transparency in all our business dealings.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing new technologies and creative solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together with clients and partners for mutual success.',
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container-max px-4 relative">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4 animate-fade-in">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up">
                Building Trust Through<br />Engineering Excellence
              </h1>
              <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
                Laksar Design Consultancy LLP has been at the forefront of MEP engineering 
                innovation for over 15 years, delivering exceptional solutions across India.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2009, Laksar Design Consultancy LLP emerged from a vision to 
                  revolutionize MEP engineering in India. What started as a small team of 
                  passionate engineers has grown into one of the country's most respected 
                  engineering consultancies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our journey has been marked by continuous innovation, unwavering commitment 
                  to quality, and a deep understanding of our clients' needs. Today, we serve 
                  diverse sectors including commercial, industrial, healthcare, education, and 
                  residential projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a team of 50+ skilled engineers and state-of-the-art design tools, 
                  we deliver comprehensive MEP solutions that are efficient, sustainable, 
                  and cost-effective.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">2009</div>
                  <div className="text-primary-foreground/80">Year Established</div>
                </div>
                <div className="bg-secondary text-secondary-foreground p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-secondary-foreground/80">Projects Completed</div>
                </div>
                <div className="bg-accent text-accent-foreground p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-accent-foreground/80">Team Members</div>
                </div>
                <div className="bg-highlight text-highlight-foreground p-6 rounded-xl">
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-highlight-foreground/80">Cities Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative MEP engineering consultancy in India, 
                  setting benchmarks for excellence in sustainable building solutions and 
                  contributing to a greener future for generations to come.
                </p>
              </div>
              <div className="bg-card p-8 md:p-10 rounded-xl shadow-sm">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional MEP engineering solutions that exceed client expectations, 
                  embrace cutting-edge technologies, and promote sustainable practices while 
                  nurturing talent and fostering a culture of continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="container-max">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our Core Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-xl shadow-sm card-hover">
                  <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-muted">
          <div className="container-max">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our experienced leadership team brings together decades of expertise in MEP engineering.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm card-hover">
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Ready to partner with a team that shares your vision for excellence?
            </p>
            <Link to="/contact-us">
              <Button variant="hero" size="xl">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
