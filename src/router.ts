import  Router from "express";
import userRouter from "./controllers/user";
import { generateMockData } from "./utils/dataSeeder";
import { Request , Response } from "express";
import { HealthController} from "./controllers/healthcheck";
import Day2 from './Day2/index';
import Day9 from "./Day9/index";
import Day10 from "./Day10/index";


const router = Router()

router.get('/health', HealthController.checkServerHealth);


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
router.use('/assignment/Day9', Day9)
router.use('/assignment/Day10', Day10)


export default router;