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



    </>
  );
}