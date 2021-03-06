const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const f_name = req.body.f_name;
  const l_name = req.body.l_name;
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const hashed_pass = req.body.hashed_pass;
  const address = req.body.address;

  const newUser = new User({
    username,
    f_name,
    l_name,
    email,
    phone_number,
    hashed_pass,
    address,

  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      const username = req.body.username;
      const f_name = req.body.f_name;
      const l_name = req.body.l_name;
      const email = req.body.email;
      const phone_number = req.body.phone_number;
      const hashed_pass = req.body.hashed_pass;
      const address = req.body.address;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;