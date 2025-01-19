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

interface RedditPost {
  title: string;
  url: string;
  author: string;
  score: number;
  num_comments: number;
  upvote_ratio: number;
  created_utc: string;
  selftext: string;
  subreddit: string;
}

interface RedditData {
  metadata: {
    query: string;
    num_posts_found: number;
    timestamp: string;
  };
  posts: RedditPost[];
}

export function RedditAnalysis({ data }: { data: RedditData }) {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  console.log(data);
  if (!data) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">No Reddit data available.</p>
        </CardContent>
      </Card>
    );
  }

  const chartData = data.map((items: RedditPost) => ({
    title: items.title.slice(0, 20) + "...",
    score: items.score,
    comments: items.num_comments,
  }));

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Reddit Analysis:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Bar
                  yAxisId="left"
                  dataKey="score"
                  fill="#8884d8"
                  name="Score"
                />
                <Bar
                  yAxisId="right"
                  dataKey="comments"
                  fill="#82ca9d"
                  name="Comments"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {data.map((post, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">r/{post.subreddit}</Badge>
                <span className="text-sm text-gray-500">
                  by u/{post.author}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(
                    parseInt(post.created_utc, 10) * 1000
                  ).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm">Score: {post.score}</span>
                <span className="text-sm">Comments: {post.num_comments}</span>
                <span className="text-sm">
                  Upvote Ratio: {(post.upvote_ratio * 100).toFixed(0)}%
                </span>
              </div>
              {post.selftext && (
                <>
                  <p className="text-sm text-gray-700 mb-2">
                    {expandedPost === index
                      ? post.selftext
                      : `${post.selftext.slice(0, 200)}...`}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedPost(expandedPost === index ? null : index)
                    }
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {expandedPost === index ? "Show less" : "Show more"}
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
