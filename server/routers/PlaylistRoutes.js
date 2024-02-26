import express from "express"
import { upload } from "../utils/upload.js"
import { addSongToPlaylist, createPlaylist, getPlaylistById } from "../controllers/PlaylistController.js";

const router = express.Router()

router.get("/:playlistId", getPlaylistById)
router.post("/create", upload.single("playlistCover"), createPlaylist)
router.put("/add/:playlistId", addSongToPlaylist)

export default router;