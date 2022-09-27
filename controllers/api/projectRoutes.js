const router = require('express').Router();
const Job = require('../../models/Job');

// route to create/add a job using async/await
router.post('/', async (req, res) => {
  try { 
    const jobData = await Job.create({
      title: req.body.title,
      description: req.body.description,
      experience: req.body.experience,
      industry: req.body.industry,
      postDate: req.body.postDate,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      employer: req.body.employer,
      city: req.body.city,
      state: req.body.state,
      isRemote: req.body.isRemote,
      hours: req.body.hours,
      poster_id: req.body.poster_id,
  });
  // if the job is successfully created, the new response will be returned as json
  res.status(200).json(jobData)
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  const jobData = await Job.update(
    {
      title: req.body.title,
      description: req.body.description,
      experience: req.body.experience,
      industry: req.body.industry,
      postDate: req.body.postDate,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      employer: req.body.employer,
      city: req.body.city,
      state: req.body.state,
      isRemote: req.body.isRemote,
      hours: req.body.hours,
      poster_id: req.body.poster_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(jobData);
});

router.delete('/:id', async (req, res) => {
  const jobData = await Job.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(jobData);
});

module.exports = router;
