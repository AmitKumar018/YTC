import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
const router=Router();
import { registerUser } from "../controllers/user.controller.js";

router.route("/register").post(registerUser);

export default router;