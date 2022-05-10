import { NextFunction, Response, Request } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const tokenAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decodeToken = await jwt.verify(token, secret) as jwt.JwtPayload;
    req.body = decodeToken.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default tokenAuth;