import { NextFunction, Request, Response } from 'express';

const matchesValidation = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default matchesValidation;
