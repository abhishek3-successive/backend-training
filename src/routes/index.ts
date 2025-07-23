import  express  from "express";
import userRoutes from './userRoutes'
import otherRoutes from './otherRoutes'



const router = express.Router()

//Mount 
router.use('/user' , userRoutes)
router.use('/other', otherRoutes)

//Root api 

router.get('/' , (req, res)=>{
    res.json({
    message : `Welcome to Backend Api`,
    endpoints : {
        users : '/api/users',
        other : '/api/other'
    }
    
    })
})

export default router;