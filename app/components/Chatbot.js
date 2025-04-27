"use client";
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Chatbot is closed by default
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isMinimized, setIsMinimized] = useState(true); // Chatbot starts minimized

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(true);
    // Optionally reset the chat state
    setCurrentStep(0);
    setAnswers({});
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleOpen = () => {
    setIsMinimized(false);
    setIsOpen(true);
  };

  const questions = [
    {
      id: 'service',
      question: 'Which service are you interested in?',
      options: [
        'Web App Development',
        'Lead Generation',
        'Email Marketing',
        'AI Solutions',
        'Custom SaaS Development'
      ]
    },
    {
      id: 'budget',
      question: 'What is your approximate budget?',
      options: [
        'Less than 5,000',
        '10,000 - 25,000',
        '25,000 - 50,000',
        '50,000+'
      ]
    },
    {
      id: 'timeline',
      question: 'When would you like to start?',
      options: [
        'Immediately',
        'Within 1 month',
        'Within 3 months',
        'Just exploring'
      ]
    },
    {
      id: 'company_size',
      question: 'What is the size of your company?',
      options: [
        'Startup (1-10)',
        'Small (11-50)',
        'Medium (51-200)',
        'Large (200+)'
      ]
    },
    {
      id: 'specific_requirements',
      question: 'Do you have any specific requirements?',
      options: [
        'Custom Features',
        'Integration with existing systems',
        'Scalability needs',
        'Security requirements',
        'Not sure yet'
      ]
    },
    {
      id: 'contact_info',
      question: 'Please provide your contact information:',
      type: 'form',
      fields: [
        { name: 'name', label: 'Your Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: false }
      ]
    }
  ];

  const handleAnswer = async (answer) => {
    const newAnswers = {
      ...answers,
      [questions[currentStep].id]: answer
    };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      try {
        // Format the data for email
        const formattedData = {
          name: answer.name,
          email: answer.email,
          phone: answer.phone || 'Not provided',
          service: newAnswers.service,
          budget: newAnswers.budget,
          timeline: newAnswers.timeline,
          company_size: newAnswers.company_size,
          specific_requirements: newAnswers.specific_requirements,
          source: 'Chatbot'
        };

        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formattedData)
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        // Show success message
        setCurrentStep(questions.length);
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentStep];

    if (currentQuestion.type === 'form') {
      return (
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formAnswers = {};
            
            // Collect all form field values
            currentQuestion.fields.forEach(field => {
              const value = formData.get(field.name);
              formAnswers[field.name] = value || '';
            });

            // Validate required fields
            const isValid = currentQuestion.fields.every(field => {
              if (field.required && !formAnswers[field.name]) {
                alert(`Please fill out the ${field.label.toLowerCase()} field.`);
                return false;
              }
              return true;
            });

            if (isValid) {
              handleAnswer(formAnswers);
            }
          }}
          className="space-y-4"
        >
          {currentQuestion.fields.map(field => (
            <div key={field.name} className="space-y-2">
              <label className="block text-white text-sm font-medium">
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                className="w-full p-2 bg-[#2B3765] text-white border border-gray-700/30 rounded-lg placeholder-gray-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      );
    }

    return (
      <div className="space-y-2">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="w-full p-3 text-left bg-[#1F2A56] text-gray-300 border border-gray-700/30 rounded-xl hover:bg-[#2B3765] hover:text-white transition-all duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 transition-all duration-300 ${isMinimized ? 'w-12 h-12' : 'w-[90vw] sm:w-[400px] max-w-[400px]'}`}>
      {isMinimized ? (
        <button
          onClick={handleOpen}
          className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            {/* Animated dots */}
            <circle cx="12" cy="12" r="1">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
            <circle cx="16" cy="12" r="1">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </circle>
            <circle cx="8" cy="12" r="1">
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="1.5s"
                repeatCount="indefinite"
                begin="0.6s"
              />
            </circle>
          </svg>
        </button>
      ) : (
        <div className="bg-[#1F2A56] rounded-xl shadow-2xl overflow-hidden border border-gray-700/30">
          {/* Header */}
          <div className="bg-[#2B3765] p-4 flex justify-between items-center border-b border-gray-700/30">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <span className="text-xl">🤖</span>
              Saasnext Assistant
            </h3>
            <div className="flex gap-2">
              <button
                onClick={handleMinimize}
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-[#1F2A56]/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={handleClose}
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-[#1F2A56]/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {isOpen && (
            <div className="p-4 bg-[#161E42] h-[60vh] sm:h-[400px] overflow-y-auto">
              <div className="space-y-4">
                {currentStep < questions.length && (
                  <div className="bg-[#2B3765] p-4 rounded-xl border border-gray-700/30">
                    <p className="text-white font-medium">
                      {questions[currentStep].question}
                    </p>
                  </div>
                )}

                {currentStep < questions.length ? (
                  renderQuestion()
                ) : (
                  <div className="text-center">
                    <p className="text-orange-400 font-medium">
                      Thanks for your interest! We'll get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setCurrentStep(0);
                        setAnswers({});
                      }}
                      className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300"
                    >
                      Start New Chat
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
