import { Article } from '../../types';

export const APPLIANCE_ARTICLES: Article[] = [
  {
    id: 'app-25',
    title: 'Refrigerator Not Cooling: 6 Common Causes and Easy Fixes',
    slug: 'refrigerator-not-cooling',
    path: '/appliances/refrigerator/refrigerator-not-cooling/',
    category: 'Appliances',
    categorySlug: 'appliances',
    subcategory: 'Refrigerators',
    subcategorySlug: 'refrigerator',
    description: 'When your refrigerator is warm but the freezer is cold (or both are warm), troubleshoot dirty condenser coils, evaporator fan motors, and door gaskets.',
    excerpt: 'A warm refrigerator risks spoiled food. Learn how to clean choked condenser coils, verify evaporator fan operation, and test door seals with the dollar bill test.',
    quickAnswer: 'If your refrigerator is not cooling, check the condenser coils underneath or behind the unit first: heavy dust blankets prevent heat rejection. Next, listen for the evaporator fan inside the freezer. If the freezer is freezing but the fresh food section is warm, a frozen defrost drain or stuck damper door is usually to blame.',
    introduction: [
      'Opening your refrigerator door to find lukewarm milk, soft butter, and sweating cheese is an urgent household problem. Perishable food spoils rapidly above 40°F (4°C), giving you only a few hours to diagnose and resolve the issue.',
      'A refrigerator operates on the same basic refrigeration cycle as a central air conditioner: a compressor pumps refrigerant between an outdoor condenser coil (under the fridge) and an indoor evaporator coil (inside the freezer compartment).',
      'Most modern frost-free refrigerators generate all their cold air in the freezer and blow a portion of that cold air down into the refrigerator compartment through a small motorized flap called a damper. Understanding this layout makes troubleshooting straightforward.'
    ],
    tableOfCauses: [
      {
        cause: 'Dirty Condenser Coils',
        notice: 'Sides of fridge feel hot; compressor runs continuously; mild cooling loss',
        safeCheck: 'Inspect coils behind base kickplate; vacuum pet hair and dust'
      },
      {
        cause: 'Failed Evaporator Fan Motor',
        notice: 'Freezer is cold, but refrigerator compartment is warm; no fan hum in freezer',
        safeCheck: 'Press door switch; listen for fan motor spinning inside freezer back wall'
      },
      {
        cause: 'Damaged or Dirty Door Gasket Seals',
        notice: 'Condensation or frost along door edges; door pops open easily without tug',
        safeCheck: 'Perform Dollar Bill Test: close dollar in door; if it slides out freely, seal failed'
      },
      {
        cause: 'Defrost System Failure (Coil Iced Solid)',
        notice: 'Frost creeping out of rear freezer wall vents; cooling gradually worsens',
        safeCheck: 'Defrost thermostat, defrost timer, or heater element burned out'
      },
      {
        cause: 'Stuck Air Damper Control',
        notice: 'Freezer is sub-zero, but fresh food section reaches 50°F+; no airflow at top vent',
        safeCheck: 'Check if airflow passage between freezer and fridge is blocked with ice'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check Temperature Controls and Thermostat Dial',
        explanation: 'Ensure the temperature controls were not bumped accidentally. The fresh food compartment should be set to 37°F (3°C) and the freezer to 0°F (-18°C).'
      },
      {
        stepNumber: 2,
        title: 'Clean the Condenser Coils',
        explanation: 'Unplug the refrigerator. Remove the front base grille or pull the unit away from the wall. Use a refrigerator coil brush and vacuum hose to remove the thick felt-like mat of pet hair and dust.'
      },
      {
        stepNumber: 3,
        title: 'Perform the Dollar Bill Door Gasket Test',
        explanation: 'Place a crisp dollar bill across the door gasket and close the door. Pull the bill out. You should feel firm resistance. If it slides out with zero drag, clean the rubber with warm soapy water or replace the gasket.'
      },
      {
        stepNumber: 4,
        title: 'Listen for Both Fan Motors',
        explanation: 'A refrigerator has two fans: the condenser fan underneath next to the compressor, and the evaporator fan inside the freezer. When the doors are closed (or door switches pressed), both fans should spin.'
      }
    ],
    safeChecks: [
      'Ensure food containers are not pushed tightly against the air return vents in the back of the fridge.',
      'Check that the refrigerator has at least 1 inch of clearance on the sides and top for heat dissipation.'
    ],
    whatNotToDo: [
      'Never use hair dryers or heat guns inside plastic refrigerator liners to melt ice quickly; the thin plastic warps and cracks permanently.',
      'Never puncture frost on evaporator coils with knives or screwdrivers.',
      'Do not overload shelves so heavily that air vents are physically blocked.'
    ],
    whenToCallProfessional: [
      'The compressor clicks loudly every 2 minutes and shuts off (failing start relay or locked compressor).',
      'The evaporator coil has a partial frost pattern indicating a sealed system refrigerant leak.',
      'The electronic main control board has burned components.'
    ],
    repairVsReplacement: {
      explanation: 'Refrigerators typically last 10 to 14 years. A replacement start relay or fan motor ($80-$200) is worthwhile on units under 8 years old. A sealed-system compressor replacement ($800-$1,200) usually warrants buying a new refrigerator.',
      factors: [
        { name: 'Under 7 Years Old', advice: 'Repair minor parts like fans, gaskets, and sensors.' },
        { name: 'Over 10 Years Old', advice: 'Replace if repair exceeds $400 or involves the compressor.' }
      ]
    },
    faqs: [
      {
        question: 'What temperature should a refrigerator and freezer be?',
        answer: 'The FDA recommends setting your refrigerator compartment at or below 40°F (ideally 37°F) and the freezer at 0°F (-18°C).'
      },
      {
        question: 'Why is my freezer cold but the refrigerator warm?',
        answer: 'This is the classic symptom of a failed evaporator fan motor, a frozen defrost drain, or a stuck damper door that blocks cold freezer air from flowing into the refrigerator.'
      }
    ],
    relatedArticleSlugs: [
      'refrigerator-leaking-water',
      'why-is-my-ac-not-cooling',
      'how-to-reduce-indoor-humidity'
    ],
    sources: [
      { name: 'U.S. Food and Drug Administration (FDA)', url: 'https://www.fda.gov/food/buy-store-serve-safe-food/refrigerator-thermometers-cold-facts-about-food-safety', description: 'Food Safety and Proper Refrigerator Temperatures' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/products/appliances/refrigerators', description: 'Energy-Efficient Refrigerators and Maintenance' }
    ],
    publishedDate: '2025-06-20',
    updatedDate: '2025-08-15',
    readingTime: '7 min read',
    keywords: ['refrigerator not cooling', 'fridge warm freezer cold', 'refrigerator troubleshooting', 'clean condenser coils'],
    safetyLevel: 'low',
    safetyNotice: 'Always unplug the refrigerator before removing kickplates or cleaning coils near electrical fan blades and capacitors.'
  },
  {
    id: 'app-26',
    title: 'Refrigerator Leaking Water: Causes of Puddles Inside and Out',
    slug: 'refrigerator-leaking-water',
    path: '/appliances/refrigerator/refrigerator-leaking-water/',
    category: 'Appliances',
    categorySlug: 'appliances',
    subcategory: 'Refrigerators',
    subcategorySlug: 'refrigerator',
    description: 'Find out why water is pooling under your crisper drawers or leaking onto the kitchen floor. Learn how to clear a frozen defrost drain and inspect water line fittings.',
    excerpt: 'Water inside the bottom of your fridge or pooling on the kitchen floor usually stems from a frozen defrost drain tube or a loose ice maker water supply line.',
    quickAnswer: 'Water pooling under your vegetable crisper drawers is almost always caused by a frozen or clogged defrost drain hole. When the daily automatic defrost cycle melts frost off the coil, water cannot drain into the drain pan below, overflowing into the fridge floor. Flush the drain with hot water.',
    introduction: [
      'Stepping into your kitchen in socks only to step into a puddle of water in front of the refrigerator is an unwelcome surprise. Left unaddressed, a leaking refrigerator can quickly warp hardwood flooring, ruin subflooring, and spawn black mold beneath baseboards.',
      'Refrigerators handle water in two distinct ways: first, continuous condensation melted by the automatic defrost cycle; and second, pressurized household water supplied to the automatic ice maker and door water dispenser.',
      'Determining whether the leaking water is coming from condensation or the pressurized water supply line is the crucial first step to stopping the leak.'
    ],
    tableOfCauses: [
      {
        cause: 'Clogged or Frozen Defrost Drain Hole',
        notice: 'Sheet of solid ice under bottom freezer drawer or water under crisper pans',
        safeCheck: 'Locate small drain hole beneath evaporator coil; clear with hot water'
      },
      {
        cause: 'Cracked or Loose Ice Maker Water Line',
        notice: 'Active puddle of clean water behind or underneath the refrigerator cabinet',
        safeCheck: 'Inspect 1/4" plastic or braided stainless steel water line connection on back'
      },
      {
        cause: 'Misaligned or Cracked Drain Pan',
        notice: 'Water leaking out from underneath front center; unit was recently moved',
        safeCheck: 'Inspect plastic drain pan sitting above compressor under bottom access'
      },
      {
        cause: 'Faulty Water Inlet Valve',
        notice: 'Slow dripping from back bottom corner; ice maker overflows cubes into bucket',
        safeCheck: 'Inspect dual solenoid valve on the bottom rear of refrigerator'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Identify Where the Water is Pooling',
        explanation: 'Is the water inside the refrigerator beneath the crisper drawers? Inside the freezer beneath the lowest basket? Or on the kitchen floor behind/under the unit? Inside water indicates a defrost drain issue; rear external water points to the water supply line.'
      },
      {
        stepNumber: 2,
        title: 'Clear the Frozen Defrost Drain Hole',
        explanation: 'Unplug the unit. Locate the drain opening at the bottom rear of the freezer compartment. Use a turkey baster filled with hot tap water to flush the drain hole until you hear water dripping freely into the pan below.'
      },
      {
        stepNumber: 3,
        title: 'Inspect the Water Supply Line Connections',
        explanation: 'Pull the refrigerator out from the wall. Inspect the 1/4-inch plastic or braided stainless steel water tubing where it connects to the brass saddle valve or shutoff valve and the refrigerator inlet solenoid.'
      }
    ],
    safeChecks: [
      'Ensure the refrigerator is leveled with a slight backward tilt (about 1/4 inch) so water flows toward the rear drain.',
      'Check that ice maker mold is not overflowing.'
    ],
    whatNotToDo: [
      'Do not use sharp metal ice picks to chip ice away from the plastic drain trough; you will crack the plastic or puncture hidden tubing.',
      'Never leave a dripping water supply line unaddressed; water pressure can blow the line off, flooding your home.'
    ],
    whenToCallProfessional: [
      'The water inlet valve solenoid is cracked and dripping continuously.',
      'The internal polyurethane foam insulation has become waterlogged.',
      'The copper tubing connections inside the sealed system show corrosion.'
    ],
    faqs: [
      {
        question: 'Why does water collect under my refrigerator crisper drawers?',
        answer: 'The defrost drain trough located directly behind the freezer wall is clogged with ice, food crumbs, or algae. Melted frost overflows into the fresh food compartment and pools at the lowest point.'
      },
      {
        question: 'How do I unfreeze an ice maker water line?',
        answer: 'Use a hair dryer on LOW heat aimed at the water fill tube entering the back of the ice maker for 2 to 3 minutes, taking care not to melt surrounding plastic parts.'
      }
    ],
    relatedArticleSlugs: [
      'refrigerator-not-cooling',
      'washing-machine-not-draining',
      'dishwasher-not-draining'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Home Appliance Water Connection Safety' }
    ],
    publishedDate: '2025-06-22',
    updatedDate: '2025-08-14',
    readingTime: '6 min read',
    keywords: ['refrigerator leaking water', 'water under fridge crisper drawers', 'frozen defrost drain fridge', 'refrigerator water puddle'],
    safetyLevel: 'low',
    safetyNotice: 'Water on the kitchen floor combined with 120V electrical appliance cords creates a shock hazard. Unplug the refrigerator before wiping standing water near electrical components.'
  },
  {
    id: 'app-27',
    title: 'Washing Machine Not Draining: 5 Common Causes and Drain Pump Clearing',
    slug: 'washing-machine-not-draining',
    path: '/appliances/washer/washing-machine-not-draining/',
    category: 'Appliances',
    categorySlug: 'appliances',
    subcategory: 'Washing Machines',
    subcategorySlug: 'washer',
    description: 'When your washing machine stops mid-cycle with a tub full of dirty soapy water, learn how to safely drain the water, clear the coin trap filter, and check the drain pump.',
    excerpt: 'A washing machine filled with standing water usually has a clogged coin trap filter, a kinked drain hose, or a broken lid switch preventing the spin and drain cycle.',
    quickAnswer: 'If your washing machine will not drain, first check for a clogged coin trap filter (on front-loaders, behind the small lower front access door) or a kinked drain hose behind the machine. Small socks, coins, and hair pins frequently jam the drain pump impeller.',
    introduction: [
      'Opening your washing machine at the end of a cycle only to find your wet laundry submerged in a tub of dirty, soapy water is a major disruption. The machine refuses to spin, hums helplessly, or flashes an error code (like OE, 5E, or E21).',
      'Washing machines rely on an electric drain pump motor to force dirty water up through a corrugated discharge hose and into your household drain standpipe.',
      'In the vast majority of non-draining washers, the pump motor itself is completely fine—it is simply choked by pocket debris like coins, bobby pins, or small baby socks. Here is how to safely drain the tub and clear the blockage.'
    ],
    tableOfCauses: [
      {
        cause: 'Clogged Drain Pump Filter (Coin Trap)',
        notice: 'Front-load washer stops before spin; pump hums but water remains stagnant',
        safeCheck: 'Open lower front access door; unscrew filter and remove trapped debris'
      },
      {
        cause: 'Kinked or Crushed Drain Hose',
        notice: 'Washer pushed too close to wall, pinching corrugated plastic discharge line',
        safeCheck: 'Pull machine away from wall and inspect drain hose for bends or flat spots'
      },
      {
        cause: 'Foreign Object Jamming Pump Impeller',
        notice: 'Loud buzzing or grinding sound when drain cycle begins; motor cannot turn',
        safeCheck: 'Inspect plastic impeller blades inside pump housing for jammed coins'
      },
      {
        cause: 'Faulty Lid Switch / Door Lock Interlock',
        notice: 'Top-load washer stops completely; will not drain or spin with lid shut',
        safeCheck: 'Test if lid click is heard; faulty switch prevents drain sequence'
      },
      {
        cause: 'Household Standpipe Drain Clog',
        notice: 'Washer pumps water out, but it overflows out of the wall drain pipe onto floor',
        safeCheck: 'Plumbing drain snake required to clear main 2-inch laundry drain pipe'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Manually Drain the Standing Water',
        explanation: 'Before opening any filters, prepare shallow baking dishes and towels. On front-loaders, pull the small black auxiliary rubber drain tube beside the filter, pull the stopper, and drain water into a pan. On top-loaders, bail water out with a bucket.'
      },
      {
        stepNumber: 2,
        title: 'Unscrew and Clean the Pump Coin Filter',
        explanation: 'Twist the circular filter cap counter-clockwise. Pull the filter assembly out. Clean out trapped coins, buttons, lint, and hair pins. Rinse the filter under a faucet.'
      },
      {
        stepNumber: 3,
        title: 'Check the Pump Impeller for Free Movement',
        explanation: 'Reach a finger into the pump housing where the filter was seated. Feel the plastic fan blades (impeller). The blades should spin with a slight magnetic click. If frozen solid, a bobby pin or coin is jammed behind the blades.'
      },
      {
        stepNumber: 4,
        title: 'Check the Standpipe and Hose Height',
        explanation: 'Ensure the drain hose is not pushed more than 6 to 8 inches down the wall pipe, which can create a siphoning loop.'
      }
    ],
    safeChecks: [
      'Check if the washer display is throwing a brand-specific error code (e.g., Samsung 5C/5E, LG OE, Whirlpool F9E1).',
      'Verify the electrical outlet has power.'
    ],
    whatNotToDo: [
      'Never unscrew the front drain filter while the tub is full without having towels and shallow pans ready; gallons of water will flood your floor.',
      'Do not force the washing machine lid or door open while the cycle lock light is active.',
      'Do not pour caustic chemical drain cleaners down washing machine drums.'
    ],
    whenToCallProfessional: [
      'The drain pump motor receives 120V power but does not hum or rotate at all.',
      'The main electronic control board fails to send voltage to the pump.',
      'The transmission or drive belt on a top-load machine has broken.'
    ],
    faqs: [
      {
        question: 'Why does my front-load washer stop with water inside?',
        answer: 'Front-load washers feature a coin trap filter that protects the pump. When this filter clogs with lint, coins, or hair, the machine detects a drainage timeout and aborts the cycle.'
      },
      {
        question: 'How do I force my washer to drain?',
        answer: 'Cancel the active wash cycle, then select the manual "DRAIN & SPIN" or "SPIN ONLY" setting on the control dial, turning the spin speed to NO SPIN if available.'
      }
    ],
    relatedArticleSlugs: [
      'dryer-not-heating',
      'dishwasher-not-draining',
      'refrigerator-leaking-water'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Washing Machine Safety Standards' }
    ],
    publishedDate: '2025-06-25',
    updatedDate: '2025-08-12',
    readingTime: '6 min read',
    keywords: ['washing machine not draining', 'washer full of water', 'clean washer pump filter', 'front load washer drain problem'],
    safetyLevel: 'low',
    safetyNotice: 'Always unplug the washing machine from the wall outlet before servicing pump filters or removing rear access panels.'
  },
  {
    id: 'app-28',
    title: 'Dryer Not Heating: Troubleshooting Gas and Electric Clothes Dryers',
    slug: 'dryer-not-heating',
    path: '/appliances/dryer/dryer-not-heating/',
    category: 'Appliances',
    categorySlug: 'appliances',
    subcategory: 'Clothes Dryers',
    subcategorySlug: 'dryer',
    description: 'When your clothes dryer runs and tumbles but produces zero heat, diagnose tripped 240V breakers, burned heating elements, thermal fuses, and clogged vents.',
    excerpt: 'A dryer that tumbles cold usually has a half-tripped double-pole breaker (electric dryers), a blown thermal fuse from vent lint clogs, or a burned-out heating coil.',
    quickAnswer: 'If your electric dryer tumbles but blows cold air, check your home breaker panel first: electric dryers require two 120V legs (240V total). If one leg trips, the drum will spin but the heater element cannot turn on. For gas dryers, check that the gas supply valve is open.',
    introduction: [
      'You load a batch of damp towels into your dryer, run a normal 50-minute cycle, and return to find the towels completely cold and soaked. The drum is spinning and the motor sounds normal, but there is zero heat.',
      'Clothes dryers are relatively straightforward appliances. They pull room air in, pass it across an electric heating coil or gas burner flame, circulate it through the tumbling drum, and exhaust moisture outdoors through an aluminum duct.',
      'Because excessive heat creates an extreme fire risk, dryers are packed with thermal safety fuses and high-limit thermostats. When airflow is choked by lint, these fuses blow intentionally to save your home from a dryer fire. Here is how to diagnose the cause.'
    ],
    tableOfCauses: [
      {
        cause: 'Half-Tripped 240V Circuit Breaker (Electric Dryers)',
        notice: 'Motor runs on 120V, but 240V heating element receives zero power',
        safeCheck: 'Inspect electrical panel for double-pole breaker; reset both switches'
      },
      {
        cause: 'Blown Thermal Fuse from Clogged Exhaust Vent',
        notice: 'Dryer was running extremely hot recently; suddenly produces zero heat',
        safeCheck: 'Check exterior vent hood for heavy lint accumulation; test fuse continuity'
      },
      {
        cause: 'Burned-Out Electric Heating Element',
        notice: 'Dryer tumbles cold; visual break or burned spot in coiled nickel-chrome wire',
        safeCheck: 'Unplug dryer, remove back panel, inspect heating element coil'
      },
      {
        cause: 'Failed Gas Solenoid Coils (Gas Dryers)',
        notice: 'Igniter glows orange, but gas valve never clicks open; or heats for only 2 minutes',
        safeCheck: 'Gas valve solenoid coils fail when hot; requires replacement pair'
      },
      {
        cause: 'Exhaust Vent Duct Crushed Behind Machine',
        notice: 'Dryer cabinet feels blazing hot on outside, but clothes take 3 cycles to dry',
        safeCheck: 'Pull dryer out and ensure semi-rigid metal duct is not squashed flat'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check the Double-Pole 240V Breakers (Electric Dryers)',
        explanation: 'Electric dryers run on 240 volts via two connected breakers. If only one pole trips, the motor (which uses 120V) runs perfectly, but the heating element (which requires 240V) stays dead. Flip both breakers firmly OFF, then ON.'
      },
      {
        stepNumber: 2,
        title: 'Inspect the Exterior Dryer Exhaust Flapper',
        explanation: 'Walk outside while the dryer is running. Is warm, moist air blowing strongly out of the vent hood? Is the louvers flapper stuck with lint? If airflow is weak, a dangerous lint clog is trapping heat.'
      },
      {
        stepNumber: 3,
        title: 'Clean the Internal Lint Screen and Housing',
        explanation: 'Remove the lint screen and wash it with warm water and detergent to remove invisible fabric softener film. Vacuum down into the lint trap chute.'
      },
      {
        stepNumber: 4,
        title: 'Check Gas Shut-Off Valve (Gas Dryers)',
        explanation: 'If your dryer uses natural gas or propane, ensure the yellow handle on the flexible gas line behind the dryer is parallel to the pipe.'
      }
    ],
    safeChecks: [
      'Verify that timer dial is not set to "AIR FLUFF" or "NO HEAT" mode.',
      'Check that semi-rigid metal transition ducting is used, not flammable white vinyl foil.'
    ],
    whatNotToDo: [
      'Never bypass a blown thermal fuse with a jumper wire. The thermal fuse is a critical safety device that prevents residential structure fires.',
      'Never use plastic or vinyl flexible ducting for dryer exhaust.',
      'Do not operate a gas dryer if you smell natural gas.'
    ],
    whenToCallProfessional: [
      'Gas dryer igniter does not glow or gas smells are present.',
      'Multimeter testing reveals an open heating element or blown thermal cut-off.'
    ],
    faqs: [
      {
        question: 'Why does my dryer spin but has no heat?',
        answer: 'For electric dryers, the most common culprit is a tripped double-pole circuit breaker that dropped one 120V leg, followed by a burned heating element or blown thermal fuse.'
      },
      {
        question: 'How do I know if my dryer heating element is burned out?',
        answer: 'Unplug the dryer, disconnect the two wires connected to the heating element, and test across the terminals with a multimeter set to ohms. If the display reads "OL" or infinite resistance, the coil is broken.'
      }
    ],
    relatedArticleSlugs: [
      'washing-machine-not-draining',
      'oven-not-heating',
      'refrigerator-not-cooling'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Dryer-Safety-Education-Center', description: 'Clothes Dryer Safety and Fire Prevention' },
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/laundry', description: 'Energy Efficient Laundry Appliances' }
    ],
    publishedDate: '2025-06-28',
    updatedDate: '2025-08-11',
    readingTime: '7 min read',
    keywords: ['dryer not heating', 'dryer runs but no heat', 'electric dryer not hot', 'dryer thermal fuse blown'],
    safetyLevel: 'high',
    safetyNotice: 'Dryer lint buildup is a leading cause of residential house fires. Never bypass thermal safety fuses or use damaged ducting.'
  },
  {
    id: 'app-29',
    title: 'Dishwasher Not Draining: How to Clear Standing Water in the Tub',
    slug: 'dishwasher-not-draining',
    path: '/appliances/dishwasher/dishwasher-not-draining/',
    category: 'Appliances',
    categorySlug: 'appliances',
    subcategory: 'Dishwashers',
    subcategorySlug: 'dishwasher',
    description: 'Solve standing dirty water at the bottom of your dishwasher. Learn how to clean the cylinder filter, inspect the garbage disposal knockout, and clear drain hose clogs.',
    excerpt: 'A pool of dirty water in the bottom of your dishwasher usually results from a clogged cylindrical filter, an unpunched garbage disposal plug, or a drain hose without a high loop.',
    quickAnswer: 'Standing water in a dishwasher is most commonly caused by a food-clogged mesh filter at the bottom of the tub. Twist and remove the cylindrical filter, wash it under warm running water with a soft brush, and inspect the drain sump beneath for lemon seeds or broken glass.',
    introduction: [
      'Opening your dishwasher expecting clean, sparkling dishes only to find a pool of murky, greasy standing water covering the bottom of the tub is both disgusting and frustrating.',
      'Modern dishwashers do not have built-in food disposals like older models; instead, they use fine-mesh manual filters to trap food particles and prevent them from redepositing onto plates.',
      'When these filters are neglected, or when the drain hose connects improperly to the kitchen sink plumbing, water cannot be evacuated by the drain pump. Here is how to fix it in minutes.'
    ],
    tableOfCauses: [
      {
        cause: 'Clogged Cylinder Mesh Filter',
        notice: 'Grease, coffee grounds, and food film covering the bottom cylindrical filter',
        safeCheck: 'Twist filter counter-clockwise, lift out, and wash under running water'
      },
      {
        cause: 'New Garbage Disposal Knockout Plug Not Removed',
        notice: 'Dishwasher stopped draining immediately after installing a new garbage disposal',
        safeCheck: 'Check disposal inlet nipple: plastic knockout plug must be punched out'
      },
      {
        cause: 'Missing "High Loop" or Clogged Air Gap',
        notice: 'Dirty sink water flows backwards into the dishwasher tub when sink drains',
        safeCheck: 'Ensure drain hose loops up high under countertop before connecting to drain'
      },
      {
        cause: 'Glass or Debris Jamming Drain Pump Impeller',
        notice: 'Pump motor buzzes or hums at end of cycle but water does not move',
        safeCheck: 'Inspect small plastic impeller chamber beneath the removable filter'
      },
      {
        cause: 'Kinked Drain Hose Under Sink',
        notice: 'Hose pinched by cleaning supply bottles or trash cans beneath sink',
        safeCheck: 'Inspect corrugated hose under sink for sharp bends or crushed sections'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Remove and Clean the Cylindrical Filter',
        explanation: 'Remove the lower dish rack. Look at the floor of the tub. Twist the cylindrical filter 1/4 turn counter-clockwise and pull up. Wash both the cylinder and the flat stainless screen with warm soapy water and a soft toothbrush.'
      },
      {
        stepNumber: 2,
        title: 'Inspect the Sump Basin for Foreign Objects',
        explanation: 'Shine a flashlight into the depression beneath the filter. Look for toothpicks, bones, pumpkin seeds, or pieces of broken glass that can jam the pump impeller.'
      },
      {
        stepNumber: 3,
        title: 'Verify the Garbage Disposal Connection',
        explanation: 'If you recently replaced your garbage disposal, the factory plastic knockout plug inside the 3/4-inch dishwasher nipple was likely not removed. Knock it out with a screwdriver and hammer.'
      },
      {
        stepNumber: 4,
        title: 'Check the Drain Hose High Loop or Air Gap',
        explanation: 'Plumbing codes require the dishwasher drain hose to loop up to the highest point under the countertop (or connect to a countertop air gap) to prevent sink waste from back-siphoning.'
      }
    ],
    safeChecks: [
      'Run the sink garbage disposal for 10 seconds before running the dishwasher to clear the line.',
      'Cancel the dishwasher cycle to trigger the 60-second drain pump routine.'
    ],
    whatNotToDo: [
      'Never pour caustic chemical drain cleaners (like Drano) into a dishwasher. It destroys pump seals and sprays onto dishes during future cycles.',
      'Do not wash fine china or glasses without checking if any broke inside the sump.'
    ],
    whenToCallProfessional: [
      'The drain pump motor fails to receive power from the timer/control module.',
      'The pump impeller has cracked or sheared off its motor shaft.'
    ],
    faqs: [
      {
        question: 'Is it normal to have a little water in the bottom of a dishwasher?',
        answer: 'Yes. A small amount of clean water (about 1 to 2 cups) in the lowest sump area beneath the filter is normal to keep pump seals moist and prevent sewer gas backdraft.'
      },
      {
        question: 'Why did my dishwasher stop draining after installing a garbage disposal?',
        answer: 'New garbage disposals have a solid plastic plug molded into the dishwasher inlet nipple. You must physically knock this plug out with a screwdriver before connecting the hose.'
      }
    ],
    relatedArticleSlugs: [
      'washing-machine-not-draining',
      'refrigerator-leaking-water',
      'oven-not-heating'
    ],
    sources: [
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov/products/appliances/dishwashers', description: 'Energy Efficient Dishwasher Guidelines and Maintenance' }
    ],
    publishedDate: '2025-07-02',
    updatedDate: '2025-08-14',
    readingTime: '6 min read',
    keywords: ['dishwasher not draining', 'standing water in dishwasher', 'clean dishwasher filter', 'dishwasher water in bottom'],
    safetyLevel: 'low',
    safetyNotice: 'Broken glass chips frequently collect in the dishwasher drain sump. Wear puncture-resistant gloves when reaching into the drain basin.'
  },
  {
    id: 'app-30',
    title: 'Oven Not Heating: Diagnosis for Electric and Gas Ranges',
    slug: 'oven-not-heating',
    path: '/appliances/oven/oven-not-heating/',
    category: 'Appliances',
    categorySlug: 'appliances',
    subcategory: 'Ovens',
    subcategorySlug: 'oven',
    description: 'When your oven will not heat up or bake evenly, troubleshoot burned bake elements, failing gas igniters, temperature sensors, and calibration issues.',
    excerpt: 'An oven that fails to heat typically suffers from a burned-out electric bake element, a worn gas glow-bar igniter, or a tripped internal safety thermostat.',
    quickAnswer: 'If an electric oven will not heat, visually inspect the bottom bake element for blistering, cracks, or glowing breaks. If a gas oven will not heat, watch the igniter: if it glows orange for more than 90 seconds without gas lighting, the igniter has weakened and cannot draw enough electrical current to open the safety gas valve.',
    introduction: [
      'Preheating your oven for dinner only to open the door 20 minutes later and find cold metal is a frustrating discovery. Whether preparing a simple weeknight dinner or hosting holiday guests, an oven that refuses to heat halts kitchen plans.',
      'Electric and gas ovens operate on entirely different heating mechanisms. Electric ovens utilize heavy nickel-chromium resistance elements, while gas ovens use an electronic glow-bar igniter wired in series with a bi-metal safety valve.',
      'Understanding the operating principle of your specific fuel type makes pinpointing the failure straightforward.'
    ],
    tableOfCauses: [
      {
        cause: 'Burned-Out Electric Bake Element',
        notice: 'Visible blister, crack, or white ash on bottom metal element; does not glow red',
        safeCheck: 'Unplug range; look for physical separation or pitting on element loop'
      },
      {
        cause: 'Weak Gas Igniter (Glow Bar)',
        notice: 'Igniter glows yellow/orange, but gas burner never clicks on or lights',
        safeCheck: 'Igniter must draw 3.2 to 3.6 amps to open gas valve; replace igniter'
      },
      {
        cause: 'Faulty Oven Temperature Sensor Probe',
        notice: 'Oven either stays cold or burns everything; temperature fluctuates wildly',
        safeCheck: 'Test resistance of RTD temperature sensor with multimeter (should read ~1080 ohms at 70°F)'
      },
      {
        cause: 'Tripped Thermal Limit Fuse',
        notice: 'Oven completely dead after running self-clean cycle; door might be locked',
        safeCheck: 'Self-cleaning cycle heat frequently trips high-limit safety thermostat'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Inspect the Heating Element (Electric Ovens)',
        explanation: 'Turn power OFF at the circuit breaker. Inspect the lower bake element and upper broil element. A burned element often shows a distinct break, blister, or black scorch mark.'
      },
      {
        stepNumber: 2,
        title: 'Observe the Gas Igniter (Gas Ovens)',
        explanation: 'Turn the oven to BAKE. Look through the lower vents. A healthy igniter glows white-hot and opens the gas valve within 30 to 60 seconds. If it glows dull orange for 2+ minutes without flame, it has degraded.'
      },
      {
        stepNumber: 3,
        title: 'Verify Oven Controls and Clock Settings',
        explanation: 'Ensure the oven is not in "DELAY START", "TIMED BAKE", or "SABBATH" mode. If the digital clock is flashing after a power blip, reset the clock.'
      },
      {
        stepNumber: 4,
        title: 'Check Breaker Panel (Electric Ovens)',
        explanation: 'Electric ranges run on a dedicated 40A or 50A 240V breaker. If one leg trips, the digital clock and interior light work, but heating elements remain dead.'
      }
    ],
    safeChecks: [
      'Ensure the gas shut-off valve behind the range is in the open position.',
      'Check that the oven door latches firmly without drooping hinges.'
    ],
    whatNotToDo: [
      'Never touch a heating element with bare hands while power is connected.',
      'Do not repeatedly attempt to light a gas oven if strong natural gas odors accumulate in the kitchen.',
      'Avoid running high-temperature self-clean cycles on ovens over 8 years old, as the 900°F heat routinely destroys control boards and thermal fuses.'
    ],
    whenToCallProfessional: [
      'The electronic control board display is unresponsive or relays buzz loudly.',
      'Persistent gas odors require professional gas pressure testing.'
    ],
    faqs: [
      {
        question: 'Why does my gas oven igniter glow but no flame appears?',
        answer: 'Gas oven igniters are wired in series with the gas safety valve. As igniters age, their electrical resistance increases; even though they glow, they cannot draw enough amperage (usually 3.2+ amps) to open the valve.'
      },
      {
        question: 'How much does it cost to replace an oven bake element?',
        answer: 'A replacement electric bake element typically costs $30 to $80 for the part and can be installed by a homeowner with basic tools in under 20 minutes.'
      }
    ],
    relatedArticleSlugs: [
      'dryer-not-heating',
      'dishwasher-not-draining',
      'refrigerator-not-cooling'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Range and Oven Electrical and Gas Safety' }
    ],
    publishedDate: '2025-07-05',
    updatedDate: '2025-08-10',
    readingTime: '6 min read',
    keywords: ['oven not heating', 'gas oven igniter glowing no flame', 'electric oven bake element replacement', 'oven wont heat up'],
    safetyLevel: 'high',
    safetyNotice: 'Electric ranges carry lethal 240V current. Always disconnect the 50A circuit breaker before touching heating element screws or wires.'
  }
];
