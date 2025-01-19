import { Logo } from "./logo"
import Link from "next/link"
import { Instagram, Linkedin, PinIcon as Pinterest, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  generate: {
    title: "Generate",
    links: [
      { label: "Generate Creatives", href: "#" },
      { label: "Generate Product Photoshoots AI", href: "#" },
      { label: "Generate Text & Headlines", href: "#" },
      { label: "Generate Stock Images", href: "#" },
    ]
  },
  analyse: {
    title: "Analyse",
    links: [
      { label: "Creative Insight", href: "#" },
      { label: "Competitor Insight", href: "#" },
    ]
  },
  automate: {
    title: "Automate",
    links: [
      { label: "Custom Templates", href: "#" },
    ]
  },
  predict: {
    title: "Predict",
    links: [
      { label: "Creative Scoring AI", href: "#" },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Home", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Affiliate", href: "#" },
      { label: "Agency Partnership Program", href: "#" },
      { label: "Media", href: "#" },
    ]
  },
  whoIsItFor: {
    title: "Who Is It For?",
    links: [
      { label: "Agencies", href: "#" },
      { label: "Ecommerce", href: "#" },
      { label: "Small Business", href: "#" },
    ]
  },
  legal: {
    title: "Astralytics",
    links: [
      { label: "Terms and Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center">
                  🌐
                  <span className="ml-2">English</span>
                </span>
              </div>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-600">
              Need help? Reach us at:{" "}
              <a href="mailto:contact@astralytics.com" className="text-pink-500 hover:text-pink-600">
                contact@astralytics.com
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Pinterest className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

