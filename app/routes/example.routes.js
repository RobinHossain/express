module.exports = app => {
  const articles = require("../controllers/example.controller.js");

  var router = require("express").Router();

  // Create a new Article
  router.post("/", articles.create);

  // Retrieve all Articles
  router.get("/", articles.findAll);

  // Retrieve all published Articles
  router.get("/published", articles.findAllPublished);

  // Retrieve a single Article with id
  router.get("/:id", articles.findOne);

  // Update a Article with id
  router.put("/:id", articles.update);

  // Delete a Article with id
  router.delete("/:id", articles.delete);

  // Delete all Articles
  router.delete("/", articles.deleteAll);

  app.use('/api/articles', router);
};
