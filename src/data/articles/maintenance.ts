import { Article } from '../../types';

export const MAINTENANCE_ARTICLES: Article[] = [
  {
    id: 'maint-17',
    title: 'How Often Should You Change an HVAC Filter? (Real-World Guidelines)',
    slug: 'how-often-change-hvac-filter',
    path: '/maintenance/how-often-change-hvac-filter/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'HVAC Filters',
    subcategorySlug: 'filters',
    description: 'Learn the real replacement frequency for 1-inch, 2-inch, and 4-inch HVAC filters based on household pets, allergies, filter thickness, and seasonal system usage.',
    excerpt: 'While the general rule is every 90 days for 1-inch filters, homes with pets or high allergy sensitivities require replacement every 30 to 60 days. Deep media filters last 6 to 12 months.',
    quickAnswer: 'As a baseline rule: replace standard 1-inch pleated filters every 90 days in average homes, every 60 days if you have one pet, and every 30 to 45 days if you have multiple pets or allergy sufferers. Thicker 4-inch to 5-inch media filters last 6 to 12 months.',
    introduction: [
      'Changing your HVAC filter is the single most important and cost-effective maintenance task any homeowner can perform. Yet millions of homeowners forget about this routine chore until their air conditioner freezes into a solid block of ice or their furnace shuts down on high-limit overheat.',
      'The generic advice printed on cardboard filter frames often says "replaces in 90 days," but that recommendation is calculated for a single occupant living in a dust-free home with zero pets and moderate weather.',
      'In reality, your ideal filter change frequency depends on filter thickness, the number of dogs or cats in the home, regional pollen counts, and whether your HVAC system runs continuously or intermittently.'
    ],
    tableOfCauses: [
      {
        cause: 'Single Occupant, No Pets (1" Filter)',
        notice: 'Light dust collection on surface after 60 days',
        safeCheck: 'Replace every 90 to 120 days'
      },
      {
        cause: 'Average Suburban Home (1" Filter)',
        notice: 'Noticeable gray film and fiber dust after 45 days',
        safeCheck: 'Replace every 60 to 90 days'
      },
      {
        cause: 'Home with 1 Dog or Cat (1" Filter)',
        notice: 'Pet hair and dander trapped across pleats after 30 days',
        safeCheck: 'Replace every 45 to 60 days'
      },
      {
        cause: 'Multiple Pets / Severe Allergies (1" Filter)',
        notice: 'Filter face dark gray; airflow noticeably dropping at vents',
        safeCheck: 'Replace every 30 days'
      },
      {
        cause: 'Deep Media Filter (4" to 5" Thickness)',
        notice: 'Heavy pleat surface area allows high capacity before resistance spikes',
        safeCheck: 'Replace every 6 to 12 months (inspect at 6 months)'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check Your Filter Thickness and Dimensions',
        explanation: 'Note the exact dimensions printed on the edge (e.g., 16x25x1 or 20x25x4). A 1-inch filter has a fraction of the surface area of a 4-inch deep pleated media filter.'
      },
      {
        stepNumber: 2,
        title: 'Perform the Visual Flashlight Test',
        explanation: 'Pull the filter out. Hold a flashlight behind it. If light cannot easily pass through the fabric and you cannot see the silhouette of your hand on the other side, the filter is choked and must be replaced.'
      },
      {
        stepNumber: 3,
        title: 'Check Airflow Directional Arrow',
        explanation: 'Look at the cardboard frame for the printed airflow arrow. The arrow MUST point toward the blower motor/furnace (the direction air flows), not toward the return duct.'
      },
      {
        stepNumber: 4,
        title: 'Set a Recurring Calendar Alert',
        explanation: 'Write the installation date directly on the cardboard frame with a permanent marker. Set a smartphone reminder to check it on the 1st of every month during peak heating and cooling seasons.'
      }
    ],
    safeChecks: [
      'Ensure the filter fits snugly in the slot without bending, bowing, or air gaps around the perimeter.',
      'Check that the filter access door or slide latch closes tightly.'
    ],
    whatNotToDo: [
      'Never wash and reuse disposable cardboard pleated filters; the cardboard weakens and gets sucked into the blower wheel.',
      'Do not install two 1-inch filters stacked together thinking it filters twice as much; this creates extreme static pressure that damages blower motors.',
      'Do not operate your heating or cooling system without a filter installed.'
    ],
    whenToCallProfessional: [
      'The filter gets sucked into the blower compartment repeatedly due to high negative static pressure.',
      'The evaporator coil is packed with dirt because previous owners ran the unit without filters.',
      'You need a whole-house 4-inch media cabinet installed to improve filtration without choking airflow.'
    ],
    faqs: [
      {
        question: 'What happens if you never change your HVAC filter?',
        answer: 'Restricted airflow causes your AC evaporator coil to freeze into a block of ice in summer and causes your furnace heat exchanger to overheat and shut down in winter. It also increases energy consumption by up to 15% and leads to blower motor failure.'
      },
      {
        question: 'Which way does the arrow point on an AC filter?',
        answer: 'The arrow always points in the direction of the airflow—which means pointing TOWARD the furnace or air handler blower motor.'
      }
    ],
    relatedArticleSlugs: [
      'how-to-choose-hvac-filter',
      'how-to-improve-hvac-airflow',
      'why-is-my-ac-not-cooling',
      'furnace-short-cycling'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/maintaining-your-air-conditioner', description: 'Air Conditioner Filter Maintenance and Efficiency' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov', description: 'Guide to Proper Air Filter Maintenance' },
      { name: 'EPA (Environmental Protection Agency)', url: 'https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home', description: 'Residential Air Cleaners and Filter MERV Ratings' }
    ],
    publishedDate: '2025-05-28',
    updatedDate: '2025-08-15',
    readingTime: '6 min read',
    keywords: ['how often change hvac filter', 'air filter replacement frequency', 'furnace filter how often', 'ac filter schedule'],
    safetyLevel: 'low',
    safetyNotice: 'Always turn off power to the HVAC unit before reaching into filter slots near moving blower wheels.'
  },
  {
    id: 'maint-18',
    title: 'How to Choose the Right HVAC Filter: MERV Ratings Explained',
    slug: 'how-to-choose-hvac-filter',
    path: '/maintenance/how-to-choose-hvac-filter/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'HVAC Filters',
    subcategorySlug: 'filters',
    description: 'Understand MERV ratings from 1 to 16. Learn how to choose the right filter for pet dander, dust, and allergies without suffocating your HVAC blower motor.',
    excerpt: 'Higher MERV ratings catch smaller particles, but ratings above MERV 11 can severely restrict airflow in standard residential systems. Here is how to find the sweet spot.',
    quickAnswer: 'For most residential central HVAC systems, a MERV 8 to MERV 11 pleated filter provides the ideal balance between capturing dust, pollen, and pet dander while maintaining safe airflow for your blower motor. Avoid ultra-cheap fiberglass filters (MERV 1-4) and beware of 1-inch MERV 13+ filters unless your ductwork is designed for high static pressure.',
    introduction: [
      'Walking down the filter aisle at your local home improvement center presents a bewildering array of numbers: MERV 8, MERV 11, MERV 13, MPR 1000, FPR 7, and prices ranging from $4 to $35 each.',
      'The primary original purpose of an HVAC filter was not to purify your breathing air, but to protect the internal blower wheel and delicate evaporator coil fins from accumulating an insulating blanket of dust.',
      'Modern high-efficiency filters can significantly improve indoor air quality, but choosing too restrictive a filter can choke your HVAC system of air, spiking energy bills and causing premature equipment failure. Here is how to choose correctly.'
    ],
    tableOfCauses: [
      {
        cause: 'MERV 1 to 4 (Basic Fiberglass)',
        notice: 'Cheap blue see-through mesh; captures only large lint and carpet fibers',
        safeCheck: 'Protects equipment minimally; does not capture pollen, dust mites, or pet dander'
      },
      {
        cause: 'MERV 5 to 8 (Standard Pleated)',
        notice: 'Quality synthetic pleated media; captures mold spores, dust mites, pet dander',
        safeCheck: 'Best general choice for standard residential systems with low static pressure'
      },
      {
        cause: 'MERV 9 to 11 (Superior Residential)',
        notice: 'Tighter weave; captures lead dust, auto emissions, legionella, small pet allergens',
        safeCheck: 'Great for pet owners and mild allergy sufferers; inspect airflow resistance'
      },
      {
        cause: 'MERV 12 to 16 (Hospital / Clean Room)',
        notice: 'Catches bacteria, tobacco smoke, virus carriers, and fine sneeze droplets',
        safeCheck: 'Recommended ONLY in 4" to 5" deep media cabinets or verified low-static systems'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check Your Equipment Manual for Maximum Static Pressure',
        explanation: 'Most residential residential air handlers and furnaces are designed for total external static pressure (TESP) of 0.50 inches water column (wc). A 1-inch MERV 13 filter can eat up 0.30 inches of that alone.'
      },
      {
        stepNumber: 2,
        title: 'Compare 1-Inch vs. 4-Inch Media Cabinets',
        explanation: 'A 4-inch deep filter has roughly 3 to 4 times the total pleat surface area of a 1-inch filter. This allows higher MERV filtration (like MERV 11 or 13) with significantly LESS airflow resistance.'
      },
      {
        stepNumber: 3,
        title: 'Avoid Washable Electrostatic Filters in Humid Climates',
        explanation: 'Plastic washable filters are difficult to dry completely, which can introduce moisture and mold spores directly into your supply ductwork.'
      }
    ],
    safeChecks: [
      'Feel the air volume coming out of supply vents after installing a new filter model to verify airflow has not plummeted.',
      'Ensure the filter does not whistle or flap in the housing.'
    ],
    whatNotToDo: [
      'Do not buy the highest MERV rating available simply thinking "higher is always better." An over-restrictive filter can burn out your ECM blower motor.',
      'Do not use fiberglass spun "furnace filters" if you have pet allergies.'
    ],
    whenToCallProfessional: [
      'You want to upgrade from a 1-inch filter rack to a 4-inch or 5-inch whole-home media cabinet.',
      'Your furnace high-limit switch trips whenever you install any pleated filter.'
    ],
    faqs: [
      {
        question: 'What MERV rating is best for home HVAC?',
        answer: 'MERV 8 to MERV 11 is the sweet spot for the vast majority of residential homes. It captures 85%+ of airborne allergens without restricting airflow.'
      },
      {
        question: 'Can a MERV 13 filter damage an air conditioner?',
        answer: 'Yes, if it is a 1-inch thick MERV 13 filter installed in a duct system with high static pressure. The restriction can cause the evaporator coil to freeze and the compressor to overheat.'
      }
    ],
    relatedArticleSlugs: [
      'how-often-change-hvac-filter',
      'how-to-improve-hvac-airflow',
      'why-is-my-ac-not-cooling'
    ],
    sources: [
      { name: 'EPA (Environmental Protection Agency)', url: 'https://www.epa.gov/indoor-air-quality-iaq/what-merv-rating-1', description: 'What is a MERV Rating?' },
      { name: 'ASHRAE', url: 'https://www.ashrae.org', description: 'Standard 52.2: Method of Testing General Ventilation Air-Cleaning Devices' }
    ],
    publishedDate: '2025-05-30',
    updatedDate: '2025-08-10',
    readingTime: '7 min read',
    keywords: ['how to choose hvac filter', 'merv ratings explained', 'best furnace filter rating', 'merv 8 vs 11 vs 13'],
    safetyLevel: 'low',
    safetyNotice: 'Never insert hands into filter slots while the furnace blower motor is actively rotating.'
  },
  {
    id: 'maint-19',
    title: 'How Often Should HVAC Be Serviced? (The Annual Maintenance Rule)',
    slug: 'how-often-hvac-serviced',
    path: '/maintenance/how-often-hvac-serviced/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'Maintenance',
    subcategorySlug: 'maintenance',
    description: 'Learn the recommended maintenance frequency for heating and cooling systems, what a real tune-up covers, and how professional service preserves manufacturer warranties.',
    excerpt: 'HVAC systems should be professionally serviced twice a year: once in spring for air conditioning, and once in autumn for heating. Here is what a true inspection entails.',
    quickAnswer: 'HVAC systems should be professionally serviced twice per year: an AC inspection in the spring before hot weather arrives, and a furnace or heating inspection in the fall before winter. If you own a heat pump that handles both seasons, schedule service twice annually.',
    introduction: [
      'Your heating and cooling system runs for thousands of hours each year. Just like an automobile driven 20,000 miles, mechanical components loosen, motor capacitors drift out of tolerance, electrical contactors pit, and coils accumulate dirt.',
      'Regular HVAC maintenance is not an unnecessary upsell: it catches small component failures before they destroy expensive compressors or heat exchangers, preserves manufacturer warranties, and optimizes seasonal energy efficiency.',
      'Here is what homeowners need to know about professional service frequency and what a legitimate technician should inspect.'
    ],
    tableOfCauses: [
      {
        cause: 'Spring Service (Air Conditioning / Heat Pump Cooling)',
        notice: 'Pre-summer tune-up; outdoor condenser clean, capacitor test, refrigerant check',
        safeCheck: 'Best scheduled in March through May before initial 85°F+ heat'
      },
      {
        cause: 'Fall Service (Gas Furnace / Heat Pump Heating)',
        notice: 'Pre-winter tune-up; heat exchanger inspection, flame sensor clean, CO test',
        safeCheck: 'Best scheduled in September through November before first freeze'
      },
      {
        cause: 'Heat Pump Systems (Dual Season)',
        notice: 'Equipment works 365 days a year in both cooling and heating modes',
        safeCheck: 'Must be serviced twice annually (spring and fall)'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Spring Checklist Tasks for Technicians',
        explanation: 'A comprehensive spring tune-up includes testing run capacitors with a capacitance meter, cleaning outdoor condenser coils, inspecting contactors for electrical pitting, testing the condensate drain float switch, and measuring refrigerant superheat/subcooling.'
      },
      {
        stepNumber: 2,
        title: 'Fall Checklist Tasks for Technicians',
        explanation: 'A proper fall furnace tune-up includes cleaning the flame sensor rod, inspecting the heat exchanger for hairline cracks, checking manifold gas pressure, testing safety limit and rollout switches, and conducting a combustion flue carbon monoxide test.'
      },
      {
        stepNumber: 3,
        title: 'Homeowner Monthly Tasks Between Tune-Ups',
        explanation: 'Homeowners should inspect air filters monthly, clear leaves and shrubs 2 feet away from outdoor units, verify clear condensate drainage, and ensure all indoor supply vents remain unblocked.'
      }
    ],
    safeChecks: [
      'Verify that the service technician provides a written checklist detailing capacitor microfarad readings and temperature splits.',
      'Ask whether your equipment warranty requires documented annual maintenance.'
    ],
    whatNotToDo: [
      'Do not hire companies that advertise "$19 whole-house tune-ups"; these are frequently bait-and-switch sales pitches designed to push unneeded new systems.',
      'Do not skip maintenance because "the unit is brand new"; new system warranties almost universally mandate annual service records.'
    ],
    whenToCallProfessional: [
      'Schedule routine maintenance every spring and fall.',
      'Call immediately if equipment displays strange buzzing, burning odors, or sudden capacity loss.'
    ],
    faqs: [
      {
        question: 'Is annual HVAC maintenance really necessary?',
        answer: 'Yes. Regular maintenance prevents up to 85% of unexpected breakdowns, maintains manufacturer warranty validity, and keeps electrical efficiency at factory design levels.'
      },
      {
        question: 'What is the average cost of an HVAC tune-up in the US?',
        answer: 'A standard professional maintenance inspection typically ranges between $80 and $150 per system, or $150 to $250 annually when bundled in a maintenance agreement.'
      }
    ],
    relatedArticleSlugs: [
      'how-often-change-hvac-filter',
      'how-long-does-an-ac-unit-last',
      'ac-repair-vs-replacement',
      'why-is-my-ac-not-cooling'
    ],
    sources: [
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/products/heating_cooling/maintenance_checklist', description: 'Maintenance Checklist for Heating and Cooling Systems' },
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/maintaining-your-air-conditioner', description: 'Professional Air Conditioner Maintenance Guidelines' }
    ],
    publishedDate: '2025-06-02',
    updatedDate: '2025-08-12',
    readingTime: '6 min read',
    keywords: ['how often should hvac be serviced', 'hvac tune up frequency', 'ac maintenance schedule', 'furnace tune up'],
    safetyLevel: 'low',
    safetyNotice: 'Never attempt to clean internal gas burner manifolds or electrical contactors yourself. Hire a licensed HVAC professional.'
  },
  {
    id: 'maint-20',
    title: 'How Long Does an AC Unit Last? Lifespan Factors and Reality',
    slug: 'how-long-does-an-ac-unit-last',
    path: '/maintenance/how-long-does-an-ac-unit-last/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'Maintenance',
    subcategorySlug: 'maintenance',
    description: 'Learn the true average lifespan of residential central air conditioners in different American climate zones, and what factors cause premature failure.',
    excerpt: 'Central air conditioners last an average of 12 to 17 years. In hot southern climates or coastal salt zones, expect 10 to 12 years; in milder northern regions, 15 to 20 years.',
    quickAnswer: 'The average lifespan of a residential central air conditioner is 12 to 17 years. In harsh environments (such as humid southern states like Florida or Texas, or coastal areas with ocean salt spray), lifespan drops to 10 to 12 years. In moderate northern states with regular filter changes, units can reach 18 to 20 years.',
    introduction: [
      'Replacing a central air conditioning system is one of the largest capital expenditures a homeowner will encounter, often costing between $5,000 and $12,000+. Knowing how long your unit is expected to last helps you plan ahead and avoid emergency financing in the middle of a July heat wave.',
      'Equipment longevity is not just a matter of manufacturer quality. Factors like geographic climate, coastal salt air, duct design, sizing accuracy, and filter maintenance dictate whether your system survives 10 years or 20 years.',
      'Here is a realistic breakdown of HVAC lifespan expectations across the United States.'
    ],
    tableOfCauses: [
      {
        cause: 'Mild Northern / Midwest Climates',
        notice: 'AC runs 3 to 4 months per year; lower mechanical run-hours',
        safeCheck: 'Expected lifespan: 15 to 20 years with annual maintenance'
      },
      {
        cause: 'Hot Southern / Sunbelt Climates',
        notice: 'AC runs 7 to 9 months per year; extreme thermal cycles',
        safeCheck: 'Expected lifespan: 10 to 14 years'
      },
      {
        cause: 'Coastal Salt Air Environments (Within 3 Miles of Ocean)',
        notice: 'Corrosive airborne salt rapidly pits and deteriorates aluminum coil fins',
        safeCheck: 'Expected lifespan: 7 to 11 years (unless marine-coated coils installed)'
      },
      {
        cause: 'Neglected Maintenance (No Filter Changes)',
        notice: 'Overheated compressors and strained fan motors from restricted airflow',
        safeCheck: 'Lifespan reduced by 30% to 50% across all climates'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Find Your AC Age on the Outdoor Nameplate',
        explanation: 'Locate the metal manufacturer sticker on the side of your outdoor condenser. Look for "MFR DATE" or decode the serial number (e.g., Carrier often uses the first two digits for week and next two for year; Goodman uses the first two digits for year).'
      },
      {
        stepNumber: 2,
        title: 'Assess Maintenance History',
        explanation: 'A 12-year-old system with documented annual tune-ups and regular filter changes often has more remaining operating life than an 8-year-old system run on clogged filters.'
      },
      {
        stepNumber: 3,
        title: 'Identify the Refrigerant Type (R-22 vs. R-410A)',
        explanation: 'If the nameplate indicates "R-22", the unit is virtually guaranteed to be at least 15 years old, as R-22 equipment manufacturing was halted in 2010.'
      }
    ],
    safeChecks: [
      'Inspect the aluminum fins on the outdoor coil for brittleness or crumbling.',
      'Check whether utility bills have steadily increased over the past 3 summers.'
    ],
    whatNotToDo: [
      'Do not spend $2,000+ on a compressor replacement on an AC unit over 12 years old.',
      'Do not assume a 15-year-old system needs replacement immediately if it is operating smoothly and maintaining temperature.'
    ],
    whenToCallProfessional: [
      'Your AC is over 12-15 years old and experiencing frequent component breakdowns.',
      'The outdoor condenser coil fins are crumbling to dust upon gentle touch.'
    ],
    repairVsReplacement: {
      explanation: 'Use the 5,000 Rule: Age of equipment multiplied by repair estimate. If a 12-year-old unit requires an $800 repair (12 x 800 = 9,600), replacement is strongly favored over repair.',
      factors: [
        { name: 'Under 10 Years Old', advice: 'Repair almost always recommended.' },
        { name: '10 to 15 Years Old', advice: 'Repair minor parts (capacitors, contactors); consider replacement for major failures (compressor, coil).' },
        { name: 'Over 15 Years Old', advice: 'Plan proactive replacement; modern SEER2 units save significant electricity.' }
      ]
    },
    faqs: [
      {
        question: 'Can an AC unit last 25 years?',
        answer: 'While rare, some units in northern states with immaculate maintenance have reached 25 years. However, energy efficiency on 20+ year old units is typically terrible compared to modern standards.'
      },
      {
        question: 'What usually fails first on an AC?',
        answer: 'The most common early failure components are dual-run capacitors, fan motors, and contactors. The final fatal failure is usually compressor burnout or an unrepairable refrigerant leak in the coil.'
      }
    ],
    relatedArticleSlugs: [
      'signs-ac-needs-replacement',
      'ac-repair-vs-replacement',
      'how-often-hvac-serviced',
      'why-is-my-ac-not-cooling'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Air Conditioning System Lifespan and Energy Standards' }
    ],
    publishedDate: '2025-06-05',
    updatedDate: '2025-08-11',
    readingTime: '6 min read',
    keywords: ['how long does an ac unit last', 'ac unit lifespan', 'central air conditioner life expectancy', 'when to replace ac'],
    safetyLevel: 'low',
    safetyNotice: 'Never open electrical service panels on aging units; wiring insulation can become brittle over time.'
  },
  {
    id: 'maint-21',
    title: 'Signs Your AC Needs Replacement: 7 Clear Warning Indicators',
    slug: 'signs-ac-needs-replacement',
    path: '/maintenance/signs-ac-needs-replacement/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'Maintenance',
    subcategorySlug: 'maintenance',
    description: 'Learn the 7 definitive warning signs that your central air conditioner is nearing the end of its life, from escalating repair costs to humidity failure.',
    excerpt: 'Frequent breakdowns, climbing electric bills, loud grinding noises, and an inability to remove humidity indicate your cooling system is ready for replacement.',
    quickAnswer: 'The 7 clearest signs an AC needs replacement are: 1) System age over 12-15 years, 2) It uses banned R-22 Freon, 3) Frequent costly repairs in recent years, 4) Skyrocketing electricity bills, 5) Inability to keep up with humidity, 6) Major compressor failure, and 7) Extensive refrigerant coil corrosion.',
    introduction: [
      'No homeowner wants to hear that their air conditioning system has reached the end of its functional life. But replacing an aged, dying system proactively on your own timeline is far superior to enduring an emergency breakdown during a holiday weekend heat wave.',
      'Continuing to nurse an antiquated system along with repetitive $500 to $1,500 service calls is a sunk-cost trap that quickly consumes the budget of a new, highly efficient system.',
      'Here are the 7 definitive indicators that your air conditioner is ready for retirement.'
    ],
    tableOfCauses: [
      {
        cause: 'Sign 1: Equipment Age Exceeds 12-15 Years',
        notice: 'Operating past median national design lifespan; mechanical tolerances degraded',
        safeCheck: 'Check manufacture date on outdoor data plate'
      },
      {
        cause: 'Sign 2: System Uses R-22 Freon',
        notice: 'EPA banned R-22 production in 2020; refilling leaks costs $150-$200+ per pound',
        safeCheck: 'Check refrigerant type stamped on compressor sticker'
      },
      {
        cause: 'Sign 3: Climbing Summer Utility Bills',
        notice: 'Energy bills increase 20-30% year-over-year despite identical outdoor temperatures',
        safeCheck: 'SEER efficiency degrades as coils corrode and compressor valves wear'
      },
      {
        cause: 'Sign 4: Frequent Breakdowns (The "Money Pit")',
        notice: 'Technician visited last summer for capacitor, this summer for fan motor',
        safeCheck: 'Tally total repair bills over the last 36 months'
      },
      {
        cause: 'Sign 5: High Indoor Humidity and Clamminess',
        notice: 'Home feels cool but damp; system short cycles or cannot extract moisture',
        safeCheck: 'Check indoor relative humidity with a hygrometer (should be 40-50%)'
      },
      {
        cause: 'Sign 6: Excessive Dust and Inconsistent Room Temperatures',
        notice: 'Upstairs is 80°F while downstairs is 72°F; constant dust buildup',
        safeCheck: 'Indicates failing airflow dynamics and aged duct connections'
      },
      {
        cause: 'Sign 7: Major Compressor or Coil Failure',
        notice: 'Seized compressor or corroded evaporator coil leaking at multiple joints',
        safeCheck: 'Major component replacement alone costs $2,500-$4,000'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Calculate Your Cumulative Repair Costs',
        explanation: 'Add up what you have spent on service calls, freon top-offs, and parts over the last three years. If the total exceeds 50% of the cost of a new system, replacement is overdue.'
      },
      {
        stepNumber: 2,
        title: 'Check Refrigerant Label on the Outdoor Unit',
        explanation: 'Look for "R-22" or "HCFC-22". If your unit requires R-22, any refrigerant leak essentially seals the death of the system due to the phase-out.'
      },
      {
        stepNumber: 3,
        title: 'Obtain Multiple Bids Before Peak Season',
        explanation: 'If your unit is showing multiple warning signs, get three written estimates in late winter or early spring when HVAC contractors have promotional rebates and flexible scheduling.'
      }
    ],
    safeChecks: [
      'Check if your local electric utility offers rebates for upgrading to high-SEER2 or heat pump equipment.',
      'Check the federal Energy Efficient Home Improvement Credit (Section 25C) for potential tax credits up to $2,000.'
    ],
    whatNotToDo: [
      'Do not replace just the outdoor unit while keeping a 15-year-old indoor coil. Mismatched systems suffer poor efficiency and premature compressor burnout.',
      'Do not wait until the system dies completely in 100°F weather when equipment availability is constrained.'
    ],
    whenToCallProfessional: [
      'Your system exhibits two or more warning signs and you want an honest equipment assessment and Manual J load calculation.',
      'The compressor has mechanically grounded, the evaporator coil is leaking refrigerant, or repair estimates exceed half the cost of a modern replacement.'
    ],
    faqs: [
      {
        question: 'Should I replace my AC before it dies completely?',
        answer: 'Yes. Replacing proactively gives you time to research contractors, compare SEER2 options, apply for utility rebates, and avoid emergency pricing.'
      },
      {
        question: 'What is SEER2?',
        answer: 'SEER2 (Seasonal Energy Efficiency Ratio 2) is the updated Department of Energy efficiency rating testing standard established in 2023. Higher numbers indicate lower electricity usage.'
      }
    ],
    relatedArticleSlugs: [
      'how-long-does-an-ac-unit-last',
      'ac-repair-vs-replacement',
      'why-is-my-ac-not-cooling',
      'ac-short-cycling'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Central Air Conditioner Sizing and Efficiency Upgrades' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/about/federal_tax_credits', description: 'Federal Tax Credits for Energy Efficiency' }
    ],
    publishedDate: '2025-06-08',
    updatedDate: '2025-08-08',
    readingTime: '7 min read',
    keywords: ['signs ac needs replacement', 'when to replace air conditioner', 'failing ac symptoms', 'replace or repair ac'],
    safetyLevel: 'low',
    safetyNotice: 'Ensure equipment sizing is verified by a professional using ACCA Manual J calculations rather than rule-of-thumb estimates.'
  },
  {
    id: 'maint-22',
    title: 'AC Repair vs. Replacement: The 5,000 Rule and Financial Decision Guide',
    slug: 'ac-repair-vs-replacement',
    path: '/maintenance/ac-repair-vs-replacement/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'Maintenance',
    subcategorySlug: 'maintenance',
    description: 'Use the proven $5,000 Rule and financial formulas to decide whether to repair your broken air conditioner or invest in a new energy-efficient system.',
    excerpt: 'Facing a major AC repair bill? Learn how the $5,000 Rule, equipment age, refrigerant type, and energy efficiency numbers determine the smartest financial move.',
    quickAnswer: 'Use the HVAC industry $5,000 Rule: Multiply the age of your AC unit in years by the repair estimate in dollars. If the total exceeds $5,000, replace the system. If the total is under $5,000, repair is usually the better financial move. Example: a 12-year-old unit with a $500 repair (12 x 500 = $6,000) should be replaced.',
    introduction: [
      'When your air conditioner breaks down and an HVAC technician hands you a repair estimate for $1,200, you face a major dilemma: do you pay for the repair, or put that money toward a new system?',
      'Making this decision with clarity requires taking emotion and sales pressure out of the equation. By applying established HVAC financial formulas, evaluating refrigerant phase-outs, and factoring in monthly energy savings, you can arrive at an objective financial choice.',
      'Here is the complete framework homeowners should use to evaluate repair vs. replacement.'
    ],
    tableOfCauses: [
      {
        cause: 'The $5,000 Rule Calculation',
        notice: 'Age of Equipment (Years) × Estimated Repair Cost ($)',
        safeCheck: 'If > $5,000 = Replace; If < $5,000 = Repair'
      },
      {
        cause: 'The 50% Rule',
        notice: 'If single repair exceeds 50% of the cost of a brand new comparable system',
        safeCheck: 'Always replace; investment in dying technology is financially inefficient'
      },
      {
        cause: 'R-22 Refrigerant Systems',
        notice: 'Refrigerant has been phased out; repairing leaks is a temporary band-aid',
        safeCheck: 'Strongly favors replacement regardless of minor component health'
      },
      {
        cause: 'Energy Efficiency (SEER) Disparity',
        notice: 'Replacing an old 10-SEER unit with a modern 16-SEER2 system cuts cooling bills 30-40%',
        safeCheck: 'Factor annual electric bill savings into the return on investment'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Calculate the $5,000 Rule',
        explanation: 'Example 1: A 6-year-old AC needs a $400 capacitor (6 × 400 = $2,400). Result: Repair. Example 2: A 14-year-old AC needs a $700 fan motor (14 × 700 = $9,800). Result: Replace.'
      },
      {
        stepNumber: 2,
        title: 'Evaluate Warranty Coverage',
        explanation: 'Check if the unit is still within its original 10-year manufacturer registered parts warranty. If parts are covered for free, repairs are significantly cheaper.'
      },
      {
        stepNumber: 3,
        title: 'Factor in Federal and Utility Tax Credits',
        explanation: 'Modern heat pumps and high-efficiency ACs qualify for up to $2,000 in federal tax credits under the Inflation Reduction Act, plus hundreds in local utility rebates.'
      }
    ],
    safeChecks: [
      'Get a second opinion if a technician quotes more than $1,500 on a repair.',
      'Ensure contractor quotes include matching indoor evaporator coils.'
    ],
    whatNotToDo: [
      'Do not replace only the outdoor condenser while leaving a 20-year-old leaky indoor evaporator coil; mismatched coils void warranties.',
      'Do not base decisions solely on monthly payments without calculating the total purchase price.'
    ],
    whenToCallProfessional: [
      'You need detailed written proposals for replacement systems with SEER2 ratings and Manual J calculations.',
      'A technician has diagnosed a failed compressor, punctured heat exchanger, or leaking coil requiring high-dollar refrigerant recovery.'
    ],
    repairVsReplacement: {
      explanation: 'Detailed matrix for common AC repairs:',
      factors: [
        { name: 'Capacitor or Contactor ($150-$350)', advice: 'Always repair on units under 15 years old.' },
        { name: 'Condenser Fan Motor ($400-$700)', advice: 'Repair if unit is under 12 years old; consider replacement if 14+ years.' },
        { name: 'Compressor Burnout ($1,800-$3,000)', advice: 'Almost always replace the entire unit unless under 5-year warranty.' },
        { name: 'Evaporator Coil Leak ($1,500-$2,500)', advice: 'Replace on units over 10 years old, especially on R-22 systems.' }
      ]
    },
    faqs: [
      {
        question: 'What is the 5,000 rule in HVAC?',
        answer: 'The 5,000 rule states that you multiply the age of the unit by the repair cost. If the product is over $5,000, replacement is the smarter financial choice.'
      },
      {
        question: 'How much does a new central AC unit cost installed?',
        answer: 'In the United States, a complete central AC replacement typically costs between $5,500 and $11,000 depending on tonnage, SEER2 rating, and duct modifications.'
      }
    ],
    relatedArticleSlugs: [
      'how-long-does-an-ac-unit-last',
      'signs-ac-needs-replacement',
      'why-is-my-ac-not-cooling'
    ],
    sources: [
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/products/heating_cooling/replace_repair', description: 'Repair vs. Replace Guidelines for Homeowners' },
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Energy Efficiency and Equipment Replacement Economics' }
    ],
    publishedDate: '2025-06-12',
    updatedDate: '2025-08-05',
    readingTime: '7 min read',
    keywords: ['ac repair vs replacement', '5000 rule hvac', 'should i repair or replace ac', 'cost of new ac unit'],
    safetyLevel: 'low',
    safetyNotice: 'Always obtain quotes from licensed, bonded, and insured HVAC contractors.'
  },
  {
    id: 'maint-23',
    title: 'How to Improve HVAC Airflow: 8 Fixes for Weak Vents and Hot Spots',
    slug: 'how-to-improve-hvac-airflow',
    path: '/maintenance/how-to-improve-hvac-airflow/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'Maintenance',
    subcategorySlug: 'maintenance',
    description: 'Fix weak airflow from supply vents, eliminate hot upstairs bedrooms, and balance your home duct system with practical, step-by-step improvements.',
    excerpt: 'Weak airflow from air vents leads to hot spots and high energy bills. Discover 8 proven fixes including filter optimization, register dampers, and duct sealing.',
    quickAnswer: 'To immediately improve weak HVAC airflow: 1) Replace thick, restrictive filters with lower static-pressure MERV 8 filters, 2) Ensure all return air grilles are uncovered, 3) Open supply registers that were closed in unused rooms, 4) Seal accessible duct seams with foil-backed mastic tape, and 5) Inspect blower wheel blades for caked dust.',
    introduction: [
      'You hold your hand up to a supply vent in your bedroom, and while the air is cold, the breeze is barely a faint whisper. Meanwhile, another room in the house feels like a wind tunnel.',
      'Airflow issues create persistent temperature imbalances—such as sweltering second floors and freezing basements—while forcing your blower motor to work harder against high static pressure.',
      'Central heating and cooling systems are closed pneumatic loops. Restricted airflow at any point reduces performance throughout the entire house. Here is how to restore balanced circulation.'
    ],
    tableOfCauses: [
      {
        cause: 'Overly Restrictive 1-Inch Air Filter',
        notice: 'Airflow is weak at all vents across the entire house',
        safeCheck: 'Swap high-MERV filter for a fresh MERV 8 pleated filter'
      },
      {
        cause: 'Closed Supply Registers in Unused Rooms',
        notice: 'Air pressure increases in main duct trunk; disrupts branch balance',
        safeCheck: 'Re-open closed registers; keep at least 90% of all vents open'
      },
      {
        cause: 'Crushed or Disconnected Flex Ductwork',
        notice: 'One specific room has virtually zero airflow while adjacent rooms are strong',
        safeCheck: 'Inspect attic or crawlspace for pinched, kinked, or separated flex duct'
      },
      {
        cause: 'Dust-Caked Blower Wheel Blades',
        notice: 'Blower motor hums at full speed, but curved blades cannot shovel air',
        safeCheck: 'Requires professional blower assembly cleaning'
      },
      {
        cause: 'Duct Leaks Blowing Conditioned Air into Attic',
        notice: 'Attic space is surprisingly cool or warm; weak airflow at distant registers',
        safeCheck: 'Feel along duct seams for escaping air while system runs'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check and Downgrade Over-Restrictive Filters',
        explanation: 'If you recently installed a dense 1-inch MERV 13 or allergen filter, test the airflow with a standard MERV 8 filter. Noticeable airflow often returns instantly.'
      },
      {
        stepNumber: 2,
        title: 'Inspect Accessible Duct Joints and Boots',
        explanation: 'In the basement, attic, or crawlspace, check the metal joints where branch ducts connect to the main trunk. Seal escaping air using UL 181 aluminum foil tape or duct mastic paste (never standard cloth duct tape).'
      },
      {
        stepNumber: 3,
        title: 'Adjust Manual Duct Dampers',
        explanation: 'Look for small metal wing-nut levers on round sheet metal ducts near the furnace plenum. In summer, slightly close lower-level dampers to force more cool air to the upper floors.'
      },
      {
        stepNumber: 4,
        title: 'Unblock Return Air Grilles',
        explanation: 'The system cannot blow air into a room if it cannot pull air back out. Move couches, drapes, and dressers at least 12 inches away from return vents.'
      }
    ],
    safeChecks: [
      'Ensure interior doors have at least a 1-inch undercut clearance above carpet to allow return airflow.',
      'Check that exterior bathroom exhaust vent flappers are not stuck open.'
    ],
    whatNotToDo: [
      'Do not use gray fabric "duct tape" on heating ducts; the adhesive dries out, turns brittle, and fails within 12 months.',
      'Do not completely close off more than 10-15% of registers in a home.'
    ],
    whenToCallProfessional: [
      'Ductwork is undersized for system tonnage, requiring duct enlargement or balancing dampers.',
      'The blower motor wheel is caked in grime and requires removal and chemical washing.'
    ],
    faqs: [
      {
        question: 'Does closing vents in unused rooms save money?',
        answer: 'No, this is a widespread myth. Closing registers creates high static pressure, increases duct leakage, causes blower motor strain, and can cause the AC coil to freeze.'
      },
      {
        question: 'Why is my upstairs so much hotter than downstairs?',
        answer: 'Heat naturally rises, and roof solar heat radiates down through the attic. Without proper duct balancing, return air paths, or zoning, upstairs rooms receive insufficient cooling.'
      }
    ],
    relatedArticleSlugs: [
      'how-often-change-hvac-filter',
      'how-to-choose-hvac-filter',
      'why-is-my-ac-not-cooling',
      'how-to-reduce-indoor-humidity'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Airflow Optimization and Ductwork Guidelines' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/campaign/seal_insulate/duct_sealing', description: 'Duct Sealing and Airflow Balancing Guide' }
    ],
    publishedDate: '2025-06-15',
    updatedDate: '2025-08-04',
    readingTime: '7 min read',
    keywords: ['how to improve hvac airflow', 'weak airflow from vents', 'hot spots in house', 'balance home ductwork'],
    safetyLevel: 'low',
    safetyNotice: 'Watch your step on attic ceiling joists when inspecting ductwork to avoid stepping through drywall.'
  },
  {
    id: 'maint-24',
    title: 'How to Reduce Indoor Humidity: Practical Steps for Humid Homes',
    slug: 'how-to-reduce-indoor-humidity',
    path: '/maintenance/how-to-reduce-indoor-humidity/',
    category: 'Maintenance',
    categorySlug: 'maintenance',
    subcategory: 'Maintenance',
    subcategorySlug: 'maintenance',
    description: 'Solve sticky, clammy indoor air. Discover how your air conditioner controls humidity, why short cycling causes dampness, and how to maintain 45% relative humidity.',
    excerpt: 'High indoor humidity encourages mold, dust mites, and clammy discomfort. Learn how proper AC fan settings, whole-house dehumidification, and moisture control lower humidity.',
    quickAnswer: 'To reduce high indoor humidity: 1) Always set your thermostat fan switch to "AUTO" (not "ON"), 2) Run bathroom exhaust fans during showers and for 20 minutes afterward, 3) Use kitchen range hoods while cooking, 4) Ensure your AC is not short-cycling, and 5) Maintain indoor relative humidity between 30% and 50% using dedicated dehumidifiers if necessary.',
    introduction: [
      'Temperature is only half of the comfort equation. A house cooled to 72°F with 65% relative humidity feels sticky, clammy, and uncomfortable, while a home at 75°F with 45% humidity feels crisp, light, and refreshing.',
      'High indoor humidity does more than impair comfort: humidity levels above 60% create ideal breeding grounds for toxic black mold, mildew, and dust mites inside mattresses and carpeting.',
      'Understanding how your HVAC equipment removes moisture—and the simple operational mistakes that accidentally pump moisture back into your rooms—is key to a healthy home.'
    ],
    tableOfCauses: [
      {
        cause: 'Thermostat Fan Set to "ON" Instead of "AUTO"',
        notice: 'Moisture on evaporator coil re-evaporates back into home air between cycles',
        safeCheck: 'Set thermostat fan switch strictly to "AUTO"'
      },
      {
        cause: 'Oversized Air Conditioner (Short Cycling)',
        notice: 'Unit drops room temp in 5 minutes and shuts off before dehumidifying',
        safeCheck: 'System needs longer run times to effectively condense moisture'
      },
      {
        cause: 'Unvented Bathrooms and Kitchen Moisture',
        notice: 'Steam from showers and boiling pots remains trapped in living spaces',
        safeCheck: 'Verify exhaust fans vent directly outside, not into the attic'
      },
      {
        cause: 'Crawlspace Moisture Infiltration',
        notice: 'Damp earth vapor migrates up through floorboards; musty odor',
        safeCheck: 'Inspect crawlspace for missing 6-mil polyethylene vapor barrier'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Switch Thermostat Fan to "AUTO"',
        explanation: 'When the fan is set to "ON", the blower fan runs continuously. As soon as the compressor stops, the warm air blowing across the wet evaporator coil blows all the collected water droplets right back into your living room.'
      },
      {
        stepNumber: 2,
        title: 'Measure Humidity with a Digital Hygrometer',
        explanation: 'Place an inexpensive digital hygrometer in your living area. Target relative humidity between 40% and 50%. Anything over 55% promotes mold growth.'
      },
      {
        stepNumber: 3,
        title: 'Run Exhaust Fans Consistently',
        explanation: 'Operate bathroom exhaust fans during showers and let them run for 15 to 20 minutes afterward. Always use the range hood vent when boiling water or cooking.'
      }
    ],
    safeChecks: [
      'Ensure clothes dryer exhaust duct is securely clamped and venting 100% outdoors.',
      'Check that basement sump pump pits have sealed covers.'
    ],
    whatNotToDo: [
      'Never leave windows cracked open when central air conditioning is running in humid weather.',
      'Do not set the thermostat lower and lower to remove humidity; you will freeze the coil or create shivering occupants without fixing the root cause.'
    ],
    whenToCallProfessional: [
      'The AC unit is oversized for the home and requires blower speed adjustments or two-stage upgrades.',
      'Your home requires a whole-home dehumidifier integrated into the return ductwork.'
    ],
    faqs: [
      {
        question: 'What is the ideal indoor humidity in summer?',
        answer: 'The EPA recommends maintaining indoor relative humidity between 30% and 50% for optimal comfort and to prevent mold and dust mite growth.'
      },
      {
        question: 'Why is my house humid even with the AC on?',
        answer: 'The most common cause is leaving the thermostat fan on "ON" rather than "AUTO", or having an oversized AC system that short cycles.'
      }
    ],
    relatedArticleSlugs: [
      'ac-short-cycling',
      'how-often-change-hvac-filter',
      'why-is-my-ac-not-cooling',
      'ac-smells-bad'
    ],
    sources: [
      { name: 'EPA (Environmental Protection Agency)', url: 'https://www.epa.gov/indoor-air-quality-iaq/moisture-control-guidance-building-design-construction-and-maintenance', description: 'Moisture Control Guidance for Residential Buildings' }
    ],
    publishedDate: '2025-06-18',
    updatedDate: '2025-08-02',
    readingTime: '6 min read',
    keywords: ['how to reduce indoor humidity', 'high indoor humidity', 'clammy house with ac', 'ac fan on vs auto humidity'],
    safetyLevel: 'low',
    safetyNotice: 'Persistent indoor humidity above 60% creates serious respiratory health risks from mold and dust mite proliferation.'
  }
];
