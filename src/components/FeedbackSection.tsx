import React, { useState } from 'react';
import { Send, Star, MessageCircle, ThumbsUp, Heart, CheckCircle, AlertCircle } from 'lucide-react';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!feedback.trim()) {
      newErrors.feedback = 'Feedback is required';
    }
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (rating === 0) {
      newErrors.rating = 'Please provide a rating';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store feedback in localStorage for demo purposes
      const feedbackData = {
        name,
        email,
        feedback,
        rating,
        timestamp: new Date().toISOString()
      };
      
      const existingFeedback = JSON.parse(localStorage.getItem('techHubFeedback') || '[]');
      existingFeedback.push(feedbackData);
      localStorage.setItem('techHubFeedback', JSON.stringify(existingFeedback));
      
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFeedback('');
        setRating(0);
        setEmail('');
        setName('');
        setErrors({});
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-20 px-6 bg-gradient-to-br from-black via-red-950 to-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Your Feedback Matters
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-medium">
            Help us improve and share your experience with our free resources!
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 shadow-xl">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You</h3>
              <p className="text-gray-300">Your feedback has been submitted successfully!</p>
              <p className="text-sm text-gray-400 mt-2">We appreciate your input and will use it to improve our platform.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 bg-red-950/30 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-red-500/50 focus:border-red-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Rating */}
              <div>
                <label className="block text-white font-semibold mb-3">Rate Your Experience *</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        star <= rating 
                          ? 'text-red-400 scale-110' 
                          : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <Star className={`h-8 w-8 ${star <= rating ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
                {errors.rating && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.rating}
                  </div>
                )}
              </div>

              {/* Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-white font-semibold mb-3">
                  Your Feedback *
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                  className={`w-full px-4 py-3 bg-red-950/30 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none ${
                    errors.feedback ? 'border-red-500' : 'border-red-500/50 focus:border-red-500'
                  }`}
                  placeholder="Share your thoughts about our resources, suggestions for improvement, or any other feedback..."
                />
                {errors.feedback && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.feedback}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Feedback</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-red-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "Amazing collection of resources! Helped me crack GATE CSE with flying colors. The materials are well-organized and completely free!"
            </p>
            <p className="text-red-400 font-semibold">- GATE CSE Aspirant</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-red-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              "The VLSI and embedded systems resources are top-notch. Perfect for both beginners and advanced learners. Highly recommended!"
            </p>
            <p className="text-red-400 font-semibold">- ECE Student</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;