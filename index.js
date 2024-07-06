import dotenv from "dotenv"
import express from "express"
import UserRouter from "./router/userRoute.js"

dotenv.config()

const port = process.env.PORT

const app = express()

app.get("/", (req, res) => {
	res.send("Hello word")
})
app.use("/user", UserRouter)
app.listen(port, () => {
	console.log(`listening on ${port}`)
})
