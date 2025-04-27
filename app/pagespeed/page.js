"use client";
import { useState } from "react";

export const metadata = {
  title: "Speed Insights | Web Development Company in Junagadh",
  description: "Get insights on web performance from Junagadh's leading web application development company. Expert analysis and optimization services for better website speed and user experience.",
};

export default function PageSpeed() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const checkSpeed = async () => {
    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);
    setProgress(10);

    try {
      const apiKey = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY;
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;

      setProgress(40);

      const res = await fetch(apiUrl);
      const result = await res.json();

      if (result.error) throw new Error(result.error.message);

      setData(result);
      setProgress(100);
    } catch (err) {
      setError(err.message);
      setProgress(0);
    } finally {
      setLoading(false);
    }
  };

  const getFormMessage = (score) => {
    if (score < 60) {
      return {
        title: "🚨 Urgent Fixes Required!",
        message: "Your website has critical issues. Get expert help now!",
        buttonText: "Request Urgent Fixes",
      };
    } else if (score < 80) {
      return {
        title: "📉 Your Website Needs Improvement",
        message: "Let’s conduct a detailed audit to improve your score.",
        buttonText: "Get a Free Audit",
      };
    } else if (score < 90) {
      return {
        title: "🛠 Free Consultation Available!",
        message: "Your website can be optimized further. Get expert advice.",
        buttonText: "Consult for Free",
      };
    }
    return null;
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 mt-48 text-white bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">🔍 PageSpeed Checker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded-lg text-white bg-gray-700"
        />
        <button
          onClick={checkSpeed}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {loading ? "Checking..." : "Check Speed"}
        </button>
      </div>

      {/* Loading Progress Bar */}
      {loading && (
        <div className="w-full bg-gray-300 rounded-lg h-2">
          <div
            className="bg-blue-600 h-2 rounded-lg transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {data?.lighthouseResult?.categories ? (
        <div className="mt-6 p-4 border rounded-lg bg-gray-800">
          <h2 className="text-xl font-semibold mb-2">Results for {url}</h2>

          {/* Lighthouse Scores */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["performance", "seo", "accessibility", "best-practices", "pwa"].map((category) => {
              const categoryData = data.lighthouseResult.categories[category.replace("-", "")];
              let score = categoryData ? Math.round(categoryData.score * 100) : "N/A";
              
              // Adjust score based on ranges
              if (score !== "N/A") {
                if (score >= 90) {
                  score = 100; // If score is 90 or above, show as 100
                } else if (score >= 80) {
                  score = 90; // If score is 80-89, show as 90
                } else if (score >= 70) {
                  score = 80; // If score is 70-79, show as 80
                } else if (score >= 60) {
                  score = 75; // If score is 60-69, show as 75
                } else {
                  score = Math.round(score / 10) * 10; // Round to nearest 10 for scores below 60
                }
              }

              return (
                <div key={category} className={`p-4 bg-white rounded-lg shadow ${
                  score === 100 ? 'ring-2 ring-green-500' : ''
                }`}>
                  <h3 className="text-lg font-semibold capitalize text-white bg-gray-800 p-2 rounded-md">
                    {category.replace("-", " ")}
                  </h3>
                  <p className={`text-black font-bold text-xl ${
                    score === 100 ? 'text-green-600' : ''
                  }`}>
                    {score}
                  </p>

                  {/* Show Consultation Form if Score is Less Than 90 */}
                  {score !== "N/A" && score < 90 && (
                    <div className="mt-2 bg-yellow-100 text-black p-2 rounded-md">
                      <p className="text-sm font-medium">
                        {getFormMessage(score)?.message}
                      </p>
                      <button className="bg-blue-600 text-white px-3 py-1 mt-2 rounded-lg">
                        {getFormMessage(score)?.buttonText}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Core Web Vitals */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded-md">🚀 Core Web Vitals</h3>
            <p className="text-black">📌 LCP: {data.lighthouseResult.audits["largest-contentful-paint"]?.displayValue || "N/A"}</p>
            <p className="text-black">📌 FID: {data.lighthouseResult.audits["interactive"]?.displayValue || "N/A"}</p>
            <p className="text-black">📌 CLS: {data.lighthouseResult.audits["cumulative-layout-shift"]?.displayValue || "N/A"}</p>
          </div>

          {/* PageSpeed Recommendations */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-white bg-gray-800 p-2 rounded-md">📌 Suggestions to Improve</h3>
            <ul className="list-disc pl-4 text-black">
              {data.lighthouseResult.audits["uses-optimized-images"]?.displayValue && (
                <li>🖼 Optimize images: {data.lighthouseResult.audits["uses-optimized-images"].displayValue}</li>
              )}
              {data.lighthouseResult.audits["render-blocking-resources"]?.displayValue && (
                <li>🚀 Remove render-blocking resources: {data.lighthouseResult.audits["render-blocking-resources"].displayValue}</li>
              )}
              {data.lighthouseResult.audits["uses-text-compression"]?.displayValue && (
                <li>📦 Enable text compression: {data.lighthouseResult.audits["uses-text-compression"].displayValue}</li>
              )}
              {data.lighthouseResult.audits["server-response-time"]?.displayValue && (
                <li>⏳ Reduce server response time: {data.lighthouseResult.audits["server-response-time"].displayValue}</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        data && <p className="text-gray-500 mt-4">No valid PageSpeed data found.</p>
      )}
    </div>

    <section className="bg-[#161E42] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-8 text-center underline underline-offset-4 decoration-orange-400">
      Why Page Speed Matters for Your Business
    </h2>

    <div className="space-y-6 text-lg text-gray-300">
      <p>
        As a leading <strong className="text-white">web application development company</strong> and <strong className="text-white">SaaS development company</strong>, we understand the importance of performance. In today’s digital world, a fast-loading site isn’t just a nice-to-have—it’s essential for staying competitive.
      </p>

      <ul className="list-disc list-inside space-y-3">
        <li>
          ⚡ <strong className="text-white">User Experience:</strong> 53% of users abandon a site that takes longer than 3 seconds to load.
        </li>
        <li>
          🔍 <strong className="text-white">SEO Performance:</strong> Google prioritizes fast websites, which impacts your rankings—especially if you're a 
          <strong> web development company in Junagadh</strong> or 
          <strong> lead generation company in Junagadh</strong>.
        </li>
        <li>
          💰 <strong className="text-white">Conversions:</strong> A 1-second delay in page load time can reduce conversions by 7%.
        </li>
        <li>
          📱 <strong className="text-white">Mobile Optimization:</strong> Our <strong>custom SaaS development services</strong> ensure fast and responsive design across all devices.
        </li>
      </ul>

      <p className="mt-6">
        At <span className="text-orange-400 font-semibold">SaaSNext</span>, we combine 
        <strong> AI agent development services</strong> and 
        <strong> lead generation services for SaaS</strong> to help businesses improve digital performance. 
        Whether you need an <strong>AI solutions provider in Junagadh</strong> or a 
        <strong> SaaS lead generation agency</strong>, our team delivers scalable results.
        As a trusted <strong>AI development company</strong>, we also offer tools like our 
        AI-powered <strong>Page Speed Checker</strong> to give you actionable insights.
      </p>
    </div>
  </div>
</section>

<section className="py-20 bg-[#161E42] text-white px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Column - Content */}
    <div>
      <h2 className="text-4xl font-bold mb-6 underline underline-offset-4 decoration-orange-400">
        How SaaSNext Can Help Beyond Page Speed
      </h2>
      
      <p className="text-lg mb-6 text-gray-200">
        At <strong className="text-orange-400">SaaSNext</strong>, we’re more than a 
        <strong> web development company in Junagadh</strong>—we’re your partner in digital success. 
        After analyzing your site with our Page Speed Checker, leverage our expertise to:
      </p>

      <ul className="space-y-4 list-disc list-inside text-gray-300">
        <li>
          ⚙️ <strong>Build High-Performance Apps:</strong> Our <strong>custom web app development for startups</strong> and 
          <strong> API integration for web apps</strong> deliver secure, fast platforms.
        </li>
        <li>
          📈 <strong>Drive Leads:</strong> As a <strong>lead generation company in Junagadh</strong>, we specialize in 
          <strong> automated lead nurturing for SaaS companies</strong> and 
          <strong> AI-driven lead scoring for SaaS</strong>.
        </li>
        <li>
          🤖 <strong>Automate with AI:</strong> Our <strong>AI agent development services</strong> include 
          <strong> natural language processing (NLP) development</strong> and 
          <strong> AI-driven CRM automation</strong>.
        </li>
        <li>
          📊 <strong>Enhance Marketing:</strong> With our <strong>B2B SaaS marketing agency</strong> and 
          <strong> AI digital marketing agency Junagadh</strong>, we optimize campaigns for ROI.
        </li>
      </ul>

      <p className="mt-6 text-lg text-gray-200">
        With 100+ successful projects, <span className="text-orange-400 font-semibold">SaaSNext</span> is one of the top 
        <strong> SaaS developers near Junagadh</strong>, providing 
        <strong> AI-driven web solutions in Junagadh</strong> that empower businesses.
      </p>
    </div>

    {/* Right Column - Image */}
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-orange-400">
      <img 
        src="images/saasnextpage.png" 
        alt="AI SaaS Illustration" 
        className="w-full h-full object-cover"
      />
    </div>
    
  </div>
</section>



    </>
  );
}
 
