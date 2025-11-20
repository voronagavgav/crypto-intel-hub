import { useState } from "react";
import { Search } from "lucide-react";
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

const Index = () => {
  const [contractAddress, setContractAddress] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Crypto OSINT Tool
          </h1>
          <p className="text-muted-foreground text-lg">
            Advanced on-chain intelligence and security analysis for crypto tokens
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative flex gap-2">
            <Input
              placeholder="Enter contract address (e.g., 0x1234...)"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              className="h-14 bg-card border-border font-mono text-foreground placeholder:text-muted-foreground"
            />
            <Button
              onClick={handleAnalyze}
              disabled={!contractAddress || isAnalyzing}
              className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Search className="mr-2 h-5 w-5" />
              {isAnalyzing ? "Analyzing..." : "Analyze"}
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        {showResults && (
          <div className="space-y-6 animate-in fade-in-50 duration-700">
            <div className="grid gap-6 md:grid-cols-2">
              <TokenInfoCard />
              <DeploymentInfoCard />
            </div>
            
            <TradingInfoCard />
            
            <HolderAnalysisCard />
            
            <MarketIntelCard />
            
            <SecurityAnalysisCard />
            
            <LiquidityPoolsCard />
            
            <TwitterMentionsCard />
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
