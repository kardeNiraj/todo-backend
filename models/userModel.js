import mongoose from "mongoose"
import { getCurrentUnix, getPublicId } from "../utils"

const UserSchema = mongoose.Schema({
	_id: {
		type: String,
		default: getPublicId(),
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	created_at: {
		type: String,
		default: getCurrentUnix(),
	},
	updated_at: {
		type: String,
		default: getCurrentUnix(),
	},
})

const UserModel = mongoose.model("users", UserSchema)
export default UserModel
