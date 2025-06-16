
import { Coins, History } from "lucide-react";
import { usePoints } from "@/contexts/PointsContext";
import { useNavigate } from "react-router-dom";

interface PointsDisplayProps {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  clickable?: boolean;
}

const PointsDisplay = ({ size = "md", showLabel = true, clickable = false }: PointsDisplayProps) => {
  const { userPoints } = usePoints();
  const navigate = useNavigate();

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

  const handleClick = () => {
    if (clickable) {
      navigate('/points');
    }
  };

  return (
    <div 
      className={`flex items-center gap-2 ${sizeClasses[size]} ${
        clickable ? 'cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors' : ''
      }`}
      onClick={handleClick}
    >
      <Coins className={`${iconSizes[size]} text-orange-500`} />
      <span className="font-medium text-gray-900">{userPoints}</span>
      {showLabel && <span className="text-gray-600">puntos</span>}
      {clickable && <History className="h-4 w-4 text-gray-400" />}
    </div>
  );
};

export default PointsDisplay;
