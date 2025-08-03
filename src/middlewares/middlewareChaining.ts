import { Request, Response, NextFunction } from "express";

const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  console.log("this is middleware1");
  next();
};

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("this is middleware2");
  next();
};

const middleware3 = (req: Request, res: Response, next: NextFunction) => {
  console.log("this is middleware3");
  next();
};

export { middleware1, middleware2, middleware3 };
