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

    if (!contactForm.name.trim()) newErrors.name = 'Name is required';
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!contactForm.subject.trim()) newErrors.subject = 'Subject is required';
    if (!contactForm.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateContactForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const contactData = {
        ...contactForm,
        timestamp: new Date().toISOString()
      };

      const existingContacts = JSON.parse(localStorage.getItem('techHubContacts') || '[]');
      existingContacts.push(contactData);
      localStorage.setItem('techHubContacts', JSON.stringify(existingContacts));

      setSubmitted(true);

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
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Need Personal Help?
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto font-medium">
            If you want personal care, syllabus guidance, doubt clearing, or any confusion about GATE preparation
            and tech learning, we're here to help you succeed!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center lg:text-left">
              Get In Touch
            </h3>

            {/* WhatsApp */}
            <button
              onClick={openWhatsApp}
              className="group w-full bg-card border border-default hover:border-hover rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Phone className="h-8 w-8 text-accent-text" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-primary">
                    WhatsApp Support
                  </h4>
                  <p className="text-secondary mb-2">Direct personal assistance</p>
                  <p className="text-primary font-semibold text-lg">+91 8008651769</p>
                </div>
              </div>
            </button>

            {/* Instagram */}
            <button
              onClick={openInstagram}
              className="group w-full bg-card border border-default hover:border-hover rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Instagram className="h-8 w-8 text-accent-text" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-primary">
                    Follow on Instagram
                  </h4>
                  <p className="text-secondary mb-2">Updates, tips & community</p>
                  <p className="text-primary font-semibold text-lg">@thflashz</p>
                </div>
              </div>
            </button>

            {/* LinkedIn */}
            <button
              onClick={openLinkedIn}
              className="group w-full bg-card border border-default hover:border-hover rounded-xl p-6 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Linkedin className="h-8 w-8 text-accent-text" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-primary">
                    Connect on LinkedIn
                  </h4>
                  <p className="text-secondary mb-2">Professional network</p>
                  <p className="text-primary font-semibold text-lg">Veerababu</p>
                </div>
              </div>
            </button>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-card border border-default rounded-xl p-6 text-center hover:border-hover transition-all duration-300 shadow-sm">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-primary mb-2">GATE Syllabus</h4>
                <p className="text-secondary text-sm">Complete syllabus breakdown and study plans</p>
              </div>

              <div className="bg-card border border-default rounded-xl p-6 text-center hover:border-hover transition-all duration-300 shadow-sm">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-primary mb-2">Doubt Clearing</h4>
                <p className="text-secondary text-sm">Get your technical doubts resolved quickly</p>
              </div>

              <div className="bg-card border border-default rounded-xl p-6 text-center hover:border-hover transition-all duration-300 shadow-sm">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-primary mb-2">Study Guidance</h4>
                <p className="text-secondary text-sm">Personalized study plans and strategies</p>
              </div>

              <div className="bg-card border border-default rounded-xl p-6 text-center hover:border-hover transition-all duration-300 shadow-sm">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-primary mb-2">Career Advice</h4>
                <p className="text-secondary text-sm">Career guidance and placement preparation</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center lg:text-left">
              Send a Message
            </h3>

            <div className="bg-card border border-default rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-accent-text" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Message Sent</h3>
                  <p className="text-secondary">We'll get back to you within 24 hours!</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-primary font-semibold mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:border-hover focus:outline-none transition-all duration-300 ${
                          errors.name ? 'border-primary' : 'border-default'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <div className="flex items-center mt-2 text-primary text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-primary font-semibold mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:border-hover focus:outline-none transition-all duration-300 ${
                          errors.email ? 'border-primary' : 'border-default'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <div className="flex items-center mt-2 text-primary text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-primary font-semibold mb-3">
                      Subject *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-input border rounded-lg text-primary focus:border-hover focus:outline-none transition-all duration-300 ${
                        errors.subject ? 'border-primary' : 'border-default'
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
                      <div className="flex items-center mt-2 text-primary text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-primary font-semibold mb-3">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-input border rounded-lg text-primary placeholder:text-tertiary focus:border-hover focus:outline-none transition-all duration-300 resize-none ${
                        errors.message ? 'border-primary' : 'border-default'
                      }`}
                      placeholder="Describe your query or how we can help you..."
                    />
                    {errors.message && (
                      <div className="flex items-center mt-2 text-primary text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent bg-accent-hover disabled:opacity-50 px-8 py-4 rounded-lg text-accent-text font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-sm border-accent"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-text"></div>
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
          <div className="bg-card border border-default rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-4">Ready to Excel in Your Studies?</h3>
            <p className="text-xl text-secondary mb-8">
              Don't let doubts and confusion hold you back. Get personalized guidance from someone who understands your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <button
                onClick={openWhatsApp}
                className="bg-accent bg-accent-hover px-8 py-4 rounded-full text-accent-text font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm border-accent"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </button>
              <button
                onClick={openInstagram}
                className="bg-card hover:bg-secondary border border-default hover:border-hover px-8 py-4 rounded-full text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm"
              >
                <Instagram className="h-5 w-5" />
                <span>Follow on Instagram</span>
              </button>
              <button
                onClick={openLinkedIn}
                className="bg-card hover:bg-secondary border border-default hover:border-hover px-8 py-4 rounded-full text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-sm"
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
