import  Router  from "express";
import userRouter from "./controllers/user";
import { generateMockData } from "./utils/dataSeeder";
import { Request , Response } from "express";




const router = Router()
console.log("aaaaaaaaaaaaaa")

router.get('/health' , (req : Request , res : Response)=>{
    console.log('Abhishek Hello')
    res.json({
        status : 'OK',
        message : 'server is running properly',
        timestamps : new Date().toISOString(),
    })
});

router.post('/seed', (req: Request , res: Response) =>{
    const data = generateMockData();
    res.json({
        message : 'Data seeded sucessfully',
        data,
        count : data.length
    })
})


router.use('/', userRouter);



export default router;