import  express  from "express";
import Controllerrouter from "../controllers/router";
import utilsrouter from "../utils/router";


const router = express.Router()

//Mount 

router.use('/api', Controllerrouter);
router.use('/api/seed' , utilsrouter);


export default router;