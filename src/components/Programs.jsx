// src/pages/Programs.jsx
import React from 'react';
import { Code, Server, Shield, ChevronRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Software Development",
      icon: <Code className="w-10 h-10 text-blue-500" />,
      description: "Learn to build applications with modern programming languages and frameworks.",
      gradient: "from-purple-600 to-blue-600",
      modules: [
        "Frontend Development",
        "Backend Systems",
        "Cloud Architecture",
        "Mobile Applications"
      ]
    },
    {
      title: "DevOps Engineering",
      icon: <Server className="w-10 h-10 text-blue-500" />,
      description: "Master deployment automation and infrastructure management.",
      gradient: "from-blue-600 to-cyan-600",
      modules: [
        "AWS & Azure",
        "Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      description: "Acquire skills to secure networks, systems, and applications.",
      gradient: "from-cyan-600 to-teal-600",
      modules: [
        "Ethical Hacking",
        "Security Operations",
        "Threat Analysis",
        "Incident Response"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our specialized programs designed to equip you with the latest skills and knowledge to excel in today’s tech landscape.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} 
                className="group relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer border border-slate-700/50">
                <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`bg-gradient-to-r ${program.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.modules.map((module, idx) => (
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
    </div>
  );
};

export default Programs;
