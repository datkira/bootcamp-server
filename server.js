const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// Route files
const bootcamp = require('./routes/bootcamp')
dotenv.config({ path: './config/config.env' })
const app = express()

// Logging middleware - Dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamp/', bootcamp)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on PORT: ${PORT}`))