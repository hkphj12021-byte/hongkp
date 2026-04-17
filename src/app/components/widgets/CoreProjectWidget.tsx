import { motion } from "motion/react";
import { AlertTriangle, FileText, CheckCircle, Zap, TrendingDown, TrendingUp, Monitor } from "lucide-react";

export function CoreProjectWidget({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
        
        {/* Header */}
        <div className="p-8 pb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            데이터 표준화 기반의 AS 자동 접수 및<br className="hidden md:block" />
            무결성 운영 프로세스 설계
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            설치 데이터와 AS 데이터 구조 간 이원화로 인한 수기 입력 및 중복 누락 문제를 데이터 표준화 및 자동화 로직 구조로 해결
          </p>
        </div>

        {/* Background Section */}
        <div className="mx-6 mb-6 p-6 rounded-xl bg-gradient-to-br from-red-950/40 to-red-900/30 border border-red-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-300">BACKGROUND</h3>
              <span className="text-xs text-red-400 font-medium">도전 로직</span>
            </div>
          </div>
          <p className="text-slate-200 text-sm leading-relaxed mb-5">
            설치 데이터와 AS 데이터의 구조가 이원화되어 AS 접수 시 수기 입력이 발생하였고, 이로 인한 데이터 불일치 및 이례 추적 누락 문제가 자주적으로 발생
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4 rounded-lg bg-slate-900/50 border border-red-700/30"
            >
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-xs text-red-300 font-semibold mb-1">수기 입력 의존도</div>
              <div className="text-red-100 font-bold">백 AS 건마다</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4 rounded-lg bg-slate-900/50 border border-red-700/30"
            >
              <div className="text-3xl mb-2">⚠️</div>
              <div className="text-xs text-amber-300 font-semibold mb-1">데이터 불일치</div>
              <div className="text-amber-100 font-bold">정합성 여수</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 rounded-lg bg-slate-900/50 border border-red-700/30"
            >
              <div className="text-3xl mb-2">📊</div>
              <div className="text-xs text-indigo-300 font-semibold mb-1">이례 추적 누락</div>
              <div className="text-indigo-100 font-bold">통계 왜곡</div>
            </motion.div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="mx-6 mb-6 p-6 rounded-xl bg-gradient-to-br from-amber-950/40 to-amber-900/30 border border-amber-700/50">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300">APPROACH</h3>
              <span className="text-xs text-amber-400 font-medium">조치 사항</span>
            </div>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/40 border border-amber-600/20"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">
                01
              </div>
              <div>
                <h4 className="font-bold text-amber-100 mb-1">설치 데이터 기준으로 AS 데이터 재설계</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  이원화된 구조를 통합하고 설치 데이터 단일 전산 공급원(Single Source of Truth)으로 설정
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/40 border border-amber-600/20"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">
                02
              </div>
              <div>
                <h4 className="font-bold text-amber-100 mb-1">자동 접수 로직 구조</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  설치 이력 기반 매핑 및 InnerCode 표준 사양 적용으로 수기 입력 제거
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/40 border border-amber-600/20"
            >
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center font-bold text-sm shrink-0">
                03
              </div>
              <div>
                <h4 className="font-bold text-amber-100 mb-1">예외 처리 체계 구조</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  접수 타입과 장애 사유 간 유효성 검사로 자동 재분류 및 재접수 조건 설계
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Result Section */}
        <div className="mx-6 mb-6 p-6 rounded-xl bg-gradient-to-br from-emerald-950/40 to-emerald-900/30 border border-emerald-700/50">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-300">RESULT</h3>
              <span className="text-xs text-emerald-400 font-medium">성과 지표</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-xl bg-slate-900/40 border border-emerald-600/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <div className="text-7xl font-black text-emerald-400">100%</div>
              </div>
              <div className="text-xs text-emerald-300 font-medium mb-2">Data Integrity</div>
              <div className="text-sm text-slate-300 font-semibold mb-1">데이터 정합성 확보</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                설치 데이터 기준 표준화로 전사적 데이터 무결성 달성
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-xl bg-slate-900/40 border border-emerald-600/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-5 h-5 text-emerald-400" />
                <div className="text-7xl font-black text-emerald-400">40%</div>
              </div>
              <div className="text-xs text-emerald-300 font-medium mb-2">Time Reduction</div>
              <div className="text-sm text-slate-300 font-semibold mb-1">처리 시간 단축</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                자동 접수 로직으로 AS 처리 시간 40% 단축
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-xl bg-slate-900/40 border border-emerald-600/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-5 h-5 text-emerald-400" />
                <div className="text-7xl font-black text-emerald-400">67%</div>
              </div>
              <div className="text-xs text-emerald-300 font-medium mb-2">Work Reduction</div>
              <div className="text-sm text-slate-300 font-semibold mb-1">수작업 오류 감소</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                수기 입력 제거로 오류 발생률 67% 감소
              </p>
            </motion.div>
          </div>
        </div>

        {/* Technical Implementation Section */}
        <div className="mx-6 mb-6 p-6 rounded-xl bg-gradient-to-br from-blue-950/40 to-blue-900/30 border border-blue-700/50">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <Monitor className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-300">TECHNICAL IMPLEMENTATION</h3>
              <span className="text-xs text-blue-400 font-medium">기술 구현</span>
            </div>
          </div>

          <div className="text-sm text-slate-200 leading-relaxed">
            <p className="mb-4">
              <strong className="text-blue-300">InnerCode 표준 사양 기준으로</strong> 설치 데이터를 AS 데이터로 1:N 구조로 연결하고, 
              Confluence-Jira 흐름으로 요구사항과 구현방지 전 과정의 추적성을 확보했습니다. 
              프론트엔드 제약 해소 시 현장의 제약점을 입안하여 최적화했습니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
