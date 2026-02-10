const { Projects } = require('../models');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Projects.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, slug, meta } = req.body;
    const projectData = {
      title,
      description,
      slug,
      meta: typeof meta === 'string' ? JSON.parse(meta) : meta
    };

    if (req.file) {
      projectData.image_path = `/uploads/${req.file.filename}`;
    }

    const project = await Projects.create(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, slug, meta } = req.body;
    const project = await Projects.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    const updateData = {
      title,
      description,
      slug,
      meta: typeof meta === 'string' ? JSON.parse(meta) : meta
    };

    if (req.file) {
      updateData.image_path = `/uploads/${req.file.filename}`;
    }

    await project.update(updateData);
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findByPk(id);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    await project.destroy();
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
