import { motion } from "motion/react";
import { Server, Code, Database, CheckCircle, AlertCircle, ArrowDown, GitBranch, Zap, Shield, RefreshCw } from "lucide-react";
import { useState } from "react";

interface FlowNode {
  id: string;
  label: string;
  type: "start" | "process" | "decision" | "action" | "end" | "branch";
  description?: string;
  details?: string[];
  color: string;
}

export function CoreProjectWidget({ id }: { id: string }) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const flowNodes: FlowNode[] = [
    {
      id: "install",
      label: "단말기 설치정보 관리",
      type: "start",
      description: "ASKS 시스템을 통한 초기 설치 정보 등록",
      details: [
        "단말기 기본 정보 입력",
        "설치 위치 및 담당자 정보",
        "InnerCode 자동 생성"
      ],
      color: "indigo"
    },
    {
      id: "reception",
      label: "AS 접수 처리",
      type: "process",
      description: "고객 요청 접수 및 기본 검증",
      details: [
        "고객 정보 확인",
        "AS 유형 분류",
        "접수 번호 발급"
      ],
      color: "blue"
    },
    {
      id: "validation",
      label: "정합성 검증",
      type: "decision",
      description: "데이터 유효성 및 논리적 결함 검사",
      details: [
        "InnerCode 기반 데이터 정합성 확인",
        "중복 접수 여부 검증",
        "필수 항목 완성도 체크"
      ],
      color: "amber"
    },
    {
      id: "branch-error",
      label: "논리적 결함 발견",
      type: "branch",
      description: "예외 상황 자동 분기 처리",
      details: [
        "AMM AS가 접수됨",
        "자동 재접수 로직 실행",
        "담당 파트 재배정",
        "알림 발송 (Jira/Confluence 연동)"
      ],
      color: "red"
    },
    {
      id: "branch-normal",
      label: "정상 처리 경로",
      type: "branch",
      description: "조건부 상태 자동 변경",
      details: [
        "InnerCode 기반 상태 업데이트",
        "처리 우선순위 자동 할당",
        "담당자 자동 배정"
      ],
      color: "green"
    },
    {
      id: "meter-check",
      label: "METER 연동 확인",
      type: "process",
      description: "계량기 데이터 동기화",
      details: [
        "METER 시스템 연동",
        "실시간 데이터 동기화",
        "이상 수치 탐지"
      ],
      color: "purple"
    },
    {
      id: "auto-routing",
      label: "자동 재접수 분기",
      type: "action",
      description: "티켓팅 시스템 자동화",
      details: [
        "Jira 티켓 자동 생성",
        "개발 파트 세분화",
        "이력 추적성 확보 (Traceability)"
      ],
      color: "orange"
    },
    {
      id: "db-sync",
      label: "전사적 데이터 정합성 DB 적재",
      type: "end",
      description: "최종 데이터 저장 및 동기화",
      details: [
        "트랜잭션 처리",
        "데이터 웨어하우스 적재",
        "실시간 대시보드 갱신"
      ],
      color: "slate"
    }
  ];

  const getNodeIcon = (type: string) => {
    switch(type) {
      case "start": return Server;
      case "decision": return GitBranch;
      case "branch": return AlertCircle;
      case "action": return Zap;
      case "end": return Database;
      default: return Shield;
    }
  };

  const getNodeStyle = (color: string) => {
    const styles: Record<string, string> = {
      indigo: "bg-indigo-50 border-indigo-300 text-indigo-900 hover:border-indigo-500",
      blue: "bg-blue-50 border-blue-300 text-blue-900 hover:border-blue-500",
      amber: "bg-amber-50 border-amber-300 text-amber-900 hover:border-amber-500",
      red: "bg-red-50 border-red-300 text-red-900 hover:border-red-500",
      green: "bg-green-50 border-green-300 text-green-900 hover:border-green-500",
      purple: "bg-purple-50 border-purple-300 text-purple-900 hover:border-purple-500",
      orange: "bg-orange-50 border-orange-300 text-orange-900 hover:border-orange-500",
      slate: "bg-slate-100 border-slate-400 text-slate-900 hover:border-slate-600"
    };
    return styles[color] || styles.slate;
  };

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      indigo: "text-indigo-600",
      blue: "text-blue-600",
      amber: "text-amber-600",
      red: "text-red-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      slate: "text-slate-600"
    };
    return colors[color] || colors.slate;
  };

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-1 text-sm font-semibold uppercase tracking-wider">
              <Server className="w-4 h-4" />
              Core Architecture Study
            </div>
            <h2 className="text-xl font-bold text-slate-900">단말기 설치 정보 및 AS 운영 프로세스 표준화</h2>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-slate-900">천하이너스</div>
            <div className="text-xs text-slate-500">2026.02 ~ Present</div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Core Tech & Approach</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <Code className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>InnerCode 기반 데이터 정합성 확보 및 파편화된 요청 체계 통합</span>
                </li>
                <li className="flex items-start gap-2">
                  <Database className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>Jira/Confluence 1:N 매핑을 통한 요구사항 이력 추적성(Traceability) 강화</span>
                </li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-2">System Impact</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>저장 전 유효성 검사(Validation) 및 상태 자동 변경 로직 설계</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>불필요한 커뮤니케이션 리스크 방지 및 개발 파트 세분화 티켓팅</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-800 text-white p-4 text-sm font-medium border-b border-slate-700 flex justify-between items-center">
              <span>AS 자동 재접수 분기 로직 (Interactive Flow)</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">클릭하여 상세 정보 확인</span>
                <span className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Flow Chart */}
                <div className="flex-1 flex flex-col items-center gap-4">
                  {/* 상단: 설치 ~ 검증 */}
                  <div className="flex flex-col items-center gap-3 w-full max-w-md">
                    {flowNodes.slice(0, 3).map((node, idx) => {
                      const Icon = getNodeIcon(node.type);
                      return (
                        <div key={node.id} className="flex flex-col items-center w-full">
                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedNode(node.id)}
                            className={`w-full border-2 rounded-lg px-6 py-4 shadow-sm transition-all cursor-pointer ${getNodeStyle(node.color)} ${
                              selectedNode === node.id ? "ring-2 ring-offset-2 ring-indigo-400 scale-105" : ""
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-5 h-5 ${getIconColor(node.color)}`} />
                              <div className="text-left flex-1">
                                <div className="font-semibold text-sm">{node.label}</div>
                                <div className="text-xs opacity-70 mt-0.5">{node.description}</div>
                              </div>
                            </div>
                          </motion.button>
                          {idx < 2 && (
                            <ArrowDown className="w-5 h-5 text-slate-400 my-1" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* 분기점 */}
                  <div className="relative w-full max-w-2xl mt-4">
                    <div className="flex justify-center gap-8 items-start">
                      {/* 왼쪽 분기 (에러) */}
                      <div className="flex flex-col items-center flex-1 max-w-xs">
                        <div className="text-xs font-semibold text-red-600 mb-2 bg-red-50 px-3 py-1 rounded-full">
                          예외 발생 경로
                        </div>
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          onClick={() => setSelectedNode(flowNodes[3].id)}
                          className={`w-full border-2 rounded-lg px-4 py-3 shadow-sm transition-all cursor-pointer ${getNodeStyle(flowNodes[3].color)} ${
                            selectedNode === flowNodes[3].id ? "ring-2 ring-offset-2 ring-red-400 scale-105" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                            <div className="text-left flex-1">
                              <div className="font-semibold text-xs">{flowNodes[3].label}</div>
                            </div>
                          </div>
                        </motion.button>
                        <ArrowDown className="w-4 h-4 text-red-400 my-2" />
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          onClick={() => setSelectedNode(flowNodes[6].id)}
                          className={`w-full border-2 rounded-lg px-4 py-3 shadow-sm transition-all cursor-pointer ${getNodeStyle(flowNodes[6].color)} ${
                            selectedNode === flowNodes[6].id ? "ring-2 ring-offset-2 ring-orange-400 scale-105" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-orange-600" />
                            <div className="text-left flex-1">
                              <div className="font-semibold text-xs">{flowNodes[6].label}</div>
                            </div>
                          </div>
                        </motion.button>
                      </div>

                      {/* 오른쪽 분기 (정상) */}
                      <div className="flex flex-col items-center flex-1 max-w-xs">
                        <div className="text-xs font-semibold text-green-600 mb-2 bg-green-50 px-3 py-1 rounded-full">
                          정상 처리 경로
                        </div>
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          onClick={() => setSelectedNode(flowNodes[4].id)}
                          className={`w-full border-2 rounded-lg px-4 py-3 shadow-sm transition-all cursor-pointer ${getNodeStyle(flowNodes[4].color)} ${
                            selectedNode === flowNodes[4].id ? "ring-2 ring-offset-2 ring-green-400 scale-105" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <div className="text-left flex-1">
                              <div className="font-semibold text-xs">{flowNodes[4].label}</div>
                            </div>
                          </div>
                        </motion.button>
                        <ArrowDown className="w-4 h-4 text-green-400 my-2" />
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          onClick={() => setSelectedNode(flowNodes[5].id)}
                          className={`w-full border-2 rounded-lg px-4 py-3 shadow-sm transition-all cursor-pointer ${getNodeStyle(flowNodes[5].color)} ${
                            selectedNode === flowNodes[5].id ? "ring-2 ring-offset-2 ring-purple-400 scale-105" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4 text-purple-600" />
                            <div className="text-left flex-1">
                              <div className="font-semibold text-xs">{flowNodes[5].label}</div>
                            </div>
                          </div>
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* 최종 단계 */}
                  <div className="flex flex-col items-center w-full max-w-md mt-4">
                    <div className="h-8 w-0.5 bg-slate-300 mb-2"></div>
                    <motion.button
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                      onClick={() => setSelectedNode(flowNodes[7].id)}
                      className={`w-full border-2 rounded-lg px-6 py-4 shadow-lg transition-all cursor-pointer ${getNodeStyle(flowNodes[7].color)} ${
                        selectedNode === flowNodes[7].id ? "ring-2 ring-offset-2 ring-slate-400 scale-105" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-slate-600" />
                        <div className="text-left flex-1">
                          <div className="font-semibold text-sm">{flowNodes[7].label}</div>
                          <div className="text-xs opacity-70 mt-0.5">{flowNodes[7].description}</div>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Detail Panel */}
                <div className="lg:w-80 shrink-0">
                  <div className="sticky top-4 bg-white rounded-lg border-2 border-slate-200 shadow-sm">
                    {selectedNode ? (
                      <motion.div
                        key={selectedNode}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-6"
                      >
                        {(() => {
                          const node = flowNodes.find(n => n.id === selectedNode);
                          if (!node) return null;
                          const Icon = getNodeIcon(node.type);
                          return (
                            <>
                              <div className={`flex items-center gap-2 mb-4 pb-3 border-b-2 ${node.color === 'slate' ? 'border-slate-200' : `border-${node.color}-200`}`}>
                                <Icon className={`w-5 h-5 ${getIconColor(node.color)}`} />
                                <h3 className="font-bold text-sm">{node.label}</h3>
                              </div>
                              <p className="text-sm text-slate-600 mb-4">{node.description}</p>
                              {node.details && (
                                <div>
                                  <div className="text-xs font-semibold text-slate-500 uppercase mb-2">세부 단계</div>
                                  <ul className="space-y-2">
                                    {node.details.map((detail, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                        <span className={`w-1.5 h-1.5 rounded-full ${node.color === 'slate' ? 'bg-slate-400' : `bg-${node.color}-400`} mt-1.5 shrink-0`}></span>
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </>
                          );
                        })()}
                      </motion.div>
                    ) : (
                      <div className="p-6 text-center text-slate-500">
                        <GitBranch className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                        <p className="text-sm">플로우 단계를 클릭하여<br/>상세 정보를 확인하세요</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 인사이트 섹션 */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-100">
              <div className="text-xs font-semibold text-indigo-600 uppercase mb-1">Process Automation</div>
              <div className="text-2xl font-bold text-indigo-900 mb-1">85%</div>
              <div className="text-xs text-slate-600">자동화율 향상</div>
            </div>
            <div className="p-4 rounded-lg bg-green-50 border border-green-100">
              <div className="text-xs font-semibold text-green-600 uppercase mb-1">Error Reduction</div>
              <div className="text-2xl font-bold text-green-900 mb-1">-67%</div>
              <div className="text-xs text-slate-600">수작업 오류 감소</div>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="text-xs font-semibold text-amber-600 uppercase mb-1">Response Time</div>
              <div className="text-2xl font-bold text-amber-900 mb-1">-40%</div>
              <div className="text-xs text-slate-600">처리 시간 단축</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}