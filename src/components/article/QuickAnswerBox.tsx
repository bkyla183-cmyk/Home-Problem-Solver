import { CheckCircle2 } from 'lucide-react';

interface QuickAnswerBoxProps {
  answer: string;
}

export function QuickAnswerBox({ answer }: QuickAnswerBoxProps) {
  return (
    <div className="bg-[#f2f7f4] border border-[#c3ded0] rounded-lg p-5 sm:p-6 my-6 shadow-xs">
      <div className="flex items-center gap-2 mb-2 text-[#0d5c46]">
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wider font-sans">
          Quick Diagnostic Answer
        </h2>
      </div>
      <p className="text-[#1c1d1f] text-base sm:text-lg leading-relaxed font-normal">
        {answer}
      </p>
    </div>
  );
}
