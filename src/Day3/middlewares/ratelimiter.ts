import { Request, Response, NextFunction } from "express";

const requestCounts = new Map<string, number>();

export default function rateLimiter(maxRequest: number) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || "unknown";
    const count = requestCounts.get(ip) || 0;

    if (count >= maxRequest) {
      return res.status(429).json({ message: "Maximum request limit reached" });
    }

    requestCounts.set(ip, count + 1);
    next();
  };
}
