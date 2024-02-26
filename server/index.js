import express from "express"
import mongoose from "mongoose"
import UserRouter from "./routers/UserRoutes.js"
import SongRouter from "./routers/SongRoutes.js"
import PlaylistRoutes from "./routers/PlaylistRoutes.js"

mongoose.connect("mongodb://127.0.0.1:27017/music-app")
    .then(() => {
        console.log("БАЗА ДАННЫХ ПОДКЛЮЧЕНА")
    })
    .catch((error) => {
        console.log(`БАЗА ДАННЫХ НЕ ПОДКЛЮЧЕНА. Ошибка: ${error}`)
    })

const app = express()

app.use(express.json());
app.use("/users", UserRouter);
app.use("/songs", SongRouter)
app.use("/playlist", PlaylistRoutes)
app.use("/uploads", express.static('uploads'));

app.listen(4800, () => {
    console.log("SERVER START")
})