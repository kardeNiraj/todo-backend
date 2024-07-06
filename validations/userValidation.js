import Joi from "joi"

export const createUserValidation = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.string().required(),
	password: Joi.string().alphanum().min(5).max(20).required(),
})
