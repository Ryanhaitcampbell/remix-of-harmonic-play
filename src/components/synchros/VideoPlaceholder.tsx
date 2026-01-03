import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  aspectRatio?: "16:9" | "4:3" | "1:1";
  className?: string;
  label?: string;
}

const VideoPlaceholder = ({ 
  aspectRatio = "16:9", 
  className = "",
  label = "Demo Video"
}: VideoPlaceholderProps) => {
  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  };

  return (
    <div 
      id="demo"
      className={`relative w-full ${aspectClasses[aspectRatio]} rounded-2xl overflow-hidden glass group cursor-pointer ${className}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-50" />
      
      {/* Orbital rings decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-primary/20 animate-orbit-slow" />
        <div className="absolute w-48 h-48 rounded-full border border-secondary/20 animate-orbit-reverse" />
        <div className="absolute w-32 h-32 rounded-full border border-synchros-cyan/30 animate-orbit" />
      </div>
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-gradient-harmony flex items-center justify-center transition-all duration-500 group-hover:scale-110 glow-primary">
          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
        </div>
      </div>
      
      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
};

export default VideoPlaceholder;