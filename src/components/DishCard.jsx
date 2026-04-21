import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Drumstick } from 'lucide-react';

const DishCard = ({ item }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {item.type === 'veg' ? (
            <span className="bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Leaf size={12} /> Veg
            </span>
          ) : (
            <span className="bg-red-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Drumstick size={12} /> Non-Veg
            </span>
          )}
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="text-xl font-bold font-display text-slate-800 group-hover:text-brand transition-colors">
            {item.name}
          </h3>
        </div>
        <p className="text-slate-600 line-clamp-2 flex-grow">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default DishCard;
