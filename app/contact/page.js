"use client";

import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
    <section className="relative w-full h-[600px] bg-gradient-to-br from-[#161E42] to-[#0A1128] flex items-center justify-center text-center px-6 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 animate-pulse"></div>

    {/* Floating circles */}
    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl animate-float"></div>
    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl animate-float-reverse"></div>

    {/* Diagonal line SVG */}
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0 L100 100 L0 100 Z"
        fill="rgba(255, 255, 255, 0.05)"
      ></path>
    </svg>
  </div>

  {/* Content container */}
  <div className="max-w-3xl relative z-10">
    {/* Heading with gradient shimmer effect */}
    <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-shimmer transition-all duration-500 hover:tracking-wide">
      Welcome to Saasnext
    </h2>

    {/* Description with glowing effect */}
    <p className="text-lg sm:text-xl text-slate-300 leading-relaxed animate-fade-in-up">
      At <span className="font-semibold text-white glow">Saasnext</span>, we specialize in{" "}
      <strong className="text-blue-400 glow">web application development</strong> and{" "}
      <strong className="text-green-400 glow">lead generation services for SaaS</strong>. As a trusted{" "}
      <strong className="text-orange-400 glow">web development company in Junagadh</strong>, we empower businesses with{" "}
      <strong className="text-purple-400 glow">custom SaaS development services</strong>,{" "}
      <strong className="text-pink-400 glow">AI agent development services</strong>, and scalable digital solutions.
    </p>
  </div>
</section>





<section className="w-full bg-[#161E42] py-20 px-6 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Floating circles */}
    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl animate-float"></div>
    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl animate-float-reverse"></div>
    {/* Diagonal line SVG */}
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0 L100 100 L0 100 Z"
        fill="rgba(255, 255, 255, 0.05)"
      ></path>
    </svg>
  </div>

  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
    
    {/* Left Column - Image with Overlay */}
    <div className="flex justify-center relative">
      <img 
        src="/images/saasnext3.jpg" 
        alt="Web Development" 
        className="w-full max-w-md rounded-lg shadow-lg"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#161E42]/70 to-transparent rounded-lg"></div>
      {/* Text overlay */}
      <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-[#161E42]/80 px-4 py-2 rounded-lg">
        Empowering Businesses with <strong className="text-orange-400">AI Solutions</strong> 🚀
      </p>
    </div>

    {/* Right Column - Text Content with Enhanced Layout */}
    <div className="space-y-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
        Saasnext: Innovating <span className="text-orange-400">Web Solutions</span>
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        At Saasnext, we specialize in building high-performance, scalable web applications tailored to your business needs. 
        As a trusted <strong className="text-green-400">web development company in Junagadh</strong>, our expertise ensures seamless user experiences and robust digital solutions.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        Whether you need a Next.js-powered dynamic site, an AI-driven automation system developed by our <strong className="text-blue-400">AI solutions provider in Junagadh</strong>, or a scalable e-commerce platform, our team is committed to delivering cutting-edge solutions that drive business growth.
      </p>
      <ul className="space-y-4">
        {[
          {
            title: "Custom Web Applications",
            desc: "As a leading <strong className='text-yellow-400'>custom SaaS development services</strong> provider, we craft tailored solutions aligned with your goals."
          },
          {
            title: "AI & Automation Integration",
            desc: "Our <strong className='text-purple-400'>AI agent development services</strong> empower businesses to automate processes and boost efficiency."
          },
          {
            title: "Data-Driven Lead Generation",
            desc: "Partner with our <strong className='text-pink-400'>SaaS lead generation agency</strong> to attract high-quality leads and grow your business."
          }
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 p-4 bg-[#1F2A56] rounded-lg shadow-md transition-all duration-300 hover:bg-[#2B3765] hover:shadow-lg"
          >
            <svg className="w-6 h-6 text-orange-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0L7.293 10.95a1 1 0 011.414-1.414l1.636 1.636 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


  
    {/* Contact Form Section */}
    <ContactForm />

   


    </>
  );
}