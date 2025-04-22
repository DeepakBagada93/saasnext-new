"use client";


import ContactForm from './components/ContactForm';
import AnimatedServices from './components/AnimatedServices';


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
    <main className="min-h-screen bg-[#161E42]">
      {/* Hero Section - Adjusted spacing and vertical alignment */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#161E42] to-[#0A1128] text-white px-6 text-center overflow-hidden">
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
  <div className="relative z-10">
    {/* Diagram with scale animation */}
    <div className="mb-16 transition-all duration-500 transform scale-110 hover:scale-125">
      {headings[currentIndex].diagram}
    </div>

    {/* Heading with gradient shimmer effect */}
    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-shimmer transition-opacity duration-500 mb-8">
      {headings[currentIndex].text}
    </h1>

    {/* Description with glowing effect */}
    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
      Transform your ideas into high-performing solutions and grow your business with smart strategies.
    </p>
  </div>
</section>

      {/* Introduction Section - Consistent spacing */}
<section className="container mx-auto bg-[#161E42] text-white px-8 py-28">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left column with enhanced content */}
      <div className="space-y-8">
        <div 
          className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 rounded-full 
                     text-sm font-semibold mb-4 animate-pulse shadow-lg shadow-orange-500/20"
        >
          #1 Web Development Company in Junagadh
        </div>
        
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
          Transform Your 
          <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent"> Digital Presence </span>
          with SaasNext
        </h1>

        <div className="space-y-6 text-xl text-gray-300">
          <p className="border-l-4 border-orange-500 pl-6 leading-relaxed">
            In today's digital landscape, a powerful web presence isn't just an option—it's essential for business growth and success.
          </p>
          
          <p className="leading-relaxed">
            At SaasNext, we combine cutting-edge technology with strategic innovation to create web solutions that drive real business results. As Junagadh's premier web development company, we transform your vision into powerful, scalable digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 mt-10">
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl
                     shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Start Your Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#services"
            className="group px-8 py-4 border-2 border-orange-500 text-orange-500 font-semibold rounded-xl
                     hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Right column with enhanced stats */}
      <div className="bg-gradient-to-br from-[#1F2A56] to-[#2B3765] p-10 rounded-3xl shadow-2xl border border-gray-700/50">
        <div className="grid grid-cols-2 gap-8">
          {[
            { stat: "100+", label: "Projects Delivered", icon: "🚀" },
            { stat: "95%", label: "Client Satisfaction", icon: "⭐" },
            { stat: "24/7", label: "Support Available", icon: "💪" },
            { stat: "50+", label: "Expert Developers", icon: "👨‍💻" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-[#161E42]/50 rounded-2xl hover:bg-[#161E42]/70 
                         transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                {item.stat}
              </div>
              <div className="text-sm text-gray-300 mt-2 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="container mx-auto bg-[#1F2A56] text-white px-4 py-16 mt-8 mb-8">
          <div className="max-w-6xl mx-auto text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg sm:text-xl text-slate-300">
              As a leading webapp development company in Junagadh, we deliver tailored digital solutions to accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Custom Web App Development</h3>
              <p className="text-slate-300 text-base">
                We design and develop tailor-made web applications to solve your unique business challenges — from enterprise tools to e-commerce platforms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Responsive Web Design</h3>
              <p className="text-slate-300 text-base">
                Your app will look stunning and perform flawlessly on all devices, ensuring a consistent and seamless experience for every user.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
              <p className="text-slate-300 text-base">
                Launch or scale your online store with powerful features — from product catalogs to secure payment integrations and user-friendly checkout flows.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Content Management Systems</h3>
              <p className="text-slate-300 text-base">
                Gain full control over your website content with intuitive CMS solutions — no coding required.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Web App Modernization</h3>
              <p className="text-slate-300 text-base">
                We breathe new life into outdated apps by enhancing UI, optimizing performance, and ensuring modern tech compatibility.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">API Development & Integration</h3>
              <p className="text-slate-300 text-base">
                Connect and expand your systems with robust, secure, and scalable API solutions for third-party or internal integrations.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-[#2B3765] rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="text-green-400 text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support & Maintenance</h3>
              <p className="text-slate-300 text-base">
                We provide continuous updates, security patches, and performance enhancements to keep your application running at its best.
              </p>
            </div>
          </div>
        </section>


<section className="container mx-auto px-6 py-20 bg-[#161E42] text-white">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Title and Description */}
    <div className="md:pr-12">
      <h2 className="text-4xl font-extrabold mb-6 leading-snug tracking-tight">
        Why Choose <span className="text-orange-500">SaaSNext?</span>
      </h2>
      <h3 className="text-xl text-orange-400 mb-4">
        Solving Business Challenges with Technology & AI
      </h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        At SaaSNext, we blend technical expertise, data-driven marketing, and AI innovation to deliver transformative results. Here's why businesses worldwide trust us:
      </p>
      <div className="mt-6">
        <div className="inline-flex items-center gap-4 mb-4">
          <span className="text-3xl">🌟</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            100+ Successful Projects
          </span>
        </div>
        <p className="text-gray-300">
          Your go-to partner for web app development in Junagadh, lead generation, and AI solutions.
        </p>
      </div>
    </div>

    {/* Right Side - Enhanced Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "Tailored Solutions",
          desc: "Custom web apps and AI agents built to address your unique business needs.",
          icon: "💡"
        },
        {
          title: "High-Impact Lead Generation",
          desc: "Data-driven strategies to attract leads that convert.",
          icon: "📈"
        },
        {
          title: "AI-Powered Efficiency",
          desc: "Leverage our AI agents to automate processes, saving time and costs.",
          icon: "🤖"
        },
        {
          title: "Scalable Growth",
          desc: "Solutions that evolve with your business, from local startups in Junagadh to global enterprises.",
          icon: "🚀"
        },
        {
          title: "Expert Team",
          desc: "Our developers, marketers, and AI specialists deliver measurable ROI.",
          icon: "👥"
        },
        {
          title: "Local Expertise, Global Reach",
          desc: "Proudly based in Junagadh, serving clients worldwide with a personal touch.",
          icon: "🌍"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-[#1f2a55] p-6 rounded-2xl flex flex-col items-start
                     border border-transparent hover:border-orange-500 
                     hover:shadow-lg transition-all duration-300
                     hover:bg-[#252f63]"
        >
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-orange-400 mb-2">{item.title}</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="bg-[#161E42] text-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold underline decoration-orange-400 underline-offset-4">
      The Power of AI: Why It’s a Game-Changer for Your Business
    </h2>
    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
      Artificial Intelligence (AI) is revolutionizing how businesses operate, and <span className="underline decoration-orange-400">SaaSNext</span> is at the forefront of this transformation. Our AI agents are custom-built to solve your business challenges and drive growth.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
    {/* Feature 1 */}
    <div className="border-l-4 border-orange-500 pl-6">
      <h3 className="text-xl font-semibold mb-2">🚀 Automation</h3>
      <p className="text-gray-300">
        Streamline repetitive tasks like data entry, scheduling, and customer support, saving up to 40% of operational time.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="border-l-4 border-orange-500 pl-6">
      <h3 className="text-xl font-semibold mb-2">💬 Enhanced Customer Experience</h3>
      <p className="text-gray-300">
        Deliver 24/7 personalized support with AI chatbots that handle inquiries instantly.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="border-l-4 border-orange-500 pl-6">
      <h3 className="text-xl font-semibold mb-2">📊 Data Insights</h3>
      <p className="text-gray-300">
        Analyze customer behavior and market trends to make smarter decisions.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="border-l-4 border-orange-500 pl-6">
      <h3 className="text-xl font-semibold mb-2">💰 Cost Efficiency</h3>
      <p className="text-gray-300">
        Reduce overhead costs by automating manual processes without sacrificing quality.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="border-l-4 border-orange-500 pl-6">
      <h3 className="text-xl font-semibold mb-2">📈 Scalability</h3>
      <p className="text-gray-300">
        AI solutions that grow with your business, handling increased workloads effortlessly.
      </p>
    </div>
  </div>

  <div className="max-w-4xl mx-auto mt-12 text-center text-gray-300 text-lg">
    From small businesses to large enterprises, our AI agents provide seamless integration with your existing systems, ensuring maximum impact with minimal disruption.
  </div>
</section>


      <AnimatedServices/>


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

<section className="container mx-auto bg-[#161E42] text-white px-4 py-16 mt-8 mb-8">
  {/* Banner Image with Enhanced Shadow */}
  <div className="flex justify-center mb-16">
    <img
      src="/images/saasnext-new3.jpg"
      alt="Web App Development Banner"
      className="w-full max-w-[1080px] h-auto rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
    />
  </div>

  {/* Content Section with Improved Layout */}
  <div className="max-w-4xl mx-auto text-center space-y-12">
    <div className="space-y-6">
      <span className="inline-block px-6 py-2 bg-orange-500/10 text-orange-400 text-sm font-semibold rounded-full">
        Web Application Development
      </span>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Ready to Build a Web App That Stands Out?
      </h2>
    </div>

    <p className="text-xl text-gray-300 leading-relaxed">
      At <strong className="text-white">SaaSNext</strong>, we craft high-performance web applications using cutting-edge frameworks like 
      <span className="text-orange-400 font-semibold"> Next.js</span>, 
      <span className="text-orange-400 font-semibold"> Laravel</span>, and 
      <span className="text-orange-400 font-semibold"> Django</span>. 
      From sleek UI to robust backend, we bring your vision to life with seamless functionality and scalability.
    </p>

    {/* Features Grid replacing bullet points */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="p-6 bg-[#1F2A56] rounded-xl hover:bg-[#252F5E] transition-colors hover:border hover:border-orange-500/50">
        <div className="text-3xl mb-4">💼</div>
        <h3 className="text-xl font-semibold mb-3 text-orange-400">Custom Solutions</h3>
        <p className="text-gray-300">Tailored web applications designed specifically for your business needs</p>
      </div>

      <div className="p-6 bg-[#1F2A56] rounded-xl hover:bg-[#252F5E] transition-colors hover:border hover:border-orange-500/50">
        <div className="text-3xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-3 text-orange-400">Modern Tech Stack</h3>
        <p className="text-gray-300">Lightning-fast development with cutting-edge technologies</p>
      </div>

      <div className="p-6 bg-[#1F2A56] rounded-xl hover:bg-[#252F5E] transition-colors hover:border hover:border-orange-500/50">
        <div className="text-3xl mb-4">🛠️</div>
        <h3 className="text-xl font-semibold mb-3 text-orange-400">Ongoing Support</h3>
        <p className="text-gray-300">Continuous maintenance to keep your app ahead of the curve</p>
      </div>
    </div>

    {/* CTA Button with orange styling */}
    <div className="pt-12">
      <a
        href="#contact"
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                 text-white font-semibold rounded-xl shadow-xl hover:shadow-orange-500/20 
                 transform hover:-translate-y-1 transition-all duration-300"
      >
        Let's Build Something Amazing
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>




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


      {/* Enhanced Section Divider */}
            <div className="bg-gradient-to-r from-[#161E42] via-[#1F2A56] to-[#161E42] py-12">
              <div className="container mx-auto px-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-orange-500/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-[#1F2A56] px-4 py-2 rounded-full border-2 border-orange-500/20 shadow-lg">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
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

      
      <ContactForm />
    
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

      <section className="bg-gradient-to-r from-[#161E42] to-[#1f2a60] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold underline decoration-orange-400 underline-offset-4 mb-4">
      Ready to Transform Your Business?
    </h2>
    <p className="text-lg text-gray-300 mb-8">
      Partner with <span className="font-semibold text-orange-400">SaaSNext</span> to unlock your business’s potential. Whether you need a powerful web app, high-quality leads, or AI agents to automate your operations — we’re here to deliver results.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-300 max-w-3xl mx-auto mb-10">
      <div className="border-l-4 border-orange-500 pl-4">
        <p>🧑‍💻 <strong className="text-white">Build a web app</strong> that streamlines your business.</p>
      </div>
      <div className="border-l-4 border-orange-500 pl-4">
        <p>🎯 <strong className="text-white">Attract leads</strong> that convert into loyal customers.</p>
      </div>
      <div className="border-l-4 border-orange-500 pl-4">
        <p>🤖 <strong className="text-white">Automate tasks</strong> with AI agents tailored to your needs.</p>
      </div>
      <div className="border-l-4 border-orange-500 pl-4">
        <p>📈 <strong className="text-white">Achieve sustainable growth</strong> with scalable solutions.</p>
      </div>
    </div>

    <button className="mt-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all rounded-xl text-white text-lg font-semibold shadow-lg">
      Lets Get Started
    </button>
  </div>
</section>

      
    

     

    </main>
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
        values="M60,80 L200,160 L340,80 L340,40 L60,40 L60,80 Z;
                      M60,80 L200,160 L340,80 L340,80 L60,80 Z;
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
