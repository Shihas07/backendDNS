const mongoose = require('mongoose');

// Define the schema for the menu
const menuSchema = new mongoose.Schema({
  menuName: {
    type: String,
  
  },
  menuDescription: {
    type: String,
  
  },
  itemName: {
    type: String,
  
  },
  itemDescription: {
    type: String,
    
  },
  price: {
    type: Number,
  
  }
});


const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
