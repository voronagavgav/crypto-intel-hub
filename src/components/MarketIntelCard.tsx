import { BarChart3, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MarketIntelCard = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            GeckoTerminal Market Intelligence
          </div>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <ExternalLink className="h-4 w-4 mr-2" />
            View on GeckoTerminal
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MetricBox label="Current Price" value="$0.00123" />
          <MetricBox label="Current Liquidity" value="$234.5K" />
          <MetricBox label="Market Cap" value="$1.15M" />
          <MetricBox label="Fully Diluted Value" value="$1.23M" />
          <MetricBox label="Volume (24h)" value="$156.2K" />
          <MetricBox label="Price Change (24h)" value="+15.3%" valueColor="text-success" />
        </div>
      </CardContent>
    </Card>
  );
};

const MetricBox = ({
  label,
  value,
  valueColor = "text-foreground",
}: {
  label: string;
  value: string;
  valueColor?: string;
}) => (
  <div className="rounded-lg bg-secondary/50 p-4 border border-border/30">
    <div className="text-muted-foreground text-sm mb-2">{label}</div>
    <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
  </div>
);
