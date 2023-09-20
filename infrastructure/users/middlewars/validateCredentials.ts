import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

export function validateCredentials(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const token = req.cookies.access_token_user;

  const verifyToken = jwt.verify(token, `${process.env.JWT_PASSWORD}`);

  if (id !== verifyToken) return res.status(400).json([]);

  next();
}
