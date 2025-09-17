// RegisterForm.tsx
import { FaGoogle } from "react-icons/fa";
import { Link, useFetcher } from "react-router";
import { handleGoogleSignIn } from "supabase/handleGoogleSignIn";
import PasswordInput from "~/components/forms/password-input";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function RegisterForm() {
  let fetcher = useFetcher();
  let errors = fetcher.data?.errors;
  let isSubmitting = fetcher.state == "submitting";

  return (
    <div>
      <fetcher.Form method="post" className="flex flex-col gap-6">
        {fetcher.data?.success && (
          <div style={{ color: "green", marginBottom: "1rem" }}>
            ✅ Account created! Please check your email for a confirmation link.
          </div>
        )}

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create your Student Account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in your details to start sending Exit passes.
          </p>
        </div>

        {errors?.general && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            {errors.general}
          </div>
        )}

        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              required
              disabled={isSubmitting}
            />
            {errors?.firstName ? (
              <em style={{ color: "red" }}>{errors.firstName}</em>
            ) : null}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              required
              disabled={isSubmitting}
            />
            {errors?.lastName ? (
              <em style={{ color: "red" }}>{errors.lastName}</em>
            ) : null}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
              disabled={isSubmitting}
            />
            {errors?.email ? (
              <em style={{ color: "red" }}>{errors.email}</em>
            ) : null}
          </div>

          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <PasswordInput
              id="password"
              name="password"
              placeholder="verystrongpassword"
              required
              disabled={isSubmitting}
            />
            {errors?.password ? (
              <em style={{ color: "red" }}>{errors.password}</em>
            ) : null}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirmverystrongpassword...."
              required
              disabled={isSubmitting}
            />
            {errors?.confirmPassword ? (
              <em style={{ color: "red" }}>{errors.confirmPassword}</em>
            ) : null}
          </div>

          <input type="hidden" name="action" value="register" />
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 p-2 rounded-md text-gray-900">
              Or continue with
            </span>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            disabled={isSubmitting}
          >
            <FaGoogle className="mr-2 w-6 h-6 text-red-500" />
            Sign up with Google
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?
          <Link to="/login" className="underline underline-offset-4 ml-2">
            Login
          </Link>
        </div>
      </fetcher.Form>
    </div>
  );
}
