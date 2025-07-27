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

router.post('/bad-request' , (req : Request , res : Response )=>{
    console.log("Incoming request body:", req.body);
  const {name , email} = req.body;

  if(!name || !email){
    return res.status(400).json({
        error : "Name and email are required",
        status : 400
    })
  }

  res.status(200).json({
    error : "User created sucessfully",
    data :{ name , email}
  })
});

router.get('/unauthorized' , (req : Request , res : Response)=>{
const token = req.headers.authorization;

if(!token){
    return res.status(401).json({
        error : "please login first",
        status : 401
    });
}
 res.status(200).json({
        message : "Welcome! You are logged in"
    })
})

router.get('/forbidden', (req: Request , res : Response)=>{
    const userRole = req.headers['user-role'] as string;

    if(userRole != 'admin'){
        return res.status(403).json({
            error : "you need admin acesses",
            status : 403
    })
    }

    res.status(200).json({
        message : 'Welcome admin'
})
})

router.get('/server-error', (req: Request , res : Response)=>{
    res.status(500).json({
        error : "Database Connection failed",
        status : 500
    })
})


router.use('/', userRouter);
router.use('/api/assignment/Day2',Day2)


export default router;