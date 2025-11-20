import { Copy, ExternalLink } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { DraggableRow } from "@/components/DraggableRow";

export const TokenInfoCard = ({ isUnlocked }: { isUnlocked: boolean }) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Token Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <DraggableRow id="token-address" isUnlocked={isUnlocked}>
          <InfoRow
            label="Token Address"
            value="0x1234567890abcdef1234567890abcdef12345678"
            copyable
            onCopy={() => copyToClipboard("0x1234567890abcdef1234567890abcdef12345678", "Address")}
          />
        </DraggableRow>
        <DraggableRow id="token-chain" isUnlocked={isUnlocked}>
          <InfoRow label="Chain" value="Ethereum" badge="ETH" />
        </DraggableRow>
        <DraggableRow id="token-name" isUnlocked={isUnlocked}>
          <InfoRow label="Name" value="Example Token" />
        </DraggableRow>
        <DraggableRow id="token-symbol" isUnlocked={isUnlocked}>
          <InfoRow label="Symbol" value="EXT" badge="EXT" />
        </DraggableRow>
        <DraggableRow id="token-decimals" isUnlocked={isUnlocked}>
          <InfoRow label="Decimals" value="18" />
        </DraggableRow>
        <DraggableRow id="token-supply" isUnlocked={isUnlocked}>
          <InfoRow label="Total Supply" value="1,000,000,000 EXT" />
        </DraggableRow>
      </CardContent>
    </>
  );
};

const InfoRow = ({
  label,
  value,
  badge,
  copyable,
  onCopy,
}: {
  label: string;
  value: string;
  badge?: string;
  copyable?: boolean;
  onCopy?: () => void;
}) => (
  <div className="flex items-center justify-between w-full">
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
    </div>
  </div>
);
