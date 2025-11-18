import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Shield,
  Zap,
  Smartphone,
  Settings,
  Play,
  ChevronDown,
  Github,
  Twitter,
  Linkedin,
  Mail,
  X,
  Star,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Crown,
  Gem,
} from "lucide-react";
import PrivacyPolicy from "./PrivacyPolicy";

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
              <ParticleBackground />
              <LandingPage />
              <HowItWorksSection />
              <FeaturesSection />
              <ScreenshotsSection />
              <FAQSection />
              <Footer />
            </div>
          }
        />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  );
}

// Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90"></div>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Privacy Policy Page Component
const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return <PrivacyPolicy onBack={() => navigate("/")} />;
};

// Landing Page Component
const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center">
      {/* Premium Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrollY > 50 ? "rgba(15, 23, 42, 0.8)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                <Zap className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AdSkipper
              </span>
            </motion.div>

            {/* Premium Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Features", "How it Works", "Screenshots", "FAQ"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-300 hover:text-white transition-colors font-medium relative group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                )
              )}
              <motion.a
                href="https://www.linkedin.com/in/jaswanth-satya-dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-400 hover:text-blue-300 transition-all duration-300 p-3 rounded-full hover:bg-blue-500/10"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-white/10"
            >
              <div className="px-6 py-6 space-y-4">
                {["Features", "How it Works", "Screenshots", "FAQ"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="block text-slate-300 hover:text-white transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.a>
                  )
                )}
                <motion.a
                  href="https://www.linkedin.com/in/jaswanth-satya-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect on LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Premium Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Premium Text Content */}
          <motion.div
            className="text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Original AdSkipper Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Shield className="w-4 h-4" />
              <span>100% Free Forever</span>
            </motion.div>

            {/* Original AdSkipper Headline */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Skip YouTube Ads
              <motion.span
                className="block text-glow bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Automatically
              </motion.span>
            </motion.h1>

            {/* Original AdSkipper Subheadline */}
            <motion.p
              className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Skip YouTube ads automatically. One-time setup. Works in
              background. Completely free forever. No ads. No login. 100%
              offline.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-3 shadow-premium-lg hover:shadow-glow-lg transition-all duration-300"
                disabled
              >
                <Download className="w-6 h-6" />
                <span>Coming Soon on Google Play</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-2xl font-semibold text-lg flex items-center justify-center space-x-3 hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
                <span>View on GitHub</span>
              </motion.button>
            </motion.div>

            {/* Original AdSkipper Stats */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-12 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { icon: Shield, value: "Coming Soon", label: "No Ads" },
                { icon: Users, value: "Coming Soon", label: "Downloads" },
                { icon: Clock, value: "Coming Soon", label: "Offline" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                  <div className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Premium 3D Phone Showcase */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            {/* Premium Phone Mockup */}
            <div className="relative transform-3d">
              {/* Phone Frame */}
              <motion.div
                className="relative w-80 h-[600px] bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-[3rem] p-4 shadow-premium-lg border border-white/10"
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-[2.5rem] overflow-hidden relative">
                  {/* Premium Screen Content */}
                  <div className="p-8 h-full flex flex-col justify-between">
                    {/* Premium Header */}
                    <motion.div
                      className="flex items-center justify-between mb-8"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Play className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold">
                          YouTube Premium
                        </span>
                      </div>
                      <div className="text-white text-xs">12:34</div>
                    </motion.div>

                    {/* Premium Video Area */}
                    <motion.div
                      className="flex-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 mb-6 relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.7 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-royal-500/20 to-pink-500/20 animate-pulse"></div>
                      <div className="relative z-10">
                        <div className="text-white text-sm mb-4">
                          Premium Content Playing
                        </div>
                        <motion.div
                          className="bg-gradient-to-r from-royal-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full inline-flex items-center space-x-2"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Ad Skipped Automatically</span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Premium Status */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 }}
                    >
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">
                              AdSkipper
                            </div>
                            <div className="text-green-400 text-xs">
                              Active & Secure
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Skip Delay</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-400 text-sm font-semibold">
                              0.1s
                            </span>
                            <div className="w-12 h-2 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "95%" }}
                                transition={{ delay: 2.2, duration: 1 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Premium Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-premium-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Gem className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-ocean-500 to-cyan-500 rounded-full flex items-center justify-center shadow-premium"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-gold-500 to-orange-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Award className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Premium How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      title: "Install AdSkipper",
      description: "Download the most sophisticated ad-skipper ever created",
      gradient: "from-purple-500 to-blue-500",
      number: "01",
    },
    {
      icon: Settings,
      title: "Easy Setup",
      description: "Configure your experience with simple settings",
      gradient: "from-blue-500 to-cyan-500",
      number: "02",
    },
    {
      icon: Play,
      title: "Enjoy Ad-Free",
      description: "Enjoy uninterrupted content like never before",
      gradient: "from-green-500 to-emerald-500",
      number: "03",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-32 relative z-10 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Simple Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            How It Works
            <span className="gradient-text-premium block">Simple & Easy</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Three simple steps to transform your viewing experience into
            something extraordinary
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-premium-lg">
                {/* Premium Number */}
                <div
                  className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-premium`}
                >
                  {step.number}
                </div>

                {/* Premium Icon */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-premium-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Premium Content */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Premium Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description:
        "No data collection, no tracking, complete privacy protection. Your data stays on your device.",
      gradient: "from-green-500 to-emerald-500",
      highlight: "No Data Collection",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Instant ad detection and skipping. Works faster than you can blink. Zero delay.",
      gradient: "from-purple-500 to-blue-500",
      highlight: "0.1s Response",
    },
    {
      icon: Smartphone,
      title: "100% Offline",
      description:
        "Works without internet connection. Perfect for airplane mode. No network needed.",
      gradient: "from-blue-500 to-cyan-500",
      highlight: "No Internet Needed",
    },
    {
      icon: Settings,
      title: "One-Tap Setup",
      description:
        "Simple one-time configuration. Set it and forget it. No complex settings.",
      gradient: "from-orange-500 to-red-500",
      highlight: "Easy Setup",
    },
  ];

  return (
    <section
      id="features"
      className="py-32 relative z-10 bg-gradient-to-b from-slate-900 to-slate-900/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4" />
            <span>Key Features</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Powerful
            <span className="gradient-text-premium block">Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience features so advanced, they feel like magic
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
              }}
            >
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-premium-lg card-premium">
                {/* Premium Highlight Badge */}
                <div
                  className={`absolute -top-3 -right-3 bg-gradient-to-br ${feature.gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-premium`}
                >
                  {feature.highlight}
                </div>

                {/* Premium Icon */}
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-premium-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                {/* Premium Content */}
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-center leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Screenshots Section
const ScreenshotsSection = () => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    id: number;
    title: string;
    color: string;
  } | null>(null);

  const screenshots = [
    { id: 1, title: "Main Dashboard", color: "from-purple-500 to-blue-600" },
    { id: 2, title: "Easy Settings", color: "from-blue-500 to-cyan-600" },
    { id: 3, title: "Usage Analytics", color: "from-green-500 to-emerald-600" },
    { id: 4, title: "Clean Interface", color: "from-orange-500 to-red-600" },
    { id: 5, title: "Help & Support", color: "from-pink-500 to-purple-600" },
  ];

  return (
    <section
      id="screenshots"
      className="py-32 relative z-10 bg-gradient-to-b from-slate-900/90 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Premium Gallery</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Royal
            <span className="gradient-text-premium block">Interface</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Feast your eyes on the most beautiful ad-skipper interface ever
            created
          </p>
        </motion.div>

        {/* Premium Screenshot Gallery */}
        <div className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedScreenshot(screenshot)}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-premium-lg">
                <div
                  className={`w-full h-64 bg-gradient-to-br ${screenshot.color} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Crown className="w-8 h-8" />
                    </div>
                    <div className="font-bold text-lg">{screenshot.title}</div>
                  </div>
                </div>
                <div className="text-white font-semibold text-center group-hover:text-purple-300 transition-colors">
                  {screenshot.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Lightbox */}
        <AnimatePresence>
          {selectedScreenshot && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenshot(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-4xl w-full border border-white/20 shadow-premium-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedScreenshot.title}
                  </h3>
                  <button
                    onClick={() => setSelectedScreenshot(null)}
                    className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div
                  className={`w-full h-96 bg-gradient-to-br ${selectedScreenshot.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-12 h-12" />
                    </div>
                    <div className="font-bold text-2xl">
                      {selectedScreenshot.title}
                    </div>
                    <div className="text-sm opacity-75 mt-2">
                      Premium Experience
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Premium FAQ Section
const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How does AdSkipper work?",
      answer:
        "AdSkipper uses Android's Accessibility Service to detect the 'Skip Ad' button on YouTube and automatically clicks it for you. It works in the background without any manual intervention.",
    },
    {
      question: "Is AdSkipper safe to use?",
      answer:
        "Absolutely! AdSkipper is 100% safe. We don't collect any data, don't show ads, and don't require any permissions beyond what's necessary for the skip functionality.",
    },
    {
      question: "Does it work with all YouTube ads?",
      answer:
        "AdSkipper works with most skippable ads on YouTube. It detects the skip button automatically and clicks it as soon as it appears, typically within 0.1 seconds.",
    },
    {
      question: "Will it affect my YouTube experience?",
      answer:
        "Not at all! AdSkipper works silently in the background. You'll just notice that ads get skipped automatically. Your YouTube experience remains exactly the same, just without the interruptions.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes! Once installed and configured, AdSkipper works completely offline. It doesn't need an internet connection to function - everything happens locally on your device.",
    },
    {
      question: "Is AdSkipper really free?",
      answer:
        "Yes, AdSkipper is completely free forever! No ads, no in-app purchases, no subscriptions. We believe everyone should have an ad-free YouTube experience without any cost.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-32 relative z-10 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4" />
            <span>Support</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Frequently Asked
            <span className="gradient-text-premium block">Questions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your questions deserve premium answers
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-royal-300 transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-royal-400"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-slate-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Premium Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Premium Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AdSkipper
              </span>
            </motion.div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
              Skip YouTube ads automatically with our lightweight,
              privacy-focused Android app. Free forever, open source, and
              completely offline. No ads. No login. 100% safe.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/jaswanthsatyadev/AdSkipper"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jaswanth-satya-dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://x.com/jaswanthsatydev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Premium Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">
              Navigation
            </h3>
            <ul className="space-y-3">
              {["Features", "How it Works", "Screenshots", "FAQ"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                      <span>{item}</span>
                    </a>
                  </motion.li>
                )
              )}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/privacy"
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Privacy Policy</span>
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Premium Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-white text-lg">Contact</h3>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href="mailto:adskipper@evolvarc.com"
                  className="text-slate-400 hover:text-white transition-colors flex items-center space-x-2 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>adskipper@evolvarc.com</span>
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-slate-400 flex items-center space-x-2">
                  <span className="w-4 h-4">👨‍💻</span>
                  <span>Developer: Jaswanth Satya Dev</span>
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-slate-400 flex items-center space-x-2">
                  <span className="w-4 h-4">🌍</span>
                  <span>Location: India</span>
                </span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Premium Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2024 AdSkipper. Built with ❤️ for everyone.
            </p>
            <div className="flex items-center space-x-4 text-slate-400">
              <span className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Great Experience</span>
              </span>
              <span>•</span>
              <span>100% Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
