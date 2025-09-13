import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters"),
  confirmPassword: z
    .string()
    .min(8, "Password should be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password and Confirm Password do not match",
  path: ["confirmPassword"], // This specifies which field the error applies to
});

// This gives you a TypeScript type automatically
export type SignupData = z.infer<typeof signupSchema>;

