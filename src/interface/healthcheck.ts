import { Request, Response } from "express";

export interface healthcheck {
    checkhealth(req: Request , res : Response) : void;
}