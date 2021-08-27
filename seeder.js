const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')
const BootCamp = require('./models/bootcamp')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to DB
mongoose.connect(
  process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

// Read JSON files
const bootcamp = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
)

// Import bootcamp into DB
const importData = async () => {
  try {
    await BootCamp.create(bootcamp)
    console.log("Data imported...".green.inverse)
    process.exit(1)
  } catch (err) {
    console.log(err)
  }
}

// Delete bootcamp DB
const deleteData = async () => {
  try {
    await BootCamp.deleteMany()
    console.log("Data deleted...".red.inverse)
    process.exit(1)
  } catch (err) {
    console.log(err)
  }
}

if(process.argv[2] === '-i'){
  importData()
} else if(process.argv[2] === '-d'){
  deleteData()
}