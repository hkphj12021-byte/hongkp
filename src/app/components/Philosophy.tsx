import { Check, Target, TrendingUp, RefreshCw } from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      icon: Target,
      title: "기획 초기의 방향 설정",
      description: "개발·운영·고도화까지 프로젝트 전 과정을 책임져왔습니다."
    },
    {
      icon: Check,
      title: "실행 가능한 기준 만들기",
      description: "문서 작성에 그치지 않고, 조직이 판단하고 실행할 수 있는 기준을 만드는 기획을 지향합니다."
    },
    {
      icon: TrendingUp,
      title: "지속적인 성장",
      description: "완성 이후에도 운영과 개선을 통해 서비스의 지속적인 성장을 만들어갑니다."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <p className="text-sm font-medium">Philosophy</p>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-8">
            복잡한 요구사항과 이해관계자를 구조화하여,
            <br />
            <span className="text-orange-200">실행 가능한 서비스로 완주시키는</span>
            <br />
            기획자/PM입니다.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <principle.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4">{principle.title}</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <RefreshCw className="w-10 h-10 text-orange-200" />
              <h3 className="text-3xl">프로젝트 전 과정을 책임집니다</h3>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              기획부터 개발, 운영, 그리고 지속적인 개선까지.
              <br />
              단순히 문서를 만드는 것이 아닌, 실제로 작동하는 서비스를 만들어냅니다.
              <br />
              <span className="text-orange-200 font-medium">
                프로젝트의 시작부터 성공적인 완주까지 함께합니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
