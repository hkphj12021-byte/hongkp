import { FileText, Target, Lightbulb, TrendingUp } from "lucide-react";

export function ProblemSolvingWidget({ id }: { id: string }) {
  const deliverables = [
    {
      icon: FileText,
      title: "IA & 사용자 시나리오",
      description: "사용자 중심의 정보 구조 설계와 시나리오 기반 서비스 구조화",
      color: "blue"
    },
    {
      icon: Target,
      title: "스토리보드 & 사용자 여정",
      description: "사용자 여정을 시각화해 기획 의도를 명확히 전달",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "플로우차트 & 시스템 아키텍처",
      description: "복잡한 프로세스를 흐름도로 구조화해 협업 효율 극대화",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string }> = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600" },
      purple: { bg: "bg-purple-50", icon: "text-purple-600" },
      indigo: { bg: "bg-indigo-50", icon: "text-indigo-600" }
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-indigo-600" />
          <div>
            <h2 className="text-lg font-bold text-slate-900">기획·설계 역량 사례</h2>
            <p className="text-xs text-slate-500 mt-0.5">실제 프로젝트에서 수행한 핵심 산출물</p>
          </div>
        </div>

        <div className="p-5 space-y-3">
          {deliverables.map((item, idx) => {
            const colors = getColorClasses(item.color);
            return (
              <div key={idx} className={`p-4 rounded-lg ${colors.bg} border border-slate-100`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 ${colors.icon}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}