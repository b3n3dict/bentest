
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Token {
  text: string;
  color: string;
}

interface Line {
  tokens: Token[];
  indent: number;
}

const lines: Line[] = [
  {
    indent: 0,
    tokens: [
      { text: 'if', color: 'text-blue-400' },
      { text: ' (', color: 'text-gray-400' },
      { text: 'life', color: 'text-gray-300' },
      { text: '.', color: 'text-gray-400' },
      { text: 'gives', color: 'text-pink-400' },
      { text: '(', color: 'text-gray-400' },
      { text: '"bugs"', color: 'text-orange-400' },
      { text: '))', color: 'text-gray-400' },
      { text: ':', color: 'text-gray-400' },
    ]
  },
  {
    indent: 4,
    tokens: [
      { text: 'debug', color: 'text-pink-400' },
      { text: '()', color: 'text-gray-400' },
    ]
  },
  {
    indent: 0,
    tokens: [
      { text: 'else', color: 'text-blue-400' },
      { text: ':', color: 'text-gray-400' },
    ]
  },
  {
    indent: 4,
    tokens: [
      { text: 'keep_coding', color: 'text-pink-400' },
      { text: '()', color: 'text-gray-400' },
    ]
  }
];

export const LoadingScreen: React.FC<{ onFinished: () => void }> = ({ onFinished }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        onFinished();
      }, 1500); // Wait a bit after completion before fading out
      return () => clearTimeout(timeout);
    }

    const currentLine = lines[currentLineIndex];
    const fullTextOfLine = currentLine.tokens.map(t => t.text).join('');

    if (currentCharIndex < fullTextOfLine.length) {
      const timeout = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, 40); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      if (currentLineIndex < lines.length - 1) {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 300); // Delay between lines
        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    }
  }, [currentLineIndex, currentCharIndex, isComplete, onFinished]);

  const renderTypedLine = (line: Line, index: number) => {
    let charCounter = 0;
    const isLineComplete = index < currentLineIndex;
    const isCurrentlyTyping = index === currentLineIndex;

    if (!isLineComplete && !isCurrentlyTyping) return null;

    return (
      <div key={index} className="flex whitespace-pre mono py-1">
        {/* Indentation */}
        {Array(line.indent).fill(' ').join('')}
        
        {line.tokens.map((token, tIdx) => {
          const start = charCounter;
          charCounter += token.text.length;
          
          if (isLineComplete) {
            return <span key={tIdx} className={token.color}>{token.text}</span>;
          }

          const visibleInToken = Math.max(0, Math.min(token.text.length, currentCharIndex - start));
          return (
            <span key={tIdx} className={token.color}>
              {token.text.substring(0, visibleInToken)}
            </span>
          );
        })}

        {/* Cursor */}
        {isCurrentlyTyping && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            // Changed 'steps(2)' to 'linear' to fix type error. 
            // 'linear' is a valid Easing type in Framer Motion.
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="w-2 h-5 bg-white/60 ml-0.5 inline-block align-middle"
          />
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-8 opacity-20 mono text-[10px] tracking-widest uppercase">
          Initializing Benedict_OS v2.4.0...
        </div>
        <div className="space-y-1">
          {lines.map((line, i) => renderTypedLine(line, i))}
        </div>
        
        {/* Post-completion cursor */}
        {isComplete && (
           <div className="mt-4">
             <motion.span
                animate={{ opacity: [1, 0] }}
                // Changed 'steps(2)' to 'linear' to fix type error.
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-5 bg-white/60 inline-block align-middle"
              />
           </div>
        )}
      </div>
    </div>
  );
};
