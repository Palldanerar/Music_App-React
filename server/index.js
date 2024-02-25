import express from "express"
import mongoose from "mongoose"
import UserRouter from "./routers/UserRouters.js"
import { register } from "./controllers/UserController.js"

mongoose.connect("mongodb://127.0.0.1:27017/music-app")
    .then(() => {
        console.log("БАЗА ДАННЫХ ПОДКЛЮЧЕНА")
    })
    .catch((err) => {
        console.log(`БАЗА ДАННЫХ НЕ ПОДКЛЮЧЕНА. Ошибка: ${err}`)
    })

const app = express()

app.use(express.json());
app.use('/users', UserRouter);

app.post("/register", register)

app.listen(4800, () => {
    console.log("SERVER START")
})