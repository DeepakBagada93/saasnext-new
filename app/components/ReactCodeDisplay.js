'use client';
import { useEffect, useRef, useState } from 'react';

const ReactCodeDisplay = () => {
  const codeDisplayRef = useRef(null);
  const [showEmail, setShowEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const code = `import React from 'react';

const SaasnextApp = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h1 className="text-xl font-semibold text-blue-600">Saasnext</h1>
      <p className="text-gray-700">Web App Development & Lead Generation Company.</p>
    </div>
  );
};

export default SaasnextApp;`;

  const fullSubject = ' Web Development Inquiry from Saasnext';
  const fullDescription = 'I’m interested in building a modern responsive web application. Please share pricing and process.';

  useEffect(() => {
    let index = 0;
    const typingSpeed = 30;

    // Create blinking cursor
    const cursor = document.createElement('span');
    cursor.style.display = 'inline-block';
    cursor.style.width = '0.75rem';
    cursor.style.height = '1.5rem';
    cursor.style.backgroundColor = '#f8fafc';
    cursor.style.marginLeft = '0.25rem';
    cursor.style.animation = 'blink-animation 1s steps(5, start) infinite';
    cursor.classList.add('cursor-blink');

    const codeDisplay = codeDisplayRef.current;
    if (!codeDisplay) return;

    codeDisplay.appendChild(cursor);

    const typeCode = () => {
      if (index < code.length) {
        codeDisplay.insertBefore(document.createTextNode(code[index]), cursor);
        index++;
        setTimeout(typeCode, typingSpeed);
      } else {
        cursor.remove();
        setTimeout(() => {
          setShowEmail(true);
          autoType(fullSubject, setSubject, () => {
            autoType(fullDescription, setDescription);
          });
        }, 800);
      }
    };

    const autoType = (text, setter, callback) => {
      let i = 0;
      const speed = 40;
      const type = () => {
        if (i < text.length) {
          setter((prev) => prev + text[i]);
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          setTimeout(callback, 400);
        }
      };
      type();
    };

    typeCode();
  }, []);

  return (
    <div className="bg-[#161E42] text-white flex flex-col items-center justify-center min-h-screen px-4 py-10">
      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Code Display Section */}
        <div className="relative bg-slate-800 text-slate-50 p-6 rounded-xl shadow-md font-mono text-sm leading-6 overflow-x-auto whitespace-pre-wrap border border-slate-700">
          <div
            ref={codeDisplayRef}
            className="code-display"
          ></div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <img
            src="/images/saasnext-solutions.jpg"
            alt="Responsive Web App"
            className="rounded-xl shadow-md max-w-full h-auto object-cover"
            onError={(e) => {
              e.target.src = '/images/fallback-image.jpg'; // Fallback image
            }}
          />
          <p className="text-center text-gray-400 text-sm mt-2">
            A modern responsive web app built with Saasnext.
          </p>
        </div>
      </div>

      {/* Email Preview Section */}
      {showEmail && (
        <div className="mt-8 bg-white text-black rounded-xl shadow-md p-6 w-full max-w-3xl mx-auto fade-in">
          <p className="font-semibold text-lg mb-2">✉️ Email Preview</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p className="mt-2"><strong>Description:</strong> {description}</p>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blink-animation {
          to {
            visibility: hidden;
          }
        }
        .cursor-blink {
          animation: blink-animation 1s steps(5, start) infinite;
        }
        .fade-in {
          animation: fadeIn 0.6s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ReactCodeDisplay;