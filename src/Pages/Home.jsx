import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 text-center">
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-slate-100">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4">
            v1.0 Live
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            News
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Wala
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Your trusted source for headlines across the globe. Breaking news,
            unbiased reports, and in-depth analysis all in one place.
          </p>

          <Link
            to="/news"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Explore Headlines
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Powered by NewsAPI • Updated Daily
        </p>
      </div>
    </div>
  );
}

export default Home;
