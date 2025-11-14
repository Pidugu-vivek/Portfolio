import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "ABOUT", icon: "👤" },
    { id: "projects", label: "PROJECTS", icon: "💼" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-2">
      <div className="max-w-7xl mx-auto neon-border rounded-2xl glossy-effect radium-neon px-10 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center justify-center relative" style={{ width: '64px', height: '64px', minWidth: '64px', minHeight: '64px' }}>
              <DotLottieReact
                src="https://lottie.host/f281bff5-e4a0-41bb-bcf2-6f3deb05df5c/zJW0JnY5Nm.lottie"
                loop
                autoplay
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  display: 'block',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">Pidugu Vivek</span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 text-sm font-medium tracking-wider transition-all hover:text-primary ${
                  activeSection === item.id ? "text-white neon-text" : "text-white"
                }`}
              >
                <span className={`text-lg ${activeSection === item.id ? "neon-text" : ""}`}>{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
