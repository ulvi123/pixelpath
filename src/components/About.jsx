// src/pages/AboutUs.js
import React from 'react';
import { Users, Award, BookOpen } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            Our mission is to empower the next generation of tech innovators. Join us on our journey as we build a community that thrives on learning, collaboration, and impactful growth.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Story</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
                icon: <Users className="w-10 h-10" />,
                title: "Diverse Team",
                description: "Our team comprises experts from various industries, bringing unique insights."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Recognized Excellence",
                description: "Our graduates are leaders in tech, recognized for their expertise and skills."
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Lifelong Learning",
                description: "We foster a culture of continuous improvement and growth in every aspect of tech."
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

export default AboutUs;
