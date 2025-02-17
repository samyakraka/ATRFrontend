import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute hidden md:block left-[5%] lg:left-10 top-1/4 w-48 md:w-64 h-48 md:h-64 opacity-80">
        <Image
          src="/placeholder.svg"
          alt="Ad Example 1"
          width={256}
          height={256}
          className="rounded-lg shadow-xl"
        />
      </div>
      <div className="absolute hidden md:block right-[5%] lg:right-10 top-1/3 w-48 md:w-64 h-48 md:h-64 opacity-80">
        <Image
          src="/placeholder.svg"
          alt="Ad Example 2"
          width={256}
          height={256}
          className="rounded-lg shadow-xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
          <span className="text-purple-900">#1</span> most used
          <br className="hidden sm:block" />
          AI tool for advertising
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          Generate{" "}
          <span className="text-purple-700 font-semibold">
            ad banners, texts, photoshoots,
          </span>{" "}
          and <span className="text-purple-700 font-semibold">videos</span> that
          outperform those of your competitors.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-pink-500 text-white hover:bg-pink-600 text-lg px-8 py-6 h-auto"
            >
              Try For Free Now
            </Button>
          </Link>
          <Link href="/analysis">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 h-auto"
            >
              View Analysis
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"
              >
                <Image
                  src="/placeholder.svg"
                  alt={`User ${i}`}
                  width={32}
                  height={32}
                />
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            Supporting over{" "}
            <span className="text-purple-700 font-bold">3,000,000 users</span>{" "}
            worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12">
          <p className="text-xl text-gray-600">
            Over{" "}
            <span className="text-purple-700 font-bold">
              1 Billion Ad Creatives
            </span>{" "}
            Generated by Top Brands Including:
          </p>
        </div>
      </div>
    </div>
  );
}
