const foodPlanModel = require("../model/planModel");

async function getAllPlansController(req,res){
    try{
        let plans = await foodPlanModel.find();
        res.status(200).json({
            allPlans:plans,
        })
    }catch(err){
        res.status(500).json({err:err.message})
    }
}



async function createPlanController(req,res){
    try{
        let data = req.body;
        let newPlan = await foodPlanModel.create(data);
        console.log(newPlan);
        res.status(201).json({
            result:"plan created",
            plan:newPlan
        })
    }catch(err){
        res.status(500).json({err:err.message})
    }
}

async function getPlanController(req,res){
    try{
        let id = req.params.planRoutes;
        let plan = await foodPlanModel.findById(id);
        res.status(200).json({
            result:"plan found",
            plan:plan
        })
    }catch(err){
        console.log(err.message);
        res.status(500).json({
            err:err.message
        })
    }
}



async function updatePlanController(req,res){
    try{
        let data = req.data;
        let id = req.params.planRoutes;
        const plan = await foodPlanModel.findById(id);
        for(let key in data){
            plan[key] = data[key];
        }
        await plan.save();
        res.status(200).json({
            result:"updated"
        })

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            err:err.message
        })
    }
}

async function deletePlanController(req,res){
    try{
        let id = req.params.planRoutes;
        let plan = await foodPlanModel.findByIdAndDelete(id);
        res.status(200).json({
            result:"plan found and deleted",
            plan:plan
        })

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            err:err.message
        })
    }
}

module.exports={
    getAllPlansController,
    getPlanController,
    deletePlanController,
    updatePlanController,
    createPlanController
}