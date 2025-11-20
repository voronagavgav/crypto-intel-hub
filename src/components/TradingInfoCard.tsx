import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DraggableRow } from "@/components/DraggableRow";

export const TradingInfoCard = ({ isUnlocked }: { isUnlocked: boolean }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          Trading & Market Data
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          <DraggableRow id="current-price" isUnlocked={isUnlocked}>
            <MetricCard label="Current Price" value="$0.00123" trend="up" change="+12.5%" />
          </DraggableRow>
          <DraggableRow id="max-price" isUnlocked={isUnlocked}>
            <MetricCard label="Max Price" value="$0.00456" subtext="All-time high" />
          </DraggableRow>
          <DraggableRow id="current-fdv" isUnlocked={isUnlocked}>
            <MetricCard label="Current FDV" value="$1.23M" trend="up" />
          </DraggableRow>
          <DraggableRow id="top-fdv" isUnlocked={isUnlocked}>
            <MetricCard label="Top FDV" value="$4.56M" subtext="Peak valuation" />
          </DraggableRow>
          <DraggableRow id="liquidity" isUnlocked={isUnlocked}>
            <MetricCard label="Liquidity" value="$234.5K" trend="down" change="-3.2%" />
          </DraggableRow>
          <DraggableRow id="volume-1h" isUnlocked={isUnlocked}>
            <MetricCard label="Volume (1h)" value="$45.2K" trend="up" change="+8.7%" />
          </DraggableRow>
          <DraggableRow id="coin-age" isUnlocked={isUnlocked}>
            <MetricCard label="Coin Age" value="42 days" subtext="Since deployment" />
          </DraggableRow>
          <DraggableRow id="pool-age" isUnlocked={isUnlocked}>
            <MetricCard label="Pool Age" value="41 days" subtext="Since first liquidity" />
          </DraggableRow>
        </div>
        <div className="pt-4 border-t border-border/50 space-y-2">
          <DraggableRow id="dex-info" isUnlocked={isUnlocked}>
            <div className="flex items-center justify-between w-full">
              <span className="text-muted-foreground text-sm">DEX</span>
              <Badge className="bg-primary text-primary-foreground">Uniswap V2</Badge>
            </div>
          </DraggableRow>
          <DraggableRow id="pair-address" isUnlocked={isUnlocked}>
            <div className="flex items-center justify-between w-full">
              <span className="text-muted-foreground text-sm">Pair Address</span>
              <span className="text-foreground text-sm font-mono">0x7890...cdef</span>
            </div>
          </DraggableRow>
        </div>
      </CardContent>
    </>
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
  <div className="rounded-lg bg-secondary/50 p-3 border border-border/30 w-full">
    <div className="text-muted-foreground text-xs mb-1">{label}</div>
    <div className="flex items-baseline gap-2">
      <div className="text-foreground text-lg font-bold">{value}</div>
      {trend && change && (
        <div className={`flex items-center text-xs ${trend === "up" ? "text-success" : "text-destructive"}`}>
          {trend === "up" ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
          {change}
        </div>
      )}
    </div>
    {subtext && <div className="text-muted-foreground text-xs mt-1">{subtext}</div>}
  </div>
);
