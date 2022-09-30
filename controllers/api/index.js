const router = require('express').Router();

const jobRoutes = require('./projectRoutes.js');

router.use('/job', jobRoutes);

const loginRoutes = require('./loginRoutes');

router.use('/users/login', loginRoutes);

module.exports = router;