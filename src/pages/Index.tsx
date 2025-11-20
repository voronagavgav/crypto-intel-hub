import { useState } from "react";
import { Search, Lock, Unlock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TokenInfoCard } from "@/components/TokenInfoCard";
import { DeploymentInfoCard } from "@/components/DeploymentInfoCard";
import { TradingInfoCard } from "@/components/TradingInfoCard";
import { HolderAnalysisCard } from "@/components/HolderAnalysisCard";
import { MarketIntelCard } from "@/components/MarketIntelCard";
import { SecurityAnalysisCard } from "@/components/SecurityAnalysisCard";
import { LiquidityPoolsCard } from "@/components/LiquidityPoolsCard";
import { TwitterMentionsCard } from "@/components/TwitterMentionsCard";
import { DraggableCard } from "@/components/DraggableCard";

const Index = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="w-full px-6 py-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Crypto OSINT Tool
            </h1>
            <p className="text-muted-foreground">
              Advanced on-chain intelligence and security analysis
            </p>
          </div>
          <Button
            onClick={() => setIsUnlocked(!isUnlocked)}
            variant={isUnlocked ? "default" : "outline"}
            className={isUnlocked ? "bg-primary text-primary-foreground" : "border-border"}
          >
            {isUnlocked ? (
              <>
                <Unlock className="mr-2 h-4 w-4" />
                Unlock Mode Active
              </>
            ) : (
              <>
                <Lock className="mr-2 h-4 w-4" />
                Lock Layout
              </>
            )}
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex gap-2">
          <Input
            placeholder="Enter contract address (e.g., 0x1234...)"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            className="h-12 bg-card border-border font-mono text-foreground placeholder:text-muted-foreground"
          />
          <Button
            onClick={handleAnalyze}
            disabled={!contractAddress || isAnalyzing}
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap"
          >
            <Search className="mr-2 h-5 w-5" />
            {isAnalyzing ? "Analyzing..." : "Analyze"}
          </Button>
        </div>

        {/* Results Grid */}
        {showResults && (
          <div className="flex flex-wrap gap-6 animate-in fade-in-50 duration-700">
            <DraggableCard id="token-info" isUnlocked={isUnlocked} initialWidth={600} initialHeight={450}>
              <TokenInfoCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="deployment-info" isUnlocked={isUnlocked} initialWidth={600} initialHeight={450}>
              <DeploymentInfoCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="trading-info" isUnlocked={isUnlocked} initialWidth={1220} initialHeight={500}>
              <TradingInfoCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="holder-analysis" isUnlocked={isUnlocked} initialWidth={1220} initialHeight={600}>
              <HolderAnalysisCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="market-intel" isUnlocked={isUnlocked} initialWidth={1220} initialHeight={400}>
              <MarketIntelCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="security-analysis" isUnlocked={isUnlocked} initialWidth={1220} initialHeight={700}>
              <SecurityAnalysisCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="liquidity-pools" isUnlocked={isUnlocked} initialWidth={1220} initialHeight={400}>
              <LiquidityPoolsCard isUnlocked={isUnlocked} />
            </DraggableCard>
            
            <DraggableCard id="twitter-mentions" isUnlocked={isUnlocked} initialWidth={1220} initialHeight={500}>
              <TwitterMentionsCard isUnlocked={isUnlocked} />
            </DraggableCard>
          </div>
        )}

        {/* Empty State */}
        {!showResults && (
          <div className="text-center py-20">
            <div className="mx-auto w-20 h-20 rounded-full bg-card flex items-center justify-center mb-4">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg">
              Enter a contract address to begin analysis
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
