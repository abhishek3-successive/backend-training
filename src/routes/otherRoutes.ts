import  express  from "express";
import { getOtherData,getHealthCheck,testError } from "../controllers/otherControllers";
import { generateMockData } from "../utils/dataSeeder";

const router = express.Router();

// Get route for other data

router.get('/data',getOtherData)

router.get('/heath' , getHealthCheck);

//post router for seeding data

router.post('/seed' , (req , res)=>{
    const data = generateMockData();
    res.json({
        message : 'Data seeded sucessfully',
        data,
        count : data.length
    })

    
})
router.get('/test-error', testError)

export default router;