"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { loadData } from "@/lib/loadData";

export function DataSummary({ user }) {
  // Accept user prop
  const googleData = loadData("google", user);
  const youtubeData = loadData("youtube", user);
  const redditData = loadData("reddit", user);
  const playstoreData = loadData("playstore", user);
  const newsData = loadData("news", user);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Data Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4">Google Search</h3>
          <p>
            <b>Query:</b> {googleData?.metadata?.query || "N/A"}
          </p>
          <p>
            <b>Total Results:</b>{" "}
            {googleData?.search_information?.total_results
              ? parseInt(
                  googleData.search_information.total_results
                ).toLocaleString()
              : "N/A"}
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">YouTube</h3>
          <p>
            <b>Most Viewed Video:</b>{" "}
            {youtubeData?.videos && youtubeData.videos.length > 0
              ? youtubeData.videos.reduce((prev, current) => {
                  const prevViews = parseInt(prev.views.replace(/[^0-9]/g, ""));
                  const currentViews = parseInt(
                    current.views.replace(/[^0-9]/g, "")
                  );
                  return prevViews > currentViews ? prev : current;
                }).title
              : "N/A"}
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">Reddit</h3>
          <p>
            <b>Most Upvoted Post:</b>{" "}
            {redditData?.posts && redditData.posts.length > 0
              ? redditData.posts.reduce((prev, current) =>
                  prev.score > current.score ? prev : current
                ).title
              : "N/A"}
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">Play Store</h3>
          <p>
            <b>Most Installed App:</b>{" "}
            {playstoreData?.apps && playstoreData.apps.length > 0
              ? playstoreData.apps.reduce((prev, current) => {
                  const prevInstalls = parseInt(
                    prev.installs.replace(/[^0-9]/g, "")
                  );
                  const currentInstalls = parseInt(
                    current.installs.replace(/[^0-9]/g, "")
                  );
                  return prevInstalls > currentInstalls ? prev : current;
                }).title
              : "N/A"}
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">News</h3>
          <p>
            <b>Latest Article:</b>{" "}
            {newsData?.articles && newsData.articles.length > 0
              ? newsData.articles.reduce((prev, current) =>
                  new Date(prev.publishedAt) > new Date(current.publishedAt)
                    ? prev
                    : current
                ).title
              : "N/A"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
