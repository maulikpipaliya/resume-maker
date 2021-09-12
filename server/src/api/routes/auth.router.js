import { Router } from "express"

import {
    EducationController,
    BasicController,
    AuthController,
} from "../controllers/index.js"

import { AuthMiddleware } from "../middlewares/index.js"

const router = Router({
    mergeParams: true, // merge params from parent router
})

router.post(
    "/login",
    AuthMiddleware.isAuthenticated,
    AuthController.googleLogin
)

/**
 * Basic Details Object Manipulation
 */

router.get(
    "/basics",
    AuthMiddleware.isAuthenticated,
    BasicController.getBasicDetails
)
router.put(
    "/basics",
    AuthMiddleware.isAuthenticated,
    BasicController.updateBasicDetails
)
router.delete(
    "/basics",
    AuthMiddleware.isAuthenticated,
    BasicController.resetBasicDetails
)

/**
 * Education Details Object Manipulation
 * @todo complete all APIs
 */

router.get(
    "/education",
    AuthMiddleware.isAuthenticated,
    EducationController.getAllEducationItems
)
router.get(
    "/education/:eIdx",
    AuthMiddleware.isAuthenticated,
    EducationController.getEducationItem
)
// router.put(
//     "/education/:eIdx",
//     AuthMiddleware.isAuthenticated,
//     EducationController.updateEducation
// )

export default router
