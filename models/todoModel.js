import { default as mongoose } from "mongoose"
import { getCurrentUnix, getPublicId } from "../utils"

const TodoSchema = mongoose.Schema({
	_id: {
		type: String,
		default: getPublicId(),
	},
	task: {
		type: String,
		required: true,
	},
	isDone: {
		type: Boolean,
		default: false,
	},
	isPinned: {
		type: Boolean,
		default: false,
	},
	created_by: {
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

const TodoModel = mongoose.model("todos", TodoSchema)
export default TodoModel
