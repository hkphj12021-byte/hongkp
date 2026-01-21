import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "이메일",
      value: "yourname@email.com",
      link: "mailto:yourname@email.com"
    },
    {
      icon: Phone,
      label: "연락처",
      value: "010-1234-5678",
      link: "tel:010-1234-5678"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/yourname",
      link: "https://github.com/yourname"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yourname",
      link: "https://linkedin.com/in/yourname"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Contact</h2>
          <p className="text-xl text-gray-600">
            함께 일하고 싶으시다면 언제든 연락주세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 text-white">
              <h3 className="text-3xl mb-4">Let's Work Together</h3>
              <p className="text-lg opacity-90">
                G마켓의 성장과 함께하고 싶습니다. 
                사용자에게 더 나은 쇼핑 경험을 제공하는 서비스를 함께 만들어가고 싶습니다.
              </p>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                      <info.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                      <p className="group-hover:text-red-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center pt-8 border-t">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Mail className="w-5 h-5 mr-2" />
                  이메일 보내기
                </Button>
                <Button size="lg" variant="outline">
                  <FileText className="w-5 h-5 mr-2" />
                  이력서 다운로드
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              G마켓 서비스기획 지원을 위한 포트폴리오입니다
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
