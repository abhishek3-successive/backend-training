import { Request, Response, NextFunction } from "express";
import geoip from "geoip-lite";

declare module "express-serve-static-core" {
  interface Request {
    geoLocation?: {
      country: string | null;
      city: string | null;
    };
  }
}
export const validateLocation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ip = "115.97.0.1"; 
    const geo = geoip.lookup(ip);

    if (geo) {
      req.geoLocation = {
        country: geo.country || null,
        city: geo.city || null,
      };
    } else {
      req.geoLocation = {
        country: null,
        city: null,
      };
    }

    next();
  } catch (error) {
    next(error);
  }
};
