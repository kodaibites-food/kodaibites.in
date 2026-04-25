import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Star, Users, CalendarHeart } from 'lucide-react';
import DishCard from '../components/DishCard';
import { menuItems } from '../data/menuData';

const Home = () => {
  const featuredDishes = menuItems.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop"
            alt="Best Catering Services in Kodaikanal - KodaiBites Catering"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand/20 border border-brand/30 text-brand-light font-medium tracking-wider mb-6 backdrop-blur-sm">
              PREMIUM CATERING EXPERIENCES
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
              Culinary <span className="text-brand">Excellence</span> <br />for Your Event
            </h1>
            <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              We craft unforgettable dining experiences with locally sourced ingredients, stunning presentations, and flawless service for weddings, corporate events, and private parties all over Tamil Nadu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-brand/30 flex items-center justify-center gap-2"
              >
                Book Your Event <ArrowRight size={20} />
              </Link>
              <Link
                to="/menu"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                View Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Signature <span className="text-brand">Dishes</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Discover a taste of our most beloved culinary creations, crafted with passion and premium ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map(dish => (
              <DishCard key={dish.id} item={dish} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center gap-2 text-brand font-bold text-lg hover:text-brand-dark transition-colors group">
              Explore Full Menu
              <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold font-display mb-4">Services Tailored to <br /><span className="text-brand">Your Needs</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  From intimate gatherings to grand celebrations, we provide bespoke catering solutions that exceed expectations and leave a lasting impression on your guests.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="bg-brand/10 p-4 rounded-xl text-brand h-fit">
                    <CalendarHeart size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display mb-2">Wedding Catering</h3>
                    <p className="text-slate-600">Elegant menus designed to make your special day truly unforgettable.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="bg-brand/10 p-4 rounded-xl text-brand h-fit">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display mb-2">Corporate Events</h3>
                    <p className="text-slate-600">Professional catering that impresses clients and energizes your team.</p>
                  </div>
                </div>
              </div>

              <Link to="/services" className="inline-block bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-colors">
                View All Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" alt="Elegant Wedding Catering Setup by KodaiBites" className="rounded-3xl w-full h-64 object-cover mt-12 shadow-2xl" loading="lazy" decoding="async" />
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" alt="Professional Corporate Event Catering Setup" className="rounded-3xl w-full h-64 object-cover shadow-2xl" loading="lazy" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-4">Frequently Asked <span className="text-brand">Questions</span></h2>
            <p className="text-slate-600 text-lg">
              Find quick answers to common questions about our catering services across Tamil Nadu.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { q: "What areas do you provide catering services to?", a: "We proudly serve all over Tamil Nadu, from Kodaikanal and Dindigul to Chennai and Madurai. No matter the city, we bring our culinary excellence to you." },
              { q: "Do you offer vegetarian and vegan catering menus?", a: "Absolutely! We specialize in authentic South Indian vegetarian cuisine and offer fully customizable vegan, gluten-free, and allergy-friendly menus to suit your guests' dietary needs." },
              { q: "How far in advance should I book catering for my wedding?", a: "For weddings and large corporate events, we recommend booking at least 1 to 2 months in advance to secure your date and allow ample time for menu tasting and planning." },
              { q: "Do you provide waitstaff and table setups?", a: "Yes, our comprehensive catering packages include professional waitstaff, elegant buffet or table setups, chafing dishes, and full cleanup services to ensure a seamless experience." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/food.png')]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ChefHat size={64} className="mx-auto text-white mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Ready to Plan Your Perfect Event?</h2>
          <p className="text-brand-light text-xl mb-10">
            Contact us today to discuss your vision, and let our culinary team bring it to life.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand hover:bg-slate-50 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
