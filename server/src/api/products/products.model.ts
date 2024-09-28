import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const { Schema } = mongoose;
const Currency = loadType(mongoose);

const ProductSchema = new Schema({
  price: {
    type: Currency,
    currency: "USD",
    get: (v: number) => v / 100
  },
  expense: {
    type: Currency,
    currency: "USD",
    get: (v: number) => v / 100
  },
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction"
    }
  ]
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
