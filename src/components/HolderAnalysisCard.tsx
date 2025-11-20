import { Users, UserPlus, Clock } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DraggableRow } from "@/components/DraggableRow";

export const HolderAnalysisCard = ({ isUnlocked }: { isUnlocked: boolean }) => {
  const holders = [
    { id: "holder-1", address: "0x1234...5678", balance: "15.2%", type: "normal", age: "120d" },
    { id: "holder-2", address: "0x2345...6789", balance: "12.8%", type: "fresh", age: "2d" },
    { id: "holder-3", address: "0x3456...7890", balance: "10.5%", type: "dormant", age: "180d" },
    { id: "holder-4", address: "0x4567...8901", balance: "8.3%", type: "normal", age: "45d" },
    { id: "holder-5", address: "0x5678...9012", balance: "7.1%", type: "fresh", age: "1d" },
    { id: "holder-6", address: "0x6789...0123", balance: "6.4%", type: "normal", age: "90d" },
    { id: "holder-7", address: "0x7890...1234", balance: "5.9%", type: "dormant", age: "200d" },
    { id: "holder-8", address: "0x8901...2345", balance: "4.2%", type: "normal", age: "60d" },
    { id: "holder-9", address: "0x9012...3456", balance: "3.8%", type: "fresh", age: "3d" },
    { id: "holder-10", address: "0x0123...4567", balance: "2.6%", type: "normal", age: "75d" },
  ];

  const freshCount = holders.filter(h => h.type === "fresh").length;
  const dormantCount = holders.filter(h => h.type === "dormant").length;

  return (
    <>
      <CardHeader>
        <CardTitle className="text-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Top 10 Wallet Holders
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-warning text-warning">
              <UserPlus className="h-3 w-3 mr-1" />
              {freshCount} Fresh
            </Badge>
            <Badge variant="outline" className="border-destructive text-destructive">
              <Clock className="h-3 w-3 mr-1" />
              {dormantCount} Dormant
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {holders.map((holder, idx) => (
          <DraggableRow key={holder.id} id={holder.id} isUnlocked={isUnlocked}>
            <div className="flex items-center justify-between w-full p-2 rounded-lg bg-secondary/30 border border-border/30">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-muted-foreground text-sm w-6">#{idx + 1}</span>
                <span className="text-foreground font-mono text-sm">{holder.address}</span>
                {holder.type === "fresh" && (
                  <Badge variant="outline" className="border-warning text-warning text-xs">Fresh</Badge>
                )}
                {holder.type === "dormant" && (
                  <Badge variant="outline" className="border-destructive text-destructive text-xs">Dormant</Badge>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground text-xs">{holder.age}</span>
                <div className="w-24">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-foreground text-sm font-semibold">{holder.balance}</span>
                  </div>
                  <Progress value={parseFloat(holder.balance)} className="h-1" />
                </div>
              </div>
            </div>
          </DraggableRow>
        ))}
      </CardContent>
    </>
  );
};
