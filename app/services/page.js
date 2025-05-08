export const metadata = {
  title: "Services | Web Development & Lead Generation Company in Junagadh",
  description: "Professional web application development services in Junagadh. Specialized in AI solutions, lead generation, and custom SaaS development. Transform your business with our expert digital services.",
};

export default function Services() {

  const features = [
    { title: "Custom Web Apps", description: "Tailor-made solutions for your business." },
    { title: "SEO Optimization", description: "Boost your search engine ranking." },
    { title: "Lead Generation", description: "Increase conversions with smart strategies." },
    { title: "E-Commerce Solutions", description: "Build scalable online stores." }
  ];

  return (
    <>
     <section className="relative w-full min-h-[600px] sm:h-screen bg-gradient-to-br from-[#161E42] to-[#0A1128] flex items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden">
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
  <div className="max-w-3xl relative z-10 px-4 sm:px-6">
    {/* Heading with gradient shimmer effect */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-shimmer transition-all duration-500 hover:tracking-wide">
      Turning Ideas into Impact with <span className="text-green-400 glow">Digital Excellence</span> 🚀
    </h2>

    {/* Description with glowing effect */}
    <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 animate-fade-in-up">
      <span className="block font-bold text-base sm:text-lg text-blue-300 tracking-wide mb-2 sm:mb-3">Where Vision Meets Velocity.</span>
      At <span className="font-semibold text-white glow">Saasnext</span>, we believe every great business starts with a bold idea — and ends with flawless execution.
      <br /><br />
      As a premier <strong className="text-blue-400 glow">Web Application Development Company in Junagadh</strong>, we specialize in crafting scalable SaaS platforms that evolve with your ambitions. From intuitive UI/UX design to full-stack development, our team turns complexity into simplicity.
      <br /><br />
      Looking to convert interest into action? Our <strong className="text-purple-400 glow">Lead Generation Services for SaaS</strong> are built to attract, engage, and convert. And with cutting-edge <strong className="text-green-400 glow">Custom SaaS Development Services</strong>, we give you the tools to outpace competition and lead the market.
    </p>

    {/* Call to Action with hover effects */}
    <a
      href="/contact"
      className="inline-block relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 group overflow-hidden"
    >
      <span className="relative z-10">🚀 Launch Your Digital Transformation</span>
      <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </a>
  </div>
</section>


<section className="w-full bg-[#161E42] py-20 px-6">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Column - Text Content */}
    <div className="text-center lg:text-left space-y-6">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
        Why Choose{" "}
        <span className="relative inline-block text-orange-400">
          Saasnext
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-orange-400 animate-underline"></span>
        </span>
        ?
      </h2>
      <p className="text-lg text-slate-300 max-w-xl">
        As a trusted <strong className="text-orange-400">web application development company in Junagadh</strong>, we provide cutting-edge web development and <strong className="text-orange-400">lead generation services for SaaS</strong> to help you grow, scale, and dominate your niche online. Let us turn your vision into a high-performing digital reality with our expertise in <strong className="text-orange-400">custom SaaS development services</strong> and <strong className="text-orange-400">AI agent development services</strong>.
      </p>
    </div>

    {/* Right Column - 2×2 Grid Layout with Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "Custom Web Development",
          description:
            "As a leading <strong className='text-orange-400'>web development company in Junagadh</strong>, we build tailored solutions that align with your business goals.",
        },
        {
          title: "AI-Powered Solutions",
          description:
            "Leverage our expertise as an <strong className='text-orange-400'>AI development company</strong> to automate tasks and enhance productivity.",
        },
        {
          title: "Lead Generation Services",
          description:
            "Our <strong className='text-orange-400'>lead generation company in Junagadh</strong> delivers high-quality leads to fuel your growth.",
        },
        {
          title: "Scalable SaaS Platforms",
          description:
            "We specialize in <strong className='text-orange-400'>custom SaaS development services</strong>, ensuring scalability and future-ready solutions.",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="group bg-[#1f2a4a] border border-transparent hover:border-orange-400 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          {/* Placeholder for icon */}
          <div className="flex items-center justify-center h-12 w-12 bg-orange-500 rounded-full text-white mb-4 mx-auto lg:mx-0">
            <span className="text-xl font-bold">{index + 1}</span>
          </div>

          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
          <p
            className="text-gray-300 text-sm"
            dangerouslySetInnerHTML={{ __html: feature.description }}
          />
        </div>
      ))}
    </div>
  </div>
</section>



<section className="w-full bg-[#161E42] py-20 px-6 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
    
    {/* Left Column - Main Heading and Description */}
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-white underline decoration-orange-400 underline-offset-4">
        Web App Development
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        Crafting dynamic and user-centric web applications tailored to your business needs. 
        As a trusted <strong className="text-orange-400">web application development company in Junagadh</strong>, we go beyond simple websites, creating interactive experiences that engage your users and drive results. 
        We focus on scalability, security, and maintainability, ensuring your web application grows with your business.
      </p>
    </div>

    {/* Right Column - Key Features */}
    <div className="space-y-6">
      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Custom Web Application Development</h3>
        <p className="text-gray-300 mt-2">
          Every application is built from the ground up to meet your specific requirements, workflows, and goals. 
          As a leading <strong className="text-orange-400">custom SaaS development services</strong> provider, this includes detailed planning, user journey mapping, and iterative development.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">E-commerce Solutions</h3>
        <p className="text-gray-300 mt-2">
          We build robust and secure online stores that include shopping cart development, payment gateway integration, 
          product catalog management, and order tracking. Partner with us as your trusted <strong className="text-orange-400">SaaS development company</strong>.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Progressive Web Apps (PWAs)</h3>
        <p className="text-gray-300 mt-2">
          PWAs load instantly, work offline, and can be installed on any device, offering the best of both web and mobile applications. 
          Our expertise as an <strong className="text-orange-400">AI solutions provider in Junagadh</strong> ensures cutting-edge technology integration.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Single-Page Applications (SPAs)</h3>
        <p className="text-gray-300 mt-2">
          We create SPAs that provide a fast and fluid user experience by loading a single HTML page and dynamically updating content based on user interaction. 
          Our team leverages advanced frameworks as a top <strong className="text-orange-400">web development company in Junagadh</strong>.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">API Development & Integration</h3>
        <p className="text-gray-300 mt-2">
          We design and integrate RESTful APIs for seamless data flow between systems, with a focus on reliability, documentation, and testing. 
          As a trusted <strong className="text-orange-400">lead generation company in Junagadh</strong>, we ensure API integrations align with your business goals.
        </p>
      </div>
    </div>

  </div>
</section>
<section className="w-full bg-[#161E42] py-20 px-6 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Left Column - Key Features */}
    <div className="space-y-6">
      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Search Engine Optimization (SEO)</h3>
        <p className="text-gray-300 mt-2">
          We optimize your site to rank higher in search results, driving organic traffic. This includes keyword research, 
          on-page SEO, link building, and technical optimization.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Pay-Per-Click (PPC) Advertising</h3>
        <p className="text-gray-300 mt-2">
          We run high-converting campaigns on platforms like Google Ads to deliver fast results. Includes ad copy, bidding, 
          and continuous optimization.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Content Marketing</h3>
        <p className="text-gray-300 mt-2">
          We produce valuable content like blogs, videos, and infographics to attract, engage, and convert your audience 
          while building brand trust.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Social Media Marketing</h3>
        <p className="text-gray-300 mt-2">
          We leverage both organic and paid social strategies on platforms like Facebook, Instagram, and LinkedIn to 
          boost engagement and generate leads.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Lead Nurturing & Management</h3>
        <p className="text-gray-300 mt-2">
          Through email automation, CRM integration, and lead scoring, we ensure leads are nurtured until they’re 
          sales-ready.
        </p>
      </div>
    </div>

    {/* Right Column - Main Heading and Description */}
    <div className="space-y-6 text-left lg:text-right">
      <h2 className="text-4xl font-extrabold text-white underline decoration-orange-400 underline-offset-4">
        Lead Generation
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        Driving targeted leads to fuel your business growth and expand your customer base. We employ a multi-faceted approach 
        to lead generation, combining various online strategies to attract, engage, and convert potential customers. 
        We don't just deliver leads; we deliver qualified leads that are more likely to convert into paying customers.
      </p>
    </div>

  </div>
</section>

<section className="w-full bg-[#161E42] py-20 px-6 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Left Column - Main Heading and Description */}
    <div className="space-y-6 text-left">
      <h2 className="text-4xl font-extrabold text-white underline decoration-orange-400 underline-offset-4">
        Copywriting
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        Crafting compelling and persuasive copy that resonates with your audience and drives action. We go beyond simply writing words; 
        we craft messages that connect with your audience on an emotional level and inspire them to take the desired action. 
        We understand the nuances of different writing styles and tailor our copy to each specific platform and purpose.
      </p>
    </div>

    {/* Right Column - Key Features */}
    <div className="space-y-6">
      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Website Copywriting</h3>
        <p className="text-gray-300 mt-2">
          We write persuasive and clear website copy that communicates your value, engages visitors, and increases conversions—homepages, 
          service pages, and CTAs.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Marketing Collateral</h3>
        <p className="text-gray-300 mt-2">
          Engaging content for brochures, flyers, and presentations that enhances your marketing efforts and supports your sales team.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Blog Posts & Articles</h3>
        <p className="text-gray-300 mt-2">
          Informative and SEO-friendly content that attracts readers, builds trust, and establishes your brand as a thought leader.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Social Media Content</h3>
        <p className="text-gray-300 mt-2">
          Short-form, snappy, and engaging copy tailored for different social platforms to drive engagement and shares.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Sales Copy & Scripts</h3>
        <p className="text-gray-300 mt-2">
          Persuasive scripts and email templates designed to help your sales team close deals faster and more effectively.
        </p>
      </div>
    </div>

  </div>
</section>
<section className="w-full bg-[#161E42] py-20 px-6 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Left Column - Key Features */}
    <div className="space-y-6">
      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Technology Roadmap Planning</h3>
        <p className="text-gray-300 mt-2">
          We help you create a multi-year strategy that aligns your IT initiatives with business goals and budgets for smarter growth.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">IT Strategy Development</h3>
        <p className="text-gray-300 mt-2">
          Define and shape your tech stack, infrastructure, and governance model to support scalable, sustainable business operations.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Process Optimization</h3>
        <p className="text-gray-300 mt-2">
          Streamline workflows and reduce costs by integrating the right technology into your business processes.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Change Management</h3>
        <p className="text-gray-300 mt-2">
          Ensure smooth transitions when introducing new systems, with a strong focus on user adoption and minimal business disruption.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Project Management</h3>
        <p className="text-gray-300 mt-2">
          Deliver IT projects on time and within budget with our expert planning, execution, and stakeholder communication.
        </p>
      </div>
    </div>

    {/* Right Column - Heading and Description */}
    <div className="space-y-6 text-left lg:text-right">
      <h2 className="text-4xl font-extrabold text-white underline decoration-orange-400 underline-offset-4">
        IT Consulting
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        Expert guidance and strategic advice to optimize your technology investments and achieve business goals. 
        We partner with you to understand your challenges, then craft a custom tech strategy aligned with your business objectives. 
        Our consulting is practical, honest, and results-driven.
      </p>
    </div>

  </div>
</section>

<section className="w-full bg-[#161E42] py-20 px-6 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* Left Column - Heading and Description */}
    <div className="space-y-6 text-left lg:text-left">
      <h2 className="text-4xl font-extrabold text-white underline decoration-orange-400 underline-offset-4">
        Cloud Services
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">
        Leveraging the power of the cloud to improve scalability, flexibility, and cost-efficiency. We help you harness the cloud to transform your IT infrastructure, reduce costs, and improve agility. Our cloud services range from migration to continuous management and optimization.
      </p>
    </div>

    {/* Right Column - Key Features */}
    <div className="space-y-6">
      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Cloud Migration</h3>
        <p className="text-gray-300 mt-2">
          We help you migrate your applications and data to the cloud, whether it's a public, private, or hybrid cloud environment, ensuring a smooth transition with minimal disruption.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Cloud Infrastructure Management</h3>
        <p className="text-gray-300 mt-2">
          We manage your cloud infrastructure, including servers, storage, and networking, ensuring optimal performance, security, and reliability.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">SaaS Solutions</h3>
        <p className="text-gray-300 mt-2">
          We help you select and implement the right Software-as-a-Service (SaaS) solutions for your business needs, from CRM and ERP to collaboration and productivity tools.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Cloud Security</h3>
        <p className="text-gray-300 mt-2">
          We implement robust security measures to protect your data and applications in the cloud, including access control, data encryption, and threat detection.
        </p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4">
        <h3 className="text-xl font-semibold text-white">Disaster Recovery and Backup</h3>
        <p className="text-gray-300 mt-2">
          We develop and implement disaster recovery and backup plans to ensure your business continuity in the event of an outage or data loss.
        </p>
      </div>
    </div>

  </div>
</section>




<section className="w-full bg-gradient-to-br from-[#161E42] to-[#0A1128] py-20 px-6 relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Floating circles */}
    <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-20 blur-3xl animate-float"></div>
    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-3xl animate-float-reverse"></div>
  </div>

  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
    
    {/* Left Column - Image with Gradient Overlay */}
    <div className="flex justify-center relative">
      <img 
        src="/images/saasnext2.jpg" 
        alt="Business Growth" 
        className="w-full max-w-md rounded-lg shadow-lg"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#161E42]/70 to-transparent rounded-lg"></div>
      {/* Text overlay */}
      <p className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-[#161E42]/80 px-4 py-2 rounded-lg">
        Empowering Businesses in Junagadh and Beyond 🚀
      </p>
    </div>

    {/* Right Column - Text Content with Enhanced Layout */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
        Why Choose <span className="text-orange-400">Saasnext?</span>
      </h2>
      <p className="text-lg text-gray-300 mb-8">
        Saasnext empowers businesses with cutting-edge web solutions. As a trusted <strong className="text-orange-400">web application development company in Junagadh</strong>, our expertise ensures seamless development, <strong className="text-orange-400">lead generation services for SaaS</strong>, and innovative <strong className="text-orange-400">AI agent development services</strong>.
      </p>
      
      {/* Enhanced List with Hover Effects */}
      <ul className="space-y-4">
        {[
          {
            title: "Scalable & High-Performance Applications",
            desc: "We build robust applications tailored to your business needs as a leading <strong className='text-orange-400'>custom SaaS development services</strong> provider."
          },
          {
            title: "Optimized for Business Growth",
            desc: "Our strategies ensure your business scales efficiently with <strong className='text-orange-400'>data-driven lead generation services</strong>."
          },
          {
            title: "Secure & Reliable Digital Solutions",
            desc: "As a trusted <strong className='text-orange-400'>web development company in Junagadh</strong>, we prioritize security and reliability."
          },
          {
            title: "AI & Automation Integration",
            desc: "Leverage our expertise as an <strong className='text-orange-400'>AI solutions provider in Junagadh</strong> to automate processes and enhance productivity."
          },
          {
            title: "Data-Driven Lead Generation",
            desc: "Our <strong className='text-orange-400'>SaaS lead generation agency</strong> delivers high-quality leads to fuel your growth."
          }
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 p-4 bg-[#1F2A55] rounded-lg shadow-md transition-all duration-300 hover:bg-[#2B3765] hover:shadow-lg"
          >
            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
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
          Ready to Transform Your Business with <strong className="text-orange-400">Web App Development</strong>?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Let's discuss how we can help you achieve your business goals with our <strong className="text-orange-400">custom SaaS development services</strong>, <strong className="text-orange-400">lead generation services for SaaS</strong>, and innovative <strong className="text-orange-400">AI agent development services</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
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
