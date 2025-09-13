import { FaGoogle } from "react-icons/fa";
import { useNavigation } from "react-router";
import { Form, Link, useActionData } from "react-router";
import PasswordInput from "~/components/forms/password-input";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const LoginForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/login";
  const data = useActionData();
  let errors = data?.errors;

  console.log("This is the use action data from the login form", data);
  return (
    <Form action="/login" method="post" className="flex flex-col gap-6">
      {errors?.general && (
        <div style={{ color: "red", marginBottom: "1rem" }}>
          {errors.general}
        </div>
      )}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login To Your Account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Welcome back! Login to access your dashboard
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="firstName">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="John@example.com"
            required
          />
          {errors?.email ? (
            <em style={{ color: "red" }}>{errors.email}</em>
          ) : null}
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <PasswordInput
            id="password"
            name="password"
            placeholder="verystrongpassword"
            required
          />
          {errors?.password ? (
            <em style={{ color: "red" }}>{errors.password}</em>
          ) : null}
        </div>

        <Button type="submit" className="w-full">
          {isSubmitting ? "Logging In.." : "Log In"}
        </Button>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 p-2 rounded-md text-gray-900">
            Or continue with
          </span>
        </div>

        <Button
          type="submit"
          variant="outline"
          className="w-full"
          disabled={isSubmitting}
        >
          <FaGoogle className="mr-2 w-6 h-6 text-red-500" />
          Login with Google
        </Button>
      </div>

      <div className="text-center text-sm">
        Don't have an account yet?
        <Link to="/register" className="underline underline-offset-4 ml-2">
          Register
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
