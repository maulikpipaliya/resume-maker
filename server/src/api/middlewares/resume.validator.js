import Joi from "joi"

export const authEmailValidator = async (req, res, next) => {
    const emailValidator = Joi.string().email().required().messages({
        "string.email": "Email is not valid",
        "string.empty": "Email is required",
        "any.required": "Email is required",
    })

    const { error } = emailValidator.validate(req.body.authEmail)

    if (error) {
        return res.status(400).json({
            message: error.details[0].message,
        })
    }

    next()
}
