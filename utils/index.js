import bcrypt from "bcrypt"
import dayjs from "dayjs"
import { nanoid } from "nanoid"

export const getPublicId = () => {
	return nanoid + nanoid + Date.now()
}

export const getCurrentUnix = () => {
	return dayjs.unix()
}

export const hashPassword = async (password) => {
	try {
		const hashed = await bcrypt.hash(myPlaintextPassword, saltRounds)
		return hashed
	} catch (error) {
		console.log(error)
	}
}

export const responseGenerator = (data, code, message, success) => {
	return {
		data,
		status_code: code,
		message,
		success,
	}
}
