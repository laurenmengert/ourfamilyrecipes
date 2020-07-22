const Recipe = require("../models/recipe");

module.exports = {
  index,
  create,
  update,
  delete: deleteOne,
};

async function index(req, res) {
  try {
    const recipes = await Recipe.find({ user: req.user._id }).populate("user");
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function create(req, res) {
  req.body.user = req.user._id;
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function update(req, res) {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(recipe);
  } catch (err) {}
}

async function deleteOne(req, res) {
  try {
    const recipe = await Recipe.findByIdAndRemove(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json(err);
  }
}
