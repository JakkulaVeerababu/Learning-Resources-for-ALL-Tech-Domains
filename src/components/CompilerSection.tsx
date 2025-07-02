import React, { useState, useEffect, useRef } from 'react';
import { Code, Play, Download, Copy, RotateCcw, Settings, Terminal, FileText, Zap, Globe, CheckCircle, AlertCircle } from 'lucide-react';

// Language definition stays the same
interface Language {
  id: string; name: string; icon: string; color: string; defaultCode: string; extension: string; version: string; description: string;
}

// THIS IS THE NEW, FULLY WORKING COMPONENT
const CompilerSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('Welcome! Select a language and start coding.');
  const [isRunning, setIsRunning] = useState(false);
  
  // State to specifically track Pyodide's loading status
  const [isPyodideReady, setIsPyodideReady] = useState(false);

  const pyodideRef = useRef(null);

  // Define languages
  const languages: Language[] = [
    { id: 'python', name: 'Python', icon: '🐍', color: 'from-yellow-500 to-green-500', extension: '.py', version: 'Pyodide', description: 'Runs in your browser via WebAssembly', defaultCode: `# Real Python Compiler (via Pyodide)\nprint("Hello from Python!")` },
    { id: 'javascript', name: 'JavaScript', icon: '📜', color: 'from-yellow-500 to-orange-500', extension: '.js', version: 'Browser V8', description: 'Runs natively in your browser', defaultCode: `// Real JavaScript Runner\nconsole.log("Hello, World!");` },
    { id: 'java', name: 'Java', icon: '☕', color: 'from-orange-500 to-red-500', extension: '.java', version: 'Demo', description: 'This is a mock compiler', defaultCode: `// Mock Java Compiler - For Demo Only\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}` },
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage) || languages[0];

  // Effect to load Pyodide from CDN only once
  useEffect(() => {
    async function setupPyodide() {
      // Don't re-initialize if it's already there
      if (pyodideRef.current) return;
      
      setOutput("Initializing Python environment, this may take a moment...");
      try {
        // Load the main Pyodide script from the CDN
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
        document.body.appendChild(script);
        
        script.onload = async () => {
          // 'loadPyodide' is now available on the window object
          const pyodide = await window.loadPyodide();
          pyodideRef.current = pyodide; // Store the instance in a ref
          setIsPyodideReady(true); // Signal that it's ready
          setOutput("✅ Python is ready! You can now run Python code.");
        };
        script.onerror = () => {
          setOutput("❌ Failed to load the Pyodide script. Please check your network connection.");
        };
      } catch (error) {
        setOutput(`❌ Error loading Python environment: ${error}`);
      }
    }
    setupPyodide();
  }, []);

  // Update code editor when language changes
  useEffect(() => {
    setCode(currentLanguage.defaultCode);
    if (selectedLanguage === 'python' && isPyodideReady) {
      setOutput("✅ Python is ready. Click 'Run Code'.");
    } else if (selectedLanguage === 'python' && !isPyodideReady) {
      setOutput("Initializing Python environment, please wait...");
    } else {
      setOutput(`Switched to ${currentLanguage.name}. Click 'Run Code'.`);
    }
  }, [selectedLanguage, isPyodideReady]);


  // THE NEW, REAL runCode FUNCTION
  const runCode = async () => {
    setIsRunning(true);
    setOutput('Executing code...');
    
    // Give UI a moment to update
    await new Promise(resolve => setTimeout(resolve, 50)); 

    if (selectedLanguage === 'python') {
      if (!isPyodideReady || !pyodideRef.current) {
        setOutput('Python environment is not ready yet. Please wait.');
        setIsRunning(false);
        return;
      }
      try {
        const pyodide = pyodideRef.current;
        let capturedOutput = [];
        pyodide.setStdout({ batched: (str) => capturedOutput.push(str) });
        pyodide.setStderr({ batched: (str) => capturedOutput.push(str) });

        await pyodide.loadPackagesFromImports(code);
        await pyodide.runPythonAsync(code);

        setOutput(capturedOutput.join('\n') || 'Execution finished with no output.');
      } catch (err) {
        setOutput(String(err));
      }

    } else if (selectedLanguage === 'javascript') {
      try {
        let capturedLogs = [];
        const originalLog = console.log;
        console.log = (...args) => capturedLogs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        eval(code);
        console.log = originalLog;
        setOutput(capturedLogs.join('\n') || 'Execution finished with no output.');
      } catch (err) {
        setOutput(String(err));
      }

    } else {
      // Mock execution for other languages
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOutput(`✅ This is a mock compiler for ${currentLanguage.name}.\n\nThe code was not actually run.`);
    }

    setIsRunning(false);
  };
  
  // Other helper functions are fine
  const copyCode = () => navigator.clipboard.writeText(code);
  const downloadCode = () => { /* ... code is the same ... */ };
  const resetCode = () => setCode(currentLanguage.defaultCode);


  return (
    <section id="compilers" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-bold">Online IDE</h2>
           <p className="text-xl text-gray-700">Run Python & JavaScript in your browser. Other languages are demos.</p>
        </div>
        
        {/* === Language Selection === */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-7xl mx-auto mb-8">
            {languages.map(lang => (
              <button key={lang.id} onClick={() => setSelectedLanguage(lang.id)} className={`p-4 rounded-xl border-2 transition-transform hover:scale-105 ${selectedLanguage === lang.id ? 'border-blue-500 shadow-md' : 'border-gray-200'}`}>
                  {/* ... icon and text ... */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${lang.color} flex items-center justify-center mx-auto mb-2 text-2xl`}>{lang.icon}</div>
                  <h4 className="font-bold text-gray-800 text-sm">{lang.name}</h4>
              </button>
            ))}
        </div>
        
        {/* === Compiler Interface === */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200">
            {/* ... other parts of your UI */}
            {/* Code Editor & Output */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="border-r border-gray-200">
                  <div className="p-4 bg-gray-800 text-white rounded-tl-xl"><Code className="inline mr-2 h-5"/>Code Editor ({currentLanguage.extension})</div>
                  <textarea value={code} onChange={(e) => setCode(e.target.value)} className="w-full h-96 p-4 font-mono bg-gray-900 text-green-400 focus:outline-none resize-none" />
                </div>
                <div>
                  <div className="p-4 bg-gray-800 text-white"><Terminal className="inline mr-2 h-5"/>Output</div>
                  <div className="h-96 p-4 font-mono bg-gray-900 text-white overflow-y-auto whitespace-pre-wrap">{output}</div>
                </div>
            </div>
            {/* Run Button Footer */}
            <div className="p-4 border-t border-gray-200 rounded-b-2xl">
                 <button onClick={runCode}
                    disabled={(selectedLanguage === 'python' && !isPyodideReady) || isRunning}
                    className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-wait flex items-center justify-center transition-all"
                 >
                    {(selectedLanguage === 'python' && !isPyodideReady) 
                        ? 'Initializing Python...' 
                        : isRunning 
                        ? <><div className="animate-spin h-5 w-5 mr-3 border-t-2 rounded-full"></div>Running...</>
                        : <><Play className="h-5 w-5 mr-2" />Run Code</>
                    }
                 </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CompilerSection;