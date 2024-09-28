import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const { Schema } = mongoose;
const Currency = loadType(mongoose);

const TransactionSchema = new Schema({
  buyer: {
    type: Currency,
    currency: "USD",
    get: (v: number) => v / 100
  },
  amount: {
    type: Currency,
    currency: "USD",
    get: (v: number) => v / 100
  },
  productIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
