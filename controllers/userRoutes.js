const router = require('express').Router();
const Job = require('../models/Job');

// route to get all dishes
router.get('/', async (req, res) => {
  const jobData = await Job.findAll().catch((err) => { 
      res.json(err);
    });
      const jobs = jobData.map((job) => job.get({ plain: true }));
      res.render('all', { jobs });
    });

// route to get one dish
router.get('/job/:id', async (req, res) => {
  try{ 
      const jobData = await Job.findByPk(req.params.id);
      if(!jobData) {
          res.status(404).json({message: 'No job with this id!'});
          return;
      }
      const job = jobData.get({ plain: true });
      res.render('job', job);
    } catch (err) {
        res.status(500).json(err);
    };     
});

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

// Added comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
    // we search the DB for a user with the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // the error message shouldn't specify if the login failed because of wrong email or password
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // use `bcrypt.compare()` to compare the provided password and the hashed password
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // if they do not match, return error message
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // if they do match, return success message
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});
