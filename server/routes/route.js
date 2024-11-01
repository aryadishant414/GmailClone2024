import express from "express";
import { saveSentEmails } from "../controllers/email-controller.js";

const router = express.Router();

router.route("/save").post(saveSentEmails);

export default router;