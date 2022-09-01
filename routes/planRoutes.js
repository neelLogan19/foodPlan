const express = require("express");
const { getAllPlansController, createPlanController, getPlanController, updatePlanController, deletePlanController } = require("../controller/planController");
const planRouter = express.Router();

// planRouter.get("/"),

// planRouter.post("/")
//alternative for same route is to have a common route

planRouter.route("/")
    .get(getAllPlansController)
    .post(createPlanController)

//


planRouter.route("/:planRoutes")
    .get(getPlanController)
    .patch(updatePlanController)
    .delete(deletePlanController)

module.exports=planRouter;
