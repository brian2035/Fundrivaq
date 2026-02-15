
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">About Fundrivaq</h1>
        <p className="text-emerald-600 font-bold text-xl">Generosity without borders.</p>
      </div>
      
      <div className="prose prose-lg prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed text-lg">
        <p>
          Fundrivaq is a global donation and fundraising platform built to make giving simple, transparent, and accessible to everyone, everywhere. We believe that generosity should have no borders, and that anyone with a meaningful idea, cause, or passion should be able to receive support from a global community with ease and confidence.
        </p>
        <p>
          Our platform empowers individuals, creators, nonprofits, startups, and communities to raise funds and receive donations securely through modern tools designed for today’s digital world. From appreciation-based support through personal TipJar links to full-scale fundraising campaigns for causes that matter, Fundrivaq brings flexibility and trust into one unified experience.
        </p>
        <p>
          At Fundrivaq, trust and transparency are at the core of everything we build. We prioritize secure payments, clear fee structures, donor privacy, and campaign verification to ensure that every contribution reaches its intended impact. With support for multiple payment methods and currencies, we make it possible for generosity to flow seamlessly across countries and cultures.
        </p>
        <p>
          We are driven by the belief that technology can amplify kindness. By combining a modern, user-friendly design with powerful fundraising features, Fundrivaq exists to help people turn support into real-world impact whether that means helping a creator continue their work, supporting a community in need, or funding ideas that shape a better future.
        </p>
        <p className="font-medium text-slate-900 text-center bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
          Fundrivaq is more than a platform. It is a global space where support meets purpose, and where anyone can raise funds and support others securely, transparently, and without limits.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
