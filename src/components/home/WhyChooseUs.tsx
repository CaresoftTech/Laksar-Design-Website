import { CheckCircle, Target, Lightbulb, Shield, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Accurate and detailed MEP designs that meet the highest industry standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technologies and methodologies for modern building systems.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring flawless project delivery.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced engineers with diverse expertise in MEP disciplines.',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Award-winning consultancy trusted by leading developers and contractors.',
  },
  {
    icon: CheckCircle,
    title: 'Timely Delivery',
    description: 'Commitment to meeting project deadlines without compromising quality.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            The Laksar Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with us for engineering excellence that transforms your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 md:p-8 rounded-xl shadow-sm card-hover"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
