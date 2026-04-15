import { Cpu, ShieldCheck, ListTodo } from "lucide-react";

export function SkillsWidget({ id }: { id: string }) {
  const competencies = [
    {
      icon: Cpu,
      title: "기획/설계 역량",
      description: "IA, 스토리보드, API 연동 정책 수립 및 사용자/관리자 모드 최적화 설계",
      metrics: ["데이터 기반 UI/UX 최적화", "SNS 이관 정책 수립"]
    },
    {
      icon: ShieldCheck,
      title: "기술/보안 분석",
      description: "서버, DB, WAS 등 인프라 기술 진단 및 보안 취약점 보완 컨설팅 역량",
      metrics: ["데이터 영구 삭제 시스템", "ISMS 인증 컨설팅"]
    },
    {
      icon: ListTodo,
      title: "프로젝트 관리",
      description: "RFP 분석부터 WBS 기반 일정 관리, 인력 운영, 산출물 품질 관리",
      metrics: ["웹 접근성 인증(WA) 획득", "고객사 커뮤니케이션 총괄"]
    }
  ];

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">Core Competencies</h2>
        </div>

        <div className="p-5 space-y-4">
          {competencies.map((comp, idx) => (
            <div key={idx} className="group p-4 rounded-lg bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors text-slate-500">
                  <comp.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-800">{comp.title}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.metrics.map((m, i) => (
                  <span key={i} className="text-[10px] font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}