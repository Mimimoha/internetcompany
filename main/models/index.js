// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const { belongsTo, belongsToMany } = require('./Product');


// Categories have many Products
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})


// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  },
  primarykey: 'product_id',

})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:{
    model: ProductTag
  },
  primarykey: 'tag_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
