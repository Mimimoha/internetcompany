const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({ include: [Product, { model: Product, throught: ProductTag }] })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
  // get all tag records 
  // be sure to include its associated Product data
});


router.get('/:id', (req, res) => {
  //  Tag.findOne({include: [Product,{model:Product, through: ProductTag}],
  //     where: {id:req.params.id}})
  TagData = Tag.findByPk(req.params.id, {
    through: [{ model: ProductTag }]

  })

    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
  //get single tag record by id 
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    });
  // create a new tag
});

router.put('/:id', (req, res) => {
  updatedData = Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((updatedData) => {
      res.status(200).json(updatedData);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
  // update a tag by its id value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((deletedBook) => {
      res.status(200).json(deletedBook);
    })
    .catch((err) => {
      res.status(400).send(err.message)
    });
  // delete on tag by its `id` value
});

module.exports = router;
