import { z } from "zod";

export const createUserSchema = z.object({
  body: z
    .object({
      email: z.email("email is invalid").min(1, "email is required"),
      password: z
        .string()
        .min(8, "password must be at least 8 characters")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[a-z]/, "Must contain at least one lowercase letter")
        .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
      confirmPassword: z.string().min(8, "confirm password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "passwords do not match",
      path: ["confirmPassword"],
    }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>["body"];
