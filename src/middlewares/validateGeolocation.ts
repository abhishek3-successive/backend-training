import { Request, Response, NextFunction } from 'express';

const allowedRegions = ['US', 'CA']; // Example allowed regions

const validateGeolocation = (req: Request, res: Response, next: NextFunction) => {
  const getClientRegion = (ip: string): string => {
    const mockIPRegions: { [key: string]: string } = {
      '127.0.0.1': 'US',
      '::1': 'US',
      // Add more mock IPs and regions as needed
    };
    return mockIPRegions[ip] || 'Unknown';
  };

  const clientIP = req.ip;
  const region = getClientRegion(clientIP);

  if (!allowedRegions.includes(region)) {
    return res.status(403).json({ error: 'Access denied from your geographic location.' });
  }

  next();
};

export default validateGeolocation;