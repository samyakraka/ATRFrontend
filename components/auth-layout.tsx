import { Logo } from "./logo"
import Link from "next/link"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Left side - Branding */}
      <div className="sm:w-1/2 bg-gradient-to-br from-purple-900 to-pink-500 p-8 flex flex-col justify-between text-white">
        <div>
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <h1 className="mt-12 text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome to Astralytics
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            The #1 AI-powered platform for creating high-converting ad creatives
          </p>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm">&copy; 2025 Astralytics. All rights reserved.</p>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="sm:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
          {children}
        </div>
      </div>
    </div>
  )
}

