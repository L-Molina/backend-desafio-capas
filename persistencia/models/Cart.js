import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  products: {type: Array, required: true}, 
  userId: { type: String, required: true, max: 100 }, 
});

const Cart = mongoose.model('carts', cartSchema);
export { Cart };