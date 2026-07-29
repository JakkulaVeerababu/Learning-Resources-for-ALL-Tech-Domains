import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Mail, Users, BookOpen, GraduationCap, HelpCircle, CheckCircle, AlertCircle, Send, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateContactForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!contactForm.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!contactForm.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!contactForm.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateContactForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store contact form data in localStorage for demo purposes
      const contactData = {
        ...contactForm,
        timestamp: new Date().toISOString()
      };
      
      const existingContacts = JSON.parse(localStorage.getItem('techHubContacts') || '[]');
      existingContacts.push(contactData);
      localStorage.setItem('techHubContacts', JSON.stringify(existingContacts));
      
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I need help with GATE preparation and tech learning. Can you guide me?");
    window.open(`https://wa.me/918008651769?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/thflashz?igsh=MTUxeTF6czd5bmE1Mw==', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/veerababu9z?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-black via-red-950 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Need Personal Help?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            If you want personal care, syllabus guidance, doubt clearing, or any confusion about GATE preparation 
            and tech learning, we're here to help you succeed!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Get In Touch
            </h3>

            {/* WhatsApp */}
            <button 
              onClick={openWhatsApp}
              className="group w-full bg-black/60 backdrop-blur-sm border border-red-500/30 hover:border-green-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    WhatsApp Support
                  </h4>
                  <p className="text-gray-400 mb-2">Direct personal assistance</p>
                  <p className="text-green-400 font-semibold text-lg">+91 8008651769</p>
                </div>
              </div>
            </button>

            {/* Instagram */}
            <button
              onClick={openInstagram}
              className="group w-full bg-black/60 backdrop-blur-sm border border-red-500/30 hover:border-red-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    Follow on Instagram
                  </h4>
                  <p className="text-gray-400 mb-2">Updates, tips & community</p>
                  <p className="text-red-400 font-semibold text-lg">@thflashz</p>
                </div>
              </div>
            </button>

            {/* LinkedIn */}
            <button
              onClick={openLinkedIn}
              className="group w-full bg-black/60 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    Connect on LinkedIn
                  </h4>
                  <p className="text-gray-400 mb-2">Professional network</p>
                  <p className="text-blue-400 font-semibold text-lg">Veerababu</p>
                </div>
              </div>
            </button>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <GraduationCap className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">GATE Syllabus</h4>
                <p className="text-gray-400 text-sm">Complete syllabus breakdown and study plans</p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <HelpCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Doubt Clearing</h4>
                <p className="text-gray-400 text-sm">Get your technical doubts resolved quickly</p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Study Guidance</h4>
                <p className="text-gray-400 text-sm">Personalized study plans and strategies</p>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:border-red-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Users className="h-12 w-12 text-red-700 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Career Advice</h4>
                <p className="text-gray-400 text-sm">Career guidance and placement preparation</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              Send a Message
            </h3>

            <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-gray-300">We'll get back to you within 24 hours!</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-white font-semibold mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-red-950/30 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                          errors.name ? 'border-red-500' : 'border-red-500/50 focus:border-red-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <div className="flex items-center mt-2 text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-white font-semibold mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-red-950/30 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-red-500/50 focus:border-red-500'
                        }`}
                        placeholder="jakkulaveerababu429@gmail.com"
                      />
                      {errors.email && (
                        <div className="flex items-center mt-2 text-red-400 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-white font-semibold mb-3">
                      Subject *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-red-950/30 border rounded-lg text-white focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                        errors.subject ? 'border-red-500' : 'border-red-500/50 focus:border-red-500'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="gate-preparation">GATE Preparation Help</option>
                      <option value="doubt-clearing">Doubt Clearing</option>
                      <option value="study-guidance">Study Guidance</option>
                      <option value="career-advice">Career Advice</option>
                      <option value="resource-request">Resource Request</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <div className="flex items-center mt-2 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-white font-semibold mb-3">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-red-950/30 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500' : 'border-red-500/50 focus:border-red-500'
                      }`}
                      placeholder="Describe your query or how we can help you..."
                    />
                    {errors.message && (
                      <div className="flex items-center mt-2 text-red-400 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-950/50 to-black/50 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Excel in Your Studies?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Don't let doubts and confusion hold you back. Get personalized guidance from someone who understands your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-green-500/50"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={openInstagram}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </button>
              <button
                onClick={openLinkedIn}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-blue-500/50"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;