const router = require('express').Router();
let Role = require('../models/role.model');

router.route('/').get((req, res) => {
  Role.find()
    .then(roles => res.json(roles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;


  const newRole = new Role({
    description,

  });

  newRole.save()
    .then(() => res.json('Role added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Role.findById(req.params.id)
    .then(role => res.json(role))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Role.findByIdAndDelete(req.params.id)
    .then(() => res.json('Role deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Role.findById(req.params.id)
    .then(role => {
      const description = req.body.description;
  

      role.save()
        .then(() => res.json('Role updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;