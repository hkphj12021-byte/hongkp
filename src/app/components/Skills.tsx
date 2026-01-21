import { Card, CardContent, CardHeader } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      category: "기획 역량",
      skills: [
        { name: "서비스 기획", level: 90 },
        { name: "사용자 리서치", level: 85 },
        { name: "데이터 분석", level: 88 },
        { name: "프로젝트 관리", level: 82 }
      ]
    },
    {
      category: "협업 도구",
      skills: [
        { name: "Power Point", level: 95 },
        { name: "Excel", level: 90 },
        { name: "Adobe XD", level: 85 },
        { name: "Figma", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">
            서비스 기획에 필요한 다양한 도구와 방법론을 활용합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <h3>{category.category}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}