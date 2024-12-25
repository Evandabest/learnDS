'use client';

import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';

const defaultCode = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`;

export default function CodePage() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);

  const compileAndRun = async () => {
    setIsCompiling(true);
    try {
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      setOutput(data.output || data.error);
    } catch (error) {
      setOutput('Compilation failed: ' + (error as Error).message);
    }
    setIsCompiling(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl  font-bold mb-4">Online C++ Compiler</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border rounded-lg overflow-hidden h-[600px]">
          <CodeMirror
            value={code}
            height="100%"
            theme={oneDark}
            extensions={[cpp()]}
            onChange={(value) => setCode(value)}
            className="h-full"
          />
        </div>
        
        <div className="flex flex-col h-[600px]">
          <button
            className={`mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
              ${isCompiling ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={compileAndRun}
            disabled={isCompiling}
          >
            {isCompiling ? 'Compiling...' : 'Compile & Run'}
          </button>
          
          <div className="flex-1 bg-gray-900 text-white p-4 rounded-lg font-mono overflow-auto">
            {output || 'Output will appear here...'}
          </div>
        </div>
      </div>
    </div>
  );
}