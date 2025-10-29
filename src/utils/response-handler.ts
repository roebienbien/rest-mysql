// src/utils/responseHandler.ts
import { Response } from "express";

export const sendSuccess = (
  res: Response,
  message: string,
  data?: unknown,
  status = 200,
) => {
  return res.status(status).json({
    success: true,
    message,
    data: data ?? null,
  });
};

export const sendError = (
  res: Response,
  message: string,
  status = 500,
  errors?: unknown,
) => {
  return res.status(status).json({
    success: false,
    message,
    errors: errors ?? null,
  });
};
