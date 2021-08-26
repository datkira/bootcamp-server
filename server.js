const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const colors = require('colors')

// Route files
const bootcamp = require('./routes/bootcamp')
dotenv.config({ path: './config/config.env' })
const app = express()

// Body parser
app.use(express.json())

// Connect to database
connectDB()

// Logging middleware - Dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/bootcamp/', bootcamp)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on PORT: ${PORT}`.yellow.bold))

// Handle unhandled promise
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  //Close server & exit process
  server.close(() => process.exit(1))
})