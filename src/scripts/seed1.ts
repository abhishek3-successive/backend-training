import { connectDB } from "../config/db";
import order_details from "../models/Aggregation";
import { orders } from "../mockdata";

const seedorder = async()=>{
await connectDB()
await order_details.deleteMany({})
await order_details.insertMany(orders)
console.log("seeded succesfully")
process.exit(0)
}

seedorder();
