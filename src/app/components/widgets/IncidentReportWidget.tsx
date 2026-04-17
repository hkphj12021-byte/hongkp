import { AlertTriangle, CheckCircle2, Users } from "lucide-react";
import { motion } from "motion/react";

export function IncidentReportWidget({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center gap-2 bg-amber-50/50">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <div>
            <h2 className="text-lg font-bold text-slate-900">Incident Report</h2>
            <p className="text-xs text-slate-500">[ISSUE-204] 프론트엔드 성능 이슈 — UX 절충안 적용</p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 도전 과제 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-lg bg-red-50 border border-red-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-slate-900">도전 과제</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                기술적 제약 환경(프론트엔드 구현 한계)으로 기존 기획안 수정이 불가피한 상황 발생. 
                일방적인 지시는 개발 생산성을 저해하고 목적 달성이 지연될 위험이 존재했습니다.
              </p>
              <div className="flex items-center gap-2 text-xs font-medium text-red-700 bg-red-100 px-3 py-2 rounded">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                프론트엔드 성능 이슈 발생
              </div>
            </motion.div>

            {/* 해결 방안 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-lg bg-blue-50 border border-blue-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900">해결 방안</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700 mb-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="font-semibold">이슈 투명 공유:</strong> 개발팀과 한계를 공유하고 절충안을 공동으로 모색
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                  <div>
                    <strong className="font-semibold">현실적 대안 적용:</strong> 기존 UI 구조를 보존하면서 사용자 액션을 보장하는 인라인 메시지 활용
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* 성과 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 p-5 rounded-lg bg-green-50 border-2 border-green-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-slate-900 text-lg">성과</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="text-sm text-slate-700 font-medium">
                  개발 생산성 저하 방지 및 최적의 합의점 도출
                </p>
              </div>
              <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold">
                100% Alignment 달성
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
