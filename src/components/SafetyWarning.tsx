import { AlertTriangle, ShieldCheck, Flame, Zap } from 'lucide-react';
import { SafetyLevel } from '../types';

interface SafetyWarningProps {
  level?: SafetyLevel;
  customMessage?: string;
  className?: string;
}

export function SafetyWarning({ level = 'moderate', customMessage, className = '' }: SafetyWarningProps) {
  const isHighDanger = level === 'high' || level === 'danger';

  return (
    <aside
      role="note"
      aria-label="Safety Notice"
      className={`rounded-lg border p-4 sm:p-5 my-6 transition-all ${
        isHighDanger
          ? 'bg-[#fff8f6] border-[#f0c2b8] text-[#331c19]'
          : 'bg-[#f6f8fa] border-[#dbe1e8] text-[#1c2833]'
      } ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div
          className={`p-2 rounded-md flex-shrink-0 ${
            isHighDanger ? 'bg-[#fed7ce] text-[#a82a17]' : 'bg-[#e3ebf3] text-[#1f4e79]'
          }`}
        >
          {isHighDanger ? (
            <AlertTriangle className="w-5 h-5" aria-hidden="true" />
          ) : (
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          )}
        </div>
        <div className="flex-1 text-sm leading-relaxed">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className={`font-semibold tracking-wide text-xs uppercase px-2 py-0.5 rounded ${
                isHighDanger ? 'bg-[#fadad3] text-[#8e200f]' : 'bg-[#dce6f0] text-[#1d466c]'
              }`}
            >
              {isHighDanger ? 'Safety Warning: Hazardous Systems' : 'Homeowner Safety Notice'}
            </span>
          </div>

          <p className="font-medium text-[#1c1d1f] mb-1">
            {customMessage ||
              'Always prioritize personal safety. Certain HVAC and appliance troubleshooting steps involve 240V electricity, natural gas, combustible gases, or pressurized refrigerant lines.'}
          </p>

          <p className="text-[#4a4b4d] text-xs sm:text-sm">
            Never dismantle sealed gas valves, bypass electrical safety interlocks, or attempt DIY refrigerant charging.
            If a procedure feels uncertain or requires opening sealed electrical compartments, always hire a licensed,
            certified technician.
          </p>

          <div className="mt-3 pt-2.5 border-t border-[#000000]/10 flex flex-wrap gap-4 text-xs font-medium text-[#5a5b5e]">
            <span className="inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#b8860b]" aria-hidden="true" /> High Voltage Precautions
            </span>
            <span className="inline-flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#c0392b]" aria-hidden="true" /> Gas & Carbon Monoxide Alert
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
