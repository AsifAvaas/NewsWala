const { default: axios } = require('axios');
const express = require('express')
const router = express.Router()
const News = require('../model/newsModel');

router.post('/newsState', async (req, res) => {
    const { country, category, date, language } = req.body;
    try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines/?country=${country}&category=${category}&language=${language}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY}`,
                }
            }

        )
        console.log(response.data);
        const articles = response.data.articles;

        // 2️⃣ Save each article in the database (avoid duplicates by URL)
        const savedArticles = [];
        for (let article of articles) {
            try {
                const saved = await News.findOneAndUpdate(
                    { url: article.url }, // check if already exists
                    {
                        title: article.title,
                        description: article.description,
                        url: article.url,
                        imageUrl: article.urlToImage,
                        source: article.source.name,
                        category,
                        country,
                        language,
                        publishedAt: article.publishedAt,
                    },
                    { upsert: true, new: true } // create if not exists
                );
                savedArticles.push(saved);
            } catch (err) {
                console.log("Error saving article:", err.message);
            }
        }

        // 3️⃣ Return saved articles to frontend
        res.status(200).json({ success: true, news: savedArticles });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }

})





module.exports = router





