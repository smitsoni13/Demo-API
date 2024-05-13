const { Router } = require('express');
const controller = require("./controller");

const router = Router();

router.get('/', controller.getemployee);
router.post('/addemployee', controller.addemployee);
router.get("/:employee_id", controller.getemployeeById);
router.put("/:employee_id", controller.updateemployee);
router.delete("/:employee_id", controller.removeemployee);

module.exports = router;