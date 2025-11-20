import { Copy, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const DeploymentInfoCard = () => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <Card className="bg-gradient-card border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Deployment Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <InfoRow
            label="Deployer Address"
            value="0xabcdef1234567890abcdef1234567890abcdef12"
            copyable
            onCopy={() => copyToClipboard("0xabcdef1234567890abcdef1234567890abcdef12", "Deployer Address")}
          />
          <InfoRow
            label="Deployment Tx"
            value="0x9876543210fedcba9876543210fedcba98765432"
            copyable
            linkable
          />
          <InfoRow label="Platform" value="Uniswap V2" badge="UniswapV2" />
          <InfoRow label="RPC Endpoint" value="https://eth-mainnet.g.alchemy.com" />
          <div className="pt-2">
            <Badge variant="outline" className="border-warning text-warning">
              Arkham Intelligence Available
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const InfoRow = ({
  label,
  value,
  badge,
  copyable,
  linkable,
  onCopy,
}: {
  label: string;
  value: string;
  badge?: string;
  copyable?: boolean;
  linkable?: boolean;
  onCopy?: () => void;
}) => (
  <div className="flex items-center justify-between py-2 border-b border-border/50">
    <span className="text-muted-foreground text-sm">{label}</span>
    <div className="flex items-center gap-2">
      {badge && (
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
          {badge}
        </Badge>
      )}
      <span className={`text-foreground text-sm ${copyable ? "font-mono" : ""}`}>
        {copyable ? `${value.slice(0, 10)}...${value.slice(-8)}` : value}
      </span>
      {copyable && onCopy && (
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 hover:bg-secondary"
          onClick={onCopy}
        >
          <Copy className="h-3 w-3" />
        </Button>
      )}
      {linkable && (
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-secondary">
          <ExternalLink className="h-3 w-3" />
        </Button>
      )}
    </div>
  </div>
);
