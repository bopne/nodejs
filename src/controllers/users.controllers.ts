import { Request, Response } from 'express';  

export const loginController = (req: Request, res: Response): void => {  
  const { email, password } = req.body;  

  if (email === 'huyenkgtc1028@gmail.com' && password === '123456') {  
    res.json({ message: 'Login success' }); 
    return; 
  }  
  res.status(400).json({ error: 'Login failed' });  
};
