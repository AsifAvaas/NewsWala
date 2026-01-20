const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
        required: true,
        unique: true, // prevents duplicates if same article is fetched again
    },
    imageUrl: {
        type: String, // cover image URL
    },
    source: {
        type: String, // e.g., "BBC News"
    },
    category: {
        type: String,
        enum: [
            "business",
            "entertainment",
            "general",
            "health",
            "science",
            "sports",
            "technology",
        ],
    },
    country: {
        type: String, // e.g., 'us', 'ca'
    },
    language: {
        type: String, // e.g., 'en'
    },
    publishedAt: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["new", "processed"],
        default: "new", // for tracking if you’ve already processed/displayed this news
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("News", newsSchema);
