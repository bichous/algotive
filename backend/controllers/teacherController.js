const Teacher = require('../models/Teacher');

exports.createTeacher = (req, res) => {
  Teacher.create({ ...req.body })
    .then((teacher) => res.status(200).json({ teacher }))
    .catch((err) =>
      res.status(500).json({ Message: 'The teacher was not created' })
    );
};

exports.getAllTeachers = (req, res) => {
  Teacher.find()
    .then((teachers) => {
      console.log(teachers);
      res.status(200).json({ teachers });
    })
    .catch((err) =>
      res.status(500).json({ Message: 'We could not find the teachers' })
    );
};

exports.updateTeacher = (req, res) => {
  const { id } = req.params;
  const { name, lastName } = req.body;
  Teacher.findByIdAndUpdate(
    id,
    { $set: { name: name, lastName: lastName } },
    { new: true }
  )
    .then((udatedteacher) => {
      res.status(200).json({ updateTeacher });
    })
    .catch((err) =>
      res.status(500).json({ Message: 'We could not update the teacher' })
    );
};

exports.deleteTeacher = (req, res) => {
  const { id } = req.params;
  Teacher.findByIdAndRemove(id)
    .then((response) => res.status(200).json({ Message: 'Teacher deleted' }))
    .catch((err) =>
      res.status(500).json({ Message: 'We could not delete the teacher' })
    );
};
