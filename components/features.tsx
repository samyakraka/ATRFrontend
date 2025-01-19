import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

const features = [
  {
    title: "Generate Text",
    description:
      "Generate texts that bring results using proven copywriting frameworks using our ad text-trained AI.",
    icon: "/placeholder.svg",
    image: "/placeholder.svg",
  },
  {
    title: "Ad Creatives",
    description:
      "Generate conversion-focused ad creatives in seconds for any advertising platform.",
    icon: "/placeholder.svg",
    image: "/placeholder.svg",
  },
  {
    title: "Product Shoots",
    description:
      "Transform product photos into professional-grade fashion and e-commerce images instantly with AI.",
    icon: "/placeholder.svg",
    image: "/placeholder.svg",
  },
  {
    title: "Creative Insights AI",
    description:
      "Identify which creatives perform the best in your ad accounts and learn why. Receive data-driven, actionable tips for your next ones.",
    icon: "/placeholder.svg",
    image: "/placeholder.svg",
  },
  {
    title: "Creative Scoring AI",
    description:
      "Score your ad creatives before advertising. Let our AI give you actionable insights to improve them.",
    icon: "/placeholder.svg",
    image: "/placeholder.svg",
  },
  {
    title: "Competitor Insight AI",
    description:
      "Analyze your competitors' campaigns and gain valuable insights to stay ahead of the curve.",
    icon: "/placeholder.svg",
    image: "/placeholder.svg",
  },
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Your all-in-one
            <br className="hidden sm:block" />
            Marketing Powerhouse
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Generate high-conversion ad assets, gain actionable insights to
            optimize your campaigns, analyze competitors' performance and score
            your creatives before media spend – all on one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden bg-gray-50/50">
              <CardContent className="p-6">
                <div className="aspect-[4/3] relative mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
