import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuData';
import DishCard from '../components/DishCard';

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const types = ['All', 'veg', 'non-veg'];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = filter === 'All' || item.category === filter;
    const typeMatch = typeFilter === 'All' || item.type === typeFilter;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1495195134817-a165d42e2751?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold font-display mb-4">Our <span className="text-brand">Menu</span></h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our curated selection of exquisite dishes, crafted with the finest ingredients to delight your palate.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Type Filter */}
          <div className="flex gap-2 bg-slate-100 p-1 rounded-full">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  typeFilter === type 
                    ? type === 'veg' ? 'bg-emerald-500 text-white shadow-sm' 
                      : type === 'non-veg' ? 'bg-red-500 text-white shadow-sm'
                      : 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DishCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-display text-slate-500">No items found matching your filters.</h3>
            <button 
              onClick={() => { setFilter('All'); setTypeFilter('All'); }}
              className="mt-4 text-brand font-medium hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
