import { useState, useRef, useEffect, ReactNode } from "react";
import { GripHorizontal, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DraggableRowProps {
  children: ReactNode;
  id: string;
  isUnlocked: boolean;
  onDragStart?: (id: string) => void;
  onDragEnd?: () => void;
}

export const DraggableRow = ({
  children,
  id,
  isUnlocked,
  onDragStart,
  onDragEnd,
}: DraggableRowProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    if (!isUnlocked) return;
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', id);
    onDragStart?.(id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd?.();
  };

  if (isHidden) {
    return (
      <div className="flex items-center justify-between py-2 border-b border-border/50 opacity-50">
        <span className="text-muted-foreground text-sm italic">Hidden row</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsHidden(false)}
          className="h-6 px-2"
        >
          <Eye className="h-3 w-3 mr-1" />
          Show
        </Button>
      </div>
    );
  }

  return (
    <div
      draggable={isUnlocked}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`flex items-center justify-between py-2 border-b border-border/50 group ${
        isUnlocked ? 'hover:bg-secondary/30 cursor-move' : ''
      } ${isDragging ? 'opacity-30' : ''}`}
    >
      {isUnlocked && (
        <div className="flex items-center gap-2">
          <GripHorizontal className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div className="flex-1">{children}</div>
      {isUnlocked && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsHidden(true);
          }}
          className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
        >
          <EyeOff className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};
