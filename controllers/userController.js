import { StatusCodes } from "http-status-codes"
import { ValidationError } from "joi/lib/errors.js"
import { hashPassword, responseGenerator } from "../utils"
import { createUserValidation } from "../validations/userValidation"

export const createUser = async (req, res) => {
	try {
		await createUserValidation.validateAsync(req.body)

		const hashedPassword = await hashPassword(req.body.password)

		const data = {
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			password: hashedPassword,
		}
	} catch (error) {
		if (error instanceof ValidationError) {
			res.send(
				responseGenerator(error, StatusCodes.BAD_REQUEST, error.message, 0)
			)
		}
		console.log(error)
		res.send(
			responseGenerator(
				error,
				StatusCodes.INTERNAL_SERVER_ERROR,
				"Internal Server Error",
				0
			)
		)
	}
}
// getUser
// updateUser
// deleteUser
