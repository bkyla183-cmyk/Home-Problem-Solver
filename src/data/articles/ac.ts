import { Article } from '../../types';

export const AC_ARTICLES: Article[] = [
  {
    id: 'ac-1',
    title: 'Why Is My AC Not Cooling? 8 Common Causes & Safe Checks',
    slug: 'why-is-my-ac-not-cooling',
    path: '/hvac/air-conditioning/why-is-my-ac-not-cooling/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'Is your air conditioner running but not cooling your home? Learn the most common causes, safe DIY checks, and when you need a licensed HVAC professional.',
    excerpt: 'When your central air runs without cooling the house, a clogged air filter, tripped breaker, or dirty outdoor condenser is often to blame. Here is how to diagnose it safely.',
    quickAnswer: 'If your AC runs without cooling, first check whether your thermostat is set to "COOL" and "AUTO" (not "ON"), verify that the outdoor condenser fan is spinning, and inspect your air filter. A severely clogged filter or tripped outdoor breaker accounts for more than half of sudden cooling failures.',
    introduction: [
      'Few household disruptions are more frustrating on a hot summer afternoon than an air conditioning system that hums along continuously while indoor temperatures climb. You can feel air coming through the supply vents, but the rooms remain stuffy, humid, and uncomfortable.',
      'A cooling failure does not automatically mean your entire system has failed or that you need an expensive replacement. Central air conditioners rely on a balanced sequence: moving indoor heat across an evaporator coil, transferring that heat through refrigerant lines, and releasing it outdoors through the condenser coil.',
      'When one link in this chain breaks—whether from restricted airflow, electrical disconnects, or dirty coils—cooling capacity drops dramatically. Below, we walk through the safe diagnostic checks homeowners can perform without touching electrical wiring or refrigerant lines.'
    ],
    tableOfCauses: [
      {
        cause: 'Clogged Air Filter',
        notice: 'Weak airflow from registers, evaporator coil frosted, system runs nonstop',
        safeCheck: 'Remove filter and hold up to light; replace if opaque with dust'
      },
      {
        cause: 'Thermostat Fan Set to "ON"',
        notice: 'Air blows continuously but feels room-temperature between cooling cycles',
        safeCheck: 'Switch thermostat fan setting from "ON" to "AUTO"'
      },
      {
        cause: 'Tripped Condenser Breaker',
        notice: 'Indoor air handler blows room-temp air; outdoor unit is completely silent',
        safeCheck: 'Inspect electrical panel for a half-tripped double-pole breaker'
      },
      {
        cause: 'Dirty Outdoor Condenser Fins',
        notice: 'AC runs for hours without dropping temperature; unit feels extremely hot',
        safeCheck: 'Visually inspect outdoor coil for grass clippings, leaves, and mud'
      },
      {
        cause: 'Refrigerant Leak',
        notice: 'Hissing sound near indoor/outdoor unit, ice on copper lines, lukewarm air',
        safeCheck: 'Inspect visible copper lines for ice or oily residue; requires pro repair'
      },
      {
        cause: 'Clogged Condensate Float Switch',
        notice: 'System shut off abruptly; standing water in drain pan under air handler',
        safeCheck: 'Check if overflow safety switch in drain line has tripped'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Confirm Thermostat Settings and Fan Mode',
        explanation: 'Verify that the thermostat is in "COOL" mode and set at least 3 to 5 degrees below current indoor temperature. Make sure the fan switch is set to "AUTO" rather than "ON". When set to "ON", the blower circulates unconditioned air even when the compressor is resting.'
      },
      {
        stepNumber: 2,
        title: 'Inspect and Replace the Air Filter',
        explanation: 'Slide out the return filter located at the furnace/air handler or return grille. A filter choked with dust chokes airflow over the evaporator coil, dropping coil temperature until it freezes into a block of ice, blocking all heat absorption.'
      },
      {
        stepNumber: 3,
        title: 'Check the Outdoor Condenser Unit',
        explanation: 'Walk outside and observe the outdoor condenser. Is the top fan spinning? Do you hear the compressor humming? If the fan is motionless while the indoor blower runs, the outdoor unit may have lost 240V power or blown a capacitor.'
      },
      {
        stepNumber: 4,
        title: 'Check the Main Breaker Panel and Disconnect Switch',
        explanation: 'Central AC systems use two separate breakers: one for the indoor air handler (usually 120V or 240V 15-30A) and one double-pole breaker for the outdoor unit (30-50A). Look for a switch resting between ON and OFF. Flip it fully OFF, then firmly ON once.'
      },
      {
        stepNumber: 5,
        title: 'Clear Debris Around the Outdoor Unit',
        explanation: 'Ensure at least 24 inches of clearance around the outdoor unit. Cut back shrubbery, remove vines, and clear fallen leaves that choke the condenser fins.'
      }
    ],
    safeChecks: [
      'Check thermostat display batteries (replace if low battery icon appears).',
      'Ensure all indoor supply vents and return grilles are open and unblocked by furniture or rugs.',
      'Inspect the condensate drain line outside for active dripping when the system runs.',
      'Check the outdoor electrical disconnect box handle to ensure it is fully seated.'
    ],
    whatNotToDo: [
      'Do not attempt to recharge refrigerant yourself using automotive cans. Central systems require specific EPA Section 608 certified equipment and exact weight measurements.',
      'Do not poke sharp metal tools, screwdrivers, or wire brushes into the aluminum coil fins.',
      'Do not repeatedly reset a circuit breaker that trips immediately. Doing so creates a fire hazard or damages the compressor.',
      'Do not chip away ice with knives if the coil has frozen solid. Let it thaw naturally by switching the system to FAN ONLY.'
    ],
    whenToCallProfessional: [
      'The outdoor condenser breaker trips repeatedly immediately upon engagement.',
      'The indoor or outdoor unit produces a sharp electrical burning odor or buzzing hum without motor movement.',
      'The larger suction line is iced over despite a clean air filter and open vents.',
      'You hear a persistent bubbling or hissing sound indicating a pressurized refrigerant leak.',
      'The system is more than 12-15 years old and struggling to maintain temperature on moderate 80°F days.'
    ],
    repairVsReplacement: {
      explanation: 'Consider the $5,000 Rule: multiply the age of your equipment by the repair estimate. If the total exceeds $5,000, replacement is generally the more economical path, particularly if the unit still utilizes phased-out R-22 Freon.',
      factors: [
        { name: 'Unit Age Under 10 Years', advice: 'Usually worth repairing minor components like capacitors, contactors, or fan motors.' },
        { name: 'Unit Age Over 15 Years', advice: 'Major failures like compressor burnout or coil leaks favor replacement with modern high-SEER2 equipment.' },
        { name: 'R-22 Refrigerant Systems', advice: 'Because R-22 production was banned, topping off leaks is prohibitively expensive and signals replacement time.' }
      ]
    },
    faqs: [
      {
        question: 'Why is my AC running but the temperature inside is not dropping?',
        answer: 'This is usually caused by a dirty air filter choking airflow, a clogged outdoor condenser coil unable to release heat, or low refrigerant levels due to a pinhole leak.'
      },
      {
        question: 'Can a dirty air filter really stop an AC from cooling?',
        answer: 'Yes. Severe airflow restriction drops the pressure inside the evaporator coil, causing moisture in the air to freeze across the fins. Once frozen, air cannot pass through the coil at all.'
      },
      {
        question: 'How long should an AC take to cool a house down by 5 degrees?',
        answer: 'Under normal summer conditions, a properly sized central AC lowers indoor temperatures approximately 1 degree Fahrenheit every 45 to 60 minutes. High humidity or extreme outdoor heat will increase this duration.'
      }
    ],
    relatedArticleSlugs: [
      'ac-blowing-warm-air',
      'ac-running-but-not-cooling',
      'ac-freezing-up',
      'how-often-change-hvac-filter',
      'ac-repair-vs-replacement'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Central Air Conditioning Operation and Efficiency Standards' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/products/heating_cooling', description: 'Heating & Cooling Guide and Maintenance Recommendations' },
      { name: 'EPA (Environmental Protection Agency)', url: 'https://www.epa.gov/section608', description: 'Refrigerant Management Regulations and Safe Handling Standards' }
    ],
    publishedDate: '2025-04-10',
    updatedDate: '2025-08-15',
    readingTime: '7 min read',
    keywords: ['ac not cooling', 'air conditioner not cold', 'ac blowing warm air', 'troubleshoot ac cooling', 'central ac not working'],
    safetyLevel: 'moderate',
    safetyNotice: 'Always shut off electrical power at the main service panel and the outdoor disconnect box before opening any service panels or inspecting outdoor components.'
  },
  {
    id: 'ac-2',
    title: 'AC Blowing Warm Air: 7 Common Reasons and Step-by-Step Fixes',
    slug: 'ac-blowing-warm-air',
    path: '/hvac/air-conditioning/ac-blowing-warm-air/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'If warm air is blowing through your AC registers, use this troubleshooting guide to identify thermostat mistakes, outdoor power losses, and coil issues.',
    excerpt: 'Warm air blowing from your vents usually points to a thermostat fan set to "ON", a tripped breaker at the outdoor unit, or a dead compressor capacitor.',
    quickAnswer: 'Warm air blowing from AC vents most commonly happens when the thermostat fan switch is set to "ON" instead of "AUTO", or when the outdoor condenser unit has lost electrical power while the indoor blower continues to circulate room air.',
    introduction: [
      'When your central air conditioner blows warm or room-temperature air through the registers, it creates instant discomfort. The blower motor is clearly running, yet the air exiting the grilles feels lukewarm or humid.',
      'Understanding why this happens starts with recognizing that central cooling systems consist of two primary halves: an indoor air handler that blows air through your ductwork, and an outdoor condensing unit that compresses refrigerant and rejects heat.',
      'If the indoor blower runs while the outdoor unit is powered down or unable to start its compressor, the system functions as nothing more than a giant, expensive ceiling fan. Here is how to trace the breakdown.'
    ],
    tableOfCauses: [
      {
        cause: 'Thermostat Fan Mode Set to "ON"',
        notice: 'Blower fan never stops; air feels warm whenever compressor pauses',
        safeCheck: 'Set fan mode to "AUTO" so air only blows during active cooling cycles'
      },
      {
        cause: 'Outdoor Unit Disconnect or Breaker Tripped',
        notice: 'Indoor fan operates normally, but outside unit is totally silent and still',
        safeCheck: 'Check external electrical disconnect switch and panel breaker'
      },
      {
        cause: 'Failed Run Capacitor',
        notice: 'Outdoor unit emits low hum, but fan motor does not spin without a nudge',
        safeCheck: 'Requires professional HVAC technician to safely discharge and test'
      },
      {
        cause: 'Severe Refrigerant Loss',
        notice: 'Warm air output; hissing sounds or oily spots around refrigeration joints',
        safeCheck: 'Check for visible ice on copper lines; call EPA-certified technician'
      },
      {
        cause: 'Frozen Evaporator Coil',
        notice: 'Airflow gradually drops to a trickle; warm humid air from supply vents',
        safeCheck: 'Turn AC mode to OFF, switch fan to ON to thaw, check air filter'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Inspect the Thermostat Fan Switch',
        explanation: 'Check whether the fan setting says "ON" or "AUTO". When set to "ON", the blower blows ambient room air 24 hours a day, even when cooling is satisfied.'
      },
      {
        stepNumber: 2,
        title: 'Check Outdoor Unit Operation',
        explanation: 'Step outside to the condenser unit. If the indoor blower is running, the outdoor fan should be spinning and warm air should be discharging out the top.'
      },
      {
        stepNumber: 3,
        title: 'Inspect the Outdoor Disconnect and Breakers',
        explanation: 'Locate the small metal disconnect box mounted on the exterior wall near the condenser. Ensure the pull-out block or toggle switch is firmly seated in the ON position.'
      },
      {
        stepNumber: 4,
        title: 'Inspect the Indoor Filter',
        explanation: 'A clogged filter reduces airflow so drastically that the coil freezes over, transforming the cold coil into an insulating sheet of ice.'
      }
    ],
    safeChecks: [
      'Verify that the thermostat is in COOL mode and set at least 3 degrees below ambient temperature.',
      'Check if the outdoor unit is choked with leaves, dirt, or tall grass.',
      'Touch the insulated copper suction line near the indoor coil (it should feel cold and sweat slightly; if warm or dry, the compressor is not running).'
    ],
    whatNotToDo: [
      'Do not stick sticks or objects into the outdoor fan grille to spin the blades.',
      'Never attempt to bypass safety high-pressure or low-pressure switches.',
      'Do not spray high-pressure power washers onto condenser fins, as delicate aluminum fins will bend flat.'
    ],
    whenToCallProfessional: [
      'The outdoor fan motor hums loudly but fails to rotate.',
      'Refrigerant lines show oily residue or frost buildup.',
      'The compressor clicks on for 5 seconds and immediately shuts down on thermal overload.'
    ],
    faqs: [
      {
        question: 'Why does my AC blow warm air at night?',
        answer: 'If the system blows warm air only at night, the outdoor compressor may be tripping on thermal overload during peak afternoon heat and failing to reset, or your thermostat schedule may be increasing the setpoint.'
      },
      {
        question: 'Can low refrigerant cause warm air?',
        answer: 'Yes. Without sufficient refrigerant, the system cannot absorb heat from indoor air. However, refrigerant does not "get used up"—if it is low, there is a leak that must be repaired.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-not-turning-on',
      'ac-freezing-up',
      'ac-running-but-not-cooling'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/common-air-conditioner-problems', description: 'Common Air Conditioner Problems' },
      { name: 'Air Conditioning Contractors of America (ACCA)', url: 'https://www.acca.org', description: 'Residential HVAC Troubleshooting Standards' }
    ],
    publishedDate: '2025-04-12',
    updatedDate: '2025-08-10',
    readingTime: '6 min read',
    keywords: ['ac blowing warm air', 'air conditioner blowing hot air', 'warm air from vents', 'ac compressor not cooling'],
    safetyLevel: 'low',
    safetyNotice: 'High-voltage capacitors in outdoor units store lethal electrical charges even when power is disconnected. Never open the electrical service compartment.'
  },
  {
    id: 'ac-3',
    title: 'AC Not Turning On: Checklist for Dead Air Conditioners',
    slug: 'ac-not-turning-on',
    path: '/hvac/air-conditioning/ac-not-turning-on/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'When your AC will not turn on at all, follow this systematic guide covering thermostat batteries, shut-off switches, float switches, and breaker panels.',
    excerpt: 'A central AC that refuses to turn on is often stopped by an unresponsive thermostat, a tripped drain float switch, or an accidental shut-off switch flip.',
    quickAnswer: 'When an AC will not turn on, check the thermostat screen for dead batteries, inspect the furnace power switch (which looks like a standard light switch near the indoor unit), and look inside the condensate drain pan for standing water that triggered the float safety switch.',
    introduction: [
      'You set your thermostat to cool, listen for the familiar hum of the blower or outdoor unit, and hear absolute silence. Nothing starts: no air moves, no fan turns, and the house begins to warm up.',
      'Total system unresponsive states are frequently triggered by integrated safety switches designed to prevent water damage or electrical fires. Modern HVAC systems incorporate multiple protective cut-offs.',
      'Before assuming your compressor or motor has failed, work through these fundamental power and safety checks.'
    ],
    tableOfCauses: [
      {
        cause: 'Dead Thermostat Batteries',
        notice: 'Thermostat display screen is completely blank or shows blinking battery icon',
        safeCheck: 'Pop off thermostat faceplate and replace with fresh alkaline batteries'
      },
      {
        cause: 'Tripped Condensate Overflow Switch',
        notice: 'AC shut off completely during humid weather; water backed up in drain pipe',
        safeCheck: 'Check clear plastic float switch on the drain line for standing water'
      },
      {
        cause: 'Accidentally Flipped Power Switch',
        notice: 'Indoor unit has no power; wall switch near unit was bumped to OFF',
        safeCheck: 'Locate the light-switch style toggle near the air handler and ensure it is ON'
      },
      {
        cause: 'Tripped 240V Circuit Breakers',
        notice: 'Neither indoor nor outdoor equipment responds to thermostat call',
        safeCheck: 'Inspect electrical panel for breakers in tripped center position'
      },
      {
        cause: 'Blower Door Interlock Safety Switch Open',
        notice: 'System stopped after filter change; cabinet panel is not fully seated',
        safeCheck: 'Firmly push and latch the air handler blower access door'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Examine the Thermostat Display',
        explanation: 'If the thermostat screen is blank, replace the AA or AAA alkaline batteries behind the faceplate. Many thermostats rely on batteries even when connected to 24V C-wire power.'
      },
      {
        stepNumber: 2,
        title: 'Check the Indoor Power Switch (Furnace Switch)',
        explanation: 'By building code, an electrical toggle switch looking identical to a light switch is mounted on or near the indoor air handler/furnace. If someone bumped this switch to OFF while fetching storage items, the system loses all 24V control power.'
      },
      {
        stepNumber: 3,
        title: 'Inspect the Condensate Drain Float Switch',
        explanation: 'Locate the white PVC drain pipe coming out of the indoor coil. Many installations feature an inline float switch (often a T-shaped fitting with small wires). If the drain line clogs with algae, water rises, lifts the float, and immediately kills power to protect your ceilings.'
      },
      {
        stepNumber: 4,
        title: 'Verify Blower Compartment Door Safety',
        explanation: 'The indoor unit features a safety interlock push-button behind the door panel. If the door is loose or unlatched following a filter replacement, power is disconnected.'
      },
      {
        stepNumber: 5,
        title: 'Inspect Circuit Breakers',
        explanation: 'Open your main electrical service panel. Locate breakers marked "A/C", "Air Conditioner", "Furnace", or "Air Handler". If any switch is displaced toward center, flip firmly to OFF, then back to ON.'
      }
    ],
    safeChecks: [
      'Ensure the thermostat temperature setting is set at least 5 degrees below current indoor temperature.',
      'Check if neighborhood power outage or brownout has occurred.',
      'Check if the condensate pan underneath the attic unit has standing water.'
    ],
    whatNotToDo: [
      'Do not jump thermostat low-voltage terminals with screwdrivers if you are unfamiliar with HVAC wiring, as you can short the 24V transformer fuse.',
      'Do not bypass the condensate float switch by clipping wires; this leads to severe ceiling and flooring water damage.',
      'Do not open high-voltage junction boxes.'
    ],
    whenToCallProfessional: [
      'The 3-amp or 5-amp low-voltage fuse on the indoor control board blows repeatedly.',
      'The outdoor contactor chatters loudly without pulling in.',
      'Breakers trip immediately every time power is restored.',
      'You notice a distinct smell of burnt wire insulation or melted electronics.'
    ],
    faqs: [
      {
        question: 'Why would my AC suddenly stop working completely?',
        answer: 'The two most common reasons for an abrupt, complete shutoff are a tripped condensate overflow safety switch (caused by a backed-up drain line) and a tripped double-pole circuit breaker.'
      },
      {
        question: 'How do I know if my thermostat is broken or if the AC is broken?',
        answer: 'If the thermostat display works and you hear a distinct click when lowering temperature, but neither indoor nor outdoor units respond, the issue is likely at the equipment (such as a float switch or control board fuse).'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-blowing-warm-air',
      'ac-leaking-water',
      'ac-short-cycling'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Electrical Safety in Residential Heating and Cooling' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov', description: 'Thermostat Setup and Equipment Troubleshooting' }
    ],
    publishedDate: '2025-04-15',
    updatedDate: '2025-08-12',
    readingTime: '6 min read',
    keywords: ['ac not turning on', 'air conditioner wont start', 'central ac dead', 'ac power troubleshooting'],
    safetyLevel: 'moderate',
    safetyNotice: 'Never touch exposed circuit breaker terminals or dismantle electrical panels. If a circuit breaker trips repeatedly, leave it off and consult a licensed electrician.'
  },
  {
    id: 'ac-4',
    title: 'AC Leaking Water: Causes, Safety Hazards, and Drainage Fixes',
    slug: 'ac-leaking-water',
    path: '/hvac/air-conditioning/ac-leaking-water/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'Find out why your indoor air conditioner is leaking water, how to clear a clogged condensate drain line with vinegar, and how to prevent ceiling damage.',
    excerpt: 'Water pooling around your indoor furnace or dripping from your ceiling usually stems from a clogged PVC condensate line, a rusted drain pan, or a frozen evaporator coil.',
    quickAnswer: 'An indoor AC leak is almost always caused by algae and slime clogging the 3/4-inch PVC condensate drain pipe, causing condensation to overflow the drain pan. Turn the system OFF immediately to prevent drywall damage, and clear the line with a wet/dry vac or distilled white vinegar.',
    introduction: [
      'Air conditioners do not just cool the air in your home—they also remove tremendous amounts of moisture. On a humid summer day, a typical residential central air conditioner wrings between 5 and 20 gallons of water vapor from your indoor air every single day.',
      'Normally, this moisture collects on the cold evaporator coil, drips down into an internal collection pan, and flows harmlessly outside through a PVC condensate pipe.',
      'When this drainage system fails, water spills over the pan and into your ceilings, walls, or basement floor. Acting promptly is critical to prevent mold colonization and costly drywall repairs.'
    ],
    tableOfCauses: [
      {
        cause: 'Clogged Condensate Drain Line',
        notice: 'Water pooling at the base of the indoor unit; white PVC pipe is dry at the outdoor exit',
        safeCheck: 'Locate drain cleanout T-pipe and inspect for gelatinous white/green algae'
      },
      {
        cause: 'Cracked or Rusted Drain Pan',
        notice: 'Water dripping directly through rust perforations beneath older evaporator coils',
        safeCheck: 'Shine flashlight into drain pan beneath coil to inspect for rust holes'
      },
      {
        cause: 'Frozen Evaporator Coil Melting',
        notice: 'Rapid surge of water overflowing the pan when system shuts off; ice visible on copper',
        safeCheck: 'Inspect coil for ice buildup; check if air filter is completely blocked'
      },
      {
        cause: 'Faulty Condensate Pump',
        notice: 'If your unit uses a small motor box to pump water outside, reservoir overflows',
        safeCheck: 'Check if pump power cord is plugged in and tap the float to see if motor engages'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Shut Off the AC at the Thermostat Immediately',
        explanation: 'Switch the thermostat to OFF. Continuing to run the system will produce an additional gallon of water every hour, compounding ceiling and flooring damage.'
      },
      {
        stepNumber: 2,
        title: 'Clear Standing Water in the Drain Pan',
        explanation: 'Use a wet/dry vacuum or towels to remove standing water from the secondary drain pan and surrounding floor to stop water migration.'
      },
      {
        stepNumber: 3,
        title: 'Locate and Clear the Condensate Line Access Point',
        explanation: 'Find the vertical PVC T-pipe near the indoor coil. Pour 1 cup of distilled white vinegar into the access opening to break down microbial algae and fungal slime.'
      },
      {
        stepNumber: 4,
        title: 'Vacuum the Exterior Drain Line Exit',
        explanation: 'Go outside where the PVC pipe terminates near your outdoor condenser. Place the hose of a wet/dry vac over the end of the pipe, seal with a rag, and run for 2 minutes to suck out clogs.'
      }
    ],
    safeChecks: [
      'Inspect the secondary pan underneath attic air handlers for standing water.',
      'Check the outdoor drain pipe termination to verify steady dripping during cooling.',
      'Ensure the drain pipe maintains a downward pitch away from the indoor unit.'
    ],
    whatNotToDo: [
      'Do not pour harsh chemical drain cleaners (like Drano or lye) into PVC condensate lines. Harsh chemicals degrade PVC glue and produce toxic fumes circulated into your ductwork.',
      'Do not blow high-pressure compressed air into glued PVC lines without an open vent, as joints may burst behind drywall.',
      'Do not operate the AC while water is actively dripping into electrical furnace compartments.'
    ],
    whenToCallProfessional: [
      'The drain pan itself is rusted through or structurally cracked, requiring coil elevation to replace.',
      'Water has infiltrated electrical control boards, transformers, or blower motors.',
      'The condensate drain line is buried inside finished walls or ceilings with no accessible cleanout.'
    ],
    faqs: [
      {
        question: 'Is an AC leaking water dangerous?',
        answer: 'Yes. Water can leak into electrical components inside your furnace or air handler, creating short circuits. Furthermore, persistent leaks inside attics or walls cause wood rot and harmful black mold.'
      },
      {
        question: 'Can I put bleach in my AC drain line?',
        answer: 'Vinegar is strongly preferred over chlorine bleach. Bleach fumes can enter indoor air, degrade plastic drain pans, and eat away at soldered copper joints.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-freezing-up',
      'ac-not-turning-on',
      'how-often-change-hvac-filter'
    ],
    sources: [
      { name: 'EPA (Environmental Protection Agency)', url: 'https://www.epa.gov/mold', description: 'Moisture Control and Mold Prevention in Residential Buildings' },
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/maintaining-your-air-conditioner', description: 'Condensate Drain Maintenance Guidelines' }
    ],
    publishedDate: '2025-04-18',
    updatedDate: '2025-08-14',
    readingTime: '6 min read',
    keywords: ['ac leaking water', 'air conditioner leaking inside', 'clogged condensate line', 'water in ac drip pan'],
    safetyLevel: 'moderate',
    safetyNotice: 'If water is leaking directly into your electrical breaker panel or near light fixtures, immediately shut off power at the main house disconnect before approaching.'
  },
  {
    id: 'ac-5',
    title: 'AC Freezing Up: Why Coils Turn to Ice and How to Defrost Safely',
    slug: 'ac-freezing-up',
    path: '/hvac/air-conditioning/ac-freezing-up/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'Discover why your air conditioner evaporator coil or copper lines are freezing into solid ice, how to thaw them safely, and how to prevent recurrence.',
    excerpt: 'An evaporator coil freezes into solid ice due to restricted airflow (dirty filters or closed vents) or low refrigerant pressure. Learn the proper defrosting procedure.',
    quickAnswer: 'When your AC freezes up, switch the thermostat mode to "OFF" immediately and turn the fan switch to "ON". This allows the blower to push warm indoor air across the coil to melt the ice safely without damaging the compressor. Never run the system while iced over.',
    introduction: [
      'Opening your furnace access door or inspecting your outdoor refrigerant lines only to find thick, solid white frost covering the copper pipes is alarming. How can an air conditioner freeze solid in 90-degree summer heat?',
      'Air conditioners operate on thermodynamic laws: refrigerant expands inside the evaporator coil, absorbing heat from passing indoor air. If that coil cannot absorb sufficient heat—either because airflow is choked or refrigerant pressure has plummeted—the surface temperature drops below 32°F (0°C).',
      'Moisture condensing out of the air immediately freezes against the cold metal. Layer upon layer of ice accumulates until the coil becomes an impenetrable block of ice, cutting off all airflow and threatening compressor burnout.'
    ],
    tableOfCauses: [
      {
        cause: 'Extremely Dirty Air Filter',
        notice: 'Airflow from vents is almost zero; ice forms on indoor coil and travels outside',
        safeCheck: 'Pull filter; replace if laden with pet dander, lint, or dust'
      },
      {
        cause: 'Closed or Blocked Supply Registers',
        notice: 'Multiple vents closed in unused rooms; static pressure spike chokes airflow',
        safeCheck: 'Ensure at least 85% of all registers throughout the home remain fully open'
      },
      {
        cause: 'Failing Blower Motor or Run Capacitor',
        notice: 'Air handler motor runs slowly or does not spin; coil freezes quickly',
        safeCheck: 'Listen for whether indoor blower is running at full speed'
      },
      {
        cause: 'Refrigerant Leak (Low Charge)',
        notice: 'Hissing sound, oily residue at pipe joints, ice begins at expansion valve',
        safeCheck: 'Requires EPA-certified technician to find leak, braze joint, and recharge'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Turn AC Mode OFF and Fan Mode ON',
        explanation: 'At the thermostat, turn the system selector to OFF to protect the compressor from liquid slugging. Turn the fan switch to ON. This forces room-temperature air across the coil, melting the ice in 1 to 3 hours.'
      },
      {
        stepNumber: 2,
        title: 'Prepare for Melting Water',
        explanation: 'A frozen coil holds several gallons of frozen water. Monitor the drain pan and ensure the condensate line is clear so melting ice does not overflow your ceilings or furnace cabinet.'
      },
      {
        stepNumber: 3,
        title: 'Replace the Air Filter',
        explanation: 'While the coil is defrosting, inspect the air filter. If it is dirty, replace it with a fresh, appropriately rated filter (MERV 8-11).'
      },
      {
        stepNumber: 4,
        title: 'Inspect Supply and Return Vents',
        explanation: 'Walk through every room in your home and verify that return grilles and supply registers are open and clear of drapery, rugs, or furniture.'
      },
      {
        stepNumber: 5,
        title: 'Test System Operation Once Fully Thawed',
        explanation: 'Do NOT turn cooling back on until all ice has melted completely. Once clear and dry, switch system back to COOL with fan set to AUTO. If ice reforms within 30 minutes with a clean filter, shut down and call an HVAC pro.'
      }
    ],
    safeChecks: [
      'Check that the blower wheel blades are clean and not caked in thick dust.',
      'Ensure the outdoor unit coils are not choked with landscape debris.',
      'Check that indoor doors to rooms with return vents are not kept tightly sealed.'
    ],
    whatNotToDo: [
      'Never use knives, screwdrivers, hair dryers on high heat, or ice picks to chip ice off the coil. The thin aluminum fins and copper tubing puncture easily, which releases all pressurized refrigerant.',
      'Do not continue running the AC while ice is present. The compressor is designed to compress vapor, not liquid; running an iced unit will ruin the compressor.',
      'Do not close off vents in unused rooms thinking it saves energy; it actually chokes system airflow.'
    ],
    whenToCallProfessional: [
      'Ice returns immediately after installing a new air filter and ensuring all vents are open.',
      'You hear a hissing or bubbling noise near the coil indicative of a refrigerant leak.',
      'The indoor blower motor smells hot or fails to start reliably.'
    ],
    faqs: [
      {
        question: 'How long does it take for a frozen AC unit to thaw?',
        answer: 'With the AC set to OFF and the indoor fan running on ON, a frozen evaporator coil typically thaws completely in 1 to 3 hours. Leaving the fan off can extend defrost time to over 6 hours.'
      },
      {
        question: 'Can low refrigerant cause an AC to freeze?',
        answer: 'Yes. Lower refrigerant pressure causes the temperature of the remaining refrigerant to drop significantly below freezing. As moisture hits the sub-freezing coil, it instantly freezes.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-blowing-warm-air',
      'ac-leaking-water',
      'how-often-change-hvac-filter'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Airflow and Evaporator Coil Operating Guidelines' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov', description: 'Proper Maintenance to Prevent HVAC Freeze-Up' }
    ],
    publishedDate: '2025-04-20',
    updatedDate: '2025-08-11',
    readingTime: '7 min read',
    keywords: ['ac freezing up', 'ice on ac unit', 'frozen evaporator coil', 'ac frozen pipes', 'how to defrost ac'],
    safetyLevel: 'low',
    safetyNotice: 'Never chip at ice around refrigerant lines. Puncturing pressurized copper releases freezing refrigerant vapor that can cause severe frostbite burns.'
  },
  {
    id: 'ac-6',
    title: 'AC Not Blowing Cold Air: Diagnosis for Weak or Luke Airflow',
    slug: 'ac-not-blowing-cold-air',
    path: '/hvac/air-conditioning/ac-not-blowing-cold-air/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'When the air exiting your vents is barely cool rather than crisp and cold, follow this diagnostic guide to evaluate temperature split and condenser issues.',
    excerpt: 'If air from your registers feels cool but not cold enough to lower indoor temperature, your system may have a low Delta-T split, dirty outdoor coils, or duct leaks.',
    quickAnswer: 'To test if your AC is blowing cold air, measure the temperature drop across the system: subtract the temperature of the air entering the return grille from the air exiting the supply register. A healthy system produces a 16°F to 20°F drop (Delta-T). If the drop is under 12°F, check outdoor coil cleanliness, filter restrictions, and refrigerant charge.',
    introduction: [
      'A common homeowner complaint is an AC that seems to work, but the air coming out of the vents is only mildly cool rather than crisp and cold. The house remains hovering at 77°F or 78°F regardless of thermostat commands.',
      'Diagnosing this requires measuring the temperature differential (known in the HVAC trade as Delta-T). When an AC system is operating properly, the air exiting your supply vents should be roughly 16 to 20 degrees cooler than the air entering the return grille.',
      'If your temperature split is only 6 to 10 degrees, the unit is running inefficiently and wasting electricity. Here is how to diagnose the problem systematically.'
    ],
    tableOfCauses: [
      {
        cause: 'Dirty Outdoor Condenser Coil',
        notice: 'Outdoor unit cannot dump heat; temperature split drops below 14°F',
        safeCheck: 'Inspect outdoor coil fins for dirt blanket; gently rinse with garden hose'
      },
      {
        cause: 'Duct Leaks in Attic or Crawlspace',
        notice: '120°F attic air gets pulled into return ducting through unsealed joints',
        safeCheck: 'Inspect accessible attic ductwork for detached tape or disconnected boots'
      },
      {
        cause: 'Slight Refrigerant Deficit',
        notice: 'Air is lukewarm; suction line is cool rather than ice-cold',
        safeCheck: 'Call HVAC technician to gauge superheat and subcooling'
      },
      {
        cause: 'Weak Compressor or Failing Contactor',
        notice: 'Outdoor unit fan runs, but compressor struggles or operates at low displacement',
        safeCheck: 'Requires professional amp-draw testing on compressor windings'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Perform the Temperature Split Test (Delta-T)',
        explanation: 'Use a standard digital cooking or probe thermometer. Place it in the return grille for 2 minutes and record the temperature (e.g., 76°F). Then place it inside the closest supply vent for 2 minutes (e.g., 58°F). The difference should be 16°F to 20°F.'
      },
      {
        stepNumber: 2,
        title: 'Gently Rinse the Outdoor Condenser Coil',
        explanation: 'Turn off power to the outdoor unit. Using a garden hose with a standard spray nozzle (never a pressure washer), spray from the top down to wash away dirt and pollen from between the fins.'
      },
      {
        stepNumber: 3,
        title: 'Inspect Accessible Ductwork',
        explanation: 'If your ductwork runs through an unconditioned attic, look for torn flex duct, disconnected joints, or fallen insulation allowing blazing hot attic air into your system.'
      }
    ],
    safeChecks: [
      'Check if air filter is seated in the correct direction (arrow pointing toward blower).',
      'Verify that all exterior windows and doors are fully closed and sealed.',
      'Check that exhaust fans in bathrooms or kitchen are not left running unnecessarily.'
    ],
    whatNotToDo: [
      'Do not crank the thermostat down to 60°F in hopes of making the air "colder." The air conditioner outputs the same temperature drop regardless of the setpoint.',
      'Do not use harsh chemical coil cleaners without proper safety goggles and rinsing.',
      'Do not crush delicate condenser aluminum fins.'
    ],
    whenToCallProfessional: [
      'Delta-T temperature drop remains under 12°F despite clean coils and new filter.',
      'Ductwork inside crawlspace or attic is collapsed or inaccessible.',
      'Refrigerant lines show signs of oil staining.'
    ],
    faqs: [
      {
        question: 'What temperature should air coming out of AC vents be?',
        answer: 'Air coming out of your supply vents should typically measure between 55°F and 60°F when your home interior is at 75°F (representing a 15°F to 20°F differential).'
      },
      {
        question: 'Does turning the thermostat down lower make the air colder?',
        answer: 'No. Air conditioners do not work like accelerator pedals. They blow air at one steady temperature drop until the setpoint is reached.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-blowing-warm-air',
      'ac-running-but-not-cooling',
      'how-to-improve-hvac-airflow'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Central Cooling Systems and Energy Efficiency' }
    ],
    publishedDate: '2025-04-22',
    updatedDate: '2025-08-08',
    readingTime: '6 min read',
    keywords: ['ac not blowing cold air', 'ac air not cold enough', 'delta t hvac', 'air conditioner lukewarm air'],
    safetyLevel: 'low',
    safetyNotice: 'Always shut off outdoor electrical power at the disconnect switch before spraying water on outdoor condenser units.'
  },
  {
    id: 'ac-7',
    title: 'AC Running But Not Cooling: Why Your System Runs Nonstop',
    slug: 'ac-running-but-not-cooling',
    path: '/hvac/air-conditioning/ac-running-but-not-cooling/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'When your AC runs constantly all day without lowering indoor temperatures, understand the difference between high heat load, undersizing, and mechanical issues.',
    excerpt: 'An air conditioner running nonstop without cooling usually suffers from an undersized capacity for extreme heat, severe duct leakage, low refrigerant, or a dirty coil.',
    quickAnswer: 'If your AC runs continuously without reaching the thermostat setpoint, first compare outdoor temperatures to your unit design rating: most systems are sized for outdoor heat up to 95°F. On 100°F+ days, nonstop running is normal. If it runs nonstop on mild 85°F days, inspect your filter, coil cleanliness, and return ducts.',
    introduction: [
      'You glance at your thermostat: setpoint 72°F, current temperature 77°F. The outdoor compressor and indoor blower have been running for six hours straight without pause, yet the number on the wall refuses to budge.',
      'A continuously running air conditioner drives up electric utility bills rapidly and places tremendous mechanical wear on the compressor and fan bearings.',
      'Distinguishing between normal peak-load behavior and a genuine mechanical defect helps you avoid unnecessary panic while protecting your cooling equipment.'
    ],
    tableOfCauses: [
      {
        cause: 'Extreme Outdoor Heat Load',
        notice: 'AC runs all afternoon on 100°F day; catches up after 9:00 PM once sun sets',
        safeCheck: 'Normal behavior if temperature holds steady within 20°F of outdoor ambient'
      },
      {
        cause: 'Restricted Airflow from Heavy Filter',
        notice: 'System struggles even in mild weather; registers produce weak airflow',
        safeCheck: 'Switch to a lower MERV filter (MERV 8) to reduce blower static pressure'
      },
      {
        cause: 'Massive Attic Duct Leak',
        notice: 'High electricity bills; rooms furthest from unit are notably warmer',
        safeCheck: 'Check attic for loose flex duct connections blowing cold air into roof space'
      },
      {
        cause: 'Aging, Inefficient Compressor',
        notice: 'Unit is 15+ years old; mechanical valves worn down, reducing cooling capacity',
        safeCheck: 'Have HVAC technician test compressor compression and amp draw'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Evaluate Design Temperature Realities',
        explanation: 'HVAC systems are sized using ACCA Manual J calculations based on historical regional temperatures (usually the 99% design condition, roughly 92°F-95°F in most US regions). If outdoor temperatures hit 102°F, the unit is designed to run nonstop just to maintain 75°F.'
      },
      {
        stepNumber: 2,
        title: 'Check Air Filter Condition',
        explanation: 'A clogged filter cuts CFM (cubic feet per minute) airflow, prolonging cycle times exponentially.'
      },
      {
        stepNumber: 3,
        title: 'Seal Heat Gain Sources in the House',
        explanation: 'Close south- and west-facing window blinds during peak afternoon sunlight. Avoid running heat-generating appliances like clothes dryers or ovens during peak hours.'
      }
    ],
    safeChecks: [
      'Feel the air coming out of supply vents; it should be noticeably cooler than room air.',
      'Check outdoor unit to verify the compressor is operating and not just the top fan.',
      'Ensure weatherstripping around exterior doors is intact.'
    ],
    whatNotToDo: [
      'Do not set the thermostat down to 65°F hoping it will cool faster; it will only keep the unit running longer into the night.',
      'Do not leave interior doors closed if rooms lack dedicated return air grilles.'
    ],
    whenToCallProfessional: [
      'The AC runs continuously on mild 80°F days without satisfying a reasonable 74°F setpoint.',
      'The system has run continuously for 48 hours without dropping below 78°F.',
      'Energy bills have doubled or tripled compared to the same month last year.'
    ],
    faqs: [
      {
        question: 'Is it bad for an AC to run all day in summer?',
        answer: 'During extreme heat waves (95°F+), it is actually better for an AC to run long, steady cycles than to turn on and off frequently. Long cycles maintain consistent dehumidification.'
      },
      {
        question: 'Can an AC be too small for my house?',
        answer: 'Yes. If home additions were built or ductwork was improperly configured, an undersized unit will never be able to satisfy the cooling load during summer afternoons.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-blowing-warm-air',
      'how-to-improve-hvac-airflow',
      'signs-ac-needs-replacement'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Sizing and Operating Central Air Conditioners' }
    ],
    publishedDate: '2025-04-25',
    updatedDate: '2025-08-05',
    readingTime: '6 min read',
    keywords: ['ac running but not cooling', 'ac runs constantly', 'air conditioner wont shut off', 'hvac running all day'],
    safetyLevel: 'low',
    safetyNotice: 'If the outdoor condenser unit emits a strong burning smell or smoke while running nonstop, disconnect power immediately.'
  },
  {
    id: 'ac-8',
    title: 'AC Making Loud Noise: Guide to Squealing, Banging, and Buzzing',
    slug: 'ac-making-loud-noise',
    path: '/hvac/air-conditioning/ac-making-loud-noise/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'Identify what strange air conditioner sounds mean. Learn which noises indicate minor debris and which signal urgent mechanical or electrical dangers.',
    excerpt: 'Screeching, clanking, or buzzing from your AC unit? Use our audio diagnostic breakdown to pinpoint loose fan blades, failing capacitors, or damaged compressors.',
    quickAnswer: 'Different AC noises indicate specific failures: a high-pitched squeal usually points to worn blower motor bearings or a loose fan belt; metal clanking or banging indicates a loose outdoor fan blade or internal compressor rod failure; loud buzzing often signals a failing electrical contactor or relay. Shut the unit off if you hear severe metal grinding or hissing.',
    introduction: [
      'A quiet, steady hum of moving air is normal. But when your central air conditioning unit suddenly starts screeching, banging, buzzing, or chattering, it is giving you clear acoustic warning of a mechanical or electrical issue.',
      'Ignoring strange HVAC sounds often transforms a minor, inexpensive repair (like clearing a twig from a fan blade) into a catastrophic breakdown (like a sheared fan motor shaft or shattered compressor valve).',
      'Here is how to decode the specific noises your system produces and what action to take.'
    ],
    tableOfCauses: [
      {
        cause: 'High-Pitched Squealing or Screeching',
        notice: 'Loud squeal from indoor air handler on startup; pitch varies with blower speed',
        safeCheck: 'Dry motor bearings or slipped blower belt (on older models); requires lubrication'
      },
      {
        cause: 'Banging or Clanking in Outdoor Unit',
        notice: 'Repetitive rhythmic metal slapping sound whenever outdoor unit runs',
        safeCheck: 'Twig or wire hitting outdoor fan blades; shut power and inspect top grille'
      },
      {
        cause: 'Loud Electrical Buzzing or Chattering',
        notice: 'Relay chatter at outdoor unit; compressor attempts to engage but fails',
        safeCheck: 'Pitted contactor points or weak capacitor; requires professional electrical service'
      },
      {
        cause: 'Bubbling or High-Pressure Hissing',
        notice: 'Hissing sound near copper lines or indoor coil when unit stops',
        safeCheck: 'Refrigerant escaping under high pressure or internal expansion valve equalization'
      },
      {
        cause: 'Clicking Sound on Startup',
        notice: 'Rapid clicking from thermostat or control board without equipment starting',
        safeCheck: 'Check thermostat wire connections and 24V control transformer'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Determine Noise Location (Indoor vs. Outdoor)',
        explanation: 'Walk near the indoor air handler/furnace closet, then walk outside to the condenser. Pinpointing whether the noise originates from the indoor blower or the outdoor unit narrows down the culprit immediately.'
      },
      {
        stepNumber: 2,
        title: 'Check Outdoor Fan for Physical Obstructions',
        explanation: 'Turn power OFF at the outdoor disconnect box. Look through the top wire grille with a flashlight. Look for small tree branches, acorns, or bent wire guards brushing against the fan blades.'
      },
      {
        stepNumber: 3,
        title: 'Inspect Cabinet Screws and Panels',
        explanation: 'Vibrating, rattling sheet metal panels often mimic severe internal problems. Tighten loose cabinet screws on the outdoor casing and indoor return plenum.'
      }
    ],
    safeChecks: [
      'Verify that the outdoor unit sits level on its concrete or composite pad.',
      'Check if rubber anti-vibration pads under the unit have deteriorated.',
      'Ensure register grilles inside the home are tightly fastened to drywall.'
    ],
    whatNotToDo: [
      'Never operate an AC that is producing metal-on-metal screeching or heavy knocking; continuing operation destroys the motor or compressor.',
      'Do not insert sticks through the fan grille while the motor is energized.',
      'Do not attempt to open hermetically sealed compressor shells.'
    ],
    whenToCallProfessional: [
      'Deep knocking or clanking directly inside the cylindrical black compressor body.',
      'Persistent electrical buzzing accompanied by a burning smell.',
      'Hissing sounds accompanied by rapid loss of cooling capacity.'
    ],
    faqs: [
      {
        question: 'Why does my outdoor AC unit buzz loudly when trying to start?',
        answer: 'A loud buzzing without the fan spinning usually means the dual-run capacitor has failed, leaving the motor unable to generate starting torque.'
      },
      {
        question: 'Is a clicking sound normal when the AC turns on?',
        answer: 'One or two soft clicks from the thermostat or control relay are normal. Continuous, rapid clicking for several seconds indicates a failing relay or low voltage.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-not-turning-on',
      'ac-short-cycling',
      'ac-repair-vs-replacement'
    ],
    sources: [
      { name: 'Air Conditioning Contractors of America (ACCA)', url: 'https://www.acca.org', description: 'Equipment Diagnostics and Vibration Standards' }
    ],
    publishedDate: '2025-04-28',
    updatedDate: '2025-08-01',
    readingTime: '7 min read',
    keywords: ['ac making loud noise', 'air conditioner noises', 'ac squealing', 'ac buzzing sound', 'banging noise in ac'],
    safetyLevel: 'moderate',
    safetyNotice: 'Loud electrical buzzing can precede electrical arc flashes. Disconnect power immediately before inspecting equipment.'
  },
  {
    id: 'ac-9',
    title: 'AC Short Cycling: Why Your Air Conditioner Turns On and Off Rapidly',
    slug: 'ac-short-cycling',
    path: '/hvac/air-conditioning/ac-short-cycling/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'Understand why your AC turns on, runs for 2 to 5 minutes, and abruptly shuts off. Learn how to diagnose thermostat placement, dirty filters, and oversized units.',
    excerpt: 'An air conditioner that cycles on and off every few minutes wears out components and fails to dehumidify. Here is how to diagnose and fix short cycling.',
    quickAnswer: 'Short cycling occurs when an AC runs in rapid 2-to-5-minute bursts instead of normal 15-to-20-minute cycles. The most frequent causes are a clogged air filter triggering high-pressure limit switches, incorrect thermostat placement in direct sunlight, or an oversized HVAC unit that cools air too quickly without removing humidity.',
    introduction: [
      'A normal central air conditioning cycle lasts between 15 and 20 minutes. This allows the system to achieve peak operating efficiency, circulate air throughout all rooms, and draw humidity across the cold evaporator coil.',
      'When an air conditioner turns on, runs for 2 to 5 minutes, shuts off abruptly, and restarts a few minutes later, it is short cycling. This creates extreme electrical spikes and prevents proper dehumidification.',
      'Over time, short cycling will destroy your compressor and blower motor. Here is how to uncover what is interrupting your cooling cycle.'
    ],
    tableOfCauses: [
      {
        cause: 'Dirty Air Filter (Airflow Restriction)',
        notice: 'Internal heat builds up or coil freezes, tripping high-pressure safety switch',
        safeCheck: 'Replace air filter immediately with fresh MERV 8 filter'
      },
      {
        cause: 'Poor Thermostat Location',
        notice: 'Thermostat mounted in direct sunlight or right next to a supply vent',
        safeCheck: 'Check if cold air from a nearby vent is blowing directly onto the thermostat'
      },
      {
        cause: 'Oversized AC System (Tonnage Too High)',
        notice: 'Home feels cool but clammy and damp; system has always cycled in brief bursts',
        safeCheck: 'Requires professional load calculation; consider variable-speed replacement'
      },
      {
        cause: 'Failing Low-Pressure Safety Switch',
        notice: 'Refrigerant drops slightly, causing switch to cut power to compressor prematurely',
        safeCheck: 'Requires HVAC technician with digital manifold gauges'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check and Replace the Air Filter',
        explanation: 'A clogged filter reduces airflow so severely that internal system temperatures and pressures trip the high-pressure safety switch, shutting the compressor down after just a few minutes.'
      },
      {
        stepNumber: 2,
        title: 'Inspect Thermostat Environment',
        explanation: 'Verify that sunlight from a window is not striking the thermostat casing, tricking it into reading 80°F, or that a nearby supply register is not blowing cold air directly onto it, causing it to satisfy instantly.'
      },
      {
        stepNumber: 3,
        title: 'Check Outdoor Condenser Clearance',
        explanation: 'If the outdoor coil is packed with dirt or choked by shrubs, head pressure skyrockets within minutes of startup, triggering a thermal safety shutoff.'
      }
    ],
    safeChecks: [
      'Ensure thermostat anticipator or cycle-rate setting (CPH) is configured correctly (typically 3 cycles per hour for cooling).',
      'Check for loose thermostat wall wiring.',
      'Observe whether the indoor and outdoor units shut down together or separately.'
    ],
    whatNotToDo: [
      'Do not ignore short cycling; the startup surge draws 3 to 5 times running amps, resulting in burned-out capacitors and ruined motors.',
      'Do not jump across pressure safety switches.'
    ],
    whenToCallProfessional: [
      'The system short cycles with a brand-new filter and clear thermostat environment.',
      'The compressor feels scalding hot to the touch and hums intermittently without starting.',
      'The equipment is suspected of being oversized for the square footage.'
    ],
    faqs: [
      {
        question: 'How long should an AC cycle run normally?',
        answer: 'Under typical summer conditions, a central AC should run for 15 to 20 minutes per cycle, 2 to 3 times per hour.'
      },
      {
        question: 'Why does my house feel humid even though the AC is cooling?',
        answer: 'Short cycling cools the air too rapidly before the system has time to condense moisture out of the air. Moisture removal requires sustained airflow across the coil for at least 10 to 15 minutes.'
      }
    ],
    relatedArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-blowing-warm-air',
      'how-often-change-hvac-filter',
      'how-to-reduce-indoor-humidity'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/air-conditioning', description: 'Central Air Conditioner Sizing and Efficiency' }
    ],
    publishedDate: '2025-05-02',
    updatedDate: '2025-08-04',
    readingTime: '6 min read',
    keywords: ['ac short cycling', 'air conditioner turns on and off', 'ac cycling fast', 'ac shuts off after 5 minutes'],
    safetyLevel: 'low',
    safetyNotice: 'Rapid on-off cycling places intense thermal strain on electrical wiring. If breakers feel hot, switch the system off at the service panel.'
  },
  {
    id: 'ac-10',
    title: 'AC Smells Bad: Causes of Vinegar, Musty, and Burning Odors',
    slug: 'ac-smells-bad',
    path: '/hvac/air-conditioning/ac-smells-bad/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Air Conditioning',
    subcategorySlug: 'air-conditioning',
    description: 'Diagnose why your air conditioner smells like vinegar, dirty socks, rotten eggs, or burning plastic. Learn what is safe to clean and when to evacuate.',
    excerpt: 'Musty mildew, vinegar smells, or burning plastic odors coming from your AC vents? Discover what causes "Dirty Sock Syndrome" and how to eliminate duct odors safely.',
    quickAnswer: 'A musty, dirty-sock smell from your AC is caused by bacterial and mold growth on the evaporator coil and in standing condensate water. A burning plastic smell indicates an overheating motor or melting wire insulation (shut off power immediately). A rotten-egg smell indicates natural gas—evacuate the home and call your gas utility.',
    introduction: [
      'Turning on your air conditioner should fill your home with crisp, refreshing air. When it instead fills your living room with a pungent odor—resembling vinegar, dirty laundry, burning rubber, or dead rodents—it is a sign that contaminants have invaded your HVAC system.',
      'Because all the air in your home recirculates through the air handler and ductwork multiple times every hour, odors from coils or drip pans quickly saturate your entire living space.',
      'Some odors are simple maintenance issues that you can resolve with basic cleaning, while others indicate urgent electrical or gas hazards.'
    ],
    tableOfCauses: [
      {
        cause: '"Dirty Sock Syndrome" (Mold / Bacteria)',
        notice: 'Stale, damp gym locker odor when system first kicks on',
        safeCheck: 'Inspect evaporator coil and condensate drain pan for bacterial slime'
      },
      {
        cause: 'Electrical Burning Odor (Ozone or Burning Wire)',
        notice: 'Sharp plastic or fishy smell; motor is overheating or wire insulation melting',
        safeCheck: 'Turn off power immediately; requires technician inspection'
      },
      {
        cause: 'Vinegar or Sour Chemical Odor',
        notice: 'Pungent acidic odor; decomposing organic matter or chemical off-gassing',
        safeCheck: 'Inspect condensate drain line for blockages and flush with vinegar'
      },
      {
        cause: 'Rotten Egg / Sulfur Smell',
        notice: 'Gas leak smell (mercaptan additive); indicates gas line leak near furnace',
        safeCheck: 'EVACUATE IMMEDIATELY. Do not turn on lights. Call 911 / Gas Company.'
      },
      {
        cause: 'Decomposing Rodent or Pest',
        notice: 'Sickening sweet rotting odor that worsens when blower fan runs',
        safeCheck: 'Inspect accessible return grilles and ductwork for dead rodents'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Classify the Odor Type',
        explanation: 'Identifying the exact scent is vital. If it smells like sulfur or rotten eggs, leave the house immediately. If it smells electrical, shut off the breaker. If it smells musty or like sour vinegar, it is an organic drainage issue.'
      },
      {
        stepNumber: 2,
        title: 'Inspect the Air Filter',
        explanation: 'A damp air filter becomes a petri dish for mildew and fungal spores within 48 hours. Remove and replace damp or mold-spotted filters immediately.'
      },
      {
        stepNumber: 3,
        title: 'Flush the Condensate Drain Pan and Line',
        explanation: 'Pour 1 to 2 cups of distilled white vinegar into the drain pan and condensate access T-pipe to eliminate bacterial biofilms that cause sour odors.'
      }
    ],
    safeChecks: [
      'Verify that the condensate line has a proper P-trap installed to prevent sewer gases from being sucked into the return ductwork.',
      'Inspect return air grilles for dust buildup or moisture infiltration.'
    ],
    whatNotToDo: [
      'Do not spray perfume, aerosol air fresheners, or bleach into return grilles; these chemicals circulate into lungs and do not solve the root cause.',
      'Do not ignore sulfur or rotten egg odors under any circumstances.',
      'Do not run the system if you smell burning electrical insulation.'
    ],
    whenToCallProfessional: [
      'Rotten egg / sulfur odor (call gas company / 911 first).',
      'Persistent electrical burning smell accompanied by unusual blower noises.',
      'Deep mold colonization inside insulated ductwork requiring professional duct sanitization.'
    ],
    faqs: [
      {
        question: 'Why does my AC smell like vinegar?',
        answer: 'A vinegar smell is typically caused by acetic acid produced by bacteria feeding on dust and condensation in your evaporator coil, or an organic clog fermenting inside the condensate drain line.'
      },
      {
        question: 'What is Dirty Sock Syndrome in HVAC?',
        answer: 'Dirty Sock Syndrome is the industry term for the unpleasant, musty odor produced by bacterial and fungal growth on the evaporator coil when the system transitions between heating and cooling.'
      }
    ],
    relatedArticleSlugs: [
      'ac-leaking-water',
      'how-often-change-hvac-filter',
      'how-to-reduce-indoor-humidity',
      'why-is-my-ac-not-cooling'
    ],
    sources: [
      { name: 'EPA (Environmental Protection Agency)', url: 'https://www.epa.gov/indoor-air-quality-iaq', description: 'Indoor Air Quality and Mold in HVAC Systems' },
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Home Heating and Ventilation Safety' }
    ],
    publishedDate: '2025-05-05',
    updatedDate: '2025-08-02',
    readingTime: '6 min read',
    keywords: ['ac smells bad', 'air conditioner smells like vinegar', 'dirty sock syndrome', 'ac smells like burning', 'musty smell from ac'],
    safetyLevel: 'high',
    safetyNotice: 'A rotten egg or sulfur odor indicates a natural gas leak. Do not touch light switches, open windows, or use phones inside. Evacuate immediately and call your local gas utility.'
  }
];
