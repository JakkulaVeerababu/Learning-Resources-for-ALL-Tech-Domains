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

    // Business and Finance
    if (lowerMessage.includes('business') || lowerMessage.includes('finance') || lowerMessage.includes('marketing') || lowerMessage.includes('startup')) {
      return "💼 **Business & Finance Consultant**\n\nI provide expert guidance on:\n\n📈 **Business Strategy**:\n- Market analysis and competitive research\n- Business model development\n- Growth strategies and scaling\n\n💰 **Finance & Investment**:\n- Financial planning and budgeting\n- Investment strategies and portfolio management\n- Risk assessment and mitigation\n\n📢 **Marketing & Sales**:\n- Digital marketing strategies\n- Brand development and positioning\n- Customer acquisition and retention\n\n🚀 **Entrepreneurship**:\n- Startup guidance and mentoring\n- Pitch deck creation\n- Funding and investor relations\n\n**What business challenge can I help you tackle?**";
    }

    // Health and Medicine
    if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('fitness') || lowerMessage.includes('nutrition')) {
      return "🏥 **Health & Wellness Advisor**\n\n⚠️ *Disclaimer: For informational purposes only. Consult healthcare professionals for medical advice.*\n\n💪 **Fitness & Exercise**:\n- Workout plans and routines\n- Exercise form and techniques\n- Sports performance optimization\n\n🥗 **Nutrition & Diet**:\n- Meal planning and recipes\n- Nutritional analysis\n- Dietary recommendations\n\n🧠 **Mental Health**:\n- Stress management techniques\n- Mindfulness and meditation\n- Work-life balance strategies\n\n📚 **Medical Knowledge**:\n- Anatomy and physiology\n- Disease prevention\n- Health research and studies\n\n**How can I support your health and wellness journey?**";
    }

    // Creative and Arts
    if (lowerMessage.includes('creative') || lowerMessage.includes('art') || lowerMessage.includes('writing') || lowerMessage.includes('music') || lowerMessage.includes('design')) {
      return "🎨 **Creative Arts & Design Mentor**\n\nUnlock your creative potential:\n\n✍️ **Writing & Literature**:\n- Creative writing techniques\n- Content creation and copywriting\n- Poetry, storytelling, and screenwriting\n- Grammar, style, and editing\n\n🎵 **Music & Audio**:\n- Music theory and composition\n- Instrument learning guidance\n- Audio production and mixing\n- Music history and analysis\n\n🎨 **Visual Arts & Design**:\n- Digital art and illustration\n- UI/UX design principles\n- Photography techniques\n- Graphic design and branding\n\n🎭 **Performance Arts**:\n- Acting and theater\n- Public speaking and presentation\n- Dance and choreography\n\n**What creative project can I help bring to life?**";
    }

    // History and Social Sciences
    if (lowerMessage.includes('history') || lowerMessage.includes('geography') || lowerMessage.includes('politics') || lowerMessage.includes('culture')) {
      return "🌍 **History & Social Sciences Expert**\n\nExplore human knowledge and culture:\n\n📜 **World History**:\n- Ancient civilizations and empires\n- Modern history and world wars\n- Cultural movements and revolutions\n- Historical analysis and interpretation\n\n🗺️ **Geography & Environment**:\n- Physical and human geography\n- Climate change and sustainability\n- Urban planning and development\n- Natural disasters and geology\n\n🏛️ **Politics & Society**:\n- Government systems and policies\n- International relations\n- Social movements and change\n- Economics and trade\n\n🎭 **Culture & Anthropology**:\n- World cultures and traditions\n- Language evolution and linguistics\n- Religion and philosophy\n- Archaeology and artifacts\n\n**What aspect of human civilization interests you?**";
    }

    // Technology and Innovation
    if (lowerMessage.includes('ai') || lowerMessage.includes('technology') || lowerMessage.includes('innovation') || lowerMessage.includes('future')) {
      return "🤖 **Technology & Innovation Futurist**\n\nExploring the cutting edge:\n\n🧠 **Artificial Intelligence**:\n- Machine Learning algorithms\n- Deep Learning and Neural Networks\n- Natural Language Processing\n- Computer Vision and Robotics\n\n🔬 **Emerging Technologies**:\n- Quantum Computing\n- Blockchain and Cryptocurrency\n- IoT and Smart Systems\n- Biotechnology and Genetics\n\n🚀 **Future Trends**:\n- Technology predictions\n- Industry disruption analysis\n- Innovation strategies\n- Ethical implications of tech\n\n💡 **Research & Development**:\n- Patent analysis\n- Technology transfer\n- R&D methodologies\n- Innovation management\n\n**What technological frontier shall we explore together?**";
    }

    // Education and Learning
    if (lowerMessage.includes('learn') || lowerMessage.includes('study') || lowerMessage.includes('education') || lowerMessage.includes('teach')) {
      return "🎓 **Advanced Learning & Education Specialist**\n\nPersonalized learning solutions:\n\n📚 **Study Strategies**:\n- Effective learning techniques\n- Memory improvement methods\n- Time management and productivity\n- Exam preparation strategies\n\n🏫 **Academic Support**:\n- Subject-specific tutoring\n- Research methodology\n- Academic writing and citations\n- Thesis and dissertation guidance\n\n👨‍🏫 **Teaching & Training**:\n- Curriculum development\n- Instructional design\n- Educational technology\n- Assessment and evaluation\n\n🌟 **Personal Development**:\n- Skill acquisition frameworks\n- Career planning and guidance\n- Leadership development\n- Communication skills\n\n**What learning goal can I help you achieve?**";
    }

    // Legal and Compliance
    if (lowerMessage.includes('legal') || lowerMessage.includes('law') || lowerMessage.includes('rights') || lowerMessage.includes('compliance')) {
      return "⚖️ **Legal & Compliance Advisor**\n\n⚠️ *Disclaimer: For informational purposes only. Consult qualified legal professionals for legal advice.*\n\n📋 **Legal Information**:\n- Contract law and agreements\n- Intellectual property rights\n- Business law and regulations\n- Employment law basics\n\n🏛️ **Compliance & Governance**:\n- Regulatory compliance\n- Data protection and privacy\n- Corporate governance\n- Risk management\n\n🌐 **International Law**:\n- Trade law and regulations\n- Human rights frameworks\n- International agreements\n- Cross-border legal issues\n\n📖 **Legal Research**:\n- Case law analysis\n- Statute interpretation\n- Legal writing and documentation\n- Court procedures\n\n**What legal topic can I help clarify?**";
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
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
            style={{ 
              boxShadow: '0 20px 40px rgba(168, 85, 247, 0.6), 0 0 0 4px rgba(168, 85, 247, 0.2)'
            }}
          >
            <div className="relative flex items-center justify-center">
              <Brain className="h-8 w-8" />
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-spin" />
            </div>
            
            <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
              🧠 Advanced AI Assistant
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <div className={`bg-white border-2 border-purple-300 rounded-2xl shadow-2xl transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
          }`}>
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
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
                  <div className="p-4 border-b border-purple-100">
                    <p className="text-sm text-gray-600 mb-3 font-semibold">Quick start:</p>
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
                      <div className={`flex items-start space-x-2 max-w-[85%] ${
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
                            <Brain className="h-4 w-4 text-white" />
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
                          <Brain className="h-4 w-4 text-white" />
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
                      placeholder="Ask me anything - I have global knowledge!"
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

export default PowerfulAI;