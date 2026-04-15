import { Activity, Clock } from "lucide-react";

export function TimelineWidget({ id }: { id: string }) {
  const experiences = [
    {
      company: "천하이너스",
      position: "서비스기획 과장",
      period: "2026.02 - 재직중",
      highlights: ["AS 운영 프로세스 데이터 표준화", "Jira/Confluence 협업 거버넌스"]
    },
    {
      company: "EBS",
      position: "서비스기획 차장",
      period: "2025.09 - 2026.02",
      highlights: ["현장체험학습 및 배리어프리 구축", "WBS 기반 대규모 시스템 총괄"]
    },
    {
      company: "데이터쿡",
      position: "UI/UX사업부 과장",
      period: "2024.09 - 2025.06",
      highlights: ["외교부/교육부 웹사이트 유지보수", "맞춤형 제안서 작성 총괄"]
    },
    {
      company: "라온비엔피 / 앵커스",
      position: "기획팀 과장 / PM",
      period: "2024.01 - 2024.09",
      highlights: ["브랜드 홈페이지 신규 구축 PM", "광고 자동화 플랫폼 개선"]
    },
    {
      company: "지빅스 / 아비도스 / 매스티지",
      position: "기획팀 과장 / 대리",
      period: "2019.07 - 2023.10",
      highlights: ["자사 플랫폼 통합 기획 및 UX 개선", "공공/대학 입학 홈페이지 총괄"]
    },
    {
      company: "Blancco Korea",
      position: "사업팀 과장",
      period: "2015.03 - 2019.06",
      highlights: ["엔터프라이즈 영구 삭제 인프라 구축", "미션 크리티컬 환경 시스템 매뉴얼"]
    },
    {
      company: "아이에스큐어",
      position: "컨설팅팀 사원",
      period: "2014.06 - 2014.12",
      highlights: ["대신증권/하나은행 ISMS 보안 컨설팅"]
    }
  ];

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-slate-900">Career Timeline</h2>
          </div>
          <Badge variant="outline" className="bg-slate-50 text-slate-500 font-medium">11y 6m Total</Badge>
        </div>

        <div className="p-6 relative">
          <div className="absolute top-6 bottom-6 left-[27px] w-px bg-slate-200"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-4">
                <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 z-10 border-2 ${index === 0 ? "bg-indigo-600 border-indigo-200 outline-2 outline outline-indigo-100" : "bg-white border-slate-300"}`}></div>
                
                <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-100 hover:border-indigo-100 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-slate-900">{exp.company}</h3>
                    <div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                      <Clock className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-xs text-indigo-600 font-medium mb-3">{exp.position}</div>
                  
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5 leading-snug">
                        <span className="text-indigo-400 font-bold mt-[-2px]">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children, className, variant }: any) {
  return <span className={`px-2.5 py-0.5 rounded-full text-xs ${className}`}>{children}</span>
}