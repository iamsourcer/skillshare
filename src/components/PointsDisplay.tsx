
import { Coins } from "lucide-react";
import { usePoints } from "@/contexts/PointsContext";

interface PointsDisplayProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

const PointsDisplay = ({ size = "md", showLabel = true }: PointsDisplayProps) => {
  const { userPoints } = usePoints();

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg font-semibold"
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]}`}>
      <Coins className={`${iconSizes[size]} text-orange-500`} />
      <span className="font-medium text-gray-900">{userPoints}</span>
      {showLabel && <span className="text-gray-600">puntos</span>}
    </div>
  );
};

export default PointsDisplay;
