import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Happy Clients', value: '10,000+' },
    { label: 'Brands Served', value: '50+' },
    { label: 'Countries Exported', value: '15+' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'We uphold the highest standards in every garment we manufacture, ensuring flawless stitching and premium materials.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: 'Backed by decades of reliability, we foster long-term relationships through consistent, transparent production services.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Blending traditional tailoring techniques with modern machinery, we create apparel that meets today’s global demands.'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'From design to delivery, we go the extra mile to meet timelines and exceed client expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-deep text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-luxury-gold">Journey</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 25 years, Elite Garments has been India’s trusted name in apparel manufacturing — known for premium quality, ethical practices, and timely delivery.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-deep mb-6">Stitching Legacy Since 1999</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded by textile visionary Rajesh Gupta, Elite Garments started as a small tailoring unit in Mumbai. With a passion for fabric and fit, we’ve grown into a leading manufacturer serving global fashion and corporate brands.
                </p>
                <p>
                  Our success is rooted in three values: quality, reliability, and service. Every fabric roll is inspected, every stitch is scrutinized — we deliver nothing less than excellence.
                </p>
                <p>
                  From startups to legacy brands, we produce customized apparel solutions — uniforms, casual wear, sportswear, and more — tailored to your exact needs.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Our factory" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-deep mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe great clothing begins with strong values — our dedication shapes every fabric we cut and every client we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <value.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-deep mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From designers to production leads, our team brings passion and precision to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Gupta', role: 'Founder & Head of Production', image: '/placeholder.svg' },
              { name: 'Priya Sharma', role: 'Client Relations Manager', image: '/placeholder.svg' },
              { name: 'Amit Patel', role: 'Lead Pattern Maker', image: '/placeholder.svg' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-navy-deep">{member.name}</h3>
                <p className="text-luxury-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
