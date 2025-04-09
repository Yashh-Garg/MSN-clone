import express from "express";
import { getIcons, addIcon, deleteIcon } from "../controller/iconController.js";

const router = express.Router();

router.get("/", getIcons);
router.post("/", addIcon);
router.delete("/:id", deleteIcon);

export default router;
