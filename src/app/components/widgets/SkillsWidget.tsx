import { Cpu, ShieldCheck, ListTodo, Network, Database, BookOpen } from "lucide-react";

export function SkillsWidget({ id }: { id: string }) {
  const competencies = [
    {
      icon: Cpu,
      title: "기획 / 설계",
      description: "IA 설계, 스토리보드, 사용자 시나리오, API 정책 수립, UI/UX 전략",
      color: "indigo"
    },
    {
      icon: Network,
      title: "시스템 설계",
      description: "시스템 아키텍처, 데이터 흐름 설계, 백엔드 로직, 인프라 구조",
      color: "blue"
    },
    {
      icon: Database,
      title: "데이터 거버넌스",
      description: "데이터 정합성, 보안 취약점 분석, ISMS 컨설팅, 영구 삭제 시스템",
      color: "purple"
    },
    {
      icon: ListTodo,
      title: "매니지먼트",
      description: "WBS 수립, 일정 관리, 인력 운영, 산출물 품질 관리",
      color: "green"
    },
    {
      icon: ShieldCheck,
      title: "기술 스택",
      description: "Jira, Confluence, Figma, Slack, PowerPoint, Excel",
      color: "amber"
    },
    {
      icon: BookOpen,
      title: "도메인 지식",
      description: "공공·엔터프라이즈 도메인, B2B 비즈니스 이해, 금융·보안 산업 경험",
      color: "slate"
    }
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      indigo: "group-hover:bg-indigo-50 group-hover:text-indigo-600",
      blue: "group-hover:bg-blue-50 group-hover:text-blue-600",
      purple: "group-hover:bg-purple-50 group-hover:text-purple-600",
      green: "group-hover:bg-green-50 group-hover:text-green-600",
      amber: "group-hover:bg-amber-50 group-hover:text-amber-600",
      slate: "group-hover:bg-slate-100 group-hover:text-slate-600"
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">Core Competencies</h2>
          <p className="text-xs text-slate-500 mt-1">시스템 아키텍트형 PM의 통합 역량</p>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {competencies.map((comp, idx) => (
            <div key={idx} className="group p-4 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded bg-slate-50 flex items-center justify-center transition-colors text-slate-500 ${getColorClass(comp.color)}`}>
                  <comp.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-800">{comp.title}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}