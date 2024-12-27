import { NextFunction, Request, Response } from 'express';

export default function Route_Index (req: Request, res: Response, next: NextFunction) {
    res.status(200).json({ message: 'Hello World!'});
}