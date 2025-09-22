import express from 'express';
import { getAllEquipamentos } from '../controllers/equipamentosControllers.js';

const router = express.Router()

router.get("/", getAllEquipamentos);

export default router;