import React from 'react';
import { Lock } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Last updated: April 25, 2026</p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-12 max-w-none transition-colors duration-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            We collect information that you provide directly to us, such as when you request a quote, contact us, or sign a contract. This may include your name, email address, phone number, and event details.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            We use the information we collect to provide, maintain, and improve our catering services, communicate with you, and process your requests and transactions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Information Sharing</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our business or providing services to you.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Cookies</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent.
          </p>

          <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Contact Us</h3>
            <p className="text-slate-600 dark:text-slate-300">
              If you have any questions about our Privacy Policy, please contact us at <strong>kodaibites@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
