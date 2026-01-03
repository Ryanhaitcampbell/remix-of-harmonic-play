import SynchrosNav from "@/components/synchros/SynchrosNav";
import VideoPlaceholder from "@/components/synchros/VideoPlaceholder";
import OrbitalDecoration from "@/components/synchros/OrbitalDecoration";
import Footer from "@/components/synchros/Footer";
import { Palette, Music, Share2, Layers, Quote } from "lucide-react";

const StudioLanding = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SynchrosNav />
      
      {/* Hero Section - Gallery/Museum aesthetic */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Subtle gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial-glow opacity-20" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Curator label */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-px bg-gradient-harmony" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                A New Medium for Light
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
              Compose Light
              <br />
              <span className="text-gradient-harmony">as You Compose</span>
              <br />
              Sound
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12">
              Digital control of light now rivals control of sound. Both can be composed 
              using identical harmonic principles. Synchros is your instrument.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="#demo" 
                className="px-8 py-4 rounded-full bg-foreground text-background font-medium transition-all duration-300 hover:scale-105"
              >
                View Works
              </a>
              <a 
                href="#" 
                className="px-8 py-4 rounded-full border border-foreground/20 text-foreground font-medium transition-all duration-300 hover:bg-foreground/5"
              >
                Open Studio
              </a>
            </div>
            
            {/* Attribution */}
            <div className="mt-20 pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Inspired by John Whitney's "Digital Harmony" — Project Origin 1983
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Featured Works
              </span>
            </div>
            
            {/* Gallery grid - asymmetric */}
            <div className="grid grid-cols-12 gap-4">
              {/* Large feature */}
              <div className="col-span-12 md:col-span-8">
                <VideoPlaceholder aspectRatio="16:9" label="Harmonic Composition I" />
              </div>
              
              {/* Side pieces */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                <div className="flex-1 rounded-2xl glass p-6 flex flex-col justify-end min-h-[200px] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <OrbitalDecoration variant="minimal" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-mono text-muted-foreground mb-2">Study 003</p>
                    <p className="text-sm text-foreground">Resonance Series</p>
                  </div>
                </div>
                <div className="flex-1 rounded-2xl glass p-6 flex flex-col justify-end min-h-[200px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-xs font-mono text-muted-foreground mb-2">Study 007</p>
                    <p className="text-sm text-foreground">Consonant Triads</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom row */}
              <div className="col-span-6 md:col-span-4 rounded-2xl glass p-6 flex flex-col justify-end min-h-[180px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-synchros-gold/10 to-transparent" />
                <div className="relative z-10">
                  <p className="text-xs font-mono text-muted-foreground mb-2">Study 012</p>
                  <p className="text-sm text-foreground">Dynamic Equilibrium</p>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 rounded-2xl glass p-6 flex flex-col justify-end min-h-[180px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative z-10">
                  <p className="text-xs font-mono text-muted-foreground mb-2">Study 015</p>
                  <p className="text-sm text-foreground">Orbital Dance</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 rounded-2xl glass p-6 flex flex-col justify-end min-h-[180px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-synchros-rose/10 to-transparent" />
                <div className="relative z-10">
                  <p className="text-xs font-mono text-muted-foreground mb-2">Study 021</p>
                  <p className="text-sm text-foreground">Tension & Resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-8">
              <Quote className="w-16 h-16 text-primary/30 shrink-0 mt-2" />
              <div>
                <blockquote className="text-2xl md:text-4xl font-display font-light text-foreground/90 mb-8 leading-relaxed">
                  Pythagorean harmonic principles that govern music also govern visual motion. 
                  Digital technology enables us to compose audio and visual art as a 
                  <span className="text-gradient-harmony"> unified medium</span> using 
                  mathematical harmonic principles.
                </blockquote>
                <p className="text-muted-foreground font-mono text-sm">
                  — The Synchros Design Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Title */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Creative Tools
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  Your <span className="text-gradient-harmony">Instrument</span>
                  <br />for Light
                </h2>
                <p className="text-xl text-muted-foreground">
                  Define rules, properties, and interaction modes. 
                  Create beings of pure light energy who play and dance 
                  in patterns of light and music.
                </p>
              </div>
              
              {/* Right: Feature list */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <Palette className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-display font-semibold mb-2">Visual Composition</h3>
                      <p className="text-sm text-muted-foreground">
                        Control every aspect: orbital paths, color harmonies, 
                        timing ratios, and emergent behaviors.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border border-border/50 hover:border-secondary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <Music className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-display font-semibold mb-2">Audio-Visual Unity</h3>
                      <p className="text-sm text-muted-foreground">
                        Sound modulates air pressure. Light modulates perception. 
                        Compose both with the same harmonic language.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border border-border/50 hover:border-synchros-gold/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <Layers className="w-6 h-6 text-synchros-gold mt-1" />
                    <div>
                      <h3 className="font-display font-semibold mb-2">Abstract Game Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Create playfields, define actor behaviors, 
                        design interaction modes for your own harmonic games.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border border-border/50 hover:border-synchros-cyan/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <Share2 className="w-6 h-6 text-synchros-cyan mt-1" />
                    <div>
                      <h3 className="font-display font-semibold mb-2">Share & Collaborate</h3>
                      <p className="text-sm text-muted-foreground">
                        Export compositions, share with the community, 
                        and collaborate on harmonic explorations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative py-32 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Studio Walkthrough
              </span>
            </div>
            <VideoPlaceholder label="Creating with Synchros" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Begin Your
              <br />
              <span className="text-gradient-harmony">Composition</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10">
              Join artists exploring the frontier of harmonic visual art. 
              Immediate play, optional depth — raise the ceiling as high as you want.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#" 
                className="px-10 py-5 rounded-full bg-foreground text-background font-medium text-lg transition-all duration-300 hover:scale-105"
              >
                Open Your Studio
              </a>
              <a 
                href="#" 
                className="px-10 py-5 rounded-full border border-foreground/20 text-foreground font-medium text-lg transition-all duration-300 hover:bg-foreground/5"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudioLanding;