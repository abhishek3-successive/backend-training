import { Request,Response } from "express";
import { formatResponse } from "../../utils/otherUtils";

const getOtherData = (req : Request , res : Response) =>{
    const data = {
        items : ['item 1','item 2','item 3'],
        count : 3,
        catagory : 'general'
    };

    res.json(formatResponse('other data retrievewd successfully', data))
}

const getHealthCheck = (req : Request, res: Response)=>{
    res.json({
        status : 'OK',
        message : 'server is running properly',
        timestamps : new Date().toISOString(),

    })

}

    const testError = (req : Request , res : Response, next : any)=>{
        const error = new Error('this is a test error');
        next(error);
    };

    export {
        getHealthCheck,
        getOtherData,
        testError
    }
