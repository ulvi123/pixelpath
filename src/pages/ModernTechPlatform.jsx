// src/ModernTechPlatform.jsx
import React, { useState, useEffect } from 'react';
import { 
  Code, Shield, Server, Users, BookOpen, Award, 
  ChevronRight, ArrowRight, Menu, X, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernTechPlatform = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tracks = [
    {
      title: "Software Development",
      icon: <Code className="w-6 h-6" />,
      description: "Build the future with modern programming",
      gradient: "from-purple-600 to-blue-600",
      modules: ["Frontend Development", "Backend Systems", "Cloud Architecture", "Mobile Apps"]
    },
    {
      title: "DevOps Engineering",
      icon: <Server className="w-6 h-6" />,
      description: "Master the art of deployment",
      gradient: "from-blue-600 to-cyan-600",
      modules: ["AWS & Azure", "Kubernetes", "CI/CD Pipelines", "Infrastructure"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      description: "Defend against digital threats",
      gradient: "from-cyan-600 to-teal-600",
      modules: ["Ethical Hacking", "Security Ops", "Threat Analysis", "Incident Response"]
    }
  ];

  const stats = [
    { value: "94%", label: "Employment Rate" },
    { value: "$95K", label: "Avg Starting Salary" },
    { value: "1500+", label: "Graduates" },
    { value: "300+", label: "Partner Companies" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"></div>
              <span className="text-white text-xl font-bold">TechPro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Programs</Link>
              <Link to="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link>
              <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-md transition-all duration-300">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Apply Now
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link to="/" className="text-white text-xl">Programs</Link>
          <Link to="/community" className="text-white text-xl">Community</Link>
          <Link to="/about-us" className="text-white text-xl">About</Link>
          <Link to="/programs" className="text-white text-xl">Programs</Link>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full">
            Apply Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Master the Tech That
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Shapes Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join a community of innovators and build your future in software development, DevOps, and cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium backdrop-blur-md transition-all duration-300 flex items-center justify-center">
                Watch Demo
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Learning Tracks */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Specialized Learning Tracks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, index) => (
              <div key={index} 
                className="group relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer border border-slate-700/50">
                <div className={`absolute inset-0 bg-gradient-to-r ${track.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`bg-gradient-to-r ${track.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{track.title}</h3>
                <p className="text-gray-400 mb-6">{track.description}</p>
                <ul className="space-y-3">
                  {track.modules.map((module, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            The TechPro Advantage
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Industry Experts",
                description: "Learn from active professionals"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Real Projects",
                description: "Build production-ready apps"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certification",
                description: "Industry-recognized credentials"
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Career Support",
                description: "Lifetime placement assistance"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-md rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative p-12 md:p-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of successful graduates who have launched rewarding careers in tech
              </p>
              <button className="group bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-xl hover:shadow-white/25">
                Apply Now
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernTechPlatform;
