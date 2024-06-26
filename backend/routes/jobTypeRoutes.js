const express = require('express');
const router = express.Router();
const { createJobType, allJobsType, updateJobType, deleteJobType } = require('../controller/JobTypeController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// job type routes
router.post('/type/create', isAuthenticated, isAdmin, createJobType);
router.get('/type/jobs', allJobsType);
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType);
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType);

module.exports = router;
