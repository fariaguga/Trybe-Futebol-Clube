import { NextFunction, Request, Response } from 'express';

const inputValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    if (!email || email === '' || !password || password === '') {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();    
  } catch (error) {
    
  }

};

const formatValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    if (password.length <= 6) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
};

export {
  inputValidation,
  formatValidation,
};
