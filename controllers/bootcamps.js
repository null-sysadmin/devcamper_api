// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: "GET all bootcamps" });
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `GET bootcamp ${req.params.id}` });
}

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `POST bootcamp ${req.params.id}` });
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `PUT bootcamp ${req.params.id}` });
}

// @desc    Delete bootcamp
// @route   Delete /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: `DELETE bootcamp ${req.params.id}` });
}