import express from "express"
import { getAllSongs, getSongById, uploadSong } from "../controllers/SongController.js"
import { upload } from "../utils/upload.js"

const router = express.Router()

router.get("/", getAllSongs)
router.get("/:songId", getSongById)
router.post("/upload", upload.fields([{ name: 'songCover', maxCount: 1 }, { name: 'songFile', maxCount: 1 }]), uploadSong)

export default router;