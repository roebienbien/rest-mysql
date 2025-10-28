import { z } from "zod";
import { Request, Response, NextFunction } from "express";

export const validateResource =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (err: any) {
      if (err.name === "ZodError") {
        return res.status(400).json({
          message: "Validation failed",
          errors: err.errors,
        });
      }
      next(err);
    }
  };
