"use client";



import { useState, useEffect } from "react";

export default function Home() {
  const headings = [
    { text: "Build Powerful Web Apps 🚀", diagram: <CodeSnippet /> },
    { text: "Generate More Leads 📈", diagram: <SalesFunnel /> },
    { text: "Boost Business with Email Marketing ✉️", diagram: <EmailIcon /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const points = [
    "Expert Team with Proven Experience",
    "Custom Solutions Tailored for You",
    "Affordable Pricing with No Hidden Costs",
    "Fast & Reliable Project Delivery",
    "Cutting-Edge Technology & Tools",
    "Dedicated Support & Maintenance",
  ];

  const growthFactors = [
    { name: "Website Development", percentage: 95 },
    { name: "SEO Optimization", percentage: 90 },
    { name: "Social Media Marketing", percentage: 85 },
    { name: "Email Marketing", percentage: 80 },
    { name: "Paid Advertising", percentage: 88 },
    { name: "Analytics & Reporting", percentage: 92 },
  ];

  // State to manage animated progress values
  const [progressValues, setProgressValues] = useState(
    growthFactors.map(() => 0) // Start at 0%
  );

  useEffect(() => {
    const timers = growthFactors.map((factor, index) =>
      setTimeout(() => {
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = factor.percentage; // Animate to the final percentage
          return newValues;
        });
      }, index * 300) // Staggered animation effect
    );

    return () => timers.forEach(clearTimeout); // Cleanup timeouts
  }, []);

  const stacks = [
    {
      id: 1,
      name: "Next.js",
      icon: "/icons/nextjs.svg",
      content: [
        "SEO-friendly for better search rankings",
        "Optimized performance with static & server-side rendering",
        "Highly scalable and efficient for complex applications",
        "Seamless API integration with built-in API routes",
        "Supports modern features like ISR (Incremental Static Regeneration)",
      ],
    },
    {
      id: 2,
      name: "Vue.js",
      icon: "/icons/vuejs.svg",
      content: [
        "Lightweight and highly flexible framework",
        "Reactive data binding for smooth user experience",
        "Component-based architecture for modular development",
        "Easy integration with Vuex for state management",
        "Perfect for building interactive UI and SPAs (Single Page Applications)",
      ],
    },
    {
      id: 3,
      name: "Angular.js",
      icon: "/icons/angular.svg",
      content: [
        "Enterprise-level application development with TypeScript",
        "Two-way data binding for real-time updates",
        "Built-in dependency injection for modularity",
        "Powerful CLI for faster development",
        "Backed by Google, ensuring long-term support",
      ],
    },
    {
      id: 4,
      name: "Laravel",
      icon: "/icons/laravel.svg",
      content: [
        "Elegant syntax for rapid backend development",
        "Robust MVC framework with built-in security",
        "Powerful Eloquent ORM for database management",
        "Supports RESTful APIs and microservices",
        "Perfect for scalable and secure web applications",
      ],
    },
    {
      id: 5,
      name: "Django",
      icon: "/icons/django.svg",
      content: [
        "Fast and secure web development with Python",
        "Built-in admin panel for easy content management",
        "Highly scalable for large applications",
        "Perfect for AI, ML, and data-driven applications",
        "Follows the DRY (Don't Repeat Yourself) principle",
      ],
    },
    {
      id: 6,
      name: "WordPress",
      icon: "/icons/wordpress.svg",
      content: [
        "User-friendly CMS with drag-and-drop builders",
        "SEO-optimized and mobile-responsive themes",
        "Thousands of plugins for enhanced functionality",
        "Ideal for blogs, business sites, and e-commerce",
        "Supports WooCommerce for online stores",
      ],
    },
    {
      id: 7,
      name: "Google Ads",
      icon: "/icons/google-ads.svg",
      content: [
        "Reach high-intent customers via search and display ads",
        "Highly targeted campaigns based on keywords and audience",
        "Scalable budget-friendly advertising options",
        "In-depth analytics and conversion tracking",
        "Perfect for driving website traffic and generating leads",
      ],
    },
    {
      id: 8,
      name: "Facebook Ads",
      icon: "/icons/facebook-ads.svg",
      content: [
        "Hyper-targeted audience segmentation",
        "Diverse ad formats (carousel, video, stories, etc.)",
        "Cost-effective marketing with high engagement",
        "AI-driven optimization for better ad performance",
        "Perfect for brand awareness, lead generation, and e-commerce",
      ],
    },
  ];
  

  const [activeTab, setActiveTab] = useState(stacks[0].id); // Default active tab

  const steps = [
    { id: 1, title: "Research", description: "Understanding business needs and goals.", icon: "🔍" },
    { id: 2, title: "Planning", description: "Strategizing the project workflow and structure.", icon: "📝" },
    { id: 3, title: "Design", description: "Creating wireframes, prototypes, and UI design.", icon: "🎨" },
    { id: 4, title: "Development", description: "Turning designs into a fully functional website/app.", icon: "💻" },
    { id: 5, title: "Testing", description: "Ensuring performance, security, and bug fixes.", icon: "🛠️" },
    { id: 6, title: "Launch", description: "Deploying the final product for end users.", icon: "🚀" },
  ];


  const sections = [
    { letter: "S", title: "Software Solutions" },
    { letter: "A", title: "Automation for Businesses" },
    { letter: "A", title: "Analytics & Insights" },
    { letter: "S", title: "Scalable Web Applications" },
    { letter: "N", title: "Next-Gen Technologies" },
    { letter: "E", title: "Engagement & Marketing" },
    { letter: "X", title: "Xponential Growth Strategies" },
    { letter: "T", title: "Traffic & Lead Generation" },
  ];



  return (
    <>


<section className="relative h-screen flex flex-col items-center justify-center bg-[#161E42] text-white px-6 text-center overflow-hidden transition-all duration-1000 mt-40 md:mt-0">
  <div className="mb-16 transition-all duration-500 transform scale-110">
    {headings[currentIndex].diagram}
  </div>

  <h1 className="text-5xl md:text-7xl font-bold transition-opacity duration-500">
    {headings[currentIndex].text}
  </h1>

  <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
    Transform your ideas into high-performing solutions and grow your business with smart strategies.
  </p>

  
</section>



<section className="container mx-auto px-6 py-20 bg-[#161E42] text-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left Side - Title and Description */}
    <div className="md:pr-12">
      <h2 className="text-4xl font-extrabold mb-4 leading-snug tracking-tight">
        Why Choose <span className="text-orange-500">Saasnext?</span>
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        We provide cutting-edge digital solutions customized to your business needs. 
        Our expert team blends innovation and dedication to ensure measurable success.
      </p>
    </div>

    {/* Right Side - Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {points.map((point, index) => (
        <div
          key={index}
          className="group bg-[#1f2a55] p-6 rounded-2xl flex flex-col items-center justify-center text-center 
                     border border-transparent hover:border-orange-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="text-3xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            {index + 1}
          </div>
          <p className="text-sm font-medium text-gray-300">{point}</p>
        </div>
      ))}
    </div>

  </div>
</section>


      <div className="flex flex-col items-center justify-center mt-16 px-4 md:px-6 lg:px-12 w-full">
  {/* Flowchart Container */}
  <div className="flex flex-wrap justify-center gap-6 md:flex-nowrap md:overflow-x-auto p-4">
    {sections.map((section, index) => (
      <div key={index} className="flex flex-col items-center relative group">
        
        {/* Box */}
        <div className="flex flex-col items-center justify-center bg-[#1f2a55] text-white px-8 py-5 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
          <span className="text-4xl md:text-5xl font-extrabold">{section.letter}</span>
          <span className="text-sm md:text-lg text-gray-200 mt-1">{section.title}</span>
        </div>

        {/* Connecting Line (for large screens) */}
        {index < sections.length - 1 && (
          <div className="hidden md:flex absolute top-1/2 right-[-30px] w-10 h-1 bg-gray-400"></div>
        )}

        {/* Connecting Arrow (for small screens) */}
        {index < sections.length - 1 && (
          <div className="md:hidden text-2xl text-gray-400 mt-4 animate-bounce">↓</div>
        )}
      </div>
    ))}
  </div>
</div>



      <section className="container mx-auto px-6 py-12 bg-[#161E42] text-white">
        {/* Heading Section */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold">
            Saasnext Helps You <span className="text-orange-500">Grow Your Business</span>
          </h2>
          <p className="text-gray-300 text-lg mt-3">
            We provide top-tier digital solutions that drive growth, increase visibility, and enhance customer engagement.
          </p>
        </div>

        {/* Enhanced Progress Bar Container */}
        <div className="bg-[#1F2A55] mt-10 p-8 rounded-lg shadow-lg border border-gray-700">
          {growthFactors.map((factor, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-gray-200">{factor.name}</span>
                <span className="text-orange-400">{progressValues[index]}%</span>
              </div>
              <div className="w-full bg-gray-700 h-3 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-orange-400 h-3 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${progressValues[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Divider */}
      <div className="bg-[#161E42] py-8">
        <div className="container mx-auto px-6">
          <hr className="border-t-2 border-gray-700" />
        </div>
      </div>


      <section className="container mx-auto px-6 py-12 text-center bg-[#161E42] text-white">
        {/* Centered Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-white">Choose Your <span className="text-orange-500">Tech Stack</span></h2>
          <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
            Select the best technologies for your web application, ensuring high performance, scalability, and seamless user experience.
          </p>
        </div>

        {/* Tab Container */}
        <div className="bg-[#1F2A55] p-8 rounded-xl shadow-xl border border-gray-700">
          {/* Tabs Aligned Center */}
          <div className="flex flex-wrap justify-center gap-4 border-b border-gray-600 pb-4">
            {stacks.map((stack) => (
              <button
                key={stack.id}
                onClick={() => setActiveTab(stack.id)}
                className={`p-4 rounded-lg transition-all flex flex-col items-center w-28 ${activeTab === stack.id
                    ? "bg-orange-500 text-white shadow-lg border-orange-500"
                    : "bg-gray-700 text-gray-300 border border-gray-600 hover:border-orange-400 transition-all"
                  }`}
              >
                <img src={stack.icon} alt={stack.name} className="w-12 h-12" />
                <span className="text-sm mt-2 font-medium">{stack.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white">
              {stacks.find((stack) => stack.id === activeTab)?.name}
            </h3>
            <p className="text-gray-300 text-lg mt-2">
              Why choose <span className="text-orange-400">{stacks.find((stack) => stack.id === activeTab)?.name}</span>?
            </p>
            <ul className="mt-4 text-gray-300 text-lg text-left mx-auto max-w-lg space-y-3">
              {stacks
                .find((stack) => stack.id === activeTab)
                ?.content.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-orange-400 text-lg">✔</span> {benefit}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-6 py-12 bg-[#161E42] text-white">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white">Our <span className="text-orange-500">Work Process</span></h2>
          <p className="text-gray-300 text-lg mt-3">Step-by-step workflow to ensure quality, efficiency, and seamless execution.</p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="mt-12 flex overflow-x-auto hide-scrollbar space-x-6 px-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center bg-[#1F2A55] shadow-lg p-6 rounded-xl border border-gray-700 transition-all min-w-[220px] hover:border-orange-500"
            >
              {/* Step Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gray-700 border-4 border-orange-500 rounded-full shadow-lg text-3xl text-orange-400">
                {step.icon}
              </div>

              {/* Step Content */}
              <div className="mt-4">
                <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                <p className="text-gray-300 text-sm mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* Divider */}
      <div className="bg-[#161E42] py-8">
        <div className="container mx-auto px-6">
          <hr className="border-t-2 border-gray-700" />
        </div>
      </div>



      <section className="bg-[#161E42] text-white py-12">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading with HR Line */}
          <div className="max-w-md mx-auto">
            <hr className="w-12 h-[4px] bg-orange-500 mx-auto mb-4 rounded-full" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              SaaSnext <span className="text-orange-500">Web App Development</span> Services
            </h2>
            <p className="text-gray-300 text-lg mt-3">
              Scalable, secure, and innovative digital solutions tailored for your business.
            </p>
          </div>

          {/* 3x3 Grid with Large Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: "E-commerce Solutions", desc: "Scalable online stores with secure payments." },
              { title: "Healthcare Platforms", desc: "HIPAA-compliant apps for patient management." },
              { title: "Finance & FinTech", desc: "Secure apps for banking, trading, and payments." },
              { title: "EdTech Solutions", desc: "Interactive learning platforms & LMS systems." },
              { title: "SaaS Development", desc: "Cloud-based apps with subscription models." },
              { title: "Real Estate Apps", desc: "Feature-rich property listing & CRM tools." },
              { title: "Travel & Hospitality", desc: "Booking engines and AI-powered recommendations." },
              { title: "Logistics & Supply Chain", desc: "Tracking, inventory, and delivery management." },
              { title: "AI & Automation", desc: "AI-driven chatbots and business automation." }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border border-gray-600 rounded-xl shadow-lg text-center bg-[#1F2A55] transition-transform transform hover:scale-105 hover:border-orange-500"
              >
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Divider */}
  <div className="bg-[#161E42] py-8">
        <div className="container mx-auto px-6">
          <hr className="border-t-2 border-gray-700" />
        </div>
      </div>



      <section className="bg-[#161E42] text-white py-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <hr className="w-12 h-[3px] bg-white mx-auto mb-3" />
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              SaaSnext Web App Development Services
            </h2>
            <p className="text-gray-300 mt-2">
              Explore our comprehensive web app development services tailored to
              meet your unique business needs.
            </p>
          </div>

          {/* Four-Column Grid Layout with Variable Sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Large Column */}
            <div className="md:col-span-2 p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                Custom Web Application Development
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                We build bespoke web applications from the ground up, tailored
                precisely to your business requirements. Our solutions are
                scalable, secure, and designed for optimal performance.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Requirement Analysis & Planning</li>
                <li>UI/UX Design & Prototyping</li>
                <li>Frontend & Backend Development</li>
                <li>Testing & Quality Assurance</li>
                <li>Deployment & Maintenance</li>
              </ul>
            </div>

            {/* Standard Column */}
            <div className="p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                E-commerce Solutions
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Build scalable, high-performance online stores with secure
                payment integration, inventory management, and seamless UX.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Shopping Cart & Checkout</li>
                <li>Payment Gateway Integration</li>
                <li>Product Catalog Management</li>
                <li>Order Tracking & Fulfillment</li>
              </ul>
            </div>

            {/* Standard Column */}
            <div className="p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                Healthcare Platforms
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Develop HIPAA-compliant healthcare apps with appointment
                scheduling, telehealth, patient management, and secure data
                handling.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Appointment Scheduling</li>
                <li>Telehealth & Video Conferencing</li>
                <li>Patient Portals</li>
                <li>Secure Data Storage</li>
              </ul>
            </div>

            {/* Full-Width Column */}
            <div className="md:col-span-4 p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                Enterprise SaaS Solutions
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Cloud-based enterprise applications with automation, analytics,
                scalable architecture, and robust security features.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Custom CRM & ERP Systems</li>
                <li>Workflow Automation</li>
                <li>Data Analytics & Reporting</li>
                <li>Scalable Cloud Infrastructure</li>
              </ul>
            </div>

            {/* Standard Column */}
            <div className="p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                FinTech Applications
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Secure and efficient financial applications for banking,
                payments, investment tracking, and regulatory compliance.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Payment Processing</li>
                <li>Investment Tracking</li>
                <li>Budgeting & Financial Planning</li>
                <li>Regulatory Compliance</li>
              </ul>
            </div>

            {/* Large Column */}
            <div className="md:col-span-2 p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                EdTech & eLearning
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Interactive learning platforms with course management, AI-driven
                recommendations, student engagement tools, and progress
                tracking.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Course Management Systems</li>
                <li>AI-Driven Recommendations</li>
                <li>Student Portals</li>
                <li>Progress Tracking & Analytics</li>
              </ul>
            </div>

            {/* Standard Column */}
            <div className="p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                AI & Automation
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                AI-driven chatbots, business automation tools, machine
                learning-powered analytics, and intelligent process automation.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>AI Chatbots</li>
                <li>Business Process Automation</li>
                <li>Machine Learning Analytics</li>
                <li>Intelligent Automation</li>
              </ul>
            </div>
            {/* Standard Column */}
            <div className="p-6 border border-gray-500 rounded-lg shadow-md bg-gray-800 transition-colors duration-300 hover:border-[#c55301]">
              <h3 className="text-lg font-semibold text-white">
                Real Estate Platforms
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                Custom-built property management, listing, and CRM solutions for
                real estate businesses.
              </p>
              <ul className="mt-4 text-gray-300 text-sm list-disc list-inside">
                <li>Property Listing Management</li>
                <li>CRM Integration</li>
                <li>Virtual Tours</li>
                <li>Lead Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#161E42] text-white py-20">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* Left Side: Heading & Description */}
      <div className="md:text-left">
        <h2 className="text-4xl font-extrabold mb-4 leading-tight">
          <span className="text-orange-500">Overcome</span> Your Digital Challenges
        </h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Are you struggling to keep up with the ever-evolving digital landscape? Many businesses face challenges like outdated websites, inefficient workflows, and difficulty reaching their target audience. At SaaSnext, we understand these hurdles and provide tailored solutions to help you thrive.
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Whether you're battling low online visibility, struggling to convert leads, or need to streamline your operations, we're here to help. We craft custom web applications, implement cutting-edge marketing strategies, and leverage technology to solve your unique business problems.
        </p>
     
      </div>

      {/* Right Side: Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="/images/saasnext-solutions.jpg"
          alt="Digital Solutions Illustration"
          className="max-w-full w-[90%] md:w-[500px] rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Divider */}
      <div className="bg-[#161E42] py-8">
        <div className="container mx-auto px-6">
          <hr className="border-t-2 border-gray-700" />
        </div>
      </div>




      {/* New Section: One-Column Layout, Center-Aligned Text */}
      <section className="bg-[#161E42] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            At SaaSnext, we're passionate about helping businesses like yours
            thrive in the digital age. Whether you're looking to build a
            cutting-edge web application, boost your online visibility, or
            streamline your operations, our team of experts is ready to turn
            your vision into reality. Let's collaborate to create innovative
            solutions that drive growth and success.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            We understand that every business is unique, and that's why we take
            a personalized approach to every project. From initial concept to
            final launch and beyond, we'll be with you every step of the way,
            ensuring that your digital solutions are perfectly aligned with your
            goals.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Contact Us Today
          </button>
        </div>
      </section>

     

    </>
  );
}

/* 1️⃣ Web App - Improved Code Snippet */
const CodeSnippet = () => (
  <div className="p-10 bg-gray-900 text-white font-mono rounded-lg w-[450px] relative shadow-xl">
    <p className="text-green-400 mb-3 text-lg">// Next.js + Tailwind Example</p>
    <p className="text-blue-400 inline text-lg">export default</p> function <span className="text-yellow-400">App</span>() {"{"}
    <div className="ml-6 mt-3 text-lg">
      <span className="text-blue-400">return</span> (
      <div className="ml-6 mt-2 text-lg">
        <span className="text-red-400">{"<h1>"}</span>Build with Tailwind CSS!<span className="text-red-400">{"</h1>"}</span>
      </div>
      );
    </div>
    {"}"}

    {/* File Labels Positioned Properly */}
    <div className="absolute -top-6 left-6 bg-gray-700 text-sm px-4 py-1 rounded-t-lg shadow-md border-b-2 border-orange-500">index.js</div>
    <div className="absolute -top-6 left-32 bg-gray-700 text-sm px-4 py-1 rounded-t-lg shadow-md opacity-70">tailwind.config.js</div>

    <div className="absolute bottom-3 left-10 text-white text-xl animate-pulse">|</div>
  </div>
);

const SalesFunnel = () => (
  <svg width="400" height="350" viewBox="0 0 400 350">
    {/* Background Glow */}
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      {/* Gradients */}
      <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff9500" />
        <stop offset="100%" stopColor="#ff5e3a" />
      </linearGradient>
      <linearGradient id="middleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff5e3a" />
        <stop offset="100%" stopColor="#ff3a6e" />
      </linearGradient>
      <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff3a6e" />
        <stop offset="100%" stopColor="#ff2d55" />
      </linearGradient>
    </defs>

    {/* Funnel Sections */}
    <g filter="url(#glow)">
      <polygon points="50,40 350,40 300,120 100,120" fill="url(#topGradient)" stroke="#333" strokeWidth="2" />
      <polygon points="100,120 300,120 260,200 140,200" fill="url(#middleGradient)" stroke="#333" strokeWidth="2" />
      <polygon points="140,200 260,200 230,280 170,280" fill="url(#bottomGradient)" stroke="#333" strokeWidth="2" />
      <rect x="170" y="280" width="60" height="60" fill="#333" rx="6" />
    </g>

    {/* Icons for Each Funnel Stage */}
    <text x="200" y="30" fontSize="24" textAnchor="middle">👀</text>
    <text x="200" y="150" fontSize="24" textAnchor="middle">📝</text>
    <text x="200" y="230" fontSize="24" textAnchor="middle">💼</text>
    <text x="200" y="310" fontSize="24" textAnchor="middle">💰</text>

    {/* Arrow Animation for Flow */}
    <g>
      <line x1="200" y1="340" x2="200" y2="350" stroke="#ff5e3a" strokeWidth="6" strokeDasharray="8,4">
        <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
      </line>
      <polygon points="190,350 200,360 210,350" fill="#ff5e3a" />
    </g>
  </svg>
);


/* 3️⃣ Email Marketing - Improved Envelope Icon */
const EmailIcon = () => (
  <svg width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="envelopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9500" />
        <stop offset="100%" stopColor="#ff5e3a" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#00000044" />
      </filter>
    </defs>

    {/* Envelope Body */}
    <rect x="60" y="80" width="280" height="180" rx="12" fill="white" stroke="#333" strokeWidth="4" filter="url(#shadow)" />

    {/* Envelope Flap - With Animation */}
    <path d="M60,80 L200,160 L340,80 L340,80 L60,80 Z" fill="url(#envelopeGradient)" stroke="#333" strokeWidth="3">
      <animate attributeName="d"
        values="M60,80 L200,160 L340,80 L340,80 L60,80 Z;
                      M60,80 L200,160 L340,80 L340,40 L60,40 L60,80 Z;
                      M60,80 L200,160 L340,80 L340,80 L60,80 Z"
        dur="3s"
        repeatCount="indefinite" />
    </path>

    {/* Envelope Bottom Fold Line */}
    <path d="M60,80 L200,160 L340,80" fill="none" stroke="#333" strokeWidth="3" />

    {/* @ Symbol */}
    <g transform="translate(200, 170)" filter="url(#shadow)">
      <circle cx="0" cy="0" r="35" fill="url(#envelopeGradient)" />
      <text x="0" y="12" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle">@</text>
    </g>

    {/* Send Button */}
    <g transform="translate(200, 40)">
      <rect x="-60" y="-20" width="120" height="40" rx="20" fill="#333" filter="url(#shadow)">
        <animate attributeName="y" values="-20;-25;-20" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="0" y="7" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">SEND 📩</text>
    </g>

    {/* Email Lines */}
    <line x1="120" y1="230" x2="280" y2="230" stroke="#eee" strokeWidth="6" />
    <line x1="100" y1="250" x2="300" y2="250" stroke="#eee" strokeWidth="6" />
  </svg>
);