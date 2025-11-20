import { Droplets, ExternalLink } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DraggableRow } from "@/components/DraggableRow";

export const LiquidityPoolsCard = ({ isUnlocked }: { isUnlocked: boolean }) => {
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
    <>
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Droplets className="h-5 w-5 text-primary" />
          DEX Liquidity Pools
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {pools.map((pool, idx) => (
          <DraggableRow key={`pool-${idx}`} id={`pool-${idx}`} isUnlocked={isUnlocked}>
            <div className="rounded-lg bg-secondary/50 p-3 border border-border/30 w-full">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary text-primary-foreground">{pool.dex}</Badge>
                  <span className="text-foreground font-semibold">{pool.pair}</span>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-secondary h-6 w-6 p-0">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Pair Address</div>
                  <div className="text-foreground font-mono text-xs">{pool.pairAddress}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Liquidity</div>
                  <div className="text-foreground font-semibold text-sm">{pool.liquidity}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">Volume (24h)</div>
                  <div className="text-foreground font-semibold text-sm">{pool.volume24h}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs mb-1">APR</div>
                  <div className="text-success font-semibold text-sm">{pool.apr}</div>
                </div>
              </div>
            </div>
          </DraggableRow>
        ))}
      </CardContent>
    </>
  );
};
