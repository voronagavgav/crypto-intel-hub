import { Shield, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const SecurityAnalysisCard = () => {
  return (
    <Card className="bg-gradient-card border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          GoPlus Security Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="contract" className="border-border">
            <AccordionTrigger className="text-foreground hover:text-primary">
              <div className="flex items-center gap-2">
                Contract Security
                <Badge variant="outline" className="border-warning text-warning">
                  Medium Risk
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <SecurityItem status="pass" label="Open Source" value="Verified" />
                <SecurityItem status="fail" label="Proxy Contract" value="Yes - Upgradeable" />
                <SecurityItem status="fail" label="Mint Function" value="Present" />
                <SecurityItem status="pass" label="Self-Destruct" value="Not Found" />
                <SecurityItem status="pass" label="External Calls" value="Safe" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ownership" className="border-border">
            <AccordionTrigger className="text-foreground hover:text-primary">
              <div className="flex items-center gap-2">
                Ownership
                <Badge variant="outline" className="border-destructive text-destructive">
                  High Risk
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <SecurityItem status="info" label="Owner Address" value="0x1234...5678" mono />
                <SecurityItem status="warning" label="Owner Balance" value="15.2%" />
                <SecurityItem status="fail" label="Can Change Balance" value="Yes" />
                <SecurityItem status="fail" label="Take Back Ownership" value="Possible" />
                <SecurityItem status="fail" label="Hidden Owner" value="Detected" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="trading" className="border-border">
            <AccordionTrigger className="text-foreground hover:text-primary">
              <div className="flex items-center gap-2">
                Trading Controls
                <Badge variant="outline" className="border-success text-success">
                  Low Risk
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <SecurityItem status="pass" label="Tradable on DEX" value="Yes" />
                <SecurityItem status="pass" label="Buy Tax" value="1%" />
                <SecurityItem status="pass" label="Sell Tax" value="1%" />
                <SecurityItem status="pass" label="Transfer Tax" value="0%" />
                <SecurityItem status="pass" label="Cannot Buy" value="No" />
                <SecurityItem status="pass" label="Cannot Sell All" value="No" />
                <SecurityItem status="fail" label="Modifiable Tax" value="Yes" />
                <SecurityItem status="pass" label="Address-Based Tax" value="No" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="honeypot" className="border-border">
            <AccordionTrigger className="text-foreground hover:text-primary">
              <div className="flex items-center gap-2">
                Honeypot & Restrictions
                <Badge variant="outline" className="border-success text-success">
                  Low Risk
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <SecurityItem status="pass" label="Honeypot" value="Not Detected" />
                <SecurityItem status="pass" label="Pausable Transfers" value="No" />
                <SecurityItem status="pass" label="Blacklist Function" value="Not Found" />
                <SecurityItem status="pass" label="Whitelist Function" value="Not Found" />
                <SecurityItem status="pass" label="Anti-Whale Controls" value="None" />
                <SecurityItem status="pass" label="Trading Cooldown" value="None" />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

const SecurityItem = ({
  status,
  label,
  value,
  mono = false,
}: {
  status: "pass" | "fail" | "warning" | "info";
  label: string;
  value: string;
  mono?: boolean;
}) => {
  const getIcon = () => {
    switch (status) {
      case "pass":
        return <CheckCircle2 className="h-4 w-4 text-success" />;
      case "fail":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      default:
        return <Shield className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div className="flex items-center justify-between py-2 px-3 rounded bg-secondary/30 border border-border/20">
      <div className="flex items-center gap-2">
        {getIcon()}
        <span className="text-foreground text-sm">{label}</span>
      </div>
      <span className={`text-sm ${mono ? "font-mono" : ""} text-muted-foreground`}>
        {value}
      </span>
    </div>
  );
};
