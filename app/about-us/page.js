export const metadata = {
  title: "About Us | Top Web Development & AI Solutions Company in Junagadh",
  description: "Discover Junagadh's premier web application development and lead generation company. Expert AI solutions, custom SaaS development, and digital marketing services for sustainable business growth.",
};

export default function AboutUs() {


  const features = [
    { title: "Scalable Solutions", description: "Build apps that grow with your business." },
    { title: "Lead Generation", description: "Boost your sales with our expert marketing." },
    { title: "Custom Web Apps", description: "Tailor-made web solutions for your needs." },
    { title: "SEO Optimization", description: "Improve your search engine ranking." },
    { title: "Performance Driven", description: "Fast and optimized web experiences." },
    { title: "E-Commerce Solutions", description: "Sell online with a powerful storefront." },
    { title: "Security & Compliance", description: "Ensure data protection and privacy." },
    { title: "AI-Powered Tools", description: "Leverage AI for automation & insights." },
    { title: "24/7 Support", description: "Reliable support whenever you need it." }
  ];

  const services = [
    { title: "Next.js Development", description: "Build fast, scalable web applications." },
    { title: "Vue.js Solutions", description: "Create dynamic and interactive UI experiences." },
    { title: "Laravel Expertise", description: "Develop secure and robust backend systems." },
    { title: "AI & Automation", description: "Leverage AI-driven solutions for business growth." }
  ];

  return (
    <>


<section className="relative w-full bg-gradient-to-br from-[#161E42] to-[#0A1128] text-white overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 mt-[30px] md:mt-0">
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
  <div className="container mx-auto text-center max-w-4xl relative z-10 px-4 sm:px-6">
    {/* Heading with gradient and animation */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-shimmer">
      About Saasnext
    </h1>

    {/* Description with glowing effect */}
    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 animate-fade-in-up">
      <span className="block font-bold text-lg sm:text-xl text-blue-300 tracking-wide mb-3 sm:mb-4">Where Code Meets Vision.</span>
      We don't just build apps — we bring ideas to life. At <strong className="text-yellow-400 glow">Saasnext</strong>, innovation is our language, and technology is our canvas.
      <br /><br />
      As a leading{" "}
      <strong className="text-blue-400 glow">Web App Development Company in Junagadh</strong>, we craft scalable SaaS platforms that grow with your business. Our team lives at the intersection of creativity and code — building tools that empower startups, scale enterprises, and redefine industries.
      <br /><br />
      Need to turn clicks into customers? Dive into the future with our{" "}
      <strong className="text-green-400 glow">Lead Generation Services for SaaS</strong> — smart, targeted, and performance-driven. And as your trusted{" "}
      <strong className="text-yellow-400 glow">AI Solutions Provider in Junagadh</strong>, we integrate cutting-edge AI agents to automate workflows, unlock insights, and boost efficiency.
      <br /><br />
      Whether you're launching a product or optimizing operations, we help you{" "}
      <strong className="text-purple-400 glow">grow, manage, and lead</strong> in the digital age — one line of clean code at a time.
    </p>

    {/* Call to Action with 3D hover effect */}
    <div className="mt-6 sm:mt-8 md:mt-10 animate-fade-in-up">
      <a
        href="/contact"
        className="inline-block relative bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 overflow-hidden group text-sm sm:text-base"
      >
        <span className="relative z-10">Start Your Journey Today →</span>
        <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </a>
    </div>
  </div>
</section>



<section className="w-full bg-[#161E42] text-white py-16 px-6">
  <div className="container mx-auto text-center">
    {/* Section Heading */}
    <h2 className="text-4xl font-extrabold mb-4">Why Choose Saasnext?</h2>
    <p className="text-lg text-gray-300 mb-12">
      Empowering businesses with cutting-edge digital solutions like <strong className="text-orange-400">web app development in Junagadh</strong>, <strong className="text-orange-400">lead generation services for SaaS</strong>, and <strong className="text-orange-400">AI agent development services</strong>.
    </p>

    {/* 3×3 Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Custom Web App Development",
          description:
            "As a leading <strong className='text-orange-400'>web application development company in Junagadh</strong>, we build tailored web apps to meet your unique business needs.",
        },
        {
          title: "High-Impact Lead Generation",
          description:
            "Our <strong className='text-orange-400'>lead generation company in Junagadh</strong> delivers data-driven strategies to attract and convert leads effectively.",
        },
        {
          title: "Scalable SaaS Solutions",
          description:
            "We specialize in <strong className='text-orange-400'>custom SaaS development services</strong>, ensuring scalability and performance for your business.",
        },
        {
          title: "AI-Powered Automation",
          description:
            "Leverage our expertise as an <strong className='text-orange-400'>AI development company</strong> to automate tasks and enhance productivity.",
        },
        {
          title: "Local Expertise, Global Reach",
          description:
            "Proudly based in Junagadh, we serve clients worldwide as a trusted <strong className='text-orange-400'>web development company in Junagadh</strong>.",
        },
        {
          title: "Ongoing Support & Maintenance",
          description:
            "Our team ensures continuous updates and maintenance for your applications, backed by our <strong className='text-orange-400'>SaaS lead generation agency</strong> expertise.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="border-2 border-gray-600 p-6 rounded-lg text-center shadow-md transition duration-300 hover:border-orange-500"
        >
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{ __html: feature.description }}
          />
        </div>
      ))}
    </div>
  </div>
</section>

<section className="w-full bg-[#161E42] text-white py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Text Content */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-extrabold mb-4">Our Tech Expertise</h2>
      <p className="text-lg text-gray-300">
        Saasnext specializes in cutting-edge technologies like <strong className="text-orange-400">AI development</strong>, <strong className="text-orange-400">web application development in Junagadh</strong>, and <strong className="text-orange-400">custom SaaS development services</strong> to build high-performance, scalable, and modern web applications.
      </p>
    </div>

    {/* Right Column - 2×2 Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "Web Application Development",
          description:
            "As a trusted <strong className='text-orange-400'>web development company in Junagadh</strong>, we craft robust and scalable web apps tailored to your business needs.",
        },
        {
          title: "AI Solutions",
          description:
            "Our team of experts delivers innovative <strong className='text-orange-400'>AI solutions</strong> to automate processes and drive efficiency.",
        },
        {
          title: "Custom SaaS Development",
          description:
            "We specialize in <strong className='text-orange-400'>custom SaaS development services</strong>, ensuring your platform is scalable and future-ready.",
        },
        {
          title: "Lead Generation Services",
          description:
            "Leverage our expertise as a <strong className='text-orange-400'>lead generation company in Junagadh</strong> to attract high-quality leads for your business.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="border-2 border-gray-600 p-6 rounded-lg text-center shadow-md transition duration-300 hover:border-orange-500"
        >
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p
            className="text-gray-300"
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
        </div>
      ))}
    </div>
  </div>
</section>


<section className="w-full bg-[#161E42] text-white py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Image */}
    <div className="flex flex-col items-center justify-center">
      <img 
        src="/images/saasnext4.jpg" 
        alt="Web Development" 
        className="w-full max-w-md rounded-lg shadow-lg mb-4"
      />
      <p className="text-sm text-gray-400 italic text-center">
        Transforming businesses with <strong className="text-orange-400">web application development</strong> and <strong className="text-orange-400">AI solutions</strong> in Junagadh.
      </p>
    </div>

    {/* Right Column - Text Content */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-extrabold mb-4">Saasnext: Innovating Web Solutions</h2>
      <p className="text-lg text-gray-300 mb-4">
        At Saasnext, we specialize in building high-performance, scalable web applications tailored to your business needs. 
        As a trusted <strong className="text-orange-400">web development company in Junagadh</strong>, our expertise in modern web technologies ensures seamless user experiences and robust digital solutions.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        Whether you need a Next.js-powered dynamic site, an AI-driven automation system developed by our <strong className="text-orange-400">AI development company</strong>, or a scalable e-commerce platform, our team is committed to delivering cutting-edge solutions that drive business growth.
      </p>
      <p className="text-lg text-gray-300">
        Partner with us for <strong className="text-orange-400">custom SaaS development services</strong>, <strong className="text-orange-400">lead generation services for SaaS</strong>, and innovative <strong className="text-orange-400">AI agent development services</strong> to stay ahead in the competitive market.
      </p>
    </div>

  </div>
</section>

        
<section className="w-full bg-[#161E42] text-white py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Column - Content */}
    <div className="md:order-1"> {/* Order 1 for md screens and up */}
      <h2 className="text-4xl font-extrabold mb-4">Our Mission</h2>
      <p className="text-lg text-gray-300 mb-4">
        We strive to empower businesses with innovative digital solutions, helping them achieve their goals through cutting-edge technology like <strong className="text-orange-400">web application development</strong>, <strong className="text-orange-400">AI development</strong>, and <strong className="text-orange-400">custom SaaS development services</strong>. Our commitment to excellence ensures that our clients receive the best possible web experiences.
      </p>
      <p className="text-lg text-gray-300">
        We believe in building strong partnerships with our clients, understanding their unique needs, and delivering tailored solutions such as <strong className="text-orange-400">lead generation services for SaaS</strong> and <strong className="text-orange-400">AI agent development services</strong> that exceed their expectations.
      </p>
    </div>

    {/* Right Column - Image */}
    <div className="md:order-2 flex justify-center"> {/* Order 2 for md screens and up */}
      <img
        src="/images/saasnext 5.jpg"
        alt="About Us"
        className="w-full max-w-lg rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

<section className="container mx-auto px-6 py-12 bg-[#161E42] text-white">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
      Who We Are
    </h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      At Saasnext, we empower businesses with innovative <strong className="text-orange-400">web app development</strong> and <strong className="text-orange-400">data-driven lead generation services for SaaS</strong>, helping them achieve sustainable growth.
    </p>
  </div>

  {/* Core Expertise Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Web App Development */}
    <div className="bg-[#1F2A55] p-6 md:p-8 rounded-lg shadow-md border border-gray-700">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
        Custom Web Applications
      </h3>
      <p className="text-gray-300 text-base md:text-lg">
        As a leading <strong className="text-orange-400">web application development company in Junagadh</strong>, we design and develop tailored web applications that align with your business goals. From intuitive user interfaces to robust backend systems, we ensure scalability and performance.
      </p>
    </div>

    {/* Lead Generation */}
    <div className="bg-[#1F2A55] p-6 md:p-8 rounded-lg shadow-md border border-gray-700">
      <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
        Data-Driven Lead Generation
      </h3>
      <p className="text-gray-300 text-base md:text-lg">
        Our <strong className="text-orange-400">lead generation company in Junagadh</strong> leverages advanced analytics and targeted campaigns to deliver high-quality leads. As a trusted <strong className="text-orange-400">SaaS lead generation agency</strong>, we focus on maximizing ROI and driving measurable results for your business.
      </p>
    </div>
  </div>

  {/* Approach Section */}
  <div className="mt-12 text-center">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
      Our Commitment
    </h3>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      We believe in building long-term partnerships with our clients. By combining innovation, expertise, and transparency, we deliver solutions such as <strong className="text-orange-400">custom SaaS development services</strong> and <strong className="text-orange-400">AI agent development services</strong> that drive success and foster growth.
    </p>
  </div>
</section>

<section className="w-full bg-[#161E42] text-white py-20 px-6 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

  <div className="container mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16 relative">
      <div className="inline-block px-6 py-2 bg-orange-500/10 rounded-full text-orange-400 text-sm font-semibold mb-4">
        🚀 Accelerate Your Business Growth with <strong className="text-orange-400">Web App Development</strong> and <strong className="text-orange-400">Lead Generation Services for SaaS</strong>
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Transform Your Digital Presence
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Experience exponential growth with our proven strategies and cutting-edge solutions like <strong className="text-orange-400">custom SaaS development services</strong> and <strong className="text-orange-400">AI agent development services</strong>.
      </p>
    </div>

    {/* Growth Metrics Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        {
          title: "Lead Generation",
          metric: "300%",
          description: "Average increase in qualified leads through our <strong className='text-orange-400'>lead generation company in Junagadh</strong>.",
          icon: "📈"
        },
        {
          title: "Conversion Rate",
          metric: "150%",
          description: "Improvement in conversion rates using <strong className='text-orange-400'>AI solutions provider in Junagadh</strong> expertise.",
          icon: "🎯"
        },
        {
          title: "ROI",
          metric: "5x",
          description: "Average return on investment for our <strong className='text-orange-400'>web development company in Junagadh</strong> solutions.",
          icon: "💰"
        }
      ].map((item, index) => (
        <div 
          key={index}
          className="group bg-gradient-to-br from-[#1F2A56] to-[#2B3765] p-8 rounded-2xl
                     border border-gray-700/50 hover:border-orange-500/50
                     transition-all duration-300 hover:-translate-y-2"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-3xl font-bold text-orange-400 mb-2">{item.metric}</h3>
          <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
          <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      ))}
    </div>

    {/* Call-to-Action Section */}
    <div className="bg-gradient-to-r from-[#1F2A56] to-[#2B3765] p-10 rounded-2xl border border-gray-700/50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Scale Your Business with <strong className="text-orange-400">SaaS Lead Generation Agency</strong>?
          </h3>
          <p className="text-gray-300 mb-6">
            Join hundreds of businesses that have transformed their digital presence and achieved remarkable growth with Saasnext, a trusted <strong className="text-orange-400">web application development company in Junagadh</strong>.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Custom Growth Strategy powered by <strong className='text-orange-400'>AI development company</strong>",
              "24/7 Expert Support for <strong className='text-orange-400'>custom SaaS development services</strong>",
              "Guaranteed Results with <strong className='text-orange-400'>lead generation services for SaaS</strong>",
              "Flexible Solutions tailored to your needs"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
        <div className="text-center md:text-right">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                     rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20 
                     hover:shadow-orange-500/40 transition-all duration-300 
                     transform hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-2">
              Start Your Growth Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

