import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero";
import { AdCreator } from "../components/ad-creator";
import { DataAnalytics } from "../components/data-analytics";
import { Features } from "../components/features";
import { Team } from "../components/team";
import { Footer } from "../components/footer";

export const metadata = {
  title: "Astralytics - AI-Powered Ad Creation Platform",
  description: "Generate high-performing ad creatives with AI",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <Navigation />
      <Hero />
      <AdCreator />
      <DataAnalytics />
      <Features />
      <Team />
      <Footer />
    </main>
  );
}
