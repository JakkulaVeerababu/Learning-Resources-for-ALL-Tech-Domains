import React, { useState } from 'react';
import { Code, Play, Download, Copy, RotateCcw, Settings, Terminal, FileText, Zap, Globe, CheckCircle, AlertCircle } from 'lucide-react';

interface Language {
  id: string;
  name: string;
  icon: string;
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
      icon: 'Py',
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
      icon: 'Jv',
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
      icon: 'C++',
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
      icon: 'JS',
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

  React.useEffect(() => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
  }, [selectedLanguage]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Compiling and running...\n');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const mockOutput = `Compilation successful.
Program Output:
Hello, World!
Enter your name: ${input || 'User'}
Welcome to ${currentLanguage.name}, ${input || 'User'}!
Original: [1, 2, 3, 4, 5]
Squared: [1, 4, 9, 16, 25]
Fibonacci(10): 55

Execution time: 0.${Math.floor(Math.random() * 900 + 100)}s
Memory used: ${Math.floor(Math.random() * 50 + 10)}MB
Exit code: 0`;

      setOutput(mockOutput);
    } catch (error) {
      setOutput(`Compilation Error:\nError: ${error}\n\nPlease check your code and try again.`);
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
    <section id="compilers" className="py-20 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Online Compilers
          </h2>
          <p className="text-xl text-secondary max-w-4xl mx-auto font-medium">
            Write and run code in Python, Java, C++, and JavaScript directly in your browser. Useful for learning and quick prototyping.
          </p>
        </div>

        {/* Language Selection */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Choose Your Programming Language</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === language.id
                    ? 'border-accent bg-card shadow-md'
                    : 'border-default bg-card hover:border-hover'
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary border border-default flex items-center justify-center mx-auto mb-2 text-lg font-bold text-primary">
                  {language.icon}
                </div>
                <h4 className="font-bold text-primary text-sm">{language.name}</h4>
                <p className="text-xs text-secondary">{language.version}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Compiler Interface */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-card border border-default rounded-t-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl bg-secondary border border-default flex items-center justify-center text-2xl font-bold text-primary">
                  {currentLanguage.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{currentLanguage.name} Compiler</h3>
                  <p className="text-secondary">{currentLanguage.description} - {currentLanguage.version}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={copyCode} className="bg-secondary hover:bg-tertiary px-4 py-2 rounded-lg text-primary font-semibold transition-all duration-300 flex items-center space-x-2 border border-default">
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </button>
                <button onClick={downloadCode} className="bg-secondary hover:bg-tertiary px-4 py-2 rounded-lg text-primary font-semibold transition-all duration-300 flex items-center space-x-2 border border-default">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
                <button onClick={resetCode} className="bg-secondary hover:bg-tertiary px-4 py-2 rounded-lg text-primary font-semibold transition-all duration-300 flex items-center space-x-2 border border-default">
                  <RotateCcw className="h-4 w-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor and Output */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Code Editor */}
            <div className="bg-card border-l border-r border-default">
              <div className="bg-tertiary text-primary p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span className="font-semibold">Code Editor</span>
                  <span className="text-secondary text-sm">({currentLanguage.extension})</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full border border-default"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full border border-default"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full border border-default"></div>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-input text-primary border-none resize-none focus:outline-none"
                placeholder={`Write your ${currentLanguage.name} code here...`}
                spellCheck={false}
              />
            </div>

            {/* Output Panel */}
            <div className="bg-card border-r border-default">
              <div className="bg-tertiary text-primary p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-5 w-5" />
                  <span className="font-semibold">Output</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isRunning ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                      <span className="text-sm">Running...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Ready</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="h-96 p-4 font-mono text-sm bg-input text-primary overflow-y-auto">
                {output || (
                  <div className="text-secondary">
                    <p>Click "Run Code" to execute your program.</p>
                    <p className="mt-2">Output will appear here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Input and Controls */}
          <div className="bg-card border border-default rounded-b-2xl p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <label className="block text-primary font-semibold mb-3">
                  Program Input (if required)
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full h-24 px-4 py-3 bg-input border border-default rounded-lg text-primary placeholder:text-tertiary focus:border-hover focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Enter input for your program (if needed)..."
                />
              </div>

              <div className="flex flex-col justify-end">
                <button
                  onClick={runCode}
                  disabled={isRunning || !code.trim()}
                  className="w-full bg-accent bg-accent-hover disabled:opacity-50 px-8 py-4 rounded-lg text-accent-text font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-sm border-accent"
                >
                  {isRunning ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-text"></div>
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
          <div className="bg-card border border-default rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-primary mb-2">Fast Compilation</h4>
            <p className="text-secondary text-sm">Quick compilation and execution</p>
          </div>

          <div className="bg-card border border-default rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-primary mb-2">No Installation</h4>
            <p className="text-secondary text-sm">Run code directly in your browser</p>
          </div>

          <div className="bg-card border border-default rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-primary mb-2">Save & Share</h4>
            <p className="text-secondary text-sm">Download code or copy to clipboard</p>
          </div>

          <div className="bg-card border border-default rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
            <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-lg font-bold text-primary mb-2">Multiple Languages</h4>
            <p className="text-secondary text-sm">Several languages supported</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-default rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-3xl font-bold text-primary mb-4">Start Coding Now</h3>
            <p className="text-xl text-secondary mb-8">
              Choose any programming language above and start writing code immediately. Perfect for learning,
              testing algorithms, or quick prototyping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setSelectedLanguage('python')} className="bg-accent bg-accent-hover px-8 py-4 rounded-full text-accent-text font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-sm border-accent">
                <span>Try Python</span>
              </button>
              <button onClick={() => setSelectedLanguage('javascript')} className="bg-card hover:bg-secondary border border-default hover:border-hover px-8 py-4 rounded-full text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-sm">
                <span>Try JavaScript</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompilerSection;
