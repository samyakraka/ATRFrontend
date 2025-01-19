import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function KeyDeliverables() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Triggers and Pain Points</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ad targeting challenges</li>
            <li>Balancing automation with creativity</li>
            <li>Need for time-saving solutions</li>
            <li>Ad fatigue and content freshness</li>
            <li>Integration with existing marketing tools</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Focus on AI-driven solutions for ad creation and optimization
            </li>
            <li>
              Highlight time-saving and efficiency benefits in marketing
              materials
            </li>
            <li>
              Emphasize the balance between AI automation and human creativity
            </li>
            <li>Provide educational content on leveraging AI in advertising</li>
            <li>
              Showcase case studies demonstrating ROI and performance
              improvements
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Visualization Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Create infographics showing the impact of AI on ad performance
            </li>
            <li>
              Develop interactive demos showcasing Astralytics' key features
            </li>
            <li>
              Use before-and-after comparisons to illustrate the benefits of
              AI-powered advertising
            </li>
            <li>
              Create video tutorials on using Astralytics for different
              advertising scenarios
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
