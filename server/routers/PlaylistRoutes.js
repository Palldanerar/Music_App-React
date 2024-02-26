import express from "express"
import { upload } from "../utils/upload.js"
import { addSongToPlaylist, createPlaylist, getPlaylistByCreator, getPlaylistById, removeSongFromPlaylist } from "../controllers/PlaylistController.js";

const router = express.Router()

router.get("/:playlistId", getPlaylistById)
router.get("/creator/:creatorId", getPlaylistByCreator)
router.post("/create", upload.single("playlistCover"), createPlaylist)
router.put("/add/:playlistId", addSongToPlaylist)
router.put("/remove/:playlistId", removeSongFromPlaylist)

export default router;