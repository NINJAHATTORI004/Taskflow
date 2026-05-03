const express = require('express');
const { createProject, getProjects, addMember, removeMember } = require('../controllers/projects');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.post('/', [auth, admin], createProject);
router.get('/', auth, getProjects);
router.put('/:id/members', [auth, admin], addMember);
router.delete('/:id/members/:memberId', [auth, admin], removeMember);

module.exports = router;
