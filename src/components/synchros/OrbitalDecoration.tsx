interface OrbitalDecorationProps {
  className?: string;
  variant?: "default" | "minimal" | "complex";
}

const OrbitalDecoration = ({ 
  className = "", 
  variant = "default" 
}: OrbitalDecorationProps) => {
  if (variant === "minimal") {
    return (
      <div className={`pointer-events-none ${className}`}>
        <div className="absolute w-96 h-96 rounded-full border border-primary/10 animate-orbit-slow" />
        <div className="absolute w-64 h-64 rounded-full border border-secondary/10 animate-orbit-reverse" />
      </div>
    );
  }

  if (variant === "complex") {
    return (
      <div className={`pointer-events-none ${className}`}>
        {/* Outer rings */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/5 animate-orbit-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-secondary/8 animate-orbit" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-synchros-cyan/10 animate-orbit-reverse" />
        
        {/* Inner rings */}
        <div className="absolute w-[300px] h-[300px] rounded-full border border-synchros-gold/15 animate-orbit-slow" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-primary/20 animate-orbit" />
        
        {/* Orbital dots */}
        <div className="absolute w-[400px] h-[400px] animate-orbit">
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary animate-glow-pulse" />
        </div>
        <div className="absolute w-[300px] h-[300px] animate-orbit-reverse">
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-secondary" />
        </div>
        <div className="absolute w-[500px] h-[500px] animate-orbit-slow">
          <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-synchros-cyan" />
        </div>
      </div>
    );
  }

  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/10 animate-orbit-slow" />
      <div className="absolute w-[300px] h-[300px] rounded-full border border-secondary/10 animate-orbit" />
      <div className="absolute w-[200px] h-[200px] rounded-full border border-synchros-cyan/15 animate-orbit-reverse" />
      
      {/* Single orbital dot */}
      <div className="absolute w-[300px] h-[300px] animate-orbit">
        <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary/60" />
      </div>
    </div>
  );
};

export default OrbitalDecoration;