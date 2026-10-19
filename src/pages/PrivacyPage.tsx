import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export default function PrivacyPage() {
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
                                <Link to="/terms" className="px-3 py-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">Terms</Link>
                                <Link to="/privacy" className="px-3 py-1.5 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-lg">Privacy</Link>
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
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <p className="text-emerald-200 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
                    <p className="text-emerald-200 text-lg font-medium">Last updated: October 19, 2026</p>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                            <p className="text-emerald-800 font-medium text-sm leading-relaxed">
                                At GravityGaming.Live, your privacy is important to us. This Privacy Policy explains what personal data we collect, how we use it, and the choices you have regarding your information. We are committed to protecting your personal data in accordance with applicable privacy laws.
                            </p>
                        </div>

                        <Section title="1. Who We Are" accent="emerald">
                            <p>GravityGaming.Live ("we", "us", or "our") is an esports career platform connecting professional gaming talent with esports organizations. Our contact email for privacy matters is <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-emerald-600 hover:underline font-semibold">gaurav.upadhyay@gravitygaming.live</a>.</p>
                        </Section>

                        <Section title="2. Information We Collect" accent="emerald">
                            <p>We collect the following categories of personal data:</p>
                            <SubHeading>Information You Provide Directly</SubHeading>
                            <ul>
                                <li><strong>Account Information:</strong> Name, email address, username, and password when you register.</li>
                                <li><strong>Profile Information:</strong> Gamer tag, rank, game history, preferred roles, team affiliations, bio, and profile photo.</li>
                                <li><strong>Communications:</strong> Messages you send us, support requests, and feedback.</li>
                                <li><strong>Waitlist Sign-up:</strong> Email address submitted for early access.</li>
                            </ul>
                            <SubHeading>Information Collected Automatically</SubHeading>
                            <ul>
                                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the Platform, and navigation paths.</li>
                                <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                                <li><strong>Cookies & Tracking:</strong> See our Cookie Policy for full details.</li>
                            </ul>
                            <SubHeading>Information from Third Parties</SubHeading>
                            <ul>
                                <li><strong>Game APIs:</strong> With your consent, we may retrieve rank, match history, and achievement data from game APIs (e.g., Riot Games API for Valorant).</li>
                                <li><strong>Social Login:</strong> If you register using a social account (e.g., Google), we receive basic profile information from that provider.</li>
                            </ul>
                        </Section>

                        <Section title="3. How We Use Your Information" accent="emerald">
                            <p>We use your personal data for the following purposes:</p>
                            <ul>
                                <li><strong>To Provide the Service:</strong> Create and manage your account, display your profile, and facilitate connections with esports organizations.</li>
                                <li><strong>To Personalise Your Experience:</strong> Show relevant job listings, teams, and content based on your game, rank, and role.</li>
                                <li><strong>To Communicate With You:</strong> Send launch updates, account notifications, newsletters (with your consent), and respond to support queries.</li>
                                <li><strong>To Improve the Platform:</strong> Analyse usage patterns, fix bugs, and develop new features.</li>
                                <li><strong>To Ensure Safety & Security:</strong> Detect fraud, prevent abuse, and enforce our Terms of Service.</li>
                                <li><strong>To Comply with Legal Obligations:</strong> Respond to lawful requests from courts or regulatory bodies.</li>
                            </ul>
                        </Section>

                        <Section title="4. Legal Basis for Processing" accent="emerald">
                            <p>We process your personal data based on the following legal grounds:</p>
                            <ul>
                                <li><strong>Contractual Necessity:</strong> Processing required to fulfil our agreement with you (e.g., account creation, providing the service).</li>
                                <li><strong>Legitimate Interests:</strong> Improving our Platform, security monitoring, and preventing fraud.</li>
                                <li><strong>Consent:</strong> Where you have given explicit consent, such as for marketing emails or game API integration.</li>
                                <li><strong>Legal Obligation:</strong> Where we are required to process data to comply with applicable laws.</li>
                            </ul>
                        </Section>

                        <Section title="5. Sharing of Your Information" accent="emerald">
                            <p>We do not sell your personal data. We may share your information with:</p>
                            <ul>
                                <li><strong>Esports Organizations:</strong> Your public profile information is visible to verified organizations browsing the Platform's talent pool.</li>
                                <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us with hosting, analytics, email delivery, and customer support, under strict data processing agreements.</li>
                                <li><strong>Game API Providers:</strong> We share necessary data to authenticate and retrieve your in-game data (only with your permission).</li>
                                <li><strong>Legal Authorities:</strong> Where required by law, court order, or to protect the rights and safety of GravityGaming.Live and its users.</li>
                            </ul>
                        </Section>

                        <Section title="6. Data Retention" accent="emerald">
                            <p>We retain your personal data for as long as your account is active or as necessary to provide the service. If you delete your account, we will delete or anonymise your personal data within 30 days, except where we are required to retain it for legal or security purposes.</p>
                            <p>Waitlist email addresses are retained until our public launch, or until you unsubscribe, whichever comes first.</p>
                        </Section>

                        <Section title="7. Your Rights" accent="emerald">
                            <p>Depending on your location, you may have the following rights over your personal data:</p>
                            <ul>
                                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten").</li>
                                <li><strong>Restriction:</strong> Request that we restrict the processing of your data in certain circumstances.</li>
                                <li><strong>Portability:</strong> Receive a copy of your data in a structured, machine-readable format.</li>
                                <li><strong>Objection:</strong> Object to our processing of your data where it is based on legitimate interests.</li>
                                <li><strong>Withdraw Consent:</strong> Where processing is based on consent, withdraw it at any time.</li>
                            </ul>
                            <p>To exercise any of these rights, contact us at <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-emerald-600 hover:underline font-semibold">gaurav.upadhyay@gravitygaming.live</a>. We will respond within 30 days.</p>
                        </Section>

                        <Section title="8. Security" accent="emerald">
                            <p>We implement industry-standard security measures to protect your personal data, including encryption in transit (TLS), hashed password storage, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                        </Section>

                        <Section title="9. Children's Privacy" accent="emerald">
                            <p>GravityGaming.Live is not intended for children under the age of 13. We do not knowingly collect personal data from children. If you believe a child has provided us with their data, please contact us immediately and we will delete that information promptly.</p>
                        </Section>

                        <Section title="10. Changes to This Policy" accent="emerald">
                            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on the Platform or by email. The "Last updated" date at the top of this page reflects when the policy was last revised.</p>
                        </Section>

                        <Section title="11. Contact Us" accent="emerald">
                            <p>For any privacy-related questions or to exercise your rights, please reach out to us:</p>
                            <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <p className="font-bold text-gray-900">GravityGaming.Live — Privacy Team</p>
                                <p className="text-gray-600 mt-1">Email: <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-emerald-600 hover:underline font-semibold">gaurav.upadhyay@gravitygaming.live</a></p>
                            </div>
                        </Section>

                    </div>
                </div>
            </main>

            <PolicyFooter />
        </div>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <p className="font-bold text-gray-800 mt-4 mb-1">{children}</p>;
}

function Section({ title, children }: { title: string; children: React.ReactNode; accent?: string }) {
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
