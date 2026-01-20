import React, { useEffect, useState } from "react";
import axios from "axios";
import { countries } from "../utils/CountryCode";
import { categories } from "../utils/Categories";
import { languages } from "../utils/languages";
import NewsCard from "../Components/NewsCard";
function News() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("en");
  const api_key = import.meta.env.VITE_API_KEY;
  //   console.log(countries);
  // const fetchNews = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/newsState", {
  //       country: country,
  //       category: category,
  //       date: today,
  //       language: language,
  //     });
  //     if (response.status == 200) {
  //       setNews(response.data.sources);
  //       console.log(response.data.sources);
  //     } else {
  //       console.log(response);
  //       setError(response.data.message);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //     console.log(error.message);
  //   }
  // };
  const fetchNews = async () => {
    try {
      const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

      const response = await axios.post("http://localhost:5000/api/newsState", {
        country: country,
        category: category,
        date: today,
        language: language,
      });

      if (response.status === 200) {
        // backend returns { success: true, news: [...] }
        setNews(response.data.news);
        console.log(response.data.news);
      } else {
        setError(response.data.message || "Something went wrong");
        console.log(response);
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [country, category, language]);

  return (
    <>
      <div className="min-h-screen flex align-middle justify-center mt-6">
        <div className="container p-6">
          <h1 className="text-4xl text-center">News Page</h1>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold"> Select Country</h1>
              <select
                className="border px-4 py-2 rounded w-64 focus:outline-none focus:ring-blue-500"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold"> Select Category</h1>
              <select
                className="border px-4 py-2 rounded w-64 focus:outline-none focus:ring-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold"> Select Language</h1>
              <select
                className="border px-4 py-2 rounded w-64 focus:outline-none focus:ring-blue-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {languages.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {news.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {news.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  image={item.imageUrl}
                  source={item.source}
                  category={item.category}
                  country={item.country}
                />
              ))}
            </div>
          ) : (
            <h1>No news is available at the moment.</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default News;

{
  /* {news.map((item) => {
                    return (
                      <tr>
                        <td>
                          <NewsCard />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.country}</td>
                        <td>{item.url}</td>
                      </tr>
                    );
                  })} */
}
