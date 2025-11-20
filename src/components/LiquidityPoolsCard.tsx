import { Droplets, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const LiquidityPoolsCard = () => {
  const pools = [
    {
      dex: "Uniswap V2",
      pair: "EXT/WETH",
      pairAddress: "0x7890...1234",
      liquidity: "$156.2K",
      volume24h: "$45.3K",
      apr: "125.3%",
    },
    {
      dex: "SushiSwap",
      pair: "EXT/USDC",
      pairAddress: "0x8901...2345",
      liquidity: "$78.3K",
      volume24h: "$23.1K",
      apr: "89.7%",
    },
  ];

  return (
    <Card className="bg-gradient-card border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Droplets className="h-5 w-5 text-primary" />
          DEX Liquidity Pools
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pools.map((pool, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-secondary/50 p-4 border border-border/30 hover:bg-secondary/70 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary text-primary-foreground">{pool.dex}</Badge>
                  <span className="text-foreground font-semibold">{pool.pair}</span>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-secondary">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Pair Address</div>
                  <div className="text-foreground font-mono text-sm">{pool.pairAddress}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Liquidity</div>
                  <div className="text-foreground font-semibold">{pool.liquidity}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Volume (24h)</div>
                  <div className="text-foreground font-semibold">{pool.volume24h}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">APR</div>
                  <div className="text-success font-semibold">{pool.apr}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
