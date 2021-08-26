const mongoose = require('mongoose')
const uriFormat = require('mongodb-uri')

function encodeMongoURI (urlString) {
  if (urlString) {
    let parsed = uriFormat.parse(urlString)
    urlString = uriFormat.format(parsed)
  }
  return urlString
}

const connectDB = async () => {
  const mongodbConnectString = process.env.MONGO_URI
  const conn = await mongoose.connect(encodeMongoURI(mongodbConnectString), {useNewUrlParser: true, useUnifiedTopology: true})

  console.log(`MongoDB connected: ${conn.connection.host}`)
}

module.exports = connectDB