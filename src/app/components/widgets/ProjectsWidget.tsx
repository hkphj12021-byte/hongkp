import { Briefcase, ArrowUpRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";

export function ProjectsWidget({ id }: { id: string }) {
  const projects = [
    {
      title: "단말기 설치 정보 및 AS 운영 프로세스 표준화",
      client: "천하이너스",
      category: "시스템 로직 설계",
      description: "현장 장애 사유와 접수 타입 간의 논리적 결함을 해결하기 위한 자동 재접수 및 예외 케이스 처리 로직 고도화. InnerCode 기반 데이터 정합성 확보 및 Jira/Confluence 1:N 매핑을 통한 요구사항 이력 추적성(Traceability) 강화. 프론트엔드 제약 환경에서의 UX 최적화 절충안 도출.",
      image: "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHN5c3RlbSUyMHdvcmtmbG93fGVufDF8fHx8MTc3NjIxNTA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AS 프로세스 재설계", "데이터 정합성 확보", "자동 재접수 로직", "Jira/Confluence 연동", "유효성 검사 설계", "UX 최적화"],
      metrics: ["프로세스 자동화율 85% 향상", "수작업 오류 67% 감소", "처리 시간 40% 단축", "전사적 데이터 정합성 확보"]
    },
    {
      title: "해외안전여행 홈페이지 및 애플리케이션 고도화",
      client: "외교부",
      category: "웹/앱 고도화",
      description: "외교부 해외안전여행 플랫폼의 전반적인 기능 개선과 UI/UX 구조 재정비를 총괄한 리뉴얼 프로젝트입니다. 요구사항 정의부터 WBS·RFP 분석까지 기획 전 과정을 리드하며, 홈페이지·앱 오픈 이후 2차 고도화 및 유지보수 계약 체계까지 수립했습니다.",
      image: "https://images.unsplash.com/photo-1642873965200-4dd3753336b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzYWZldHklMjB3ZWJzaXRlJTIwYXBwfGVufDF8fHx8MTc2ODk1Nzc2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["요구사항정의", "기획설계", "WBS 작성", "RFP 분석", "품질관리(QA)", "산출물작성 및 관리", "고객사 커뮤니케이션"],
      metrics: ["홈페이지 및 앱 오픈 완료", "PM/기획 동시진행 80%", "백오피스 분석 설계", "유지보수 협의"]
    },
    {
      title: "함께학교 배리어프리 서비스 구축",
      client: "EBS",
      category: "신규 구축",
      description: "공공 서비스의 접근성 요건을 사후 검증이 아닌 기획 초기 구조 설계 기준으로 재정의한 프로젝트입니다. 장애 유형별 사용자 시나리오를 기반으로 서비스 구조와 정책을 총괄 설계했으며, 그 결과 배리어프리 웹사이트 오픈 및 웹 접근성 품질인증 마크를 획득했습니다.",
      image: "https://images.unsplash.com/photo-1576864333223-db90dadfb975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwZWR1Y2F0aW9uJTIwd2Vic2l0ZXxlbnwxfHx8fDE3Njg5NTc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["요구사항정의", "기획설계", "배리어프리", "품질관리(QA)", "고객사 커뮤니케이션"],
      metrics: ["웹사이트 오픈", "웹 접근성 인증마크 획득", "기여도 85%"]
    },
    {
      title: "브랜드 홈 홈페이지 고도화",
      client: "현대자동차",
      category: "PM",
      description: "고객 요구사항을 기반으로 프로젝트 범위와 일정을 정의하고, WBS 수립·투입 인력 관리·산출물 작성 및 고객 커뮤니케이션을 총괄한 프로젝트입니다. 기획·개발·운영 전 과정을 관리하여 1차 고도화를 완료했으며, 2차 고도화에 대한 구두 계약 성과를 도출했습니다.",
      image: "https://images.unsplash.com/photo-1594200879785-b6ee4fc48712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjB3ZWJzaXRlfGVufDF8fHx8MTc2OTA3MTc2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["요구사항 정의/분석", "일정관리", "인력관리", "산출물 관리"],
      metrics: ["고객 만족도 향상", "2차 고도화 계약", "PM역할 50%"]
    },
    {
      title: "대고객 플랫폼 개선 프로젝트",
      client: "현대건설",
      category: "PM",
      description: "고객 요구사항을 기반으로 프로젝트 범위와 일정을 정의하고, WBS 수립·투입 인력 운영·산출물 관리 및 고객 커뮤니케이션을 총괄한 개선 프로젝트입니다. 주요 기능 고도화를 안정적으로 완료하여 대고객 서비스 품질을 개선했습니다.",
      image: "https://images.unsplash.com/photo-1519114761417-81be330afa42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjkwNzE3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["요구사항 정의", "일정관리", "인력관리", "요구사항 분석", "산출물관리"],
      metrics: ["2차 고도화 기능 협의", "고도화 구두 협의", "사용자 편의성 향상"]
    },
    {
      title: "자사 플랫폼 고도화 및 UX 개선 프로젝트",
      client: "지빅스",
      category: "서비스 고도화",
      description: "자사 웹·모바일 서비스의 기능 개선과 UX 리뉴얼을 중심으로 요구사항 분석부터 기획·개발 협업·성과 분석까지 전 과정을 리드한 프로젝트입니다. 주요 기능 개선, 모바일 리뉴얼, 이벤트 기획을 통해 사용자 편의성과 재방문율 및 매출 지표 개선 성과를 도출했습니다.",
      image: "https://images.unsplash.com/photo-1590483200421-58b5a8a0be55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwaW1wcm92ZW1lbnR8ZW58MXx8fHwxNzY4OTU3NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["개선안 PT발표", "기능기획", "UX리뉴얼", "이벤트 기획", "운영 및 성과 분석"],
      metrics: ["핵심 기능 UX개선 및 운영 효율성 향상", "모바일 리뉴얼을 통한 사용자 20~30% 증가"]
    },
    {
      title: "서비스 통합 및 회원 전환 프로젝트",
      client: "지빅스",
      category: "서비스 고도화",
      description: "다수의 서비스를 단일 플랫폼으로 통합하며 회원 정책, 계정 전환 시나리오, 결제·PG 기준을 종합적으로 설계한 프로젝트입니다. 회원 이탈 최소화를 목표로 통합 정책과 사용자 가이드를 수립하고, 통합 이후에도 지속적인 모니터링을 통해 안정적인 서비스 운영을 유지했습니다.",
      image: "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGludGVncmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg5NTcyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["서비스 통합 기획", "정책설계", "회원 전환 시나리오 작성", "운영관리", "결제/PG검토"],
      metrics: ["전체 회원 수 약 30% 증가", "회원 이탈률 약 20% 감소", "플랫폼 운영 안정성 확보"]
    }
  ];

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-900">Key Projects Portfolio</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {projects.map((project, index) => (
            <div key={index} className="p-6 hover:bg-slate-50 transition-colors group">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Image Thumbnail */}
                <div className="w-full lg:w-48 h-32 shrink-0 rounded-lg overflow-hidden border border-slate-200 relative bg-slate-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-slate-900/80 text-white backdrop-blur-sm border-0 text-[10px]">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-xs font-semibold text-indigo-600 mb-1 tracking-wide">
                        {project.client}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 truncate pr-4">
                        {project.title}
                      </h3>
                    </div>
                    <button className="text-slate-400 hover:text-indigo-600 transition-colors shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white border border-slate-200 text-slate-500 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-medium">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 mb-2">
                      <ArrowUpRight className="w-3 h-3 text-green-500" />
                      Key Metrics / Outcomes
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
                      {project.metrics.map((metric, i) => (
                         <div key={i} className="text-sm text-slate-600 flex items-center gap-2 truncate">
                           <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0"></span>
                           {metric}
                         </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}