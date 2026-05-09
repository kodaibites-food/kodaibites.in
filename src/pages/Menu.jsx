import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { menuItems } from '../data/menuData';
import DishCard from '../components/DishCard';

const Menu = () => {
  const [filter, setFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const types = ['All', 'veg', 'non-veg'];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = filter === 'All' || item.category === filter;
    const typeMatch = typeFilter === 'All' || item.type === typeFilter;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1495195134817-a165d42e2751?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold font-display mb-4 text-white">Our <span className="text-brand">Menu</span></h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our curated selection of exquisite dishes, crafted with the finest ingredients to delight your palate.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden transition-colors duration-300">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center p-4">
            <span className="font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Filter size={18} className="text-brand" />
              Filters
            </span>
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              {isMobileFiltersOpen ? 'Close' : 'Expand'}
            </button>
          </div>

          {/* Filter Options */}
          <div className={`${isMobileFiltersOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-between items-center gap-6 p-4 pt-0 md:pt-4 border-t border-slate-100 dark:border-slate-700 md:border-none`}>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-slate-900 dark:bg-brand text-white shadow-md' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-700 p-1 rounded-full w-full md:w-auto justify-center transition-colors duration-300">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type)}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-full text-sm font-medium capitalize transition-all text-center ${
                    typeFilter === type 
                      ? type === 'veg' ? 'bg-emerald-500 text-white shadow-sm' 
                        : type === 'non-veg' ? 'bg-red-500 text-white shadow-sm'
                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
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
            <h3 className="text-2xl font-display text-slate-500 dark:text-slate-400">No items found matching your filters.</h3>
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
