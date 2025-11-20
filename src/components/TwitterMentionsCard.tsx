import { Twitter, Search, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const TwitterMentionsCard = () => {
  const officialHandle = "@ExampleToken";
  
  const mentions = [
    {
      author: "@CryptoWhale",
      text: "Interesting project with solid fundamentals. Keeping an eye on this one! 🚀",
      timestamp: "2h ago",
      engagement: "234 likes",
    },
    {
      author: "@DeFiAnalyst",
      text: "Just did a deep dive on this token. Security looks good but watch the tax mechanism.",
      timestamp: "5h ago",
      engagement: "156 likes",
    },
    {
      author: "@TokenHunter",
      text: "Early stage but promising. The community is growing fast! 💎",
      timestamp: "8h ago",
      engagement: "89 likes",
    },
  ];

  return (
    <Card className="bg-gradient-card border-border shadow-glow">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Twitter className="h-5 w-5 text-primary" />
            Twitter Mentions
          </div>
          <Badge variant="outline" className="border-primary text-primary">
            Official: {officialHandle}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Search Twitter mentions..."
            className="bg-secondary border-border"
          />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="space-y-3">
          {mentions.map((mention, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-secondary/50 p-4 border border-border/30 hover:bg-secondary/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-semibold">{mention.author}</span>
                  <span className="text-muted-foreground text-sm">{mention.timestamp}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-foreground text-sm mb-2">{mention.text}</p>
              <span className="text-muted-foreground text-xs">{mention.engagement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
