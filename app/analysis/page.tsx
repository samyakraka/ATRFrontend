import { Metadata } from "next";
import { AnalysisPage } from "../../components/analysis-page";

export const metadata: Metadata = {
  title: "Platform Analysis | Astralytics",
  description:
    "Comprehensive analysis of advertising performance across multiple platforms",
};

export default function Analysis() {
  return <AnalysisPage />;
}
