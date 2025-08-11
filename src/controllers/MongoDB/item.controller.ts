import { Request, Response } from 'express';
import { Item } from '../../models/item';

export const createItem = async (req: Request, res: Response) => {
  try {
    const item = new Item(req.body);
    const saved = await item.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message, errors: error.errors || null });
  }
};
