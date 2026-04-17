import { Building2, Shield, TrendingUp, Handshake } from "lucide-react";
import { motion } from "motion/react";

export function AchievementsWidget({ id }: { id: string }) {
  const achievements = [
    {
      icon: Building2,
      title: "공공·엔터프라이즈",
      description: "외교부, EBS, 현대자동차, 현대건설 등 국가 인프라 및 대기업 프로젝트 총괄 수행",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "보안·정합성",
      description: "ISMS 인증 컨설팅, 데이터 영구 삭제 시스템, 웹 접근성 인증(WA) 획득",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "비즈니스 임팩트",
      description: "회원 수 30% 증가, 오류 67% 감소, 자동화율 85% 향상 등 정량적 성과 달성",
      color: "green"
    },
    {
      icon: Handshake,
      title: "협업 거버넌스",
      description: "Jira/Confluence 1:N 매핑, WBS 기반 일정 관리, 고객 커뮤니케이션 총괄",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; gradient: string }> = {
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        icon: "text-indigo-600",
        gradient: "from-indigo-500 to-indigo-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        gradient: "from-purple-500 to-purple-600"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-600",
        gradient: "from-green-500 to-green-600"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        gradient: "from-blue-500 to-blue-600"
      }
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">핵심 성과 요약</h2>
          <p className="text-sm text-slate-500 mt-1">11년 6개월 이상 축적된 실무 경험과 기술적 통찰이 만들어낸 검증된 결과입니다.</p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => {
            const colors = getColorClasses(achievement.color);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-xl border-2 ${colors.border} ${colors.bg} hover:shadow-lg transition-all group`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{achievement.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
