import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+', icon: <Clock className="text-brand mb-2" size={32} /> },
    { label: 'Events Catered', value: '2,500+', icon: <Award className="text-brand mb-2" size={32} /> },
    { label: 'Happy Clients', value: '10k+', icon: <ThumbsUp className="text-brand mb-2" size={32} /> },
    { label: 'Expert Staff', value: '50+', icon: <Users className="text-brand mb-2" size={32} /> },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
              Crafting Culinary <br /><span className="text-brand">Masterpieces</span> Since 2016
            </h1>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                KodaiBites began with a simple philosophy: great food brings people together. Founded by Executive Chef Santhosh, what started as a small boutique operation has grown into the premier catering service all over Tamil Nadu.
              </p>
              <p>
                We believe that every event is unique, and its food should reflect that. Our team of passionate chefs, meticulous event planners, and dedicated service staff work seamlessly to transform your vision into a reality.
              </p>
              <p>
                We source only the freshest, seasonal ingredients from local farms and trusted purveyors, ensuring that every dish not only looks spectacular but tastes extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6"
              >
                <div className="flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">Meet Our <span className="text-brand">Leadership</span></h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            The passionate individuals who ensure every detail of your event is executed flawlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Santhosh", role: "Executive Chef & Founder", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop" },
            { name: "Pavithra", role: "Director of Events", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
            { name: "Santhosh", role: "Head Pastry Chef", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600&auto=format&fit=crop" }
          ].map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 flex items-center justify-center p-8 h-full transition-colors duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-brand font-medium mt-2">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
