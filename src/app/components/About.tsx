import { Card, CardContent } from "./ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

export function About() {
  const strengths = [
    {
      icon: Target,
      title: "문제 정의 및 해결",
      description: "사용자 리서치와 데이터 분석을 통해 핵심 문제를 정의하고 효과적인 솔루션을 제안합니다."
    },
    {
      icon: Users,
      title: "사용자 중심 설계",
      description: "UI/UX 설계 경험을 바탕으로 직관적이고 편리한 서비스를 기획합니다."
    },
    {
      icon: Lightbulb,
      title: "협업 및 커뮤니케이션",
      description: "유관부서와의 원활한 협업으로 프로젝트를 성공적으로 완수합니다."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl mb-4">About Me</h2>
          <p className="text-xl text-gray-600">
            다양한 프로젝트 관리 및 기획 경험을 바탕으로 고객과 사용자 중심으로 생각하여 성과를 만들어내는 서비스 기획자 입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <strength.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="mb-2">{strength.title}</h3>
                <p className="text-gray-600">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl text-red-600 mb-2">30+</div>
            <p className="text-gray-600">완료한 프로젝트</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-red-600 mb-2">250%</div>
            <p className="text-gray-600">평균 성과 달성률</p>
          </div>
          <div className="text-center">
            <div className="text-4xl text-red-600 mb-2">11년</div>
            <p className="text-gray-600">실무 경력</p>
          </div>
        </div>
      </div>
    </section>
  );
}