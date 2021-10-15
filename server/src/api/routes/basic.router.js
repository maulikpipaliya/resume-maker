import { Router } from "express"
import { BasicController } from "../controllers/index.js"

const router = Router({
    mergeParams: true, // merge params from parent router
})

router
    .route("/")
    .get(BasicController.getBasicDetails)
    .put(BasicController.updateBasicDetails)
    .delete(BasicController.resetBasicDetails)

export default router
