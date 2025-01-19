import { Metadata } from "next";
import { AuthLayout } from "../../components/auth-layout";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Log In | Astralytics",
  description: "Log in to your Astralytics account",
};

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" description="Log in to your account">
      <LoginForm />
    </AuthLayout>
  );
}
