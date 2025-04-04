const Data = require('../models/dataModel');
const Organization = require('../models/organizationModel');
const Department = require('../models/departmentModel');
const Application = require('../models/applicationModel');
const Repository = require('../models/repositoryModel');


exports.insertData = async (req, res) => {
  try {
    const dataArray = [req.body]; // Directly use the request body as the array of metadata

    const results = await Promise.all(dataArray.map(async (data) => {
      if (data._id) {
        // Update existing metadata
        return await Data.findByIdAndUpdate(data._id, data, { new: true });
      } else {
        // Insert new metadata
        const newData = new Data(data);
        return await newData.save();
      }
    }));

    res.status(201).json(results);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveOrganization = async (req, res) => {
  try {
    const organizations = req.body; // Directly use the request body as the array of organizations

    const results = await Promise.all(organizations.map(async (org) => {
      if (org._id) {
        // Update existing organization
        return await Organization.findByIdAndUpdate(org._id, org, { new: true });
      } else {
        // Insert new organization
        const newOrganization = new Organization(org);
        return await newOrganization.save();
      }
    }));

    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveDepartment = async (req, res) => {
  try {
    const departments = req.body; // Directly use the request body as the array of departments

    const results = await Promise.all(departments.map(async (dept) => {
      if (dept._id) {
        // Update existing department
        return await Department.findByIdAndUpdate(dept._id, dept, { new: true });
      } else {
        // Insert new department
        const newDepartment = new Department(dept);
        return await newDepartment.save();
      }
    }));

    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveApplication = async (req, res) => {
  try {
    const applications = req.body; // Directly use the request body as the array of applications

    const results = await Promise.all(applications.map(async (app) => {
      if (app._id) {
        // Update existing application
        return await Application.findByIdAndUpdate(app._id, app, { new: true });
      } else {
        // Insert new application
        const newApplication = new Application(app);
        return await newApplication.save();
      }
    }));

    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllRepositories = async (req, res) => {
  try {
    const repositories = await Repository.find();
    res.status(200).json(repositories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveRepository = async (req, res) => {
  try {
    const repositories = req.body; // Directly use the request body as the array of repositories

    const results = await Promise.all(repositories.map(async (repo) => {
      if (repo._id) {
        // Update existing repository
        return await Repository.findByIdAndUpdate(repo._id, repo, { new: true });
      } else {
        // Insert new repository
        const newRepository = new Repository(repo);
        return await newRepository.save();
      }
    }));

    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};