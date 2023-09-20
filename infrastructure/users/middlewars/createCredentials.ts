import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function createCredentials(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id, password } = req.body;

  if (!id || !password) return res.status(400).json([]);

  const assignToken = jwt.sign(id, `${process.env.JWT_PASSWORD}`, {
    expiresIn: "15m",
  });

  res.cookie("access_token_user", assignToken, {
    httpOnly: true,
    maxAge: 3600,
  });

  next();
}
