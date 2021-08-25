// @desc    Get all bootcamp
// @route   GET /api/v1/bootcamp
// @access  Public
exports.getAllBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamp' })
}

// @desc    Get bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Get bootcamp' })
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` })
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' })
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` })
}