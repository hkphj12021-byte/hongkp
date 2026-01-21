import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "㈜엘아이지시스템",
      position: "기획 프리랜서",
      period: "2025.09 - 재직중",
      description: "교육부 주관 프로젝트 및 배리어프리 서비스 기획",
      achievements: [
        "교육부 현장체험학습 구축 - RFP 분석 및 요구사항 정리",
        "함께학교 배리어프리 서비스 구축 - 스토리보드 작성 및 일정 관리",
        "웹 접근성 인증 마크 획득",
        "고객과 기능협의 및 커뮤니케이션 총괄"
      ]
    },
    {
      company: "데이터쿡",
      position: "UI/UX 기획팀 과장",
      period: "2024.09 - 2025.06",
      description: "공공기관 및 기업 웹사이트 유지보수 및 기능 개선 프로젝트",
      achievements: [
        "해외안전여행 홈페이지 및 애플리케이션 고도화 프로젝트 수행",
        "메디컬코리아/국제의료정보포털 기능 개선 및 유지관리",
        "교육부, 외교부, 종로구청 등 공공기관 웹사이트 유지관리 제안서 작성",
        "요구사항 정의, WBS 작성, UI/UX 개선 설계 및 고객사 커뮤니케이션"
      ]
    },
    {
      company: "라온비엔피",
      position: "기획팀 과장",
      period: "2024.05 - 2024.09",
      description: "신규 웹사이트 구축 및 프로젝트 관리 (PM)",
      achievements: [
        "GME바이오, 심플라인 등 브랜드 홈페이지 구축 기획 및 PM 총괄",
        "스마트글로벌, 트레블시스템 여행사 예약 시스템 구축 기획",
        "토프모빌리티 경비행기, 패러글라이딩 B2B2C 예약 시스템 구축",
        "고객사 컨셉 파악, 스토리보드 작성, 일정 관리 및 협업 진행"
      ]
    },
    {
      company: "앵커스",
      position: "PM그룹 과장",
      period: "2024.01 - 2024.05",
      description: "프로젝트 관리 및 구축 프로젝트 PM",
      achievements: [
        "브랜드 홈 홈페이지 고도화 프로젝트 PM - 2차 고도화 계약 성과",
        "광고자동화플랫폼 구축 프로젝트 PM - 플랫폼 업체 협업 총괄",
        "대고객플랫폼 개선 프로젝트 PM - 고도화 기능 개선 완료",
        "일정 관리, 인력 관리, 산출물 작성 및 고객사 커뮤니케이션"
      ]
    },
    {
      company: "지빅스",
      position: "기획팀 과장",
      period: "2021.10 - 2023.10",
      description: "웹사이트 기능 개선 및 이벤트 기획, 서비스 통합 관리",
      achievements: [
        "자사 사이트 기능 개선 - 1:1 문의, 찜하기, SNS 회원가입 등",
        "상품 상세페이지 및 모바일 페이지 전체 리뉴얼 - 사용자 이탈율 감소",
        "이벤트 기획 및 운영 - 1+1, 생일 축하, 출석체크 등 매출 증가",
        "서비스 통합 프로젝트 - 회원 이탈 최소화 및 전체 회원 수 증가"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Experience</h2>
          <p className="text-xl text-gray-600">
            대형,중형 프로젝트를 통해 다양한 관리/기획 경험을 쌓아왔습니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl">경력</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-red-600">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="mb-1">{exp.company}</h3>
                        <p className="text-gray-600">{exp.position}</p>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">{exp.description}</p>
                    <div className="space-y-2">
                      <p>주요 성과</p>
                      <ul className="space-y-1 ml-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-600">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}