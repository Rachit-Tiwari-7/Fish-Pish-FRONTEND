'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, ExternalLink, AlertTriangle, CheckCircle, FlaskConical, Info, Globe, Lock, AlertCircle } from 'lucide-react';

const curatedLinks = [
    {
        id: '01',
        title: 'Safe: The Golden List',
        url: 'https://www.google.com',
        displayUrl: 'google.com',
        description: 'A verified global domain on our internal "Golden List". The extension should immediately show a green "Safe" badge with 100% confidence.',
        type: 'safe'
    },
    {
        id: '02',
        title: 'The "Lie" (Mismatch)',
        url: 'https://en.wikipedia.org/wiki/Phishing',
        displayUrl: 'paypal.com/login-verification',
        description: 'The display text claims to be PayPal, but the actual destination is Wikipedia. Our NLP engine detects this structural mismatch instantly.',
        type: 'danger'
    },
    {
        id: '03',
        title: 'Subdomain Spoofing',
        url: 'https://microsoft-security-verify.click',
        displayUrl: 'microsoft-security-verify.click',
        description: 'Uses a trusted brand name as a subdomain on a suspicious .click TLD. The AI flags the impersonation attempt and TLD reputation.',
        type: 'warning'
    },
    {
        id: '04',
        title: 'Social Engineering',
        url: 'http://emergency-account-fix.xyz',
        displayUrl: 'emergency-account-fix.xyz',
        description: 'Uses high-urgency language ("emergency", "fix") typical of phishing campaigns. The LLM analyzes the intent as malicious.',
        type: 'danger'
    },
    {
        id: '05',
        title: 'Risky File TLD',
        url: 'https://package-tracking.zip',
        displayUrl: 'package-tracking.zip',
        description: 'The .zip TLD is frequently abused to deliver malware disguised as documents. The extension warns about the dangerous file extension.',
        type: 'warning'
    },
    {
        id: '06',
        title: 'Safe: Trusted Platform',
        url: 'https://www.linkedin.com',
        displayUrl: 'linkedin.com',
        description: 'A verified professional network with a perfect reputation score. The extension confirms the domain and SSL certificates are legitimate.',
        type: 'safe'
    }
];

const rawLinks = [
    { url: 'https://github.com', type: 'safe' },
    { url: 'https://www.nytimes.com', type: 'safe' },
    { url: 'http://account-update-portal.net', type: 'unsafe' },
    { url: 'https://secure-login-steam.top', type: 'unsafe' }
];

export default function TestLabPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-500/30"
                    >
                        <FlaskConical size={18} />
                        <span>Interactive Lab</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Test the <span className="text-blue-400">Fish-Pish</span> AI
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                        Experience real-time phishing detection. Hover over the links below to see how our
                        extension analyzes threats using NLP, TLD reputation, and LLM intent analysis.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-emerald-500" /> Active Protection</span>
                        <span className="flex items-center gap-1.5"><Shield size={16} className="text-blue-500" /> AI Scanning</span>
                    </div>
                </div>
            </section>

            {/* Curated Lab Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/20">
                            <Info size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Curated threat Scenarios</h2>
                            <p className="text-slate-600">Understand the logic behind our detection engine.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                        {curatedLinks.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white border border-slate-200 p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Shield size={80} />
                                </div>

                                <div className="flex items-start gap-5 relative z-10">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm
                                        ${item.type === 'safe' ? 'bg-emerald-50 text-emerald-600' :
                                            item.type === 'danger' ? 'bg-red-50 text-red-600' :
                                                'bg-amber-50 text-amber-600'}`}>
                                        {item.id}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 group-hover:bg-slate-100/50 transition-colors">
                                            <a
                                                href={item.url}
                                                className="text-blue-600 underline font-medium break-all flex items-center gap-2"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                {item.id === '02' ? 'Login to your PayPal Account' : item.displayUrl}
                                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Try For Yourself Section */}
            <section className="py-20 px-6 bg-slate-900 text-white border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex p-3 bg-white/10 rounded-2xl mb-6">
                            <Globe size={32} className="text-blue-400" />
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Try for Yourself</h2>
                        <p className="text-slate-400">
                            A raw environment to test the extension's reflexes. Hover over these links without any context to see how the AI reacts.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {rawLinks.map((link, index) => (
                            <motion.div
                                key={link.url}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl flex items-center justify-between transition-all hover:translate-x-2"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg text-slate-400 group-hover:text-blue-400 transition-colors">
                                        <Lock size={18} />
                                    </div>
                                    <a
                                        href={link.url}
                                        className="text-slate-200 font-medium break-all group-hover:text-white transition-colors"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {link.url}
                                    </a>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                                    <span>Scan Pending</span>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-blue-400"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center">
                        <h4 className="text-xl font-bold mb-2 flex items-center justify-center gap-2 text-blue-400">
                            <AlertCircle size={20} />
                            Safety Reminder
                        </h4>
                        <p className="text-slate-400 text-sm max-w-lg mx-auto">
                            These links are provided for testing purposes only. The "unsafe" links are simulated phishing threats or real detected malicious URLs meant to showcase the extension's capability.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
