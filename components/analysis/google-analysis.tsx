// google-analysis.tsx
"use client";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

interface GoogleResult {
  title: string;
  link: string;
  snippet: string;
  display_link: string;
  cached_page_link?: string;
  file_format?: string;
}

interface GoogleData {
  results: GoogleResult[];
}

export function GoogleAnalysis({ data }: { data: GoogleData }) {
  const [expandedResult, setExpandedResult] = useState<number | null>(null);

  if (!data) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">No Google data available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((result, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">
              <Link
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {result.title}
              </Link>
            </h3>
            <p className="text-sm text-green-700 mb-2">{result.display_link}</p>
            <p className="text-sm text-gray-600">{result.snippet}</p>
            {expandedResult === index && result.cached_page_link && (
              <div className="mt-2">
                <p className="text-sm text-gray-700">
                  Cached: {result.cached_page_link}
                </p>
                {result.file_format && (
                  <p className="text-sm text-gray-700">
                    Format: {result.file_format}
                  </p>
                )}
              </div>
            )}
            <button
              onClick={() =>
                setExpandedResult(expandedResult === index ? null : index)
              }
              className="text-sm text-blue-600 hover:underline mt-2"
            >
              {expandedResult === index ? "Show less" : "Show more"}
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
