import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "해외안전여행 홈페이지 및 애플리케이션 고도화",
      category: "웹/앱 고도화",
      description: "외교부 해외안전여행 플랫폼의 전반적인 기능 개선과 UI/UX 구조 재정비를 총괄한 리뉴얼 프로젝트입니다. 요구사항 정의부터 WBS·RFP 분석까지 기획 전 과정을 리드하며, 홈페이지·앱 오픈 이후 2차 고도화 및 유지보수 계약 체계까지 수립했습니다.",
      image: "https://images.unsplash.com/photo-1642873965200-4dd3753336b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBzYWZldHklMjB3ZWJzaXRlJTIwYXBwfGVufDF8fHx8MTc2ODk1Nzc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["요구사항정의", "기획설계", "WBS 작성", "RFP 분석", "품질관리(QA)", "산출물작성 및 관리", "고객사 커뮤니케이션"],
      metrics: ["홈페이지 및 애플리케이션 오픈 완료", "2차 고도화 협의", "유지보수 관리 구두 협의"]
    },
    {
      title: "함께학교 배리어프리 서비스 구축",
      category: "신규 구축",
      description: "공공 서비스의 접근성 요건을 사후 검증이 아닌 기획 초기 구조 설계 기준으로 재정의한 프로젝트입니다. 장애 유형별 사용자 시나리오를 기반으로 서비스 구조와 정책을 총괄 설계했으며, 그 결과 배리어프리 웹사이트 오픈 및 웹 접근성 품질인증 마크를 획득했습니다.",
      image: "https://images.unsplash.com/photo-1576864333223-db90dadfb975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwZWR1Y2F0aW9uJTIwd2Vic2l0ZXxlbnwxfHx8fDE3Njg5NTc3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["요구사항정의", "기획설계", "배리어프리", "품질관리(QA)", "고객사 커뮤니케이션"],
      metrics: ["배리어프리 웹사이트 오픈", "웹 접근성 인증마크 획득"]
    },
    {
      title: "브랜드 홈 홈페이지 고도화",
      category: "PM",
      description: "고객 요구사항을 기반으로 프로젝트 범위와 일정을 정의하고, WBS 수립·투입 인력 관리·산출물 작성 및 고객 커뮤니케이션을 총괄한 프로젝트입니다. 기획·개발·운영 전 과정을 관리하여 1차 고도화를 완료했으며, 2차 고도화에 대한 구두 계약 성과를 도출했습니다.",
      image: "https://images.unsplash.com/photo-1762340275704-d0e31637286a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNvcnBvcmF0ZSUyMHdlYnNpdGV8ZW58MXx8fHwxNzY4OTU3NzY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["요구사항 정의/분석", "일정관리", "인력관리", "산출물 관리"],
      metrics: ["고객 만족도 향상", "2차 고도화 계약"]
    },
    {
      title: "대고객 플랫폼 개선 프로젝트",
      category: "PM",
      description: "고객 요구사항을 기반으로 프로젝트 범위와 일정을 정의하고, WBS 수립·투입 인력 운영·산출물 관리 및 고객 커뮤니케이션을 총괄한 개선 프로젝트입니다. 주요 기능 고도화를 안정적으로 완료하여 대고객 서비스 품질을 개선했습니다.",
      image: "https://images.unsplash.com/photo-1702988708132-8a5354ec783d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3Njg5NTcyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["요구사항 정의", "일정관리", "인력관리", "요구사항 분석", "산출물관리"],
      metrics: ["2차 고도화 기능 협의", "고도화 구두 협의", "사용자 편의성 향상"]
    },
    {
      title: "자사 플랫폼 고도화 및 UX 개선 프로젝트",
      category: "서비스 고도화",
      description: "자사 웹·모바일 서비스의 기능 개선과 UX 리뉴얼을 중심으로 요구사항 분석부터 기획·개발 협업·성과 분석까지 전 과정을 리드한 프로젝트입니다. 주요 기능 개선, 모바일 리뉴얼, 이벤트 기획을 통해 사용자 편의성과 재방문율 및 매출 지표 개선 성과를 도출했습니다.",
      image: "https://images.unsplash.com/photo-1590483200421-58b5a8a0be55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwaW1wcm92ZW1lbnR8ZW58MXx8fHwxNzY4OTU3NzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["개선안 PT발표", "기능기획", "UX리뉴얼", "이벤트 기획", "운영 및 성과 분석"],
      metrics: ["핵심 기능 UX개선 및 운영 효율성 향상", "모바일 리뉴얼을 통한 사용자 증가", "이벤트 운영을 통한 매출 및 유입 지표개선"]
    },
    {
      title: "서비스 통합 및 회원 전환 프로젝트",
      category: "서비스 고도화",
      description: "다수의 서비스를 단일 플랫폼으로 통합하며 회원 정책, 계정 전환 시나리오, 결제·PG 기준을 종합적으로 설계한 프로젝트입니다. 회원 이탈 최소화를 목표로 통합 정책과 사용자 가이드를 수립하고, 통합 이후에도 지속적인 모니터링을 통해 안정적인 서비스 운영을 유지했습니다.",
      image: "https://images.unsplash.com/photo-1758626042818-b05e9c91b84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0Zm9ybSUyMGludGVncmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njg5NTcyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["서비스 통합 기획", "정책설계", "회원 전환 시나리오 작성", "운영관리", "결제/PG검토"],
      metrics: ["서비스 통합 이후 전체 회원 수 증가", "기존 회원 이탈률 최소화", "플랫폼 운영 안정성 확보"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Projects</h2>
          <p className="text-xl text-gray-600">
            실제 성과를 만들어낸 주요 프로젝트를 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600">{project.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <h3>{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm mb-2">주요 성과</p>
                  <div className="space-y-1">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-sm text-red-600">
                        • {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}