const express = require('express');
const { insertData, getData, getAllOrganizations, saveOrganization, getAllDepartments, saveDepartment, getAllApplications, saveApplication, getAllRepositories, saveRepository } = require('../controllers/dataController');


const router = express.Router();

router.post('/data', insertData);
router.get('/data', getData);
router.get('/organizations', getAllOrganizations);
router.post('/organizations', saveOrganization);
router.get('/departments', getAllDepartments);
router.post('/departments', saveDepartment);
router.get('/applications', getAllApplications);
router.post('/applications', saveApplication);
router.get('/repositories', getAllRepositories);
router.post('/repositories', saveRepository);




module.exports = router;