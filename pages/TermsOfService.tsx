
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
        <p className="text-slate-500">Last Updated: October 2024</p>
      </div>
      
      <div className="space-y-10 text-slate-600 leading-relaxed text-lg">
        <p>
          Welcome to Fundrivaq. These Terms of Service (“Terms”) govern your access to and use of the Fundrivaq website, platform, and services (collectively, the “Services”). By accessing or using Fundrivaq, you agree to be bound by these Terms. If you do not agree, you may not use the Services.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. About Fundrivaq</h2>
          <p>Fundrivaq is a global donation and fundraising platform that allows individuals, creators, nonprofits, startups, and communities to raise funds and receive donations through appreciation-based support and public fundraising campaigns.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Eligibility</h2>
          <p>You must be at least 18 years old to use Fundrivaq. By using the platform, you confirm that you have the legal capacity to enter into these Terms and that all information you provide is accurate and truthful.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">4. Donations & Fundraising</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-800 text-xl mb-2">4.1 Donations</h3>
              <p>Donations made through Fundrivaq are voluntary and generally non-refundable unless required by law. Donors are responsible for reviewing campaign details before donating.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-xl mb-2">4.2 Fundraising Campaigns</h3>
              <p>If you create a campaign, you agree that all information provided is truthful, funds will be used for the stated purpose, and you comply with all applicable laws.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">7. Prohibited Activities</h2>
          <p>You agree not to use Fundrivaq for illegal, fraudulent, or deceptive purposes, misrepresent campaigns, impersonate others, or upload harmful content. Violation may result in account termination.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">15. Contact</h2>
          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
            <p className="text-emerald-700">If you have questions about these Terms, please contact us at legal@fundrivaq.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
