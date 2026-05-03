const express = require('express');
const { createTask, getTasks, updateTaskStatus, assignTask } = require('../controllers/tasks');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.post('/', [auth, admin], createTask);
router.get('/project/:projectId', auth, getTasks);
router.put('/:id/status', auth, updateTaskStatus);
router.put('/:id/assign', [auth, admin], assignTask);

module.exports = router;
