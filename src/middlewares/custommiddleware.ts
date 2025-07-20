import {Request , Respone , NextFunction} from "express";

const customMiddleware = (req : Request, res : Respone, next : NextFunction)=>{
    console.log(
        `TimeStamp:${new Date().toLocaleDateString()}, Method : ${req.method}, URL : ${req.originUrl}`
    );
    next();
}

export default customMiddleware;