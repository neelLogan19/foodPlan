const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"kindly pass the name"],
        unique:[true,"plan name should be unique"],
        maxlength:[40,"your plan length is more than 40 characters"]
    },
    duration:{
        type:Number,
        required:[true,"you need to provide duration"],
        
    },
    price:{
        type:Number,
        required:[true,"you need to provide price"],
    },
    discount:{
        type:Number,
        validate:{
            validator:function(){
                this.discount<this.price;
            },
            message:"Discount must be less than actual price"
        }
    },
    reviews:{
        type:[mongoose.Schema.objectId],
        ref:"foodReviewModel"
    },
    averageRating:{
        type:Number
    }

})

const foodPlanModel = mongoose.model("foodPlanModel",planSchema);

module.exports=foodPlanModel;