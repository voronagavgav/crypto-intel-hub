import { useState, useRef, useEffect, ReactNode } from "react";
import { GripVertical } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DraggableCardProps {
  children: ReactNode;
  id: string;
  isUnlocked: boolean;
  initialWidth?: number;
  initialHeight?: number;
  onPositionChange?: (id: string, x: number, y: number) => void;
  onSizeChange?: (id: string, width: number, height: number) => void;
}

const GRID_SIZE = 20; // pixels for snap-to-grid

export const DraggableCard = ({
  children,
  id,
  isUnlocked,
  initialWidth = 600,
  initialHeight = 400,
  onPositionChange,
  onSizeChange,
}: DraggableCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const dragRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; initialWidth: number; initialHeight: number } | null>(null);

  const snapToGrid = (value: number) => Math.round(value / GRID_SIZE) * GRID_SIZE;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isUnlocked || (e.target as HTMLElement).classList.contains('resize-handle')) return;
    e.preventDefault();
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y,
    };
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    if (!isUnlocked) return;
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialWidth: size.width,
      initialHeight: size.height,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && dragRef.current) {
        const deltaX = e.clientX - dragRef.current.startX;
        const deltaY = e.clientY - dragRef.current.startY;
        const newX = snapToGrid(dragRef.current.initialX + deltaX);
        const newY = snapToGrid(dragRef.current.initialY + deltaY);
        setPosition({ x: newX, y: newY });
        onPositionChange?.(id, newX, newY);
      }

      if (isResizing && resizeRef.current) {
        const deltaX = e.clientX - resizeRef.current.startX;
        const deltaY = e.clientY - resizeRef.current.startY;
        const newWidth = snapToGrid(Math.max(300, resizeRef.current.initialWidth + deltaX));
        const newHeight = snapToGrid(Math.max(200, resizeRef.current.initialHeight + deltaY));
        setSize({ width: newWidth, height: newHeight });
        onSizeChange?.(id, newWidth, newHeight);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      dragRef.current = null;
      resizeRef.current = null;
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, id, onPositionChange, onSizeChange]);

  return (
    <Card
      className={`bg-gradient-card border-border shadow-glow transition-all ${
        isUnlocked ? 'cursor-move ring-2 ring-primary/50' : ''
      } ${isDragging ? 'opacity-50' : ''}`}
      style={{
        width: size.width,
        height: size.height,
        position: 'relative',
        overflow: 'auto',
      }}
      onMouseDown={handleMouseDown}
    >
      {isUnlocked && (
        <div className="absolute top-2 left-2 z-10 pointer-events-none">
          <GripVertical className="h-5 w-5 text-primary" />
        </div>
      )}
      <div className="h-full overflow-auto p-1">
        {children}
      </div>
      {isUnlocked && (
        <div
          className="resize-handle absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize bg-primary rounded-tl-lg"
          onMouseDown={handleResizeMouseDown}
        >
          <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-primary-foreground" />
        </div>
      )}
    </Card>
  );
};
