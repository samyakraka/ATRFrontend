import { Metadata } from "next";
import { AuthLayout } from "../../components/auth-layout";
import { SignUpForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up | Astralytics",
  description:
    "Create your account and start creating high-converting ads with AI",
};

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create an account"
      description="Sign up to get started with Astralytics"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
