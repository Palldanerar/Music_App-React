import express from "express"
import { login, profile, register, updateProfile } from "../controllers/UserController.js"

const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.get('/profile', profile);
router.put('/profile/update', updateProfile);

export default router;