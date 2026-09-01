import React from 'react';
import { motion } from 'motion/react';
import { DotMatrixRed } from './DotMatrixRed';

export const MetricsBanner: React.FC = () => {
  const metrics = [
    {
      value: "120+",
      label: "LeetCode",
      sublabel: "Problems Solved"
    },
    {
      value: "95%",
      label: "AI Accuracy",
      sublabel: "Gemini Vision Model"
    },
    {
      value: "2",
      label: "Patents Published",
      sublabel: "Biometric IP"
    },
    {
      value: "24/7",
      label: "Open for Work",
      sublabel: "Class of 2027"
    }
  ];

  return (
    <section id="metrics" className="py-8 px-4 sm:px-6 relative">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#141416] hover:bg-[#17171B] border border-[#242428] hover:border-red-500/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300 ease-in-out relative overflow-hidden"
        >
          {/* Left Red Dot Matrix (Figma signature) */}
          <div className="hidden lg:block">
            <DotMatrixRed cols={3} rows={2} size="w-1.5 h-1.5" />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full">
            {metrics.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 sm:gap-4 justify-start md:justify-center border-l md:border-l-0 md:first:border-l-0 pl-3 md:pl-0 border-[#242428] p-2 rounded-2xl hover:bg-white/[0.03] hover:scale-[1.03] transition-all duration-300 ease-in-out"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight shrink-0 font-mono">
                  {item.value}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold text-[#EDEDED] leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A1A1AA] leading-tight font-medium">
                    {item.sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Red Dot Matrix (Figma signature) */}
          <div className="hidden lg:block">
            <DotMatrixRed cols={3} rows={2} size="w-1.5 h-1.5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
