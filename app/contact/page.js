export default function Contact() {
  return (
    <>
      <section className="w-full h-[600px] bg-[#161E42] flex items-center justify-center text-center px-6">
  <div className="max-w-3xl">
    <h2 className="text-5xl font-extrabold mb-4 text-white">Welcome to Saasnext</h2>
    <p className="text-lg text-white">
      At Saasnext, we specialize in web application development and lead generation, 
      helping businesses scale with modern technology and digital solutions.
    </p>
  </div>
</section>


<section className="w-full bg-[#161E42] py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Heading & Description */}
    <div>
      <h2 className="text-4xl font-extrabold text-white mb-4">
        Get a Custom Solution for Your Business 🚀
      </h2>
      <p className="text-lg text-white mb-6">
        Let us know what services you need, and we’ll provide you with the best solutions tailored to your budget.
      </p>
      <p className="text-lg text-white">
        Saasnext specializes in web app development, lead generation, digital marketing, and automation solutions to help businesses grow.
      </p>
    </div>

    {/* Right Column - Form */}
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-black mb-4">Tell Us About Your Project</h3>
      <form className="space-y-4">
        
        {/* Service Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Which services do you need?</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Web Development</option>
            <option>SEO & Digital Marketing</option>
            <option>Lead Generation</option>
            <option>UI/UX Design</option>
            <option>Automation & AI Integration</option>
          </select>
        </div>

        {/* Budget Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Your Budget (INR)</label>
          <input 
            type="number" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your budget"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all">
          Get a Quote
        </button>
      </form>
    </div>

  </div>
</section>

<section className="w-full bg-[#161E42] py-16 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Image */}
    <div className="flex justify-center">
      <img 
        src="/images/saasnext3.jpg" 
        alt="Web Development" 
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>

    {/* Right Column - Text Content */}
    <div className="text-center lg:text-left">
      <h2 className="text-4xl font-extrabold text-white mb-4">Saasnext: Innovating Web Solutions</h2>
      <p className="text-lg text-white mb-4">
        At Saasnext, we specialize in building high-performance, scalable web applications tailored to your business needs. 
        Our expertise in modern web technologies ensures seamless user experiences and robust digital solutions.
      </p>
      <p className="text-lg text-white">
        Whether you need a Next.js-powered dynamic site, an AI-driven automation system, or a scalable e-commerce platform, 
        our team is committed to delivering cutting-edge solutions that drive business growth.
      </p>
    </div>

  </div>
</section>


    </>
  );
}