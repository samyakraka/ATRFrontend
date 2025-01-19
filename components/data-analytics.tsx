"use client";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Image from "next/image";
import { Check, Users, Eye, MousePointerClick } from "lucide-react";

export function DataAnalytics() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-500">
              Master Your Data & Competitors
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Know what works & always stay ahead
            </h3>
            <p className="text-lg text-gray-600 max-w-xl">
              Connect your ad accounts and let our AI analyze each of your ad
              creatives, providing perfect visibility into which types perform
              best for your business. With just a single URL from your
              competitor, view their best-performing ads and discover where they
              drive their sales. Always stay ahead of the competition.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="h-5 w-5 text-pink-500" />
                <span>Concise insights</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="h-5 w-5 text-pink-500" />
                <span>Reveal your competitors' best ads</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="h-5 w-5 text-pink-500" />
                <span>Take data-backed decisions</span>
              </li>
            </ul>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 h-auto text-lg">
              Try For Free Now
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Unique Visitors</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-2xl font-bold">15K</span>
                  <span className="text-sm text-green-500">+20.24%</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Visit Count</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-2xl font-bold">65K</span>
                  <span className="text-sm text-green-500">+13.56%</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <MousePointerClick className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Bounce Rate</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-2xl font-bold">74%</span>
                  <span className="text-sm text-green-500">+22.85%</span>
                </div>
              </Card>
            </div>

            {/* Demographics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <h4 className="text-sm font-medium mb-4">Gender</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Female</span>
                    <span className="text-sm">42%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full"
                      style={{ width: "42%" }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Male</span>
                    <span className="text-sm">58%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "58%" }}
                    />
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <h4 className="text-sm font-medium mb-4">Age</h4>
                <div className="flex items-end justify-between h-32">
                  {[15, 25, 35, 45, 55, 65].map((age, i) => (
                    <div
                      key={age}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div
                        className="w-8 bg-pink-500 rounded-t"
                        style={{
                          height: `${[60, 80, 100, 70, 40, 30][i]}%`,
                          opacity: [0.5, 0.7, 1, 0.7, 0.5, 0.3][i],
                        }}
                      />
                      <span className="text-xs text-gray-500">{age}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Google Ads Section */}
            <Card className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Google icon"
                  width={20}
                  height={20}
                  className="rounded"
                />
                <h4 className="font-medium">Google Seo Best Ads</h4>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { rank: "1st", title: "Pizza Ad" },
                  { rank: "2nd", title: "Restaurant Ad" },
                  { rank: "3rd", title: "Burger Ad" },
                ].map((ad, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-pink-500">{ad.rank}</span>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-lg">
                      <Image
                        src="/placeholder.svg"
                        alt={ad.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
