const express = require('express');
const router = express.Router();
const Task = require('../models/task');


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

router.get('/', (req,res)=> {
  res.send('api works');
});

router.route('/tasks')
  .post((req, res)=> {

    const task = new Task({
      name: req.body.name,
      note: req.body.note
    });

    task.save((err) => {
      if(err) {
        return res.send(err);
      }
      return res.json({ message: 'New Task Created!'});
    });
});

module.exports = router;
