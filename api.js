const  express = require("express")

const app = express();

//npm i cookie-parser
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const planRouter = require("./routes/planRoutes");
const foodReviewModel = require("./model/reviewModel");
const foodPlanModel = require("./model/planModel");

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public/build'));
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/user",userRouter);
app.use("/api/v1/plan",planRouter)

app.post("/api/v1/review",async function(req,res){
    try{
        let reviewData = req.body;
        let review = await foodReviewModel.create(reviewData);
        let reviewId = review["_id"];
        let rating = review.rating;
        let currPlan = await foodPlanModel.findById(review.plan);
        let totalNumRating = currPlan.reviews.length;
        let preAvg = currPlan.averageRating;
        if(preAvg){
            let sum = rating+(preAvg*totalNumRating);
            let newAvg = sum/totalNumRating+1;
            currPlan.averageRating = newAvg;
        }else{
            currPlan.averageRating = rating;
        }
        currPlan.reviews.push(reviewId);
        await currPlan.save();
        res.status(201).json({
            review,
            result:"created"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err.message
        })
    }
})

app.get("/api/v1/review",async function(req,res){
    try{
        let reviews = await foodReviewModel.find()
        .populate({path:'user',select:'name pic'})
        .populate({path:'plan',select:'name duration price'});

        res.status(200).json({
            reviews,
            result:"all reviews sent"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:err.message
        })
    }
})

const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log("server started at 3000");
})