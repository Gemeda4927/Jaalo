'use client'
import { useState } from 'react'
import { personalInfo, socialLinks } from '@/lib/data'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just log the data
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo - configure email service in production)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors w-full"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-6">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href={socialLinks.github}
                    target="_blank"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href={socialLinks.linkedin}
                    target="_blank"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href={socialLinks.twitter}
                    target="_blank"
                    className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold mb-3">Quick Response</h4>
                <p className="text-gray-600 text-sm">
                  I typically respond within 24 hours. For urgent inquiries, feel free to reach out via Telegram.
                </p>
                <a 
                  href={socialLinks.telegram}
                  target="_blank"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Message on Telegram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}