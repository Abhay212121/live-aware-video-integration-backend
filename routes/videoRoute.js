const { Router } = require('express')
const getVideos = require('../controllers/videoController')

const videoRoute = Router()

videoRoute.get('/', getVideos)

module.exports = videoRoute