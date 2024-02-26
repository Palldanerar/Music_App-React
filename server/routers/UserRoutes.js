import express from "express"
import { login, profile, register, updateProfile } from "../controllers/UserController.js"
import { upload } from "../utils/upload.js";

const router = express.Router()

router.get('/profile/:userId', profile);
router.post("/register", register);
router.post("/login", login);
router.put('/profile/update/:userId', upload.single('profileAvatar'), updateProfile);

export default router;