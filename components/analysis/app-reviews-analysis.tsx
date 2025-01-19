// app-reviews-analysis.tsx
"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function AppReviewsAnalysis() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/path/to/all_data.json");
      const jsonData = await response.json();
      setData(jsonData.elon_musk.results.playstore); // Update based on actual structure
    }
    fetchData();
  }, []);

  if (!data || !data.apps?.length) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">
            No Play Store data available.
          </p>
        </CardContent>
      </Card>
    );
  }

  const chartData = data.apps.map((app: any) => ({
    name: app.title?.slice(0, 20) + "..." || "Unknown",
    installs: parseInt(app.installs?.replace(/[^0-9]/g, "") || "0"),
    score: app.score || 0,
  }));

  return (
    <div className="space-y-8">
      {/* Chart and App Reviews Content */}
      {/* Same content as the original code */}
    </div>
  );
}
