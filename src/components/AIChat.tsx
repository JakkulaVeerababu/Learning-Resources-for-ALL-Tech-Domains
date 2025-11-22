import React, { useState, useRef, useEffect } from 'react';
import { Send, X, User, Brain, Code, Minimize2, Maximize2, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI Learning Assistant 🤖 I can help you with GATE preparation, programming concepts, study plans, and any tech-related questions. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const quickQuestions = [
    { icon: Code, text: "Help with DSA", query: "I need help with Data Structures and Algorithms. Can you guide me?" },
    { icon: BookOpen, text: "GATE Preparation", query: "How should I prepare for GATE CSE? What's the best strategy?" },
    { icon: Brain, text: "AI/ML Learning", query: "I want to learn Machine Learning. Where should I start?" },
    { icon: Zap, text: "Study Schedule", query: "Can you help me create a study schedule for programming?" }
  ];

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // This is your simulated AI response logic. It remains unchanged.
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('gate')) {
      if (lowerMessage.includes('cse')) return "For GATE CSE preparation, I recommend this structured approach:\n\n📚 **Phase 1 (3 months)**: Mathematics, Digital Logic, Programming\n🔧 **Phase 2 (6 months)**: Core subjects - OS, DBMS, Networks, Algorithms\n🎯 **Phase 3 (2 months)**: Advanced topics - Compiler Design, TOC\n📝 **Phase 4 (1 month)**: Mock tests and revision\n\nStart with our free GATE CSE resources. Would you like specific guidance on any subject?";
      if (lowerMessage.includes('ece')) return "For GATE ECE preparation:\n\n⚡ **Core subjects**: Analog Circuits, Digital Circuits, Signals & Systems\n📡 **Communication**: Analog & Digital Communication\n🔌 **Power & Control**: Control Systems, Power Electronics\n📊 **Mathematics**: Engineering Mathematics is crucial\n\nCheck our GATE ECE resources for comprehensive materials. Need help with any specific topic?";
      return "GATE preparation requires dedication and structured study. Which GATE branch are you preparing for? I can provide more specific guidance!";
    }
    if (lowerMessage.includes('dsa')) return "Great choice! DSA is fundamental. Here's your roadmap:\n\n🏗️ **Basics**: Arrays, Strings, Linked Lists\n📚 **Intermediate**: Stacks, Queues, Trees, Graphs\n🚀 **Advanced**: Dynamic Programming, Greedy Algorithms\n💡 **Practice**: LeetCode, HackerRank\n\nStart with our DSA resources! Which topic would you like to begin with?";
    if (lowerMessage.includes('ai') || lowerMessage.includes('ml')) return "Exciting field! Here's your AI/ML learning path:\n\n🔢 **Mathematics Foundation**: Linear Algebra, Statistics\n🐍 **Programming**: Python, NumPy, Pandas\n🤖 **Machine Learning**: Scikit-learn, Model Evaluation\n🧠 **Deep Learning**: TensorFlow/PyTorch\n\nCheck our AI resources to get started!";
    const defaultResponses = ["That's an interesting question! Could you be more specific?", "I'm here to help with your tech learning journey! What specific topic interests you?", "Great question! Our platform has comprehensive resources. Could you tell me more?"];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async (messageText?: string) => {
    // This logic remains unchanged.
    const textToSend = messageText || inputText.trim();
    if (!textToSend) return;
    const userMessage: Message = { id: Date.now().toString(), text: textToSend, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    try {
      const aiResponse = await getAIResponse(textToSend);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), text: aiResponse, sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = { id: (Date.now() + 1).toString(), text: "I apologize, but I'm having trouble processing your request right now.", sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{ id: '1', text: "Chat cleared! I'm here to help you with any tech learning questions.", sender: 'ai', timestamp: new Date() }]);
  };

  return (
    <>
      {/* --- CSS FOR THE NEW FLOAT ANIMATION --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
      
      {/* --- THE NEW, IMPROVED AI CHAT BUTTON --- */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-purple-600 to-pink-600 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          {/* The main icon */}
          <Bot className="h-9 w-9" />
          
          {/* The "Online" status indicator */}
          <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        
          {/* A much cleaner tooltip that appears on hover */}
          <div className="absolute bottom-full right-1/2 translate-x-1/2 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
            Ask AI Assistant 🤖
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* --- CHAT WINDOW (THIS REMAINS UNCHANGED) --- */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div className={`bg-white border-2 border-purple-300 rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          }`} style={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)' }}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                  <Bot className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Learning Assistant</h3>
                  <p className="text-sm opacity-90">Always here to help! 🚀</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  {isMinimized ? <Maximize2 className="h-5 w-5" /> : <Minimize2 className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Quick Questions */}
                {messages.length <= 1 && (
                  <div className="p-4 border-b border-purple-100">
                    <p className="text-sm text-gray-600 mb-3 font-semibold">Quick questions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question.query)}
                          className="flex items-center space-x-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-left border border-purple-200"
                        >
                          <question.icon className="h-4 w-4 text-purple-600" />
                          <span className="text-xs text-gray-700 font-medium">{question.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-pink-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-2xl border border-gray-200">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-purple-100">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about tech learning..."
                      className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm"
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim() || isTyping}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {messages.length > 2 && (
                    <div className="flex justify-center mt-3">
                      <button
                        onClick={clearChat}
                        className="text-xs text-gray-500 hover:text-purple-600 transition-colors duration-200 font-medium"
                      >
                        Clear chat
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;