const bootcamp = require('../models/bootcamp')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middlewares/async')
// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamp
// @access  Public
exports.getAllBootcamp = asyncHandler(async (req, res, next) => {
  const bc = await bootcamp.find()

  if (!bc) {
    res.status(400).json({ success: false })
  }

  res.status(200).json({ success: true, data: bc })
})

// @desc    Get bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bc = await bootcamp.findById(req.params.id)
  if (!bc) {
    next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
  }
  res.status(200).json({ success: true, data: bc })
})

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bc = await bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if (!bc) {
    res.status(400).json({ success: false })
  }

  res.status(200).json({ success: true, data: bc })
})

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bc = await bootcamp.create(req.body)

  if (!bc) {
    res.status(400).json({ success: false })
  }

  res.status(201).json({ success: true, msg: 'Create new bootcamp' })
})

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bc = await bootcamp.findByIdAndDelete(req.params.id)

  if (!bc) {
    res.status(400).json({ success: false })
  }

  res.status(200).json({ success: true, data: {} })
})