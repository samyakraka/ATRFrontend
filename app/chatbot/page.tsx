import { Metadata } from "next";
import { ChatbotPage } from "../../components/chatbot-page";

export const metadata: Metadata = {
  title: "AI Chatbot | Astralytics",
  description:
    "Interact with our AI-powered chatbot for instant assistance and insights",
};

export default function Chatbot() {
  return <ChatbotPage />;
}
