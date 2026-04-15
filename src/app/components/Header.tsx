import { Bell, Search, UserCircle } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
      <div className="flex items-center gap-4 text-slate-500">
        <Search className="w-5 h-5" />
        <span className="text-sm hidden sm:inline-block">Search documentation, components, or projects... (Press "/")</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="h-8 w-px bg-slate-200"></div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Hong Kyung-pyo</div>
            <div className="text-xs text-slate-500">System Architect PM</div>
          </div>
          <UserCircle className="w-8 h-8 text-slate-400 group-hover:text-indigo-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}
