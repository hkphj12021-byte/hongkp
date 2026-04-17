import { ShieldCheck, Database, Layers, ArrowRightCircle } from "lucide-react";
import { motion } from "motion/react";

export function HeroWidget({ id }: { id: string }) {
  const stats = [
    { label: "Years Experience", value: "11y 6m", icon: Layers, trend: "B2B/Enterprise" },
    { label: "Core Domain", value: "System Design", icon: Database, trend: "Architecture" },
    { label: "System Governance", value: "Optimized", icon: ShieldCheck, trend: "Security/QA" }
  ];

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 md:p-10 lg:p-12 relative overflow-hidden bg-slate-900 text-white">
          {/* Dashboard Abstract Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Senior System Architect PM
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              복잡한 비즈니스 로직 설계와 <br className="hidden md:block" />
              <span className="text-indigo-400">시스템 거버넌스 최적화</span>를 주도합니다
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
              단순 화면 기획을 넘어, 데이터 정합성과 백엔드 예외 로직을 설계하는 <strong className="text-white font-medium">시스템 아키텍트형 PM</strong> 홍경표입니다. 11년 6개월의 실무 경험을 통해 검증된 통찰력으로 비즈니스 목표를 신뢰할 수 있는 시스템으로 구현합니다.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">{stat.trend}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}