const bootcamp = require('../models/bootcamp')

// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamp
// @access  Public
exports.getAllBootcamp = async (req, res, next) => {
  try {
    const bc = await bootcamp.find()

    if (!bc) {
      res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: bc })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}

// @desc    Get bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bc = await bootcamp.findById(req.params.id)

    if (!bc) {
      res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: bc })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bc = await bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!bc) {
      res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: bc })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bc = await bootcamp.create(req.body)

    if (!bc) {
      res.status(400).json({ success: false })
    }

    res.status(201).json({ success: true, msg: 'Create new bootcamp' })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bc = await bootcamp.findByIdAndDelete(req.params.id)

    if (!bc) {
      res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: {} })
  } catch (e) {
    res.status(400).json({ success: false })
  }
}