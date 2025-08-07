import mongoose from "mongoose";


const product = new mongoose.Schema({
    productName : {
        type :String,
        required : true
    },
    Quantity : {
        type : Number,
        required : true
    },
    price :{
        type : Number,
        required : true
    }
})
const order = new mongoose.Schema({
orderID :{
    type : String,
    required : true,
    unique : true
},
customerName :{
    type : String,
    required : true
},
orderDate :{
    type : Date,
},
status : {
    type : String
},

item : {
    type : [product],
},

totalAmount : {
type : Number,
}
})

const order_details = mongoose.model("order_details", order)

export default order_details;



