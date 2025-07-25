import express from 'express';
import { generateMockData } from './dataSeeder';

const router = express.Router();

router.post('/' , (req , res)=>{
    const data = generateMockData();
    res.json({
        message : 'Data seeded sucessfully',
        data,
        count : data.length
    })

    
})


export default router;