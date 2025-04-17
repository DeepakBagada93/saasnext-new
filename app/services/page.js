export default function Services() {

  const features = [
    { title: "Custom Web Apps", description: "Tailor-made solutions for your business." },
    { title: "SEO Optimization", description: "Boost your search engine ranking." },
    { title: "Lead Generation", description: "Increase conversions with smart strategies." },
    { title: "E-Commerce Solutions", description: "Build scalable online stores." }
  ];

  return (
    <>
      <section className="w-full h-[600px] bg-[#161E42] flex items-center justify-center text-center px-6">
  <div className="max-w-3xl">
    <h2 className="text-5xl font-extrabold mb-4 text-white">Welcome to Saasnext</h2>
    <p className="text-lg text-gray-300">
      At Saasnext, we specialize in web application development and lead generation, 
      helping businesses scale with modern technology and digital solutions.
    </p>
  </div>
</section>


<section className="w-full bg-[#161E42] py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Text Content */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-extrabold mb-4 text-white">Why Choose Saasnext?</h2>
      <p className="text-lg text-gray-300">
        We provide top-notch web development and lead generation solutions to help businesses grow, scale, and succeed online.
      </p>
    </div>

    {/* Right Column - 2×2 Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border-2 border-gray-500 p-6 rounded-lg text-center shadow-md transition duration-300 hover:border-orange-500"
        >
          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="w-full bg-[#161E42] py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Image */}
    <div className="flex justify-center">
      <img 
        src="/images/saasnext2.jpg" 
        alt="Business Growth" 
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>

    {/* Right Column - Text Content */}
    <div>
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Why Choose Saasnext?
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        Saasnext empowers businesses with cutting-edge web solutions. Our expertise ensures seamless development and lead generation.
      </p>
      <ul className="space-y-4">
        <li className="flex items-center text-lg text-gray-300">
          <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0L7.293 10.95a1 1 0 011.414-1.414l1.636 1.636 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Scalable & High-Performance Applications
        </li>
        <li className="flex items-center text-lg text-gray-300">
          <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0L7.293 10.95a1 1 0 011.414-1.414l1.636 1.636 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Optimized for Business Growth
        </li>
        <li className="flex items-center text-lg text-gray-300">
          <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0L7.293 10.95a1 1 0 011.414-1.414l1.636 1.636 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Secure & Reliable Digital Solutions
        </li>
        <li className="flex items-center text-lg text-gray-300">
          <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0L7.293 10.95a1 1 0 011.414-1.414l1.636 1.636 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          AI & Automation Integration
        </li>
        <li className="flex items-center text-lg text-gray-300">
          <svg className="w-6 h-6 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0L7.293 10.95a1 1 0 011.414-1.414l1.636 1.636 5.657-5.657a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Data-Driven Lead Generation
        </li>
      </ul>
    </div>

  </div>
</section>

            

            

    {/* Service Packages Section */}
    <section className="w-full bg-gradient-to-b from-[#161E42] to-[#1F2A56] py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-orange-500/10 rounded-full text-orange-400 text-sm font-semibold mb-4">
            🚀 Accelerate Your Growth
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Why Businesses Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence with our proven expertise and innovative solutions
          </p>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "💡",
              title: "Innovation First",
              stats: "300%",
              description: "Boost in business efficiency with our cutting-edge solutions",
              benefits: [
                "AI-Powered Solutions",
                "Custom Automation",
                "Smart Analytics"
              ]
            },
            {
              icon: "📈",
              title: "Growth Focused",
              stats: "5x ROI",
              highlight: true,
              description: "Average return on investment for our clients",
              benefits: [
                "Lead Generation",
                "Conversion Optimization",
                "Market Expansion"
              ]
            },
            {
              icon: "🛡️",
              title: "Enterprise Ready",
              stats: "99.9%",
              description: "Uptime with enterprise-grade security and scalability",
              benefits: [
                "Advanced Security",
                "24/7 Support",
                "Scalable Infrastructure"
              ]
            }
          ].map((hook, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-2xl backdrop-blur-sm
                     border border-gray-700/50 transition-all duration-500
                     hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10
                     ${hook.highlight ? 'bg-gradient-to-br from-[#2B3765]/80 to-[#1F2A56]/80' : 'bg-[#2B3765]/50'}
                     transform hover:-translate-y-2`}
            >
              <div className="text-5xl mb-6">{hook.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{hook.title}</h3>
              <div className="text-4xl font-bold text-orange-400 mb-4">{hook.stats}</div>
              <p className="text-gray-300 mb-6">{hook.description}</p>
              
              <ul className="space-y-3">
                {hook.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="w-full bg-[#161E42] py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-6 text-white">Our Development Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your project's success
          </p>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Discovery", icon: "🔍", description: "Understanding your business needs and goals" },
            { step: "2", title: "Planning", icon: "📋", description: "Creating detailed project roadmap" },
            { step: "3", title: "Development", icon: "💻", description: "Building your solution with best practices" },
            { step: "4", title: "Launch", icon: "🚀", description: "Deploying and optimizing your application" }
          ].map((process, index) => (
            <div
              key={index}
              className="group relative bg-[#1F2A56] p-8 rounded-xl border border-gray-700
                     transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
            >
              <div className="text-4xl mb-4">{process.icon}</div>
              <div className="text-5xl font-bold text-orange-500/20 absolute top-4 right-4">
                {process.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{process.title}</h3>
              <p className="text-gray-300">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="w-full bg-gradient-to-r from-[#161E42] via-[#1F2A56] to-[#161E42] py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-[#2B3765] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your business goals with our custom web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl
                     text-white font-semibold shadow-lg shadow-orange-500/20
                     hover:shadow-orange-500/40 transition-all duration-300
                     transform hover:-translate-y-1"
              >
                Schedule a Free Consultation
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 border-2 border-orange-500 rounded-xl text-orange-400
                     font-semibold hover:bg-orange-500 hover:text-white
                     transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}