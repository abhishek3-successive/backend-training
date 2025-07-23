import { healthcheck } from "../interface/healthcheck";
import { Request, Response  } from "express";

export default class healthcontroller implements healthcheck{
    public checkhealth(req: Request, res: Response): void {
        res.status(202).json({
            status : 'OK',
            message : 'Server is up'
        })
    }
}