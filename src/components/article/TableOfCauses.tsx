import { CauseItem } from '../../types';

interface TableOfCausesProps {
  causes: CauseItem[];
}

export function TableOfCauses({ causes }: TableOfCausesProps) {
  if (!causes || causes.length === 0) return null;

  return (
    <section id="causes-table" className="my-8">
      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1c1d1f] mb-3">
        Summary of Common Causes & Diagnostic Checks
      </h2>
      <p className="text-sm sm:text-base text-[#525355] mb-4">
        Review this diagnostic matrix to match what you are observing with the most probable mechanical or electrical root cause:
      </p>

      <div className="overflow-x-auto rounded-lg border border-[#e2e0da] shadow-xs">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#f2efe9] text-[#1c1d1f] border-b border-[#e2e0da]">
              <th scope="col" className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-1/3">
                Likely Cause
              </th>
              <th scope="col" className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-1/3">
                What You Will Notice
              </th>
              <th scope="col" className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-1/3">
                Initial Safe Check
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eceae4] bg-white">
            {causes.map((item, index) => (
              <tr key={index} className="hover:bg-[#faf9f6] transition-colors">
                <td className="py-3.5 px-4 font-medium text-[#1c1d1f] align-top">
                  {item.cause}
                </td>
                <td className="py-3.5 px-4 text-[#444548] align-top leading-relaxed">
                  {item.notice}
                </td>
                <td className="py-3.5 px-4 text-[#2d5746] align-top font-medium leading-relaxed">
                  {item.safeCheck}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
