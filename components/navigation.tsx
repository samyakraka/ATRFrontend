"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Logo } from "./logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/analysis"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Analysis
                </Link>
                <Link
                  href="/chatbot"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Chatbot
                </Link>
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      className="text-lg font-medium w-full text-left"
                    >
                      Login
                    </Button>
                  </SignInButton>
                  <Link
                    href="/signup"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-pink-500 text-white hover:bg-pink-600">
                      Try For Free Now
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex gap-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/analysis" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Analysis
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/chatbot" legacyBehavior passHref>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Chatbot
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="text-sm font-medium">
                  Login
                </Button>
              </SignInButton>
              <Link href="/signup">
                <Button className="bg-pink-500 text-white hover:bg-pink-600">
                  Try For Free Now
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
