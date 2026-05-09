import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: 'Wedding',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New Catering Inquiry from ${formData.name}`,
          from_name: "KodaiBites Website",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', eventType: 'Wedding', guests: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hi KodaiBites, I'm interested in catering for a ${formData.eventType || 'event'}.`;
    window.open(`https://wa.me/9345478961?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold font-display mb-6 text-slate-900 dark:text-white">Let's Plan Your <span className="text-brand">Event</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Fill out the form below or reach out directly to discuss your catering needs. We're excited to work with you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-2xl font-bold font-display mb-8 text-white">Contact Info</h3>

              <div className="space-y-8 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="text-brand" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400">Serving All Over Tamil Nadu<br />India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <Phone className="text-brand" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400">+91 9345478961<br />Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                    <Mail className="text-brand" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400">kodaibites@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="mt-8 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold font-display mb-8 text-slate-900 dark:text-white">Send us an Inquiry</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name *</label>
                    <input
                      type="text" required name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address *</label>
                    <input
                      type="email" required name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors"
                      placeholder="Enter Your Mail"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number *</label>
                    <input
                      type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Event Date</label>
                    <input
                      type="date" name="date" value={formData.date} onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Event Type</label>
                    <select
                      name="eventType" value={formData.eventType} onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors"
                    >
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Private Dinner</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimated Guests</label>
                    <input
                      type="number" name="guests" value={formData.guests} onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors"
                      placeholder="e.g., 100"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Additional Details</label>
                  <textarea
                    rows="4" name="message" value={formData.message} onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand dark:focus:border-brand-light transition-colors resize-none"
                    placeholder="Tell us about your vision, dietary requirements, or any special requests..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl mb-6">
                    Thank you for your inquiry! We will get back to you shortly.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl mb-6">
                    Oops! Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand/20 ${isSubmitting ? 'bg-slate-400 text-slate-100 cursor-not-allowed' : 'bg-brand hover:bg-brand-dark text-white transform hover:-translate-y-1'
                    }`}
                >
                  <Send size={20} /> {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
