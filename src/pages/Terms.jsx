import React from 'react';
import { Shield } from 'lucide-react';

const Terms = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand mb-4">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-slate-600">Last updated: April 25, 2026</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-6">
            By accessing and using the KodaiBites Catering services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Provided</h2>
          <p className="text-slate-600 mb-6">
            KodaiBites provides professional catering services for various events. The specifics of the services, including menu, pricing, and event details, will be agreed upon in a separate contract or invoice.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Booking and Cancellation</h2>
          <p className="text-slate-600 mb-6">
            A deposit is required to secure your booking. Cancellations made within a certain timeframe may be subject to a cancellation fee as outlined in your specific contract.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Liability</h2>
          <p className="text-slate-600 mb-6">
            While we take every precaution to ensure food safety and quality, KodaiBites is not liable for any allergic reactions or issues arising from undisclosed dietary restrictions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Modifications</h2>
          <p className="text-slate-600 mb-6">
            We reserve the right to modify these terms at any time. Your continued use of our services constitutes agreement to such modifications.
          </p>
          
          <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Information</h3>
            <p className="text-slate-600">
              If you have any questions regarding these Terms of Service, please contact us at <strong>kodaibites@gmail.com</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
