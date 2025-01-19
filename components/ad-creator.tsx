"use client";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function AdCreator() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-500">
              Generate High-Performing Ad Creatives
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Boost sales by up to 14x
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              Generate conversion-optimized ad creatives such as banners,
              videos, texts and product shoots in seconds. Get up to 14 times
              better conversion and click-through rates using our
              state-of-the-art proprietary AI models
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="h-5 w-5 text-pink-500" />
                <span>High-ROI ad creatives in seconds</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="h-5 w-5 text-pink-500" />
                <span>Any ad asset you need for any platform</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="h-5 w-5 text-pink-500" />
                <span>On-brand and customizable outputs</span>
              </li>
            </ul>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 h-auto text-lg">
              Try For Free Now
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Brand</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mytech">
                        <div className="flex items-center space-x-2">
                          <div className="grid grid-cols-2 gap-1 w-6 h-6">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className="bg-purple-900 rounded-sm"
                              />
                            ))}
                          </div>
                          <span>MYTECH</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Story Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1080x1350">1080x1350</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Texts</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter text" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="join">Join now!</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Image</label>
                  <div className="border rounded-md p-2">
                    <Image
                      src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1NcdFat72ofWElAAm7em1GYWAbVIC2.png`}
                      alt="Selected image"
                      width={100}
                      height={100}
                      className="w-full h-20 object-cover rounded"
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Generate
              </Button>

              <div className="space-y-4">
                <h4 className="font-semibold">AI Generated Assets</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[96, 94, 92].map((score) => (
                    <Card key={score} className="p-2">
                      <div className="text-xs font-medium mb-2">
                        Conversion Score {score}/100
                      </div>
                      <div className="aspect-[3/4] bg-gray-100 rounded-md" />
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
