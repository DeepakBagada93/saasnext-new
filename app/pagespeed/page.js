"use client";
import { useState } from "react";

export default function PageSpeedChecker() {
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
    <div className="max-w-4xl mx-auto p-6 mt-48 text-white bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">🔍 PageSpeed Checker</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter website URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded-lg text-black"
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
              const score = data.lighthouseResult.categories[category]?.score * 100 || "N/A";
              return (
                <div key={category} className="p-4 bg-white rounded-lg shadow">
                  <h3 className="text-lg font-semibold capitalize text-white bg-gray-800 p-2 rounded-md">
                    {category.replace("-", " ")}
                  </h3>
                  <p className="text-black font-bold text-xl">{score}</p>

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
  );
}
 