import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Building2, PartyPopper, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Wedding Catering",
      icon: <HeartHandshake size={40} />,
      description: "Make your special day perfect with our elegant wedding catering. We work closely with couples to design customized menus that reflect their taste and style.",
      features: ["Customized Menus", "Tasting Sessions", "Full Table Service", "Cake Cutting", "Bar Services"],
      image: "/images/service_wedding.png"
    },
    {
      id: 2,
      title: "Corporate Events",
      icon: <Building2 size={40} />,
      description: "Impress your clients and treat your team with our professional corporate catering. Perfect for meetings, conferences, galas, and office parties.",
      features: ["Breakfast & Lunch Boxes", "Buffet Setup", "VIP Dining", "Coffee Breaks", "Dietary Accommodations"],
      image: "/images/service_corporate_indian.png"
    },
    {
      id: 3,
      title: "Private Parties",
      icon: <PartyPopper size={40} />,
      description: "From intimate birthday dinners to grand anniversary celebrations, we bring the restaurant experience to your home or chosen venue.",
      features: ["Themed Menus", "Live Chef Stations", "Cocktail Hour", "Waitstaff", "Cleanup Services"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 py-16">
        <span className="text-brand font-bold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
        <h1 className="text-5xl font-bold font-display mb-6">Our Catering <span className="text-brand">Services</span></h1>
        <p className="text-lg text-slate-600">
          We provide comprehensive catering solutions tailored to your specific event needs, ensuring a flawless and memorable experience.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                  <div className="absolute inset-0 bg-slate-900/10 z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-brand shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold font-display text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-slate-900 hover:bg-brand text-white px-8 py-3 rounded-xl font-medium transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Banner */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-6">Need a custom service not listed here?</h3>
          <p className="text-slate-400 mb-8 text-lg">We are flexible and can accommodate special requests, dietary restrictions, and unique themes.</p>
          <Link to="/contact" className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg inline-block">
            Let's Discuss Your Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
