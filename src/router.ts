import  healthcontroller  from "./controllers/healthcheck.ts";
import express from "express";

const router = express.Router();
const health=new healthcontroller();
router.get('/health', health.checkhealth);

export default router;