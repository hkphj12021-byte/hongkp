import { useState, useEffect } from "react";
import { Menu, X, LayoutDashboard, Briefcase, FileText, CheckCircle, Lightbulb } from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on desktop automatically, but keep logic simple by just hiding/showing via CSS
  const navItems = [
    { label: "Overview", id: "hero", icon: LayoutDashboard },
    { label: "Core Logic", id: "core-project", icon: FileText },
    { label: "Projects", id: "projects", icon: Briefcase },
    { label: "Timeline", id: "experience", icon: CheckCircle },
    { label: "Capabilities", id: "skills", icon: Lightbulb },
    { label: "Case Study", id: "problem-solving", icon: FileText },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-300 transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <h1 className="text-white font-semibold text-xl tracking-tight">K.P. Hong</h1>
          </div>
          <p className="text-xs text-slate-400">Senior Systems Architect PM</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white group"
            >
              <item.icon className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="text-xs text-slate-500 mb-2">System Status</div>
          <div className="flex items-center gap-2 text-sm text-green-400">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            All systems operational
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
