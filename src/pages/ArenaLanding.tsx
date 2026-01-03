import SynchrosNav from "@/components/synchros/SynchrosNav";
import VideoPlaceholder from "@/components/synchros/VideoPlaceholder";
import Footer from "@/components/synchros/Footer";
import { Target, Brain, Zap, Trophy } from "lucide-react";

const ArenaLanding = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SynchrosNav />
      
      {/* Hero Section - Grid-based, precise */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Geometric accent shapes */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-synchros-gold/20 rotate-45" />
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border border-secondary/20 rotate-12" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-synchros-gold/30 bg-synchros-gold/5 mb-8">
                <Target className="w-4 h-4 text-synchros-gold" />
                <span className="text-sm text-synchros-gold font-mono uppercase tracking-wider">Strategic Play</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                Master the
                <br />
                <span className="text-gradient-harmony">Harmony</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg mb-8">
                A game of proportion and judgment, not reflexes. Read the patterns. 
                Anticipate the resonance. Find balance in chaos.
              </p>
              
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="p-4 border border-border rounded-lg">
                  <div className="text-2xl font-display font-bold text-primary">1:2</div>
                  <div className="text-xs text-muted-foreground font-mono">Resonance</div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <div className="text-2xl font-display font-bold text-secondary">3:2</div>
                  <div className="text-xs text-muted-foreground font-mono">Consonance</div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <div className="text-2xl font-display font-bold text-synchros-gold">2:1</div>
                  <div className="text-xs text-muted-foreground font-mono">Harmony</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#demo" 
                  className="px-8 py-4 rounded-lg bg-gradient-harmony text-primary-foreground font-medium transition-all duration-300 hover:scale-105 glow-primary"
                >
                  Watch Gameplay
                </a>
                <a 
                  href="#" 
                  className="px-8 py-4 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:bg-muted"
                >
                  Enter Arena
                </a>
              </div>
            </div>
            
            {/* Right: Visual representation */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Orbital system diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute w-full h-full rounded-full border-2 border-dashed border-primary/20 animate-orbit-slow" />
                  
                  {/* Middle ring */}
                  <div className="absolute w-3/4 h-3/4 rounded-full border-2 border-secondary/30 animate-orbit">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary glow-secondary" />
                  </div>
                  
                  {/* Inner ring */}
                  <div className="absolute w-1/2 h-1/2 rounded-full border-2 border-synchros-gold/40 animate-orbit-reverse">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-synchros-gold glow-accent" />
                  </div>
                  
                  {/* Center */}
                  <div className="w-16 h-16 rounded-full bg-gradient-harmony animate-glow-pulse" />
                </div>
                
                {/* Ratio labels */}
                <div className="absolute top-0 right-0 text-xs font-mono text-muted-foreground">1:1</div>
                <div className="absolute top-1/4 right-4 text-xs font-mono text-secondary">3:2</div>
                <div className="absolute top-1/2 right-8 text-xs font-mono text-synchros-gold">2:1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold mb-4">
                See the <span className="text-gradient-harmony">Strategy</span>
              </h2>
              <p className="text-muted-foreground">
                Watch how harmonic ratios create the gameplay
              </p>
            </div>
            <VideoPlaceholder label="Strategic Gameplay Demo" />
          </div>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                The Art of <span className="text-gradient-harmony">Proportion</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic gameplay rooted in the mathematics of harmony
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mechanic 1 */}
              <div className="p-8 rounded-2xl border border-border bg-card/50 group hover:border-primary/50 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Read the Patterns</h3>
                    <p className="text-muted-foreground mb-4">
                      Multiple orbital elements move at different rates following specific ratios. 
                      Learn to anticipate when they'll align.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Observation</span>
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Prediction</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mechanic 2 */}
              <div className="p-8 rounded-2xl border border-border bg-card/50 group hover:border-secondary/50 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Strike at Resonance</h3>
                    <p className="text-muted-foreground mb-4">
                      Elements at 1:2 resonate every 2 cycles. Elements at 1:1.5:2 create consonant triads. 
                      Timing is everything.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Timing</span>
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Precision</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mechanic 3 */}
              <div className="p-8 rounded-2xl border border-border bg-card/50 group hover:border-synchros-gold/50 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-synchros-gold/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-synchros-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Navigate Tension</h3>
                    <p className="text-muted-foreground mb-4">
                      Between resonances lies tension. Master the emotional arc: 
                      tension → anticipation → resolution.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Strategy</span>
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Balance</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mechanic 4 */}
              <div className="p-8 rounded-2xl border border-border bg-card/50 group hover:border-synchros-cyan/50 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-synchros-cyan/10 flex items-center justify-center shrink-0">
                    <Trophy className="w-6 h-6 text-synchros-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Achieve Equilibrium</h3>
                    <p className="text-muted-foreground mb-4">
                      The goal: dynamic equilibrium. Movement from disintegration toward order. 
                      The precarious balance of harmony.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Mastery</span>
                      <span className="px-3 py-1 rounded-full bg-muted font-mono">Flow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge CTA */}
      <section className="relative py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 mb-8">
              <span className="text-sm text-primary font-mono">Not a twitch game</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Strategic. Contemplative. 
              <span className="text-gradient-harmony"> Satisfying.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10">
              Proportion-based gameplay focused on judgment, not reflexes. 
              Are you ready to find balance?
            </p>
            
            <a 
              href="#" 
              className="inline-block px-10 py-5 rounded-lg bg-gradient-harmony text-primary-foreground font-medium text-lg transition-all duration-300 hover:scale-105 glow-primary"
            >
              Enter the Arena
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArenaLanding;