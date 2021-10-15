import { Router } from "express"
import {
    getBasicDetails,
    resetBasicDetails,
    updateBasicDetails,
} from "../controllers/basic.controller.js"

const router = Router({
    mergeParams: true, // merge params from parent router
})

router
    .route("/")
    .get(getBasicDetails)
    .put(updateBasicDetails)
    .delete(resetBasicDetails)

export default router
