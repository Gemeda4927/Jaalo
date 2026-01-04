'use client'
import { personalInfo, experience } from '@/lib/data'
import { Calendar, MapPin, Briefcase, Code, Users, Target, Award, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AboutComponent() {
  const [activeTab, setActiveTab] = useState('background')

  const stats = [
    { icon: Code, value: '50+', label: 'Projects Completed', color: 'text-blue-500' },
    { icon: Users, value: '50+', label: 'Students Mentored', color: 'text-green-500' },
    { icon: Award, value: '100%', label: 'Client Satisfaction', color: 'text-purple-500' },
    { icon: Target, value: '∞', label: 'Learning Mindset', color: 'text-orange-500' },
  ]

  const tabs = [
    { id: 'background', label: 'Background' },
    { id: 'mission', label: 'Mission' },
    { id: 'values', label: 'Values' },
  ]

  return (
    <section id="about" className="relative py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-yellow-500" size={24} />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              My Journey
            </span>
            <Sparkles className="text-yellow-500" size={24} />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900">About </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate developer on a mission to create meaningful digital experiences 
            that solve real-world problems and inspire innovation.
          </p>
        </motion.div>

        {/* Stats showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl border border-white/50"
            >
              <div className={`${stat.color} mb-4`}>
                <stat.icon size={32} />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Interactive tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Tab navigation */}
            <div className="flex gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="relative min-h-[300px]">
              {activeTab === 'background' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a dedicated Full-Stack Developer with a journey that started in C++ programming 
                    and evolved into mastering modern web and mobile technologies. My passion lies in 
                    creating robust, scalable solutions that make a real impact.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With expertise across the full stack, I bridge the gap between beautiful user 
                    experiences and powerful backend systems. Every line of code I write is driven 
                    by a desire to solve problems efficiently and elegantly.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Beyond coding, I'm an active contributor to open-source projects and enjoy 
                    sharing knowledge through mentoring and technical writing. I believe in 
                    continuous learning and staying at the forefront of technological innovation.
                  </p>
                </motion.div>
              )}

              {activeTab === 'mission' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    My mission is to leverage technology to create solutions that are not only 
                    functional but also intuitive and delightful to use. I strive to build 
                    software that makes people's lives easier and more productive.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm committed to writing clean, maintainable code and following best practices 
                    that ensure scalability and performance. Quality and attention to detail are 
                    at the core of everything I build.
                  </p>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    • <span className="font-semibold text-blue-600">Excellence</span> - Striving for the highest quality in every project
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    • <span className="font-semibold text-green-600">Innovation</span> - Embracing new technologies and creative solutions
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    • <span className="font-semibold text-purple-600">Collaboration</span> - Working together to achieve extraordinary results
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    • <span className="font-semibold text-orange-600">Integrity</span> - Transparent communication and ethical practices
                  </p>
                </motion.div>
              )}
            </div>

            {/* Personal info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Personal Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Briefcase className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Status</div>
                    <div className="font-medium text-green-600">Open to Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Experience timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Experience</h3>
                  <p className="text-gray-600">My professional journey timeline</p>
                </div>
              </div>

              <div className="relative pl-10">
                {/* Vertical line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative mb-12 last:mb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-10 top-1.5">
                      <div className="relative">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                        <div className="absolute inset-0 animate-ping bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                          <Calendar size={16} className="text-blue-600" />
                          <span className="text-blue-700 font-medium">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-lg font-medium">
                          {exp.company}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {index === 0 ? (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">React</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm">MongoDB</span>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm">AWS</span>
                          </>
                        ) : (
                          <>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm">C++</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm">Teaching</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm">Mentoring</span>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to turn your ideas into reality with cutting-edge technology.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <span>Start a Conversation</span>
                <Sparkles size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}