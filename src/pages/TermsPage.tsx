import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
            {/* Navbar */}
            <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link to="/" className="flex items-center gap-3">
                            <img src="/logo.png" alt="GravityGaming Logo" className="w-10 h-10 object-contain" />
                            <span className="text-2xl font-black tracking-tight text-gray-900">
                                GravityGaming<span className="text-indigo-600">.Live</span>
                            </span>
                        </Link>
                        <div className="flex items-center gap-4">
                            <a href="/#investors" className="text-gray-600 hover:text-indigo-600 font-bold transition-colors hidden sm:block">
                                Investors
                            </a>
                            <div className="hidden md:flex items-center gap-1 border-l border-gray-100 pl-4">
                                <Link to="/terms" className="px-3 py-1.5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-lg">Terms</Link>
                                <Link to="/privacy" className="px-3 py-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">Privacy</Link>
                                <Link to="/cookies" className="px-3 py-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">Cookies</Link>
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-700 flex items-center shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-2 animate-pulse"></span>
                                Launching Soon
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <p className="text-indigo-200 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms of Service</h1>
                    <p className="text-indigo-200 text-lg font-medium">Last updated: October 19, 2026</p>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                            <p className="text-indigo-800 font-medium text-sm leading-relaxed">
                                Please read these Terms of Service carefully before using GravityGaming.Live. By accessing or using our platform, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the service.
                            </p>
                        </div>

                        <Section title="1. Acceptance of Terms">
                            <p>By creating an account or otherwise accessing GravityGaming.Live (the "Platform"), you confirm that you are at least 13 years of age, have read and understood these Terms of Service, and agree to be bound by them along with our Privacy Policy and Cookie Policy.</p>
                            <p>We reserve the right to update or modify these Terms at any time. We will notify registered users of significant changes via email or an in-platform notification. Continued use of the Platform after changes constitutes your acceptance of the revised Terms.</p>
                        </Section>

                        <Section title="2. Description of Service">
                            <p>GravityGaming.Live is a professional esports career platform designed to connect competitive gaming talent with Tier 1 and Tier 2 esports organizations. Our core services include:</p>
                            <ul>
                                <li><strong>Verified Player Profiles:</strong> Authenticated tournament histories and rank integrations.</li>
                                <li><strong>Job Board:</strong> Listings from esports organizations seeking professional players, coaches, and analysts.</li>
                                <li><strong>Live Ecosystem:</strong> Real-time VCT bracket tracking, roster news, and game updates.</li>
                                <li><strong>Waitlist & Early Access:</strong> Registration to be notified upon our public launch.</li>
                            </ul>
                            <p>The Platform is currently in pre-launch. Features may change, be added, or be removed prior to and after launch.</p>
                        </Section>

                        <Section title="3. User Accounts & Registration">
                            <p>To access certain features of the Platform, you may be required to create an account. You agree to:</p>
                            <ul>
                                <li>Provide accurate, current, and complete information during registration.</li>
                                <li>Maintain the security of your account credentials and not share your password.</li>
                                <li>Promptly update your account information if it changes.</li>
                                <li>Notify us immediately at <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-indigo-600 hover:underline font-semibold">gaurav.upadhyay@gravitygaming.live</a> if you suspect unauthorized use of your account.</li>
                            </ul>
                            <p>We reserve the right to suspend or terminate any account that violates these Terms or that we reasonably believe is being used fraudulently or abusively.</p>
                        </Section>

                        <Section title="4. User Conduct">
                            <p>You agree not to use the Platform to:</p>
                            <ul>
                                <li>Post false, misleading, or fraudulent profile information or credentials.</li>
                                <li>Harass, abuse, threaten, or discriminate against other users or organizations.</li>
                                <li>Scrape, crawl, or systematically extract data from the Platform without prior written consent.</li>
                                <li>Circumvent, disable, or interfere with security-related features of the Platform.</li>
                                <li>Upload or transmit viruses, malware, or any other malicious code.</li>
                                <li>Use the Platform for any illegal purpose or in violation of any applicable local, national, or international law.</li>
                                <li>Impersonate any person or entity, including any professional esports player or organization.</li>
                            </ul>
                        </Section>

                        <Section title="5. Intellectual Property">
                            <p>The Platform and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of GravityGaming.Live and its licensors. Our trademarks, logos, and trade dress may not be used in connection with any product or service without prior written consent.</p>
                            <p>By submitting content (including profile data, media, and text) to the Platform, you grant GravityGaming.Live a worldwide, non-exclusive, royalty-free license to use, reproduce, and display that content in connection with providing and promoting the service.</p>
                        </Section>

                        <Section title="6. Third-Party Services">
                            <p>Our Platform may integrate with or link to third-party services, including game APIs (e.g., Riot Games), social platforms, and analytics tools. Your use of such third-party services is governed by their respective terms of service and privacy policies. GravityGaming.Live is not responsible for the content or practices of any third-party services.</p>
                        </Section>

                        <Section title="7. Disclaimer of Warranties">
                            <p>The Platform is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                            <p>We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee that using our job board will result in employment or roster placement.</p>
                        </Section>

                        <Section title="8. Limitation of Liability">
                            <p>To the fullest extent permitted by applicable law, GravityGaming.Live, its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the Platform.</p>
                        </Section>

                        <Section title="9. Governing Law">
                            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts located in India.</p>
                        </Section>

                        <Section title="10. Contact Us">
                            <p>If you have any questions about these Terms of Service, please contact us:</p>
                            <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <p className="font-bold text-gray-900">GravityGaming.Live</p>
                                <p className="text-gray-600 mt-1">Email: <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-indigo-600 hover:underline font-semibold">gaurav.upadhyay@gravitygaming.live</a></p>
                            </div>
                        </Section>

                    </div>
                </div>
            </main>

            <PolicyFooter />
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">{title}</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-gray-800">
                {children}
            </div>
        </section>
    );
}

function PolicyFooter() {
    return (
        <footer className="bg-white border-t border-gray-200 py-8 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
                        <Gamepad2 className="w-4 h-4" />
                    </div>
                    <span className="font-black tracking-tight text-gray-900 text-sm">
                        GravityGaming<span className="text-indigo-600">.Live</span>
                    </span>
                </div>
                <p className="text-gray-400 text-sm font-medium">
                    &copy; {new Date().getFullYear()} GravityGaming.Live. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <Link to="/terms" className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">Terms</Link>
                    <Link to="/privacy" className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">Privacy</Link>
                    <Link to="/cookies" className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>
    );
}
