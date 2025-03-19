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

            

            

    </>
  );
}