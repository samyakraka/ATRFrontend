import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Astralytics',
  description: 'Learn more about our team and mission at Astralytics',
}

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <p className="text-lg text-gray-600">
        At Astralytics, we are passionate about revolutionizing digital advertising through the power of AI. Our mission is to empower businesses of all sizes to create high-performing ad campaigns that drive results. We believe that AI can be a game-changer in the advertising world, and we are committed to developing innovative solutions that make AI accessible and effective for everyone.
      </p>
      <p className="text-lg text-gray-600 mt-4">
        Our team is composed of experienced developers, marketers, and data scientists who are dedicated to pushing the boundaries of what's possible with AI in advertising. We are constantly exploring new ways to leverage AI to improve ad performance, and we are excited to share our innovations with the world.
      </p>
    </div>
  )
}

