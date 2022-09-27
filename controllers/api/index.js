const router = require('express').Router();

const jobRoutes = require('./projectRoutes.js');

router.use('/job', jobRoutes);

module.exports = router;