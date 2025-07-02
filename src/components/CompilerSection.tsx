import React, { useState, useEffect, useRef } from 'react';
import { Code, Play, Download, Copy, RotateCcw, Settings, Terminal, FileText, Zap, Globe, CheckCircle, AlertCircle } from 'lucide-react';

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

// THIS IS THE NEW COMPONENT WITH A REAL, BROWSER-BASED PYTHON COMPILER
const CompilerSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);

  // Ref to hold the Pyodide instance
  const pyodideRef = useRef(null);
  
  // All language definitions remain the same, you can add all 20+ back
  const languages: Language[] = [
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      color: 'from-yellow-500 to-green-500',
      extension: '.py',
      version: 'Pyodide', // Updated version name
      description: 'Runs directly in your browser!',
      defaultCode: `# Real Python Compiler (via Pyodide)
import sys
print(f"Hello from Python {sys.version}!")

name = "World" # Try changing this
print(f"Hello, {name}!")
`
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: '📜',
      color: 'from-yellow-500 to-orange-500',
      extension: '.js',
      version: 'Browser V8',
      description: 'Runs natively in your browser!',
      defaultCode: `// Real JavaScript Runner
console.log("Hello, World from JavaScript!");

const numbers = [1, 5, 10];
const squared = numbers.map(n => n * n);
console.log("Squared numbers:", squared);
`
    },
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      color: 'from-orange-500 to-red-500',
      extension: '.java',
      version: '17',
      description: 'Object-oriented programming language',
      defaultCode: `// Mock Java Compiler - For Demo Only
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    },
    {
      id: 'cpp',
      name: 'C++',
      icon: '⚙️',
      color: 'from-blue-500 to-purple-500',
      extension: '.cpp',
      version: 'GCC 11',
      description: 'System programming language',
      defaultCode: `// Mock C++ Compiler - For Demo Only
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
    },
    // Add all your other languages here... they will use the mock output.
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  // Initialize Pyodide on component mount
  useEffect(() => {
    async function loadPyodide() {
      if (!window.loadPyodide) {
        setOutput('Could not load Pyodide. Please check your network connection and setup.');
        return;
      }
      try {
        const pyodide = await window.loadPyodide({
          indexURL: "/pyodide/",
        });
        pyodideRef.current = pyodide;
        setOutput('Python environment is ready. Click "Run Code" to start.');
        setIsPyodideLoading(false);
      } catch (err) {
        setOutput(`Error loading Python environment: ${err}`);
      }
    }
    loadPyodide();
  }, []);

  useEffect(() => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
  }, [selectedLanguage]);

  // THIS IS THE NEW, REAL runCode FUNCTION
  const runCode = async () => {
    setIsRunning(true);
    setOutput('Executing code...');

    if (selectedLanguage === 'python') {
        if (!pyodideRef.current || isPyodideLoading) {
            setOutput('Python environment is not ready yet. Please wait.');
            setIsRunning(false);
            return;
        }
        try {
            // Hijack console.log to capture output
            let consoleOutput = [];
            const pyodide = pyodideRef.current;
            pyodide.globals.set("print", (s) => consoleOutput.push(s));
            await pyodide.loadPackagesFromImports(code);
            let result = await pyodide.runPythonAsync(code);
            let outputText = consoleOutput.join('\n');
            if (result !== undefined) {
                outputText += `\n[Return Value]: ${result}`;
            }
            setOutput(outputText || 'Execution finished with no output.');
        } catch (err) {
            setOutput(String(err));
        }

    } else if (selectedLanguage === 'javascript') {
        try {
            // Capture console.log for JavaScript
            let capturedLogs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                capturedLogs.push(args.map(a => JSON.stringify(a)).join(' '));
            };
            eval(code);
            console.log = originalLog; // Restore original console.log
            setOutput(capturedLogs.join('\n') || 'Execution finished with no output.');
        } catch(err) {
            setOutput(String(err));
        }

    } else {
        // Mock execution for other languages
        await new Promise(resolve => setTimeout(resolve, 1500));
        setOutput(`✅ This is a demonstration for ${currentLanguage.name}.
        
The code did not actually run. Only Python and JavaScript are live in this demo.
Adding real compilers for other languages requires a server-side API.`);
    }

    setIsRunning(false);
  };
  
  // Other functions (copy, download, reset) remain the same.
  const copyCode = () => navigator.clipboard.writeText(code);

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code${currentLanguage.extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetCode = () => {
    setCode(currentLanguage.defaultCode);
    setOutput('');
  };


  return (
    <section id="compilers" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              💻 Online IDE
            </span>
           </h2>
           <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium">
            Run Python and JavaScript directly in your browser. Other languages are for demonstration.
           </p>
        </div>
        
        {/* Your entire JSX layout for the Compiler Section */}
        {/* It has been removed here for brevity, but you should paste your original JSX code back here. */}
        {/* ... Paste your <div className="mb-8">...</div> and the rest of the JSX here ... */}

         {/* Language Selection */}
         <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Language</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-w-7xl mx-auto">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setSelectedLanguage(language.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === language.id
                    ? 'border-blue-500 bg-white shadow-lg'
                    : 'border-gray-200 bg-white/70 hover:border-blue-400'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${language.color} flex items-center justify-center mx-auto mb-2 text-2xl`}>
                  {language.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-sm">{language.name}</h4>
                <p className="text-xs text-gray-600">{language.version}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Compiler Interface */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-t-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${currentLanguage.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {currentLanguage.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{currentLanguage.name} IDE</h3>
                  <p className="text-gray-600">{currentLanguage.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={copyCode} className="..."><Copy className="h-4 w-4" /><span>Copy</span></button>
                <button onClick={downloadCode} className="..."><Download className="h-4 w-4" /><span>Download</span></button>
                <button onClick={resetCode} className="..."><RotateCcw className="h-4 w-4" /><span>Reset</span></button>
              </div>
            </div>
          </div>
          {/* ... Rest of your JSX here ... */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Code Editor */}
                <div className="bg-white/90 backdrop-blur-sm border-l border-r border-gray-200">
                  <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Code className="h-5 w-5" />
                      <span className="font-semibold">Code Editor</span>
                      <span className="text-gray-400 text-sm">({currentLanguage.extension})</span>
                    </div>
                  </div>
                  <textarea value={code} onChange={(e) => setCode(e.target.value)}
                    className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 border-none resize-none focus:outline-none"
                    placeholder={`Write your ${currentLanguage.name} code here...`}
                    spellCheck={false}/>
                </div>

                {/* Output Panel */}
                <div className="bg-white/90 backdrop-blur-sm border-r border-gray-200">
                  <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2"><Terminal className="h-5 w-5" /><span>Output</span></div>
                  </div>
                  <div className="h-96 p-4 font-mono text-sm bg-gray-900 text-white overflow-y-auto whitespace-pre-wrap">
                    {isRunning ? "Executing..." : output || "Click 'Run Code' to see output..."}
                  </div>
                </div>
            </div>

            {/* ... Rest of your JSX */}
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-b-2xl p-6 shadow-lg">
                <button
                    onClick={runCode}
                    disabled={isRunning || isPyodideLoading && selectedLanguage === 'python'}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 ... disabled:cursor-not-allowed">
                    {(isPyodideLoading && selectedLanguage === 'python') ? (<span>Initializing Python...</span>) : isRunning ? (<span>Running...</span>) : (
                        <><Play className="h-5 w-5" /><span>Run Code</span></>
                    )}
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CompilerSection;