const router = require('express').Router();
const Job = require('../../models/Job');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const jobData = await Job.create({
    job_category: req.body.job_category,
    description: req.body.description,
    guest_name: req.body.guest_name,
    has_nuts: req.body.has_nuts,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(jobData)
} catch (err) {
  res.status(400).json(err);
}
});