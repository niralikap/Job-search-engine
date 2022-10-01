const router = require('express').Router();
const Job = require('../models/Job');

// route to get all jobs
router.get('/', async (req, res) => {
  const jobData = await Job.findAll().catch((err) => { 
      res.json(err);
    });
      const jobs = jobData.map((job) => job.get({ plain: true }));
      res.render('all', { jobs,
      logged_in: req.session.logged_in,
      });
    });
// route to get some jobs
router.get('/search/:searchContent', async (req, res) => {
  try {
    const jobData = await Job.findAll({
      where: {
        title: searchContent
      }
    });
    const jobs = jobData.map((job) => job.get({plain: true}));
    res.render('list', {
      jobs
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// route to get one job
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
/*router.post('/', async (req, res) => {
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
});*/

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;