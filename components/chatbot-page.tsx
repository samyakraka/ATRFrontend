"use client";

import { useState } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

type Message = {
  text: string;
  isUser: boolean;
};

export function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simple echo bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `You said: ${input}`, isUser: false },
        ]);
      }, 500);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
        <h1 className="text-3xl font-bold mb-8">AI Chatbot</h1>
        <Card className="flex-grow flex flex-col">
          <ScrollArea className="flex-grow p-4">
            <div className="flex flex-col space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    message.isUser ? "justify-end" : ""
                  }`}
                >
                  {!message.isUser && (
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg"
                        alt="Astralytics Bot"
                      />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`ml-2 mr-2 py-3 px-4 rounded-lg ${
                      message.isUser
                        ? "bg-blue-500 text-white order-2"
                        : "bg-gray-200 text-gray-800 order-1"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.isUser && (
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
