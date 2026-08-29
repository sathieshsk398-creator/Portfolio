import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  ShieldAlert, 
  Cpu, 
  FileJson, 
  Layers, 
  Sliders, 
  Zap, 
  RefreshCw,
  Calculator,
  Stethoscope,
  Clock,
  Car,
  AlertTriangle
} from 'lucide-react';
import { Project } from '../types';
import { DotMatrixRed } from './DotMatrixRed';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulator' | 'architecture'>('overview');
  
  // Simulator State for Car Damage Estimator
  const [carScenario, setCarScenario] = useState<'bumper' | 'fender' | 'windshield'>('bumper');
  const [isSimulatingCar, setIsSimulatingCar] = useState(false);
  const [carResult, setCarResult] = useState<any>(null);

  // Simulator State for Hospital Management
  const [symptomInput, setSymptomInput] = useState<'cardiac' | 'orthopedic' | 'general'>('cardiac');
  const [isSimulatingHospital, setIsSimulatingHospital] = useState(false);
  const [hospitalResult, setHospitalResult] = useState<any>(null);

  if (!project) return null;

  const handleSimulateCar = () => {
    setIsSimulatingCar(true);
    setCarResult(null);
    setTimeout(() => {
      if (carScenario === 'bumper') {
        setCarResult({
          detectedPart: 'Front Bumper Assembly',
          severity: 'Moderate Structural Dent & Crease',
          confidence: 0.962,
          oemPartCode: 'OEM-BMP-7742',
          basePartCost: 320,
          laborHours: 3.5,
          laborRate: 65,
          totalEstimate: 547.50,
          rawAiResponse: {
            damage_type: "impact_deformation",
            location: "front_bumper_fascia",
            confidence_score: 0.962,
            requires_replacement: true
          }
        });
      } else if (carScenario === 'fender') {
        setCarResult({
          detectedPart: 'Front Left Quarter Fender',
          severity: 'Paint Abrasion & Superficial Scoring',
          confidence: 0.948,
          oemPartCode: 'OEM-FND-1092',
          basePartCost: 180,
          laborHours: 2.0,
          laborRate: 65,
          totalEstimate: 310.00,
          rawAiResponse: {
            damage_type: "paint_abrasion_scratch",
            location: "front_left_fender",
            confidence_score: 0.948,
            requires_replacement: false
          }
        });
      } else {
        setCarResult({
          detectedPart: 'Laminated Acoustic Windshield',
          severity: 'Radial Impact Fracture (Unsafe)',
          confidence: 0.985,
          oemPartCode: 'OEM-GLS-9912',
          basePartCost: 450,
          laborHours: 2.5,
          laborRate: 75,
          totalEstimate: 637.50,
          rawAiResponse: {
            damage_type: "stress_fracture_spider",
            location: "front_windshield",
            confidence_score: 0.985,
            requires_replacement: true
          }
        });
      }
      setIsSimulatingCar(false);
    }, 900);
  };

  const handleSimulateHospital = () => {
    setIsSimulatingHospital(true);
    setHospitalResult(null);
    setTimeout(() => {
      if (symptomInput === 'cardiac') {
        setHospitalResult({
          triageLevel: 'Priority 1 (Emergency Acute)',
          department: 'Cardiology & Emergency Care',
          assignedDoctor: 'Dr. R. Vignesh (Chief Cardiologist)',
          allocatedSlot: 'Immediate (Room 104-ICU)',
          recommendedVitals: ['12-Lead ECG', 'Troponin-I Test', 'Continuous SpO2'],
          confidence: '99.1% Triage Match'
        });
      } else if (symptomInput === 'orthopedic') {
        setHospitalResult({
          triageLevel: 'Priority 2 (Urgent Non-Life Threatening)',
          department: 'Orthopedics & Trauma',
          assignedDoctor: 'Dr. M. Deepa (Orthopedic Surgeon)',
          allocatedSlot: 'Today 02:30 PM (Cabin 12)',
          recommendedVitals: ['Digital X-Ray Right Tibia', 'Pain Management Screen'],
          confidence: '96.4% Triage Match'
        });
      } else {
        setHospitalResult({
          triageLevel: 'Priority 3 (Standard Outpatient)',
          department: 'General Internal Medicine',
          assignedDoctor: 'Dr. K. Anand (Consultant Physician)',
          allocatedSlot: 'Today 04:15 PM (OPD Block B)',
          recommendedVitals: ['CBC Routine', 'Temperature & Blood Pressure Log'],
          confidence: '94.8% Triage Match'
        });
      }
      setIsSimulatingHospital(false);
    }, 850);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#141416] border border-[#242428] rounded-3xl shadow-2xl overflow-hidden text-zinc-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#242428] bg-[#141416]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-[#A1A1AA] hidden sm:inline font-bold">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subhead & Navigation Tabs */}
        <div className="px-6 pt-5 pb-3 bg-[#141416] border-b border-[#242428]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                {project.tagline}
              </p>
            </div>
            <DotMatrixRed cols={3} rows={2} size="w-1 h-1" />
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#EF4444] text-white shadow-lg shadow-red-900/30'
                  : 'bg-[#1A1A1E] text-[#A1A1AA] hover:text-white hover:bg-[#242428]'
              }`}
            >
              Overview & Specifications
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'simulator'
                  ? 'bg-[#EF4444] text-white shadow-lg shadow-red-900/30'
                  : 'bg-[#1A1A1E] text-[#A1A1AA] hover:text-white hover:bg-[#242428]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Engine Simulator</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-[#EF4444] text-white shadow-lg shadow-red-900/30'
                  : 'bg-[#1A1A1E] text-[#A1A1AA] hover:text-white hover:bg-[#242428]'
              }`}
            >
              System Architecture
            </button>
          </div>
        </div>

        {/* Modal Body with Scroll */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0D0D0D]">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Metric Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.keyMetrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#141416] border border-[#242428]">
                    <div className="text-2xl font-extrabold font-mono text-[#EF4444] tracking-tight">{metric.value}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{metric.label}</div>
                    {metric.subtext && <div className="text-[10px] text-[#A1A1AA] mt-0.5">{metric.subtext}</div>}
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] font-bold mb-2">
                  System Abstract
                </h4>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] font-bold mb-3">
                  Production Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-2xl bg-[#141416] border border-[#242428]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="p-5 rounded-2xl bg-[#141416] border border-[#EF4444]/30">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#EF4444] mb-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Engineering Solution to Non-Deterministic LLM Output</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {project.challengesSolved}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] font-bold mb-2">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#1A1A1E] text-[#A1A1AA] border border-[#242428]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATOR */}
          {activeTab === 'simulator' && (
            <div className="space-y-5">
              {project.id === 'ai-car-damage' ? (
                /* AI Car Damage Estimator Simulator */
                <div className="p-6 rounded-3xl bg-[#141416] border border-[#242428] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Car className="w-5 h-5 text-[#EF4444]" />
                      <h4 className="text-sm font-bold text-white">Multimodal Damage Classifier & Deterministic Calculator</h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Gemini Multimodal Logic
                    </span>
                  </div>

                  <p className="text-xs text-[#A1A1AA]">
                    Select a sample vehicle inspection scenario to simulate how the multimodal pipeline classifies the damaged component and passes the extracted tokens into the deterministic price matrix.
                  </p>

                  {/* Scenario selection */}
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setCarScenario('bumper')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        carScenario === 'bumper'
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white'
                          : 'bg-[#1A1A1E] border-[#242428] text-[#A1A1AA] hover:bg-[#242428]'
                      }`}
                    >
                      <div className="text-xs font-bold">Front Bumper</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5">Heavy dent & crease</div>
                    </button>

                    <button
                      onClick={() => setCarScenario('fender')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        carScenario === 'fender'
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white'
                          : 'bg-[#1A1A1E] border-[#242428] text-[#A1A1AA] hover:bg-[#242428]'
                      }`}
                    >
                      <div className="text-xs font-bold">Left Fender</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5">Paint scratch / scuff</div>
                    </button>

                    <button
                      onClick={() => setCarScenario('windshield')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        carScenario === 'windshield'
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white'
                          : 'bg-[#1A1A1E] border-[#242428] text-[#A1A1AA] hover:bg-[#242428]'
                      }`}
                    >
                      <div className="text-xs font-bold">Windshield</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5">Radial star crack</div>
                    </button>
                  </div>

                  <button
                    onClick={handleSimulateCar}
                    disabled={isSimulatingCar}
                    className="w-full py-3 rounded-full theme-pill-btn-red text-xs flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 cursor-pointer font-bold"
                  >
                    {isSimulatingCar ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Running Multimodal Tensor Inference...</span>
                      </>
                    ) : (
                      <>
                        <Calculator className="w-4 h-4" />
                        <span>Run AI Classification & Pricing Matrix</span>
                      </>
                    )}
                  </button>

                  {/* Result Box */}
                  {carResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#EF4444]/40 space-y-3 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-[#242428]">
                        <span className="text-[#A1A1AA]">Classification Confidence:</span>
                        <span className="text-emerald-400 font-bold">{(carResult.confidence * 100).toFixed(1)}% (95%+ Target Met)</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-[#52525B]">Component:</span>
                          <div className="text-zinc-200 font-bold">{carResult.detectedPart}</div>
                        </div>
                        <div>
                          <span className="text-[#52525B]">Damage Classification:</span>
                          <div className="text-amber-300 font-bold">{carResult.severity}</div>
                        </div>
                        <div>
                          <span className="text-[#52525B]">OEM Catalog Code:</span>
                          <div className="text-[#EF4444] font-bold">{carResult.oemPartCode}</div>
                        </div>
                        <div>
                          <span className="text-[#52525B]">Pricing Match:</span>
                          <div className="text-emerald-400 font-bold">Non-hallucinated Matrix</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#141416] border border-[#242428] space-y-1.5">
                        <div className="flex justify-between text-[#A1A1AA]">
                          <span>Base OEM Replacement Part:</span>
                          <span>${carResult.basePartCost.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[#A1A1AA]">
                          <span>Labor ({carResult.laborHours} hrs @ ${carResult.laborRate}/hr):</span>
                          <span>${(carResult.laborHours * carResult.laborRate).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-white font-bold pt-1.5 border-t border-[#242428] text-sm">
                          <span>Total Auditable Estimate:</span>
                          <span className="text-[#EF4444] font-bold">${carResult.totalEstimate.toFixed(2)}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                /* AI Hospital Management System Simulator */
                <div className="p-6 rounded-3xl bg-[#141416] border border-[#242428] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-[#EF4444]" />
                      <h4 className="text-sm font-bold text-white">Intelligent Triage & Scheduling Dispatcher</h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      10k+ Record Throughput Logic
                    </span>
                  </div>

                  <p className="text-xs text-[#A1A1AA]">
                    Test the clinical symptom triage logic that converts patient symptoms into urgent priority codes and allocates doctor slots.
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setSymptomInput('cardiac')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        symptomInput === 'cardiac'
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white'
                          : 'bg-[#1A1A1E] border-[#242428] text-[#A1A1AA] hover:bg-[#242428]'
                      }`}
                    >
                      <div className="text-xs font-bold text-red-400">Chest Pain & Dyspnea</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5">Acute triage assessment</div>
                    </button>

                    <button
                      onClick={() => setSymptomInput('orthopedic')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        symptomInput === 'orthopedic'
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white'
                          : 'bg-[#1A1A1E] border-[#242428] text-[#A1A1AA] hover:bg-[#242428]'
                      }`}
                    >
                      <div className="text-xs font-bold text-blue-400">Tibia Bone Fracture</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5">Trauma urgent routing</div>
                    </button>

                    <button
                      onClick={() => setSymptomInput('general')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        symptomInput === 'general'
                          ? 'bg-[#EF4444]/15 border-[#EF4444] text-white'
                          : 'bg-[#1A1A1E] border-[#242428] text-[#A1A1AA] hover:bg-[#242428]'
                      }`}
                    >
                      <div className="text-xs font-bold text-emerald-400">High Fever & Flu</div>
                      <div className="text-[10px] text-[#A1A1AA] mt-0.5">OPD general dispatch</div>
                    </button>
                  </div>

                  <button
                    onClick={handleSimulateHospital}
                    disabled={isSimulatingHospital}
                    className="w-full py-3 rounded-full theme-pill-btn-red font-bold text-xs text-white flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isSimulatingHospital ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Evaluating Clinical Priority & Specialist Schedule...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Run AI Clinical Triage & Smart Dispatch</span>
                      </>
                    )}
                  </button>

                  {hospitalResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-2xl bg-[#0D0D0D] border border-[#EF4444]/40 space-y-3 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-[#242428]">
                        <span className="text-[#A1A1AA]">Triage Classification:</span>
                        <span className="text-amber-400 font-bold">{hospitalResult.triageLevel}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-[#52525B]">Assigned Department:</span>
                          <div className="text-zinc-200 font-bold">{hospitalResult.department}</div>
                        </div>
                        <div>
                          <span className="text-[#52525B]">Attending Specialist:</span>
                          <div className="text-[#EF4444] font-bold">{hospitalResult.assignedDoctor}</div>
                        </div>
                        <div>
                          <span className="text-[#52525B]">Allocated Time Slot:</span>
                          <div className="text-emerald-400 font-bold">{hospitalResult.allocatedSlot}</div>
                        </div>
                        <div>
                          <span className="text-[#52525B]">Match Accuracy:</span>
                          <div className="text-emerald-400 font-bold">{hospitalResult.confidence}</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#141416] border border-[#242428]">
                        <div className="text-[10px] font-mono text-[#A1A1AA] uppercase font-bold mb-1.5">Automated Diagnostic Orders:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {hospitalResult.recommendedVitals.map((v: string) => (
                            <span key={v} className="px-2.5 py-1 rounded-full bg-white/5 text-[#EDEDED] border border-white/10 text-[10px] font-bold">
                              {v}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#A1A1AA] font-bold">
                Architectural Breakdown & Pipeline
              </h4>

              <div className="space-y-3">
                {project.architecturalHighlights.map((arch, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#141416] border border-[#242428] flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EF4444]/20 text-[#EF4444] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-[#EF4444]/30">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {arch}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 border-t border-[#242428] bg-[#141416] flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1A1A1E] hover:bg-[#242428] text-xs font-bold text-white transition-colors cursor-pointer border border-[#242428]"
          >
            Close Details
          </button>
        </div>
      </motion.div>
    </div>
  );
};
