import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, ArrowRight, Twitter, Mail, Shield, Target, Users, Zap, Instagram, Youtube } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here we would typically send this to an API
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">

      {/* Navbar matching esports_ui */}
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
              <a href="#investors" className="text-gray-600 hover:text-indigo-600 font-bold transition-colors hidden sm:block">
                Investors
              </a>
              <div className="hidden md:flex items-center gap-1 border-l border-gray-100 pl-4">
                <Link to="/terms" className="px-3 py-1.5 text-sm font-semibold text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">Terms</Link>
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

      {/* Main Content */}
      <main className="flex-1">

        {/* Vibrant Hero Section */}
        <div className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
          {/* Decorative abstract shapes */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-white text-indigo-700 font-bold text-sm mb-8 shadow-sm">
              <Zap className="w-4 h-4 text-amber-500" /> The Future of Esports Careers Is Here
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
              The Premier Destination for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Competitive Elite Talent
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              A dedicated hub bridging the gap between raw talent and Tier 1 organizations.
              Build your professional profile, track live VCT brackets, and land your next roster spot.
              Starting with Valorant, expanding to the world.
            </p>

            {/* Email Capture */}
            <div className="max-w-md mx-auto mb-16 relative">
              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 shadow-xl shadow-emerald-100">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">You're on the list! 🎉</h3>
                  <p className="text-sm font-medium">We'll notify you the moment we launch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email for early access"
                      className="w-full h-14 pl-12 pr-4 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all shadow-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-14 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Join Waitlist <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:shadow-indigo-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Verified Profiles</h3>
                <p className="text-gray-600 font-medium leading-relaxed">Stand out to scouts with authenticated tournament histories and ranked API integration. Show your true rank.</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:shadow-purple-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 text-purple-600">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Targeted Job Board</h3>
                <p className="text-gray-600 font-medium leading-relaxed">Stop replying to LFT tweets. Apply directly to Tier 1 and Tier 2 organization listings and take control of your career.</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:shadow-emerald-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 text-emerald-600">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Ecosystem</h3>
                <p className="text-gray-600 font-medium leading-relaxed">Track global VCT scores, roster moves, and game updates on exactly the same platform you use to find work.</p>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Footer matching esports_ui */}
      <footer id="investors" className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">

            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 p-2 rounded-xl text-white">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <span className="text-xl font-black tracking-tight text-gray-900">
                  GravityGaming<span className="text-indigo-600">.Live</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs font-medium">
                The premier destination for competitive play, live scores, and professional esports careers.
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/prxgaurav" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/gravity.gaming4547/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.youtube.com/@gravity.gaming4547" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Investors & Partners</h4>
              <p className="text-gray-500 text-sm mb-4 font-medium leading-relaxed">
                We are actively seeking strategic partners to accelerate our launch. Contact us at <a href="mailto:gaurav.upadhyay@gravitygaming.live" className="text-indigo-600 hover:text-indigo-800 font-bold">gaurav.upadhyay@gravitygaming.live</a>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors">Advertise</a></li>
                <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium text-sm transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Early Access</h4>
              <p className="text-gray-500 text-sm mb-4 font-medium">Subscribe to our newsletter for launch updates.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Email address" className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 block w-full px-4 py-2.5 transition-all outline-none" />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg px-4 py-2.5 transition-colors text-sm whitespace-nowrap shadow-sm shadow-indigo-200">Subscribe</button>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left font-medium">
              &copy; {new Date().getFullYear()} GravityGaming.Live. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">Terms</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">Privacy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-gray-900 text-sm font-medium transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
