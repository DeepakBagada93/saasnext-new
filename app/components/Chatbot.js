"use client";
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Chatbot is closed by default
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isMinimized, setIsMinimized] = useState(true); // Chatbot starts minimized

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
          onClick={() => {
            setIsMinimized(false); // Expand the chatbot
            setIsOpen(true); // Open the chatbot
          }}
          className="relative w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          💬
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
                onClick={() => setIsMinimized(true)} // Minimize the chatbot
                className="text-gray-300 hover:text-white transition-colors"
              >
                ➖
              </button>
              <button
                onClick={() => setIsOpen(false)} // Close the chatbot
                className="text-gray-300 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Content */}
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
        </div>
      )}
    </div>
  );
};

export default Chatbot;