import { Router } from "express"
import { EducationController } from "../controllers/index.js"

const router = Router({
    mergeParams: true,
})

router
    .route("/")
    .get(EducationController.getAllEducation)
    .post(EducationController.addEducation)

router
    .route("/:edIdx")
    .get(EducationController.getEducation)
    .put(EducationController.updateEducation)
    .delete(EducationController.deleteEducation)

export default router
