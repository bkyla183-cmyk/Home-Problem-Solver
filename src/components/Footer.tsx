import { Wrench, ShieldAlert } from 'lucide-react';
import { Link } from '../utils/router';
import { CATEGORIES } from '../data/categories';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141517] text-[#c9cacd] border-t border-[#26282b] mt-16">
      {/* Informational & Safety Disclaimer Strip */}
      <div className="bg-[#1c1e21] border-b border-[#292c30] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-3.5 text-xs text-[#9d9ea2] leading-relaxed">
          <div className="flex items-center gap-2 text-[#e3a857] font-semibold flex-shrink-0">
            <ShieldAlert className="w-4 h-4" aria-hidden="true" />
            <span>Important Homeowner Safety Disclaimer:</span>
          </div>
          <p className="flex-1">
            Home Problem Solver provides diagnostic checklists and maintenance information for educational purposes only.
            Certain troubleshooting tasks involve live 240V electrical circuits, flammable gas lines, pressurized refrigerants,
            and toxic carbon monoxide. Always consult a licensed, certified HVAC technician or appliance repair professional
            whenever a diagnostic step requires disassembling high-voltage compartments or handling gas valves.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#0d5c46] text-white flex items-center justify-center">
                <Wrench className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-serif font-black tracking-tight text-xl text-white">
                HOME PROBLEM SOLVER
              </span>
            </div>
            <p className="text-sm text-[#9a9ba0] leading-relaxed max-w-sm">
              A practical home troubleshooting and maintenance resource for American homeowners. Clear, step-by-step answers
              and safety-first diagnostics for HVAC and major household systems.
            </p>
            <div className="text-xs text-[#78797e]">
              Based in the United States &bull; Independent Consumer Information
            </div>
          </div>

          {/* HVAC Topics */}
          <div>
            <div className="font-semibold text-xs uppercase tracking-wider text-[#e8e9ec] mb-3.5">
              HVAC Systems
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hvac/" className="hover:text-white transition-colors">
                  All HVAC Guides
                </Link>
              </li>
              <li>
                <Link href="/hvac/air-conditioning/" className="hover:text-white transition-colors">
                  Air Conditioning
                </Link>
              </li>
              <li>
                <Link href="/hvac/furnace/" className="hover:text-white transition-colors">
                  Furnaces & Heating
                </Link>
              </li>
              <li>
                <Link href="/maintenance/" className="hover:text-white transition-colors">
                  HVAC Maintenance
                </Link>
              </li>
              <li>
                <Link href="/maintenance/how-often-change-hvac-filter/" className="hover:text-white transition-colors">
                  Filter Schedule Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Appliance Topics */}
          <div>
            <div className="font-semibold text-xs uppercase tracking-wider text-[#e8e9ec] mb-3.5">
              Appliances
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/appliances/" className="hover:text-white transition-colors">
                  All Appliance Guides
                </Link>
              </li>
              <li>
                <Link href="/appliances/refrigerator/" className="hover:text-white transition-colors">
                  Refrigerators
                </Link>
              </li>
              <li>
                <Link href="/appliances/washer/" className="hover:text-white transition-colors">
                  Washing Machines
                </Link>
              </li>
              <li>
                <Link href="/appliances/dryer/" className="hover:text-white transition-colors">
                  Clothes Dryers
                </Link>
              </li>
              <li>
                <Link href="/appliances/dishwasher/" className="hover:text-white transition-colors">
                  Dishwashers
                </Link>
              </li>
              <li>
                <Link href="/appliances/oven/" className="hover:text-white transition-colors">
                  Ovens & Ranges
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Legal */}
          <div>
            <div className="font-semibold text-xs uppercase tracking-wider text-[#e8e9ec] mb-3.5">
              Trust & Policies
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-white transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/advertising-policy/" className="hover:text-white transition-colors">
                  Advertising Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy/" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-[#232528] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#717277]">
          <div>
            &copy; {currentYear} Home Problem Solver. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy/" className="hover:underline">Privacy</Link>
            <span>&bull;</span>
            <Link href="/terms/" className="hover:underline">Terms</Link>
            <span>&bull;</span>
            <Link href="/editorial-policy/" className="hover:underline">Editorial</Link>
            <span>&bull;</span>
            <Link href="/advertising-policy/" className="hover:underline">Advertising</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
