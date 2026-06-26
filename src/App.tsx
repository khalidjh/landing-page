import React, { useState, useEffect } from 'react'
import { 
  Rocket, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  X,
  Play,
  Sparkles,
  Cpu,
  Globe,
  Lock,
  Code2
} from 'lucide-react'

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NexusAI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-textSecondary hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-textSecondary hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-textSecondary hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-textSecondary hover:text-white transition-colors">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-textSecondary hover:text-white transition-colors">Sign In</button>
            <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block text-textSecondary hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="block text-textSecondary hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="block text-textSecondary hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="block text-textSecondary hover:text-white transition-colors">Testimonials</a>
            <div className="pt-4 space-y-3">
              <button className="w-full text-textSecondary hover:text-white transition-colors py-2">Sign In</button>
              <button className="w-full bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-surface border border-border rounded-full px-4 py-2 mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-textSecondary">AI-Powered Platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Build Smarter with
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-textSecondary max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Transform your workflow with cutting-edge AI technology. Automate tasks, gain insights, and accelerate growth like never before.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-surface border border-border text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-surface/80 transition-all duration-300 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="relative h-32">
          <div className="absolute left-1/4 top-0 bg-surface border border-border rounded-2xl p-4 animate-float">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-success" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">99.9% Uptime</p>
                <p className="text-textSecondary text-sm">Reliable Service</p>
              </div>
            </div>
          </div>

          <div className="absolute right-1/4 top-8 bg-surface border border-border rounded-2xl p-4 animate-float-delayed">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">50K+ Users</p>
                <p className="text-textSecondary text-sm">Growing Fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Advanced AI Processing',
      description: 'Leverage state-of-the-art machine learning models to process and analyze your data with unprecedented accuracy.',
      color: 'from-primary to-purple-600',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Scalability',
      description: 'Deploy across multiple regions with automatic scaling to handle millions of requests effortlessly.',
      color: 'from-secondary to-blue-600',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
      color: 'from-accent to-pink-600',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs and SDKs that make integration seamless and straightforward.',
      color: 'from-success to-emerald-600',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Real-time Analytics',
      description: 'Monitor performance, track metrics, and gain insights with live dashboards.',
      color: 'from-warning to-orange-600',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Dedicated support team available around the clock to help you succeed.',
      color: 'from-red-500 to-rose-600',
    },
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your AI-powered applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-surface border border-border rounded-2xl p-8 hover:bg-surface/80 transition-all duration-300 hover:scale-[1.02] hover:border-border/50"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works Section Component
const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Data',
      description: 'Securely integrate with your existing data sources in just a few clicks.',
    },
    {
      number: '02',
      title: 'Configure AI Models',
      description: 'Customize and train models to fit your specific use cases and requirements.',
    },
    {
      number: '03',
      title: 'Deploy & Scale',
      description: 'Launch your AI-powered solutions and scale automatically as you grow.',
    },
  ]

  return (
    <section id="how-it-works" className="py-24 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-textSecondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section Component
const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for small teams and startups',
      features: [
        '5,000 API calls/month',
        'Basic AI models',
        'Email support',
        'Community access',
        '1 user seat',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '99',
      description: 'For growing businesses with advanced needs',
      features: [
        '50,000 API calls/month',
        'Advanced AI models',
        'Priority support',
        'Custom integrations',
        '5 user seats',
        'Analytics dashboard',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Unlimited API calls',
        'Custom AI models',
        'Dedicated support',
        'SLA guarantee',
        'Unlimited user seats',
        'Advanced security',
        'Custom contracts',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Choose the plan that fits your needs. Scale up or down anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-surface border-2 rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                plan.popular
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105'
                  : 'border-border hover:border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-textSecondary mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-textSecondary">/month</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-textSecondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25'
                    : 'bg-background border border-border text-white hover:bg-background/80'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      image: 'https://images.pexels.com/photos/1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      content: 'NexusAI has transformed how we process data. The speed and accuracy are unmatched. We have seen a 300% improvement in our workflow efficiency.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupX',
      image: 'https://images.pexels.com/photos/1507006743-24854083?w=150&h=150&fit=crop',
      content: 'The ease of integration is incredible. We went from idea to production in less than a week. The support team is always responsive and helpful.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      image: 'https://images.pexels.com/photos-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      content: 'Best investment we have made this year. The scalability and reliability have allowed us to handle 10x more users without any issues.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 hover:border-border/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>

              <p className="text-textSecondary mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-textSecondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-textSecondary mb-10">
          Join thousands of companies already using NexusAI to stay ahead of the competition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
            <span>Start Free Trial</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-surface border border-border text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-surface/80 transition-all duration-300">
            Contact Sales
          </button>
        </div>

        <p className="text-textSecondary mt-6 text-sm">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NexusAI</span>
            </div>
            <p className="text-textSecondary">
              Empowering businesses with cutting-edge AI technology since 2020.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-textSecondary hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-textSecondary">
          <p>&copy; 2025 NexusAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
