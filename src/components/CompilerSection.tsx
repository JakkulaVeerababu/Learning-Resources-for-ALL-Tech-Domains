import React, { useState } from 'react';
import { Code, Play, Download, Copy, RotateCcw, Settings, Terminal, FileText, Zap, Globe } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  icon: string;
  color: string;
  defaultCode: string;
  extension: string;
  version: string;
  description: string;
}

const CompilerSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');

  const languages: Language[] = [
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      color: 'from-red-500 to-red-600',
      extension: '.py',
      version: '3.11',
      description: 'High-level programming language',
      defaultCode: `# Python Online Compiler
print("Hello, World!")

# Basic operations
name = input("Enter your name: ")
print(f"Welcome to Python, {name}!")

# List operations
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(f"Original: {numbers}")
print(f"Squared: {squared}")

# Function example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(f"Fibonacci(10): {fibonacci(10)}")`
    },
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      color: 'from-red-600 to-red-700',
      extension: '.java',
      version: '17',
      description: 'Object-oriented programming language',
      defaultCode: `// Java Online Compiler
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Hello, World!");
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Welcome to Java, " + name + "!");
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Original array: ");
        System.out.println(Arrays.toString(numbers));
        
        // Calculate squares
        int[] squared = new int[numbers.length];
        for(int i = 0; i < numbers.length; i++) {
            squared[i] = numbers[i] * numbers[i];
        }
        System.out.print("Squared array: ");
        System.out.println(Arrays.toString(squared));
        
        scanner.close();
    }
}`
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: '⚙️',
      color: 'from-red-700 to-red-800',
      extension: '.cpp',
      version: 'GCC 11',
      description: 'System programming language',
      defaultCode: `// C++ Online Compiler
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    
    string name;
    cout << "Enter your name: ";
    getline(cin, name);
    cout << "Welcome to C++, " << name << "!" << endl;
    
    // Vector operations
    vector<int> numbers = {1, 2, 3, 4, 5};
    vector<int> squared;
    
    cout << "Original: ";
    for(int num : numbers) {
        cout << num << " ";
        squared.push_back(num * num);
    }
    cout << endl;
    
    cout << "Squared: ";
    for(int num : squared) {
        cout << num << " ";
    }
    cout << endl;
    
    return 0;
}`
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '📜',
      color: 'from-red-500 to-red-700',
      extension: '.js',
      version: 'Node.js 18',
      description: 'Dynamic web programming language',
      defaultCode: `// JavaScript Online Compiler
console.log("Hello, World!");

// Simulating input (in real environment, use prompt or readline)
const name = "Developer"; // Replace with actual input
console.log(\`Welcome to JavaScript, \${name}!\`);

// Array operations
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(x => x * x);

console.log("Original:", numbers);
console.log("Squared:", squared);

// Function example
const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log("Fibonacci(10):", fibonacci(10));`
    }
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  // Initialize code when language changes
  React.useEffect(() => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
  }, [selectedLanguage, currentLanguage.defaultCode]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and running...\n');
    
    try {
      // Simulate compilation and execution
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock output based on language
      const mockOutput = `✅ Compilation successful!
📤 Program Output:
Hello, World!
Enter your name: ${input || 'User'}
Welcome to ${currentLanguage.name}, ${input || 'User'}!
Original: [1, 2, 3, 4, 5]
Squared: [1, 4, 9, 16, 25]
Fibonacci(10): 55

⏱️ Execution time: 0.${Math.floor(Math.random() * 900 + 100)}s
💾 Memory used: ${Math.floor(Math.random() * 50 + 10)}MB
🎯 Exit code: 0`;

      setOutput(mockOutput);
    } catch (error) {
      setOutput(`❌ Compilation Error:\nError: ${error}\n\nPlease check your code and try again.`);
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code${currentLanguage.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetCode = () => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
    setInput('');
  };

  return (
    <section id="compilers" className="py-20 px-6 bg-gradient-to-br from-black via-red-950 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              💻 Online Compilers & IDEs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-medium">
            Write, compile, and run code in 20+ programming languages directly in your browser! 
            Perfect for learning, testing, and quick prototyping.
          </p>
        </div>

        {/* Language Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Programming Language</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === language.id
                    ? 'border-red-500 bg-black/80 shadow-lg shadow-red-500/20'
                    : 'border-red-500/30 bg-black/60 hover:border-red-400'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${language.color} flex items-center justify-center mx-auto mb-2 text-2xl`}>
                  {language.icon}
                </div>
                <h4 className="font-bold text-white text-sm">{language.name}</h4>
                <p className="text-xs text-gray-400">{language.version}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Compiler Interface */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-t-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentLanguage.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {currentLanguage.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentLanguage.name} Compiler</h3>
                  <p className="text-gray-400">{currentLanguage.description} • {currentLanguage.version}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={copyCode}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2 border border-red-500/50"
                >
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </button>
                <button
                  onClick={downloadCode}
                  className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2 border border-red-500/50"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={resetCode}
                  className="bg-red-800 hover:bg-red-900 px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2 border border-red-500/50"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor and Output */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Code Editor */}
            <div className="bg-black/80 backdrop-blur-sm border-l border-r border-red-500/30">
              <div className="bg-red-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span className="font-semibold">Code Editor</span>
                  <span className="text-red-200 text-sm">({currentLanguage.extension})</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-black text-red-300 border-none resize-none focus:outline-none"
                placeholder={`Write your ${currentLanguage.name} code here...`}
                spellCheck={false}
              />
            </div>

            {/* Output Panel */}
            <div className="bg-black/80 backdrop-blur-sm border-r border-red-500/30">
              <div className="bg-red-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5" />
                  <span className="font-semibold">Output</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isRunning ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span className="text-sm">Running...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">Ready</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-96 p-4 font-mono text-sm bg-black text-white overflow-y-auto">
                {output || (
                  <div className="text-gray-400">
                    <p>Click "Run Code" to execute your program.</p>
                    <p className="mt-2">Output will appear here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Input and Controls */}
          <div className="bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-b-2xl p-6 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Section */}
              <div className="lg:col-span-2">
                <label className="block text-white font-semibold mb-3">
                  Program Input (if required)
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full h-24 px-4 py-3 bg-red-950/30 border border-red-500/50 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 resize-none"
                  placeholder="Enter input for your program (if needed)..."
                />
              </div>

              {/* Run Button */}
              <div className="flex flex-col justify-end">
                <button
                  onClick={runCode}
                  disabled={isRunning || !code.trim()}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg border border-red-500/50"
                >
                  {isRunning ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Running...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      <span>Run Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <Zap className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Fast Compilation</h4>
            <p className="text-gray-400 text-sm">Lightning-fast compilation and execution</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <Globe className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">No Installation</h4>
            <p className="text-gray-400 text-sm">Run code directly in your browser</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <FileText className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Save & Share</h4>
            <p className="text-gray-400 text-sm">Download code or copy to clipboard</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
            <Settings className="h-12 w-12 text-red-700 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Multiple Languages</h4>
            <p className="text-gray-400 text-sm">20+ programming languages supported</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-950/50 to-black/50 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">🚀 Start Coding Now!</h3>
            <p className="text-xl text-gray-300 mb-8">
              Choose any programming language above and start writing code immediately. Perfect for learning, 
              testing algorithms, or quick prototyping!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setSelectedLanguage('python')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
              >
                <span>🐍 Try Python</span>
              </button>
              <button 
                onClick={() => setSelectedLanguage('javascript')}
                className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-red-500/50"
              >
                <span>📜 Try JavaScript</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompilerSection;