import { Request, Response } from "express";

export class HealthController {
  public static checkServerHealth(req: Request, res: Response): void {
    res.json({
      status: 'OK',
      message: 'server is running properly',
      timestamps: new Date().toISOString(),
    });
  }
}
