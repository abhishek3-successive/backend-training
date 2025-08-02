import {Request , Response , NextFunction} from "express";

const customMiddleware = (req : Request, res : Response, next : NextFunction)=>{
    console.log(
        `TimeStamp:${new Date().toLocaleDateString()}, Method : ${req.method}, URL : ${req.originalUrl}`
    );
    next();
}

export default customMiddleware;