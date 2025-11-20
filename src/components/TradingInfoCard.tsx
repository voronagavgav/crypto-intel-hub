import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TradingInfoCard = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          Trading & Market Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Current Price"
            value="$0.00123"
            trend="up"
            change="+12.5%"
          />
          <MetricCard
            label="Max Price"
            value="$0.00456"
            subtext="All-time high"
          />
          <MetricCard
            label="Current FDV"
            value="$1.23M"
            trend="up"
          />
          <MetricCard
            label="Top FDV"
            value="$4.56M"
            subtext="Peak valuation"
          />
          <MetricCard
            label="Liquidity"
            value="$234.5K"
            trend="down"
            change="-3.2%"
          />
          <MetricCard
            label="Volume (1h)"
            value="$45.2K"
            trend="up"
            change="+8.7%"
          />
          <MetricCard
            label="Coin Age"
            value="42 days"
            subtext="Since deployment"
          />
          <MetricCard
            label="Pool Age"
            value="41 days"
            subtext="Since first liquidity"
          />
        </div>
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">DEX</span>
            <Badge className="bg-primary text-primary-foreground">Uniswap V2</Badge>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-muted-foreground text-sm">Pair Address</span>
            <span className="text-foreground text-sm font-mono">0x7890...cdef</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MetricCard = ({
  label,
  value,
  trend,
  change,
  subtext,
}: {
  label: string;
  value: string;
  trend?: "up" | "down";
  change?: string;
  subtext?: string;
}) => (
  <div className="rounded-lg bg-secondary/50 p-4 border border-border/30">
    <div className="text-muted-foreground text-xs mb-1">{label}</div>
    <div className="flex items-baseline gap-2">
      <div className="text-foreground text-xl font-bold">{value}</div>
      {trend && change && (
        <div className={`flex items-center text-xs ${trend === "up" ? "text-success" : "text-destructive"}`}>
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1" />
          )}
          {change}
        </div>
      )}
    </div>
    {subtext && <div className="text-muted-foreground text-xs mt-1">{subtext}</div>}
  </div>
);
