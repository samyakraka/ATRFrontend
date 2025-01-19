"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface NewsArticle {
  title: string;
  url: string;
  source: {
    name: string;
  };
  publishedAt: string;
  description: string;
  content: string;
}

interface NewsData {
  metadata: {
    query: string;
    total_results: number;
    timestamp: string;
  };
  articles: NewsArticle[];
}

export function NewsAnalysis({ data }: { data: NewsData }) {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  if (!data) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">No News data available.</p>
        </CardContent>
      </Card>
    );
  }

  const sourceStats = data.reduce((acc, article) => {
    const source = article.source.name;
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(sourceStats).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>News Analysis: {data.query}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {data.map((article, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">
                <Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {article.title}
                </Link>
              </h3>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{article.source.name}</Badge>
                <span className="text-sm text-gray-500">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                {article.description}
              </p>
              {article.content && (
                <>
                  <p className="text-sm text-gray-700 mb-2">
                    {expandedArticle === index
                      ? article.content
                      : `${article.content.slice(0, 200)}...`}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedArticle(
                        expandedArticle === index ? null : index
                      )
                    }
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {expandedArticle === index ? "Show less" : "Show more"}
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
