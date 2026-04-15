import { AlertOctagon, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export function ProblemSolvingWidget({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 px-5 py-4 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-rose-500" />
            <h2 className="text-sm font-bold text-white tracking-wide uppercase">Incident Report</h2>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            RESOLVED
          </span>
        </div>

        <div className="p-6">
          <div className="mb-6 pb-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              [ISSUE-204] 프론트엔드 성능 이슈에 따른 UX 절충안 적용
            </h3>
            <div className="flex gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Communication Risk</span>
              <span className="flex items-center gap-1"><ArrowRight className="w-3 h-3" /> UI/UX Mitigation</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">1. The Challenge</h4>
              <p className="text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100 leading-relaxed">
                기술적 제약 환경(프론트엔드 구현 한계 등)으로 인해 기존 기획안 수정이 불가피한 상황 발생. 일방적인 지시는 개발 생산성을 저해하며 목적 달성이 지연될 위험 존재.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">2. Solution / Mitigation</h4>
              <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg">
                <ul className="space-y-3 text-sm text-slate-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>이슈 투명 공유:</strong> 개발팀과 한계를 공유하고 절충안 공동 모색</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>현실적 대안 적용:</strong> 기존 UI 구조를 보존하면서 사용자 액션을 보장하는 인라인 메시지 활용 (기능 전환 절충안 도출)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">3. Impact</h4>
              <div className="flex items-center justify-between p-4 bg-white border border-emerald-200 rounded-lg shadow-sm">
                <div className="text-sm font-medium text-slate-800">개발 생산성 저하 방지 및 최적의 합의점 도출</div>
                <div className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-bold">100% Alignment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}