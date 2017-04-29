const express = require('express');
const router = express.Router();
const Task = require('../models/task');


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({'error': message});
}

router.get('/', (req,res)=> {
  res.send('api works');
});


router.route('/tasks')
  .post((req, res) => {
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
})
.get((req, res) => {
  Task.find({}).sort({ createdAt: -1 }).exec((err, task) => {
        if (err){
          return res.send(err);
        }
        return res.json(task);
      });
});

router.route('/tasks/:id')
  .get((req, res)=> {
    Task.findById(req.params.id, (err, task)=> {
      if(err) {
        return res.send(err);
      }
      return res.json(task);
    });
  })
  .put((req, res)=> {
    Task.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      note: req.body.note,
      completed: req.body.completed
    }, (err) => {
      if(err) {
        return res.send(err);
      }
      return res.json({message: 'Task updated successfully'});
    });
  })
  .delete((req, res) => {
    Task.remove({ _id: req.params.id },
      (err)=> {
        if(err) {
          return res.send(err);
        }
        return res.json({ message: 'Task has been removed!' });
      });
  });

module.exports = router;
