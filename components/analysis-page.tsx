"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { GoogleAnalysis } from "./analysis/google-analysis";
import { YouTubeAnalysis } from "./analysis/youtube-analysis";
import { RedditAnalysis } from "./analysis/reddit-analysis";
import { AppReviewsAnalysis } from "./analysis/app-reviews-analysis";
import { KeyDeliverables } from "./analysis/key-deliverables";
import { NewsAnalysis } from "./analysis/news-analysis";
import { DataSummary } from "./analysis/data-summary";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function AnalysisPage() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState("google");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState("");
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const fetchExistingData = async () => {
      if (!user) return;

      try {
        const response = await fetch(
          "https://atkb-8vuf4wyqm-vedantdeores-projects.vercel.app/analyze",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              checkExisting: true,
              username: user.username || user.id,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const userData = data[user.username || user.id];
        if (userData) {
          setAnalysisData(data);
          setQuery(userData.metadata.query);
        }
      } catch (error) {
        console.error("Error fetching existing data:", error);
        setError("Failed to fetch existing data.");
      } finally {
        setIsInitialLoading(false);
      }
    };

    if (isLoaded) {
      fetchExistingData();
    }
  }, [isLoaded, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setError("Please sign in to perform analysis");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://atkb-8vuf4wyqm-vedantdeores-projects.vercel.app/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            username: user.username || user.id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnalysisData(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to analyze data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded || isInitialLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-16 w-16 animate-spin text-pink-500" />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-16 w-16 animate-spin text-pink-500" />
        <p className="ml-4 text-xl font-semibold">Analyzing data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Platform Analysis</h1>
        {!analysisData ? (
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <Button type="submit" disabled={!user}>
                Analyze
              </Button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            {!user && (
              <p className="text-gray-500">
                Please sign in to perform analysis
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-lg">
                Current Query: <span className="font-medium">{query}</span>
              </p>
              <Button
                onClick={() => {
                  setAnalysisData(null);
                  setQuery("");
                }}
                variant="outline"
              >
                New Analysis
              </Button>
            </div>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-4"
            >
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 gap-4">
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="youtube">YouTube</TabsTrigger>
                <TabsTrigger value="reddit">Reddit</TabsTrigger>
                <TabsTrigger value="appreviews">App Reviews</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="summary">Summary</TabsTrigger>
              </TabsList>
              <TabsContent value="google">
                <GoogleAnalysis
                  data={analysisData[user.username || user.id].results.google}
                />
              </TabsContent>
              <TabsContent value="youtube">
                <YouTubeAnalysis
                  data={analysisData[user.username || user.id].results.youtube}
                />
              </TabsContent>
              <TabsContent value="reddit">
                <RedditAnalysis
                  data={analysisData[user.username || user.id].results.reddit}
                />
              </TabsContent>
              <TabsContent value="appreviews">
                <AppReviewsAnalysis
                  data={
                    analysisData[user.username || user.id].results.playstore
                  }
                />
              </TabsContent>
              <TabsContent value="news">
                <NewsAnalysis
                  data={analysisData[user.username || user.id].results.news}
                />
              </TabsContent>
              <TabsContent value="summary">
                <DataSummary
                  data={analysisData[user.username || user.id].results}
                />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
