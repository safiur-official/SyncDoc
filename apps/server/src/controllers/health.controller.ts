import type { Request, Response } from 'express';

export function getHealth(_req: Request, res: Response) {
  res.status(200).json({
    success: true,
    service: 'syncdoc-server',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
}