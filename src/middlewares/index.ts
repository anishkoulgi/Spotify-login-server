import { NextFunction, Response } from 'express';

export const verifyToken = (req: any, res: Response, next: NextFunction) => {
  console.log(req.headers);
  const token = (req.headers['authorization'] as string).split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'Unauthorized' });
  req.token = token;
  return next();
};
