const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({include:[Product]})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
});


  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({include: [Product],
    where:{
      id: req.params.id
    }
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    req.body,
    { where: { id: req.params.id } }
  )
    .then((updatedData) => {
      res.status(200).json(updatedData);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
});

 // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((deletedBook) => {
      res.status(200).json(deletedBook);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    });
});

module.exports = router;
