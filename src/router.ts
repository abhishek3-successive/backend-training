import   Router, { NextFunction }  from "express";
import userRouter from "./controllers/user";
import { generateMockData } from "./utils/dataSeeder";
import { Request , Response } from "express";
import Day2 from './Day2/index';
import  express  from "express";

const app = express();

app.use(express.json())

const router = Router()

router.get('/health' , (req : Request , res : Response)=>{
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
router.use('/assignment/Day2',Day2)


export default router;