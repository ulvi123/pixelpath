// src/pages/Community.js
import React from 'react';
import { Users, BookOpen, Play } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Community</h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            Connect with tech enthusiasts from around the world. Our community is a space to learn, share, and grow together in a collaborative environment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
                icon: <Users className="w-10 h-10" />,
                title: "Networking Events",
                description: "Meet industry leaders and peers to build meaningful connections."
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Knowledge Sharing",
                description: "Access exclusive resources and learn through community sessions."
              },
              {
                icon: <Play className="w-10 h-10" />,
                title: "Workshops & Talks",
                description: "Join workshops led by professionals to enhance your skills."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-slate-700 hover:bg-slate-600 transition duration-300 text-center">
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
