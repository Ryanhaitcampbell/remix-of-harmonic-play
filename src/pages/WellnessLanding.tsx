import SynchrosNav from "@/components/synchros/SynchrosNav";
import VideoPlaceholder from "@/components/synchros/VideoPlaceholder";
import OrbitalDecoration from "@/components/synchros/OrbitalDecoration";
import Footer from "@/components/synchros/Footer";
import { Moon, Heart, Wind, Brain, Star, Headphones } from "lucide-react";

const WellnessLanding = () => {
  const benefits = [
    {
      icon: Brain,
      title: "De-stress Your Mind",
      description: "Let mesmerizing harmonic motion wash away the noise of daily life.",
    },
    {
      icon: Moon,
      title: "Fall Asleep Easily",
      description: "Gentle visual rhythms synchronized with calming audio to guide you to rest.",
    },
    {
      icon: Heart,
      title: "Ease Anxiety",
      description: "Pythagorean harmonics proven to induce calm through mathematical beauty.",
    },
    {
      icon: Wind,
      title: "Breathe & Focus",
      description: "Use orbital patterns as a visual anchor for breathwork and meditation.",
    },
  ];

  const stats = [
    { value: "4.9", label: "Average Rating", icon: Star },
    { value: "50K+", label: "Daily Users", icon: Heart },
    { value: "∞", label: "Sessions", icon: Moon },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SynchrosNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Calming gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-synchros-deep via-background to-background" />
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-20" />
        
        {/* Slow orbital decoration for calming effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <OrbitalDecoration variant="minimal" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Wellness tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-8 animate-fade-in-up">
              <Moon className="w-4 h-4 text-synchros-cyan" />
              <span className="text-sm text-muted-foreground">Visual Meditation & Calm</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
              <span className="text-foreground">Find Your</span>
              <br />
              <span className="text-gradient-calm">Inner Harmony</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up opacity-0 animation-delay-400">
              Experience the calming power of harmonic motion. 
              Ancient mathematical beauty meets modern visual meditation.
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <a 
                href="#demo" 
                className="px-8 py-4 rounded-full bg-gradient-calm text-primary-foreground font-medium text-lg transition-all duration-300 hover:scale-105 glow-calm"
              >
                Watch Demo First
              </a>
              <a 
                href="#" 
                className="px-8 py-4 rounded-full glass text-foreground font-medium text-lg transition-all duration-300 hover:bg-muted flex items-center gap-2"
              >
                <Headphones className="w-5 h-5" />
                Try Free Session
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-synchros-cyan/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-synchros-cyan/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 border-y border-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-synchros-cyan" />
                  <span className="text-4xl font-display font-bold text-gradient-calm">{stat.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Let the <span className="text-gradient-calm">Harmony</span> Wash Over You
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Watch as mathematical beauty creates patterns that naturally calm the mind.
              </p>
            </div>
            <VideoPlaceholder label="Experience Visual Meditation" />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Your Daily <span className="text-gradient-calm">Calm</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you need to de-stress, focus, or drift off to sleep — 
              Synchros adapts to your moment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-8 rounded-2xl glass group hover:glow-calm transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-calm flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-synchros-cyan/5 via-transparent to-synchros-purple/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-mono text-synchros-cyan uppercase tracking-wider mb-4">
                  The Science of Calm
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Ancient Wisdom, <span className="text-gradient-calm">Modern Calm</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Pythagoras discovered that simple ratios create harmonious sounds. 
                  John Whitney proved the same ratios create harmonious motion.
                </p>
                <p className="text-muted-foreground">
                  Synchros uses these mathematical principles to create visual patterns 
                  that naturally induce a meditative state — no training required.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl glass p-8 flex items-center justify-center">
                <OrbitalDecoration variant="minimal" />
                <div className="absolute inset-0 bg-gradient-radial-glow opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-synchros-gold text-synchros-gold" />
                ))}
              </div>
              <p className="text-2xl md:text-4xl font-display font-light italic text-foreground/90 mb-8">
                "I've tried dozens of meditation apps. Synchros is the first one that 
                <span className="text-gradient-calm"> actually quiets my mind</span>. 
                The visuals are hypnotic in the best way."
              </p>
              <footer className="text-muted-foreground">
                — A calmer mind
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-synchros-cyan/10 to-synchros-purple/10" />
            <div className="relative z-10">
              <Moon className="w-12 h-12 text-synchros-cyan mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Ready to <span className="text-gradient-calm">Relax</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start your first session free. No account needed.
              </p>
              <a 
                href="#" 
                className="inline-block px-10 py-5 rounded-full bg-gradient-calm text-primary-foreground font-medium text-lg transition-all duration-300 hover:scale-105 glow-calm"
              >
                Begin Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WellnessLanding;