const Subject = require('../models/Subject');
const Teacher = require('../models/User');
const User = require('../models/User');

exports.createSubject = (req, res) => {
  Subject.create({ ...req.body })
    .then((subject) => res.status(200).json(subject))
    .catch((err) =>
      res.status(500).json({ Message: 'We could not create the subject' })
    );
};

exports.getAllSubject = (req, res) => {
  Subject.find()
    .then((subjects) => {
      res.status(200).json({ subjects });
    })
    .catch((err) => {
      res.status(500).json({ Message: 'We could not find the subject' });
    });
};

exports.getSubject = (req, res) => {
  const { id } = req.params;
  Subject.findById(id)
    .then((subject) => {
      res.status(200).json({ subject });
    })
    .catch((err) => {
      res.status(500).json({ Message: 'We could not find the subject' });
    });
};

exports.updateSubject = (req, res) => {
  const { id } = req.params;
  const { name, teachers, days, time } = req.body;

  Subject.findByIdAndUpdate(
    id,
    { $set: { name: name, teachers: teachers, days: days, time: time } },
    { new: true }
  )
    .then((updateSubject) => {
      res.status(200).json({ updateSubject });
    })
    .catch((err) => {
      res.status(500).json({ Message: 'We could not update the subject' });
    });
};

exports.deleteSubject = (req, res) => {
  const { id } = req.params;
  User.find()
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      res.status(500).json({ Message: 'We could not delete the subject' });
    });
};
