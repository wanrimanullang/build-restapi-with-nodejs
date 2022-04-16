const {Router} = require('express');
const router = Router();
const controller = require('./controller')

router.get("/", controller.getStudents);
router.post("/", controller.addstudent);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.removeStudent);

module.exports = router;