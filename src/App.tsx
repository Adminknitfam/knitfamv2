import React, { useState } from 'react';
import { 
  Heart, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Scissors, 
  Palette, 
  Award,
  Mail,
  ChevronDown,
  Menu,
  X,
  Play,
  Star,
  Shield
} from 'lucide-react';

function App() {
  const [selectedGauge, setSelectedGauge] = useState('4.5');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedSleeve, setSelectedSleeve] = useState('long');
  const [selectedNeckline, setSelectedNeckline] = useState('crew');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How does KnitFam generate custom instructions?",
      answer: "KnitFam uses advanced algorithms to calculate precise stitch counts and row counts based on your unique gauge swatch and body measurements. Our system takes into account yarn weight, needle size, and personal fit preferences to generate step-by-step instructions tailored specifically to your project."
    },
    {
      question: "What if my gauge changes while knitting?",
      answer: "No problem! KnitFam allows you to update your gauge at any point during your project. Simply input your new gauge measurement, and we'll automatically recalculate the remaining instructions to ensure your finished garment fits perfectly."
    },
    {
      question: "Are the patterns from recognized designers?",
      answer: "Yes! We work exclusively with verified pattern designers and provide full attribution for every pattern. You'll always know who created the original design, and designers receive proper credit and compensation for their work through our transparent partnership program."
    },
    {
      question: "Can I customize patterns beyond basic options?",
      answer: "Currently, KnitFam offers essential customizations like sleeve length, neckline style, and fit adjustments. We're constantly expanding our customization options based on user feedback. Premium features for advanced modifications are coming soon!"
    },
    {
      question: "What skill level do I need to use KnitFam?",
      answer: "KnitFam is designed for knitters of all skill levels! Our instructions include detailed explanations for beginners, while experienced knitters can focus on the essential stitch counts and shaping details. Each pattern indicates the recommended skill level and required techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-rose-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="text-2xl font-bold text-gray-900">KnitFam</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-rose-600 transition-colors">Features</a>
              <a href="#faq" className="text-gray-600 hover:text-rose-600 transition-colors">FAQ</a>
              <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-rose-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-rose-100">
                <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Features</a>
                <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-rose-600">FAQ</a>
                <button className="w-full text-left bg-rose-600 text-white px-3 py-2 rounded-lg hover:bg-rose-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Make Knitting
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                Effortlessly Yours
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your measurements and gauge into perfect, personalized knitting instructions. 
              No more math, no more guesswork—just beautiful, custom-fit garments every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-700 transition-all transform hover:scale-105 flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Start Your First Project
              </button>
              <button className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-colors">
                Watch Demo
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-16">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>Trusted by 10,000+ knitters</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-1" />
                <span>100% Designer Attribution</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-blue-500 mr-1" />
                <span>Featured in Craft Monthly</span>
              </div>
            </div>
          </div>

          {/* Hero Demo */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-rose-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Try It Now</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Gauge (stitches per inch)</label>
                    <select 
                      value={selectedGauge} 
                      onChange={(e) => setSelectedGauge(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="3.5">3.5 stitches/inch</option>
                      <option value="4.0">4.0 stitches/inch</option>
                      <option value="4.5">4.5 stitches/inch</option>
                      <option value="5.0">5.0 stitches/inch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Size</label>
                    <select 
                      value={selectedSize} 
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="XS">XS (32-34")</option>
                      <option value="S">S (36-38")</option>
                      <option value="M">M (40-42")</option>
                      <option value="L">L (44-46")</option>
                      <option value="XL">XL (48-50")</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Your Custom Instructions</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cast on:</span>
                    <span className="font-mono font-semibold">{Math.round(parseFloat(selectedGauge) * 40)} stitches</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Body length:</span>
                    <span className="font-mono font-semibold">{Math.round(parseFloat(selectedGauge) * 14)} rows</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Armhole depth:</span>
                    <span className="font-mono font-semibold">{Math.round(parseFloat(selectedGauge) * 8)} rows</span>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-rose-500">
                    <p className="text-xs text-gray-600">✨ Personalized for your {selectedSize} size at {selectedGauge} st/inch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Three Game-Changing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create perfectly fitted, beautiful garments with confidence and joy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1: Smart Knit Tee Builder */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-rose-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Knit Tee Builder</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Input your gauge and measurements, get instant row-by-row instructions. 
                Our algorithm handles all the complex calculations, so you can focus on the joy of knitting.
              </p>
              <div className="bg-white rounded-lg p-4 border border-rose-200">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Gauge Input:</span>
                    <span className="font-mono text-rose-600">{selectedGauge} st/inch</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Size Selected:</span>
                    <span className="font-mono text-rose-600">{selectedSize}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <span className="text-xs text-gray-500">→ Generates 127 detailed steps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Designer Attribution */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Designer Attribution Preview</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete transparency in pattern sourcing. Every design comes with full designer 
                attribution, ensuring creators get proper credit and compensation.
              </p>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Jane Smith</p>
                    <p className="text-xs text-gray-500">Classic Tee Pattern Designer</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <span className="text-xs text-gray-500">✓ Verified Designer • Licensed Pattern</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Basic Customization */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Customization Options</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Personalize your garments with essential style choices. Select sleeve length, 
                neckline style, and fit preferences to make each piece uniquely yours.
              </p>
              <div className="bg-white rounded-lg p-4 border border-blue-200 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Sleeve Style</label>
                  <select 
                    value={selectedSleeve} 
                    onChange={(e) => setSelectedSleeve(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="short">Short Sleeve</option>
                    <option value="long">Long Sleeve</option>
                    <option value="three-quarter">3/4 Sleeve</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Neckline</label>
                  <select 
                    value={selectedNeckline} 
                    onChange={(e) => setSelectedNeckline(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="crew">Crew Neck</option>
                    <option value="v-neck">V-Neck</option>
                    <option value="scoop">Scoop Neck</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about KnitFam and custom knitting instructions.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-rose-100 shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-rose-50 transition-colors rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-rose-600 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Knitting?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Join thousands of knitters who've discovered the joy of perfectly fitted, 
            custom-generated patterns. Your next masterpiece is just a few clicks away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center">
              Start Creating Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
          <p className="text-sm text-rose-100 mt-6">
            No credit card required • Free trial available • Join 10,000+ happy knitters
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-rose-400" />
                <span className="text-2xl font-bold">KnitFam</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Making knitting easier through smart, personalized pattern generation. 
                Join our community of passionate crafters creating beautiful, custom-fit garments.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:admin@knitfam.com" className="flex items-center text-gray-400 hover:text-rose-400 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  admin@knitfam.com
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pattern Library</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="mailto:admin@knitfam.com" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 KnitFam.com. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 sm:mt-0">
              Made with <Heart className="h-4 w-4 inline text-rose-400" /> for the knitting community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;