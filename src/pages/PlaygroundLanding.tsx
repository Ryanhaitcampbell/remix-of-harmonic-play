import SynchrosNav from "@/components/synchros/SynchrosNav";
import VideoPlaceholder from "@/components/synchros/VideoPlaceholder";
import OrbitalDecoration from "@/components/synchros/OrbitalDecoration";
import Footer from "@/components/synchros/Footer";
import { Sparkles, MousePointer, Waves } from "lucide-react";

const PlaygroundLanding = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SynchrosNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-40" />
        
        {/* Orbital decoration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitalDecoration variant="complex" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-synchros-gold" />
              <span className="text-sm text-muted-foreground">No learning curve. Pure wonder.</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-gradient-harmony">Click.</span>
              <br />
              <span className="text-foreground">Create.</span>
              <br />
              <span className="text-gradient-harmony">Beautiful.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0 animation-delay-400">
              Beings of pure light energy, dancing in patterns of harmony. 
              No tutorials. No complexity. Just immediate beauty at your fingertips.
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <a 
                href="#demo" 
                className="px-8 py-4 rounded-full bg-gradient-harmony text-primary-foreground font-medium text-lg transition-all duration-300 hover:scale-105 glow-primary"
              >
                Watch the Magic
              </a>
              <a 
                href="#" 
                className="px-8 py-4 rounded-full glass text-foreground font-medium text-lg transition-all duration-300 hover:bg-muted"
              >
                Try it Free
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <VideoPlaceholder label="See Synchros in Action" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Immediate <span className="text-gradient-harmony">Satisfaction</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create something beautiful in under 30 seconds. Every interaction 
              produces harmonic resonance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl glass group hover:glow-primary transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-gradient-harmony flex items-center justify-center mb-6">
                <MousePointer className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Just Click</h3>
              <p className="text-muted-foreground">
                No menus to learn. No tools to master. Every click spawns 
                beautiful forms that dance in harmony.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl glass group hover:glow-secondary transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <Waves className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Feel the Rhythm</h3>
              <p className="text-muted-foreground">
                Shapes move according to Pythagorean harmonic principles. 
                The same ratios that make music beautiful, make motion beautiful.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-8 rounded-2xl glass group hover:glow-accent transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Discover Wonder</h3>
              <p className="text-muted-foreground">
                Emergent complexity from simple interactions. Each session 
                reveals new harmonies to explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-4xl font-display font-light italic text-foreground/90 mb-8">
              "Symmetries and rhythms in space, tone, and color — 
              <span className="text-gradient-harmony"> immediate satisfaction </span>
              from click and beautiful things happen."
            </blockquote>
            <p className="text-muted-foreground">
              The Synchros Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial-glow opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to <span className="text-gradient-harmony">Play</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                No signup required. Just pure creative joy.
              </p>
              <a 
                href="#" 
                className="inline-block px-10 py-5 rounded-full bg-gradient-harmony text-primary-foreground font-medium text-lg transition-all duration-300 hover:scale-105 glow-primary"
              >
                Launch Synchros
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlaygroundLanding;