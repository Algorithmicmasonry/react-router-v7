import Logo from "~/components/global/logo";
import type { Route } from "./+types/register";
import RegisterForm from "./_components/registration-form";
import { signupSchema } from "zod/signUp";
import { data, Navigate, redirect } from "react-router";
import { supabase } from "supabase/supabase-client";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  // Extract form data
  const rawData = {
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    email: String(formData.get("email")),
    password: String(formData.get("password")),
    confirmPassword: String(formData.get("confirmPassword")),
  };

  // Validate with Zod
  const result = signupSchema.safeParse(rawData);

  if (!result.success) {
    // Transform Zod errors to match the expected format
    const errors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (field && !errors[field]) {
        errors[field] = issue.message;
      }
    });

    return data({ errors }, { status: 400 });
  }

  // If validation passes, proceed with registration logic
  try {
    // Your registration logic here
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: result.data.email,
      password: result.data.password,
    });

    if (authError) {
      console.log("Auth error: ", authError);
      return data(
        {
          errors: { general: authError.message },
        },
        { status: 400 }
      );
    }

    const { error: studentError } = await supabase.from("student").insert([
      {
        id: authData.user?.id,
        first_name: result.data.firstName,
        last_name: result.data.lastName,
        email: result.data.email,
      },
    ]);

    if (studentError) {
      console.log("Student error: ", studentError);
      return data(
        { errors: { general: studentError.message } },
        { status: 400 }
      );
    }

    return data(
      { success: true, message: "Account created! Please confirm your email." },
      { status: 200 }
    )
  } catch (error) {
    // Handle registration errors
    return data(
      {
        errors: { general: "Registration failed. Please try again." },
      },
      { status: 500 }
    );
  }
}

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-col gap-4 p-6 md:p-10 relative">
        <div className="flex justify-center gap-2 md:justify-start relative z-10">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          {/* Radial Gradient Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
            }}
          />
          <div className="w-full max-w-xs relative z-10">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/wellspring-student_image.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
}
