const { default: axios } = require("axios")

const getVideos = async (req, res) => {
    const { searchQuery } = req.query
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&videoDuration=medium&key=${process.env.API_KEY}`)
        const resultArr = response.data.items
        return res.json({ status: 200, resultArr: resultArr, msg: 'Videos fetched!' })
    } catch (error) {
        console.error("YouTube API Error:", error.response?.data || error.message);
        return res.json({ status: 500, msg: 'Internal Server error' });
    }
}

module.exports = getVideos