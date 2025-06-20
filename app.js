require('dotenv').config()
const express = require('express')
const videoRoute = require('./routes/videoRoute')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/videos', videoRoute)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server running over PORT:${PORT}`))