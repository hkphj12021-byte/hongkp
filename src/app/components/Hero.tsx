import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowDown, Phone, Mail, User } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full">
              서비스기획자
            </div>
            <h1 className="text-5xl lg:text-6xl">
              안녕하세요,
              <br />
              <span className="text-red-600">사용자 경험</span>을
              <br />
              설계하는 기획자입니다
            </h1>
            <p className="text-xl text-gray-600">
              데이터 기반의 의사결정과 사용자 중심 사고로
              <br />
              이커머스 서비스를 성장시키는 서비스 기획자
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg space-y-3">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-red-600" />
                <div>
                  <span className="text-sm text-gray-500">이름</span>
                  <p className="font-medium">홍경표</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600" />
                <div>
                  <span className="text-sm text-gray-500">연락처</span>
                  <p className="font-medium">010-8959-4745</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600" />
                <div>
                  <span className="text-sm text-gray-500">이메일</span>
                  <p className="font-medium">hkphj@naver.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700"
                onClick={() => scrollToSection("projects")}
              >
                프로젝트 보기
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
              >
                더 알아보기
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570215171424-f74325192b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9qZWN0JTIwbWFuYWdlciUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc2ODk1Nzc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-sm text-gray-600 mb-1">경력</p>
              <p className="text-3xl">11+ Years</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </button>
    </section>
  );
}