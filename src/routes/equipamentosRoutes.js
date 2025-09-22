import express from 'express';
import { getAllEquipamentos, getEquipamentosById } from '../controllers/equipamentosControllers.js';

const router = express.Router()

router.get("/", getAllEquipamentos);
router.get("/:id", getEquipamentosById);

export default router;