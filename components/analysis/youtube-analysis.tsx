// youtube-analysis.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function YouTubeAnalysis({ data }) {
  const [expandedVideo, setExpandedVideo] = useState<number | null>(null);

  if (!data?.length) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">
            No YouTube data available.
          </p>
        </CardContent>
      </Card>
    );
  }

  const chartData = data.map((video) => ({
    title: video.title.slice(0, 20) + "...",
    views: parseInt(video.views.replace(/[^0-9]/g, "")),
  }));

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Video Views Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {data.map((video, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">
                <Link
                  href={`https://www.youtube.com${video.url_suffix}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {video.title}
                </Link>
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{video.channel}</Badge>
                <span className="text-sm text-gray-500">
                  {video.publish_time}
                </span>
              </div>
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm">Views: {video.views}</span>
                <span className="text-sm">Duration: {video.duration}</span>
              </div>
              {video.comments?.length > 0 && (
                <>
                  <div className="space-y-2">
                    {expandedVideo === index
                      ? video.comments.map((comment, i) => (
                          <p key={i} className="text-sm text-gray-700">
                            {comment.text}
                          </p>
                        ))
                      : video.comments.slice(0, 1).map((comment, i) => (
                          <p key={i} className="text-sm text-gray-700">
                            {comment.text.slice(0, 100)}...
                          </p>
                        ))}
                  </div>
                  <button
                    onClick={() =>
                      setExpandedVideo(expandedVideo === index ? null : index)
                    }
                    className="text-sm text-blue-600 hover:underline mt-2"
                  >
                    {expandedVideo === index ? "Show less" : "Show more"}
                  </button>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// reddit-analysis.tsx and news-analysis.tsx follow similar patterns
// with their own specific data structures and visualizations
