import express from 'express';
import { getAllEquipamentos, getEquipamentosById, createEquipamento, deleteEquipamento, updateEquipamento, } from '../controllers/equipamentosControllers.js';

const router = express.Router()

router.get("/", getAllEquipamentos);
router.get("/:id", getEquipamentosById);
router.post("/", createEquipamento);
router.delete("/:id", deleteEquipamento)
router.put("/:id", updateEquipamento);

export default router;