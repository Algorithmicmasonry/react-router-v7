import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please provide a valid email address"),
  password:  z
      .string()
      .min(8, "Password should be at least 8 characters"),
})