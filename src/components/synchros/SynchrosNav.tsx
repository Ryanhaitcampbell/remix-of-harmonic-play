import { Link, useLocation } from "react-router-dom";

const SynchrosNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/play", label: "Play" },
    { path: "/game", label: "Game" },
    { path: "/create", label: "Create" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-subtle">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-display font-bold tracking-tight text-gradient-harmony"
          >
            Synchros
          </Link>
          
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <a
              href="#demo"
              className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-harmony text-primary-foreground transition-all duration-300 hover:scale-105 glow-primary"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SynchrosNav;