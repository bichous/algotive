const router = require('express').Router();
const {
  createSubject,
  getSubject,
  updateSubject,
  getAllSubject,
  deleteSubject,
} = require('../controllers/subjectController');

const {
  createTeacher,
  getAllTeachers,
  updateTeacher,
  deleteTeacher,
} = require('../controllers/teacherController');

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router
  .post('/createSubject', createSubject)
  .patch('/updateSubject/:id', updateSubject)
  .get('/allSubjects', getAllSubject);

router
  .post('/createTeacher', createTeacher)
  .get('/allTeachers', getAllTeachers);

module.exports = router;
