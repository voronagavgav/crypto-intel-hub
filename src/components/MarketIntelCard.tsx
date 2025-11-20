import { BarChart3, ExternalLink } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DraggableRow } from "@/components/DraggableRow";

export const MarketIntelCard = ({ isUnlocked }: { isUnlocked: boolean }) => {
  return (
    <>
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
      <CardContent className="space-y-2">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          <DraggableRow id="gecko-current-price" isUnlocked={isUnlocked}>
            <MetricBox label="Current Price" value="$0.00123" />
          </DraggableRow>
          <DraggableRow id="gecko-liquidity" isUnlocked={isUnlocked}>
            <MetricBox label="Current Liquidity" value="$234.5K" />
          </DraggableRow>
          <DraggableRow id="gecko-market-cap" isUnlocked={isUnlocked}>
            <MetricBox label="Market Cap" value="$1.15M" />
          </DraggableRow>
          <DraggableRow id="gecko-fdv" isUnlocked={isUnlocked}>
            <MetricBox label="Fully Diluted Value" value="$1.23M" />
          </DraggableRow>
          <DraggableRow id="gecko-volume" isUnlocked={isUnlocked}>
            <MetricBox label="Volume (24h)" value="$156.2K" />
          </DraggableRow>
          <DraggableRow id="gecko-price-change" isUnlocked={isUnlocked}>
            <MetricBox label="Price Change (24h)" value="+15.3%" valueColor="text-success" />
          </DraggableRow>
        </div>
      </CardContent>
    </>
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
  <div className="rounded-lg bg-secondary/50 p-3 border border-border/30 w-full">
    <div className="text-muted-foreground text-xs mb-1">{label}</div>
    <div className={`text-xl font-bold ${valueColor}`}>{value}</div>
  </div>
);
