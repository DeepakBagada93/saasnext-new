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


       <section className="relative w-full bg-[#161E42] text-white h-[600px] flex items-center justify-center px-6">
  <div className="container mx-auto text-center max-w-3xl">
    {/* Heading */}
    <h1 className="text-5xl font-extrabold mb-6">About Saasnext</h1>

    {/* Description */}
    <p className="text-lg leading-relaxed">
      Saasnext is a top-tier <strong>Web App Development</strong> and <strong>Lead Generation</strong> company, 
      dedicated to building high-performance, scalable digital solutions. We empower businesses 
      to <strong>grow, manage, and automate</strong> their digital presence using innovative technology.
    </p>

    {/* Call to Action */}
    <div className="mt-8">
      <a href="/contact" className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
        Get in Touch
      </a>
    </div>
  </div>
</section>

    <section className="w-full bg-[#161E42] text-white py-16 px-6">
  <div className="container mx-auto text-center">
    {/* Section Heading */}
    <h2 className="text-4xl font-extrabold mb-4">Why Choose Saasnext?</h2>
    <p className="text-lg text-gray-300 mb-12">Empowering businesses with cutting-edge digital solutions.</p>

    {/* 3×3 Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border-2 border-gray-600 p-6 rounded-lg text-center shadow-md transition duration-300 hover:border-orange-500"
        >
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
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
        Saasnext specializes in cutting-edge technologies to build high-performance, scalable, and modern web applications.
      </p>
    </div>

    {/* Right Column - 2×2 Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="border-2 border-gray-600 p-6 rounded-lg text-center shadow-md transition duration-300 hover:border-orange-500"
        >
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="w-full bg-[#161E42] text-white py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Image */}
    <div className="flex justify-center">
      <img 
        src="/images/saasnext about.jpg" 
        alt="Web Development" 
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>

    {/* Right Column - Text Content */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-extrabold mb-4">Saasnext: Innovating Web Solutions</h2>
      <p className="text-lg text-gray-300 mb-4">
        At Saasnext, we specialize in building high-performance, scalable web applications tailored to your business needs. 
        Our expertise in modern web technologies ensures seamless user experiences and robust digital solutions.
      </p>
      <p className="text-lg text-gray-300">
        Whether you need a Next.js-powered dynamic site, an AI-driven automation system, or a scalable e-commerce platform, 
        our team is committed to delivering cutting-edge solutions that drive business growth.
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
        We strive to empower businesses with innovative digital solutions, helping them achieve their goals through cutting-edge technology and exceptional service. Our commitment to excellence ensures that our clients receive the best possible web experiences.
      </p>
      <p className="text-lg text-gray-300">
        We believe in building strong partnerships with our clients, understanding their unique needs, and delivering tailored solutions that exceed their expectations.
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
      At Saasnext, we empower businesses with innovative web app development and data-driven lead generation solutions, helping them achieve sustainable growth.
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
        We design and develop tailored web applications that align with your business goals. From intuitive user interfaces to robust backend systems, we ensure scalability and performance.
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
        Our lead generation strategies leverage advanced analytics and targeted campaigns to deliver high-quality leads. We focus on maximizing ROI and driving measurable results for your business.
      </p>
    </div>
  </div>

  {/* Approach Section */}
  <div className="mt-12 text-center">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
      Our Commitment
    </h3>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
      We believe in building long-term partnerships with our clients. By combining innovation, expertise, and transparency, we deliver solutions that drive success and foster growth.
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
        🚀 Accelerate Your Business Growth
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Transform Your Digital Presence
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Experience exponential growth with our proven strategies and cutting-edge solutions
      </p>
    </div>

    {/* Growth Metrics Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {[
        {
          title: "Lead Generation",
          metric: "300%",
          description: "Average increase in qualified leads for our clients",
          icon: "📈"
        },
        {
          title: "Conversion Rate",
          metric: "150%",
          description: "Improvement in conversion rates through optimization",
          icon: "🎯"
        },
        {
          title: "ROI",
          metric: "5x",
          description: "Average return on investment for our solutions",
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
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>

    {/* Call-to-Action Section */}
    <div className="bg-gradient-to-r from-[#1F2A56] to-[#2B3765] p-10 rounded-2xl border border-gray-700/50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Scale Your Business?
          </h3>
          <p className="text-gray-300 mb-6">
            Join hundreds of businesses that have transformed their digital presence and achieved remarkable growth with Saasnext.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Custom Growth Strategy",
              "24/7 Expert Support",
              "Guaranteed Results",
              "Flexible Solutions"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-right">
          <a
            href="#contact"
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

