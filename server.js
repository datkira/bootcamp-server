const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
// Route files
const bootcamp = require('./routes/bootcamp')
dotenv.config({ path: './config/config.env' })
const app = express()

// Connect to database

// Logging middleware - Dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

connectDB()

// Mount routers
app.use('/api/v1/bootcamp/', bootcamp)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on PORT: ${PORT}`))

// Handle unhandled promise
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  //Close server & exit process
  server.close(() => process.exit(1))
})