import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export default function CookiesPage() {
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
                                <Link to="/privacy" className="px-3 py-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">Privacy</Link>
                                <Link to="/cookies" className="px-3 py-1.5 text-sm font-semibold text-amber-600 bg-amber-50 rounded-lg">Cookies</Link>
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
            <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <p className="text-amber-100 font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Cookie Policy</h1>
                    <p className="text-amber-100 text-lg font-medium">Last updated: October 19, 2026</p>
                </div>
            </div>

            {/* Content */}
            <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

                        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                            <p className="text-amber-800 font-medium text-sm leading-relaxed">
                                This Cookie Policy explains what cookies are, how GravityGaming.Live uses them, and the choices you have regarding their use. By using our Platform, you consent to our use of cookies as described in this policy.
                            </p>
                        </div>

                        <Section title="1. What Are Cookies?">
                            <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work properly, improve performance, and provide a better user experience. Cookies allow websites to remember your preferences and understand how you interact with their pages.</p>
                            <p>In addition to cookies, we may use similar tracking technologies such as web beacons, pixels, and local storage. For simplicity, we refer to all of these as "cookies" throughout this policy.</p>
                        </Section>

                        <Section title="2. Types of Cookies We Use">

                            <CookieCard
                                icon="🔒"
                                type="Strictly Necessary Cookies"
                                description="These cookies are essential for the Platform to function and cannot be switched off in our systems. They are usually set only in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms."
                                examples={[
                                    { name: 'session_id', purpose: 'Maintains your login session across pages', duration: 'Session' },
                                    { name: 'csrf_token', purpose: 'Protects against cross-site request forgery attacks', duration: 'Session' },
                                    { name: 'cookie_consent', purpose: 'Stores your cookie preferences', duration: '1 year' },
                                ]}
                                canDisable={false}
                            />

                            <CookieCard
                                icon="📊"
                                type="Analytics & Performance Cookies"
                                description="These cookies help us understand how visitors interact with the Platform by collecting and reporting information anonymously. They allow us to identify which pages are most popular, track errors, and improve overall performance."
                                examples={[
                                    { name: '_ga', purpose: 'Google Analytics – distinguishes unique users', duration: '2 years' },
                                    { name: '_gid', purpose: 'Google Analytics – stores and updates a unique value', duration: '24 hours' },
                                    { name: 'platform_perf', purpose: 'Tracks page load times and feature performance', duration: '30 days' },
                                ]}
                                canDisable={true}
                            />

                            <CookieCard
                                icon="⚙️"
                                type="Functional Cookies"
                                description="These cookies enable enhanced functionality and personalisation. They remember your preferences and settings to provide a more tailored experience."
                                examples={[
                                    { name: 'pref_theme', purpose: 'Remembers your light/dark mode preference', duration: '1 year' },
                                    { name: 'pref_region', purpose: 'Stores your preferred region or server for game data', duration: '6 months' },
                                    { name: 'ui_dismissed', purpose: 'Remembers which banners or tooltips you have dismissed', duration: '90 days' },
                                ]}
                                canDisable={true}
                            />

                            <CookieCard
                                icon="🎯"
                                type="Marketing & Targeting Cookies"
                                description="These cookies are used to deliver advertisements that are relevant to you. They track your browsing habits across websites to build a profile of your interests. We do not currently use advertising cookies, but may do so in future. We will update this policy and seek your consent before doing so."
                                examples={[]}
                                canDisable={true}
                                comingSoon={true}
                            />

                        </Section>

                        <Section title="3. Third-Party Cookies">
                            <p>Some cookies are placed by third-party services that appear on our Platform. These third parties may use cookies to collect information about your online activities. Note that we do not control these third-party cookies. We recommend reviewing the privacy and cookie policies of these providers:</p>
                            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="text-left px-4 py-3 font-bold text-gray-700">Provider</th>
                                            <th className="text-left px-4 py-3 font-bold text-gray-700">Purpose</th>
                                            <th className="text-left px-4 py-3 font-bold text-gray-700">Policy</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-700">Google Analytics</td>
                                            <td className="px-4 py-3 text-gray-500">Usage analytics and performance</td>
                                            <td className="px-4 py-3"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">View Policy</a></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium text-gray-700">Riot Games API</td>
                                            <td className="px-4 py-3 text-gray-500">In-game data for profile verification</td>
                                            <td className="px-4 py-3"><a href="https://www.riotgames.com/en/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">View Policy</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>

                        <Section title="4. Managing Your Cookie Preferences">
                            <p>You have several options to control and manage cookies:</p>
                            <SubHeading>Via Our Platform</SubHeading>
                            <p>When you first visit GravityGaming.Live, you will be presented with a cookie consent banner where you can choose which categories of cookies to accept or decline. You can update your preferences at any time via the "Cookie Settings" link in the footer.</p>
                            <SubHeading>Via Your Browser</SubHeading>
                            <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies. However, disabling strictly necessary cookies may affect the Platform's functionality.</p>
                            <ul>
                                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">Mozilla Firefox</a></li>
                                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">Apple Safari</a></li>
                                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">Microsoft Edge</a></li>
                            </ul>
                            <SubHeading>Opt-Out of Analytics</SubHeading>
                            <p>You can opt out of Google Analytics tracking across all websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline font-semibold">Google Analytics Opt-out Browser Add-on</a>.</p>
                        </Section>

                        <Section title="5. Changes to This Policy">
                            <p>We may update this Cookie Policy as our Platform evolves or as legal requirements change. We will notify you of significant changes by updating the "Last updated" date at the top of this page and, where appropriate, by displaying a notice on the Platform.</p>
                        </Section>

                        <Section title="6. Contact Us">
                            <p>If you have any questions about our use of cookies, please contact us:</p>
                            <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <p className="font-bold text-gray-900">GravityGaming.Live</p>
                                <p className="text-gray-600 mt-1">Email: <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-amber-600 hover:underline font-semibold">gaurav.upadhyay@gravitygaming.live</a></p>
                            </div>
                        </Section>

                    </div>
                </div>
            </main>

            <PolicyFooter />
        </div>
    );
}

interface CookieExample { name: string; purpose: string; duration: string; }
interface CookieCardProps {
    icon: string;
    type: string;
    description: string;
    examples: CookieExample[];
    canDisable: boolean;
    comingSoon?: boolean;
}

function CookieCard({ icon, type, description, examples, canDisable, comingSoon }: CookieCardProps) {
    return (
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-4">
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <h3 className="font-bold text-gray-900">{type}</h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${canDisable ? 'bg-amber-100 text-amber-700' : 'bg-gray-200 text-gray-600'}`}>
                    {canDisable ? 'Optional' : 'Required'}
                </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
            {comingSoon && (
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-semibold px-3 py-1.5 rounded-full">
                    Not currently active — coming in a future release
                </div>
            )}
            {examples.length > 0 && (
                <div className="overflow-hidden rounded-xl border border-gray-200 mt-2">
                    <table className="w-full text-xs">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-left px-3 py-2 font-bold text-gray-600">Cookie Name</th>
                                <th className="text-left px-3 py-2 font-bold text-gray-600">Purpose</th>
                                <th className="text-left px-3 py-2 font-bold text-gray-600">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {examples.map((ex) => (
                                <tr key={ex.name}>
                                    <td className="px-3 py-2 font-mono text-gray-700 font-semibold">{ex.name}</td>
                                    <td className="px-3 py-2 text-gray-500">{ex.purpose}</td>
                                    <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{ex.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <p className="font-bold text-gray-800 mt-4 mb-1">{children}</p>;
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
