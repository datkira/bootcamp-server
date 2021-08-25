const express = require('express')
const router = express.Router()

const {
  createBootcamp,
  getAllBootcamp,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamp')

router.route('/')
  .get(getAllBootcamp)
  .post(createBootcamp)

router.route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp)

module.exports = router