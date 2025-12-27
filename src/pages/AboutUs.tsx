import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, Heart, Zap } from 'lucide-react';
import visionMissionImg from '@/assets/vission.png';

const teamMembers = [
  {
    name: 'S. Arul Murugan ',
    role: 'Founder & Designated Partner',
    description: 'Over 25 years of experience in MEP engineering and project management.',
  },
  {
    name: 'R. Vidhya ',
    role: 'Technical Director',
    description: 'Expert in sustainable building systems and green certifications.',
  },
  {
    name: 'M.  Senthil Murugesan',
    role: 'Head of Electrical Design',
    description: 'Specializes in high-rise buildings and data center infrastructure.',
  },
  {
    name: 'R. Karthikeyan ',
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
        <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="container-max px-4 relative flex justify-center text-center">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block mx-auto px-4 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4 animate-fade-in">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up text-center">
                Building Trust Through <br /> Engineering Excellence
              </h1>
              <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200 text-center">
                Laksar Design Consultancy LLP delivers innovative, reliable, and
                sustainable MEP engineering solutions across India.
              </p>
            </div>
          </div>
        </section>


        <section className="section-padding bg-background">
          <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-[#214e75] font-bold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6">
                Established in 2021 in Chennai, India, LAKSAR DESIGN CONSULTANCY LLP
                is a multi-disciplinary engineering consultancy specializing in
                Mechanical, Electrical, and Plumbing (MEP) services.
              </p>
              <p className="text-muted-foreground mb-6">
                Our expert engineers deliver innovative, functional, and efficient
                designs while maintaining the highest standards of quality and
                sustainability.
              </p>
              <p className="text-muted-foreground">
                We adapt to evolving industry needs using advanced tools and proven
                engineering practices to ensure cost-effective and timely delivery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#275781] text-primary-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold">2021</div>
                <div className="text-sm opacity-80">Year Established</div>
              </div>
              <div className="bg-[#50a5d3] text-secondary-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
              <div className="bg-[#9ec437] text-accent-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm opacity-80">Team Members</div>
              </div>
              <div className="bg-[#50a93e] text-[#50a93e]-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm opacity-80">Cities Served</div>
              </div>
            </div>
          </div>
        </section>


        {/* Vision & Mission – Visual Modern Panel Design */}
        <section className="py-20 bg-[#fbfcfc]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-[#214e75]  font-display font-bold">
                Vision & Mission
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-500">
                Clear direction powered by innovation, ethics, and engineering excellence.
              </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


              <div className="relative flex justify-center">
                <div className="absolute -top-8 -left-8 w-72 h-72  rounded-full blur-2xl" />

                <div className="relative bg-[#fbfcfc] ">
                  <img
                    src={visionMissionImg}
                    alt="Vision and Mission"
                    className="w-[240px] sm:w-[280px] lg:w-[320px] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right – Content */}
              <div className='mr-20'>

                <div className="mb-8">
                  <span className="text-m font-semibold text-primary uppercase tracking-wide">
                    Vision & Mission
                  </span>
                  <p className="mt-3 text-m text-black">
                    To deliver future-ready MEP solutions that combine innovation,
                    sustainability, and professional integrity.
                  </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Professional approach",
                    "Ethical Business",
                    "Mutual Trust & Honesty",
                    "Ownership and Accountability",
                    "Excellence in Design,",
                    "Engineering Innovations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                group p-5 rounded-2xl
                border border-gray-200
                bg-gray-50
                transition-all duration-300
                hover:bg-white hover:shadow-md hover:shadow-[#275781]/90
              "
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 w-2.5 h-2.5 rounded-full bg-cyan-500 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>





        <section className="section-padding bg-muted overflow-hidden">
          <div className="container-max space-y-16">
            <div>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 bg-cyan-500/10 text-cyan-500 text-sm font-semibold rounded-full mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl text-[#214e75]  font-display font-bold">
                  Our Strengths
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'Customer-friendly design approach',
                  'Mix of experienced and emerging team',
                  'Well-coordinated teamwork',
                  'Simple, flexible and reliable team',
                  'Quality & time-bound deliverables',
                  'Systematic work approach',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-card p-6 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#275781]">Our Leadership Team</h2>
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-[#275781]/20 overflow-hidden hover:border-[#275781]/40 transition-all duration-300 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                  <div className="flex justify-center">
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-[#53c4d8] mb-2">S. Arul Murugan </h3>
                    <p className="text-xl text-foreground mb-2">Founder & Designated Partner</p>
                    <p className="text-foreground  text-sm leading-relaxed mb-4">
                      With over two decades of progressive experience in the MEP consultancy domain, I founded this organization in 2021, where I lead the MEP design projects with a focus on innovation, sustainability, and client-centric solutions. Prior to this, I served as Director at a MEP consultancy firm for three years. My longest and most formative tenure (2005-2018) was with the esteemed firm M/s. C. R. Narayana Rao (Consultants) Pvt Ltd, where I made significant contributions to landmark infrastructure projects and multidisciplinary collaboration. My professional journey began in 2004 as a Design Engineer at M/s. Air Treatment Engineering Pvt Ltd, where I established a foundation in HVAC systems. My career reflects a deep commitment to engineering excellence and delivering value-driven solutions across the built environment.
                    </p>
                    <p className="text-foreground leading-relaxed mb-4 text-sm">
                      Member of Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE) since 2008.
                      Member of Fire & Security Association of India (FSAI) since 2016.
                      Member of Indian Plumbing Association (IPA) since 2020.
                    </p>
                    <p className="text-foreground italic text-sm">
                      &quot;Engineering excellence comes from experience, integrity, and sustainable value.&quot;  <br />   – S. Arul Murugan
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-[#53c4d8]/20 overflow-hidden hover:border-[#53c4d8]/40 transition-all duration-300 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
                  <div className="flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-3xl font-bold text-[#53c4d8] mb-2">R. Vidhya </h3>
                    <p className="text-xl text-foreground mb-2">Designated Partner</p>
                    <p className="text-foreground text-sm leading-relaxed mb-4">
                      R. Vidhya plays a key role in overseeing the administrative and human resources
                      functions at Laksar Design Consultancy LLP. She ensures smooth day-to-day
                      operations, effective workforce coordination, and structured internal processes
                      that support the organization’s engineering and design teams.
                    </p>

                    <p className="text-foreground leading-relaxed text-sm mb-4">
                      With a strong focus on organizational efficiency, compliance, and people
                      management, she contributes significantly to maintaining a professional,
                      well-organized, and productive work environment.
                    </p>

                    <p className="text-foreground italic text-sm">
                      “Strong administration builds strong teams and sustainable organizations.”
                    </p>
                  </div>
                  <div className="flex justify-center order-1 md:order-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="section-padding bg-gradient-to-b from-muted to-background">
          <div className="container-max">

            <div className="text-center mb-14">
              <span className="inline-block px-5 py-2 bg-cyan-500/10 text-cyan-500 text-sm font-semibold rounded-full mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#275781] mb-3">
                Meet the Minds Behind Us
              </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative group bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ">

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#53c4d8]/30 to-[#50a93e]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Avatar */}
                  <div className="relative z-10 flex justify-center -mt-12 mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#53c4d8] to-[#275781] flex items-center justify-center shadow-lg">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-lg font-semibold text-[#275781]">
                      {member.name}
                    </h3>

                    <p className="text-sm font-medium text-[#53c4d8] mb-3">
                      {member.role}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
