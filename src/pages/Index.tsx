import { Link } from "react-router-dom";
import OrbitalDecoration from "@/components/synchros/OrbitalDecoration";
import { Sparkles, Target, Palette, ArrowRight } from "lucide-react";

const Index = () => {
  const modes = [
    {
      path: "/play",
      title: "Playground",
      subtitle: "Software Toy",
      description: "Click and beautiful things happen. No learning curve, just immediate wonder.",
      icon: Sparkles,
      gradient: "from-primary to-secondary",
      hoverGlow: "group-hover:glow-primary",
    },
    {
      path: "/game",
      title: "Arena",
      subtitle: "Strategic Game",
      description: "Master harmonic proportions. A game of judgment, not reflexes.",
      icon: Target,
      gradient: "from-synchros-gold to-synchros-rose",
      hoverGlow: "group-hover:glow-accent",
    },
    {
      path: "/create",
      title: "Studio",
      subtitle: "Fine Art Tool",
      description: "Compose light as you compose sound. Your instrument awaits.",
      icon: Palette,
      gradient: "from-synchros-cyan to-primary",
      hoverGlow: "group-hover:glow-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <OrbitalDecoration variant="complex" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto px-6 pt-12">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold text-gradient-harmony">
              Synchros
            </h1>
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-harmony text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </a>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-6 py-20 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <p className="text-sm font-mono text-muted-foreground mb-4 tracking-widest uppercase">
              Project Origin: 1983
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Visual Music Through
              <br />
              <span className="text-gradient-harmony">Harmonic Motion</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beings of pure light energy who play and dance in patterns of light and music. 
              Choose your path.
            </p>
          </div>

          {/* Mode cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
            {modes.map((mode) => (
              <Link
                key={mode.path}
                to={mode.path}
                className={`group relative p-8 rounded-2xl glass transition-all duration-500 hover:scale-[1.02] ${mode.hoverGlow}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode.gradient} flex items-center justify-center mb-6`}>
                    <mode.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    {mode.subtitle}
                  </p>
                  <h3 className="text-2xl font-display font-bold mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground mb-6">{mode.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Inspired by John Whitney's "Digital Harmony"</p>
            <p>© {new Date().getFullYear()} Synchros</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;