import { Router } from "express"

const UserRouter = Router()

UserRouter.route("/")
	.post(createUser)
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser)

export default UserRouter
