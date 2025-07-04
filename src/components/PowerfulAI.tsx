import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Sparkles, Zap, Brain, Code, BookOpen, HelpCircle, Minimize2, Maximize2, Globe, Calculator, Lightbulb, Search } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

const PowerfulAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your Advanced AI Assistant 🤖 I have comprehensive knowledge across ALL domains including:\n\n🎓 **Education**: GATE prep, programming, math, science\n💼 **Business**: Strategy, marketing, finance, management\n🔬 **Science**: Physics, chemistry, biology, research\n🌍 **General Knowledge**: History, geography, current events\n💡 **Creative**: Writing, art, music, design\n🏥 **Health**: Medical info, fitness, nutrition\n⚖️ **Legal**: Laws, regulations, compliance\n\nAsk me ANYTHING - from coding problems to life advice!",
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
    { icon: Code, text: "Programming Help", query: "Help me with coding problems and programming concepts" },
    { icon: Calculator, text: "Math & Science", query: "Solve mathematical problems and explain scientific concepts" },
    { icon: Globe, text: "General Knowledge", query: "Tell me about world history, geography, and current events" },
    { icon: Lightbulb, text: "Creative Ideas", query: "Help me brainstorm creative ideas and solutions" },
    { icon: BookOpen, text: "Learning Path", query: "Create a personalized learning roadmap for my goals" },
    { icon: Search, text: "Research Help", query: "Help me research and analyze complex topics" }
  ];

  const getAdvancedAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2500));

    const lowerMessage = userMessage.toLowerCase();
    
    // Programming and Technology
    if (lowerMessage.includes('programming') || lowerMessage.includes('coding') || lowerMessage.includes('software')) {
      return "🚀 **Programming Expertise at Your Service!**\n\nI can help you with:\n\n💻 **Languages**: Python, JavaScript, Java, C++, Rust, Go, and 50+ more\n🏗️ **Frameworks**: React, Angular, Django, Spring, Express, Flutter\n🗄️ **Databases**: SQL, MongoDB, PostgreSQL, Redis\n☁️ **Cloud**: AWS, Azure, GCP, Docker, Kubernetes\n🔧 **DevOps**: CI/CD, Git, Jenkins, Terraform\n\n**What specific programming challenge can I solve for you?**\n- Debug code issues\n- Explain algorithms\n- Design system architecture\n- Code reviews and optimization\n- Best practices and patterns";
    }

    // Mathematics and Science
    if (lowerMessage.includes('math') || lowerMessage.includes('science') || lowerMessage.includes('physics') || lowerMessage.includes('chemistry')) {
      return "🧮 **Advanced Mathematics & Science Assistant**\n\nI can solve and explain:\n\n📐 **Mathematics**:\n- Calculus, Linear Algebra, Statistics\n- Differential Equations, Number Theory\n- Discrete Math, Probability\n\n🔬 **Sciences**:\n- Physics: Mechanics, Thermodynamics, Quantum\n- Chemistry: Organic, Inorganic, Physical\n- Biology: Molecular, Genetics, Ecology\n\n🎯 **Applications**:\n- Research methodology\n- Data analysis and modeling\n- Scientific paper writing\n- Experimental design\n\n**Share your specific problem and I'll provide step-by-step solutions!**";
    }

    // Default comprehensive response
    const comprehensiveResponses = [
      "🌟 **I'm here to help with absolutely anything!** My knowledge spans:\n\n🎯 **Academic**: All subjects from elementary to PhD level\n💼 **Professional**: Business, finance, marketing, management\n🔬 **Scientific**: Research, analysis, experimentation\n🎨 **Creative**: Art, writing, music, design\n🌍 **Global**: Current events, history, cultures\n💡 **Personal**: Life advice, decision-making, problem-solving\n\n**Please share your specific question or challenge, and I'll provide detailed, expert-level assistance!**",
      
      "🚀 **Advanced AI at Your Service!** I can assist with:\n\n📊 **Analysis & Research**: Deep dives into any topic\n🛠️ **Problem Solving**: Step-by-step solutions\n📝 **Content Creation**: Writing, editing, brainstorming\n🎯 **Strategy & Planning**: Goal setting and execution\n🔍 **Learning Support**: Explanations and tutorials\n💬 **Consultation**: Expert advice across domains\n\n**What specific area would you like to explore? I'm equipped to handle complex, nuanced discussions on virtually any subject!**",
      
      "🧠 **Comprehensive Knowledge Assistant Ready!**\n\nI excel in:\n\n🎓 **Education**: Teaching, learning, academic support\n💻 **Technology**: Programming, AI, emerging tech\n🏥 **Health**: Wellness, fitness, medical information\n🌱 **Environment**: Sustainability, climate, conservation\n⚖️ **Ethics**: Moral reasoning, decision frameworks\n🎭 **Culture**: Arts, literature, philosophy\n\n**Ask me anything - from technical problems to philosophical questions. I provide thoughtful, well-researched responses!**"
    ];

    return comprehensiveResponses[Math.floor(Math.random() * comprehensiveResponses.length)];
  };

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputText.trim();
    if (!textToSend) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const aiResponse = await getAdvancedAIResponse(textToSend);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please try again or rephrase your question. I'm here to help with any topic you'd like to discuss!",
        sender: 'ai',
        timestamp: new Date()
      };
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
    setMessages([
      {
        id: '1',
        text: "Chat cleared! I'm your Advanced AI Assistant ready to help with ANY topic. What would you like to explore today?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* AI Chat Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 border border-red-500/50"
            style={{ 
              boxShadow: '0 20px 40px rgba(220, 38, 38, 0.6), 0 0 0 4px rgba(220, 38, 38, 0.2)'
            }}
          >
            <div className="relative flex items-center justify-center">
              <Brain className="h-8 w-8" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-spin" />
            </div>
            
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-red-500/30">
              🧠 Advanced AI Assistant
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div className={`bg-black/90 border-2 border-red-500/30 rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-sm ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          }`}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-2xl flex items-center justify-between border-b border-red-500/30">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                  <Brain className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Advanced AI Assistant</h3>
                  <p className="text-sm opacity-90">Global Knowledge Expert 🌍</p>
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
                  <div className="p-4 border-b border-red-500/30">
                    <p className="text-sm text-gray-400 mb-3 font-semibold">Quick start:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(question.query)}
                          className="flex items-center space-x-2 p-3 bg-red-950/30 hover:bg-red-950/50 rounded-lg transition-colors duration-200 text-left border border-red-500/30"
                        >
                          <question.icon className="h-4 w-4 text-red-400" />
                          <span className="text-xs text-gray-300 font-medium">{question.text}</span>
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
                      <div className={`flex items-start space-x-2 max-w-[85%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-red-600 to-red-700' 
                            : 'bg-gradient-to-r from-red-700 to-red-800'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Brain className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                            : 'bg-red-950/30 text-gray-200 border border-red-500/30'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-red-100' : 'text-gray-400'
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
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-700 to-red-800 flex items-center justify-center">
                          <Brain className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-red-950/30 p-3 rounded-2xl border border-red-500/30">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-red-500/30">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything - I have global knowledge!"
                      className="flex-1 px-4 py-3 bg-red-950/30 border border-red-500/50 rounded-full focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-sm text-white placeholder-gray-400"
                      disabled={isTyping}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim() || isTyping}
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100 border border-red-500/50"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {messages.length > 2 && (
                    <div className="flex justify-center mt-3">
                      <button
                        onClick={clearChat}
                        className="text-xs text-gray-400 hover:text-red-400 transition-colors duration-200 font-medium"
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

export default PowerfulAI;