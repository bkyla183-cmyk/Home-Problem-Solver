import { Article } from '../../types';

export const FURNACE_ARTICLES: Article[] = [
  {
    id: 'furnace-11',
    title: 'Furnace Blowing Cold Air: 7 Common Causes and How to Fix It',
    slug: 'furnace-blowing-cold-air',
    path: '/hvac/furnace/furnace-blowing-cold-air/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Furnaces',
    subcategorySlug: 'furnace',
    description: 'When your furnace is blowing cold or room-temperature air instead of heat, follow this safe troubleshooting guide to check thermostat settings, flame sensors, and pilot lights.',
    excerpt: 'A furnace blowing cold air is frequently caused by a thermostat fan set to "ON", a dirty flame sensor shutting down burners, or an overheated high-limit switch.',
    quickAnswer: 'If your furnace blows cold air, check your thermostat fan switch first: ensure it is set to "AUTO" and not "ON". If set to ON, the blower blows continuous cold air between heating cycles. If the setting is AUTO, a dirty flame sensor or clogged air filter triggering the high-limit switch is the most common cause.',
    introduction: [
      'Waking up on a freezing winter morning to discover your furnace running, but blowing cold air through the heat registers, is one of the most frustrating experiences a homeowner can face. The blower motor is clearly functional, yet the house is steadily getting colder.',
      'Furnaces depend on an exact ignition sequence: the thermostat calls for heat, the draft inducer fan purges the combustion chamber, a pressure switch verifies airflow, the igniter glows, gas valves open, and burners ignite.',
      'If any safety interlock along this sequence detects an anomaly, the gas valve instantly closes to protect against gas accumulation or overheating, while the blower fan continues to run as a safety precaution to cool the heat exchanger. Here is how to isolate the cause.'
    ],
    tableOfCauses: [
      {
        cause: 'Thermostat Fan Setting on "ON"',
        notice: 'Blower fan runs 24/7; blows cold air during off-cycle intervals',
        safeCheck: 'Switch thermostat fan setting from "ON" to "AUTO"'
      },
      {
        cause: 'Dirty Flame Sensor Rod',
        notice: 'Burners ignite with blue flame for 3 to 7 seconds, then abruptly shut off',
        safeCheck: 'Observe burner window during startup to see if fire lights and dies'
      },
      {
        cause: 'Overheating from Dirty Filter (High Limit Switch)',
        notice: 'Furnace runs for 10 minutes, shuts off burners, and blows cold air continuously',
        safeCheck: 'Inspect air filter for heavy dust blanket and replace'
      },
      {
        cause: 'Extinguished Pilot Light (Older Furnaces)',
        notice: 'Standing pilot light has blown out; draft or thermocouple failure',
        safeCheck: 'Inspect pilot assembly through burner viewing window'
      },
      {
        cause: 'Gas Supply Valve Closed',
        notice: 'Furnace clicks, attempts to ignite 3 times, then enters safety lockout',
        safeCheck: 'Check if gas shut-off valve on the supply line is parallel to pipe'
      },
      {
        cause: 'Condensate Drain Blocked (High-Efficiency Furnaces)',
        notice: 'High-efficiency condensing furnace with standing water in trap; inducer stops',
        safeCheck: 'Inspect clear plastic drain tubing and condensate trap for sediment'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check Thermostat Fan Setting and Setpoint',
        explanation: 'Confirm the thermostat is switched to "HEAT". Verify the fan is set to "AUTO" and not "ON". Raise the temperature setpoint 5 degrees above current room temperature to force a call for heat.'
      },
      {
        stepNumber: 2,
        title: 'Check and Replace the Air Filter',
        explanation: 'A clogged furnace filter restricts airflow across the heat exchanger. Heat becomes trapped inside the chamber, causing the high-limit safety switch to trip, which cuts off gas while forcing the blower to run on high speed to cool the metal.'
      },
      {
        stepNumber: 3,
        title: 'Observe the Ignition Sequence Through the Viewport',
        explanation: 'Watch through the small glass viewing port on the lower furnace door. When the thermostat calls for heat, do you see the draft inducer fan start? Does an electronic igniter glow orange? Do the burners light?'
      },
      {
        stepNumber: 4,
        title: 'Read the Diagnostic LED Flash Code',
        explanation: 'Modern furnaces feature an LED light visible through a small clear lens on the blower door. When in lockout, it flashes a diagnostic code (e.g., 3 flashes for pressure switch open, 1 flash for ignition failure). Consult the chart pasted on the inside of the furnace door.'
      },
      {
        stepNumber: 5,
        title: 'Reset the Furnace Power Switch',
        explanation: 'Turn the furnace wall toggle switch OFF for 60 seconds, then back ON. This resets soft lockouts, allowing the furnace to attempt a fresh ignition cycle.'
      }
    ],
    safeChecks: [
      'Ensure the furnace door panel is firmly latched (safety interlock button must be fully depressed).',
      'Check that exterior combustion intake and exhaust PVC pipes are free of snow drifts, bird nests, or ice.',
      'Check that the gas valve toggle on the internal gas manifold is turned to "ON".'
    ],
    whatNotToDo: [
      'Never attempt to light an electronic ignition furnace with matches, lighters, or paper.',
      'Do not tamper with or adjust gas manifold pressure regulators without a calibrated digital manometer.',
      'Never bypass the high-limit switch or flame rollout switches using jumper wires. Doing so creates an imminent house fire and carbon monoxide hazard.',
      'Do not ignore a rotten-egg natural gas odor.'
    ],
    whenToCallProfessional: [
      'The diagnostic LED indicates a cracked heat exchanger or rollout switch trip.',
      'The electronic hot surface igniter does not glow or is visibly cracked/broken.',
      'The draft inducer motor hums or screeches without spinning.',
      'Burners produce irregular, jumping yellow/orange flames rather than steady blue flames.'
    ],
    repairVsReplacement: {
      explanation: 'Furnaces have an average lifespan of 15 to 20 years. If your furnace is over 15 years old and has a cracked heat exchanger or bad inducer assembly, replacement with an ENERGY STAR 96%+ AFUE condensing furnace is almost always more cost-effective.',
      factors: [
        { name: 'Cracked Heat Exchanger', advice: 'Always warrants furnace replacement; repairing is cost-prohibitive and presents severe carbon monoxide hazards.' },
        { name: 'Flame Sensor or Igniter Failure', advice: 'Simple, low-cost component replacement ($100-$250) on any furnace under 15 years old.' },
        { name: 'Under 10 Years Old', advice: 'Most components are still covered under manufacturer parts warranties.' }
      ]
    },
    faqs: [
      {
        question: 'Why does my furnace blow cold air for a minute when it first turns on?',
        answer: 'This is completely normal. The blower fan circulates residual ambient air remaining inside the ductwork for 30 to 60 seconds until the heat exchanger warms up to operating temperature.'
      },
      {
        question: 'What does a dirty flame sensor do?',
        answer: 'A flame sensor is a thin metal rod that confirms burners have ignited. If carbon or oxidation covers the rod, it cannot detect the microamp electrical current through the flame, causing the control board to shut off gas within 3 to 7 seconds.'
      }
    ],
    relatedArticleSlugs: [
      'furnace-not-turning-on',
      'furnace-not-heating',
      'furnace-short-cycling',
      'furnace-keeps-shutting-off',
      'how-often-change-hvac-filter'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/furnaces-and-boilers', description: 'Furnaces and Boilers: Operation and Efficiency' },
      { name: 'ENERGY STAR', url: 'https://www.energystar.gov', description: 'Heating Equipment Troubleshooting Guide' },
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Carbon Monoxide Safety and Home Heating' }
    ],
    publishedDate: '2025-05-10',
    updatedDate: '2025-08-14',
    readingTime: '7 min read',
    keywords: ['furnace blowing cold air', 'gas furnace blowing cold', 'furnace not heating', 'flame sensor troubleshooting'],
    safetyLevel: 'high',
    safetyNotice: 'Carbon monoxide is an odorless, colorless, lethal gas. If your CO alarm sounds or you smell natural gas, evacuate all occupants immediately and call emergency services.'
  },
  {
    id: 'furnace-12',
    title: 'Furnace Not Turning On: Checklist for Completely Dead Heating Systems',
    slug: 'furnace-not-turning-on',
    path: '/hvac/furnace/furnace-not-turning-on/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Furnaces',
    subcategorySlug: 'furnace',
    description: 'Follow this systematic troubleshooting checklist when your furnace will not turn on. Check power switches, door interlocks, thermostat batteries, and circuit breakers.',
    excerpt: 'When your furnace refuses to start, check the power switch next to the unit, dead thermostat batteries, the blower door safety switch, and your electrical panel.',
    quickAnswer: 'If your furnace will not turn on at all, start with the basics: verify the thermostat display has fresh batteries and is set to "HEAT", check that the power toggle switch on or beside the furnace cabinet is set to "ON", and verify the blower compartment door is firmly latched shut to engage the safety door switch.',
    introduction: [
      'When outdoor temperatures plummet and your furnace fails to turn on, silence from your utility room is an immediate concern. No sounds, no clicking, no airflow—the system acts completely dead.',
      'In a large number of service calls, the cause of a dead furnace is not a broken motor or cracked heat exchanger, but an interrupted electrical safety circuit. Modern furnaces will not send power to the control board if an access panel is loose or a switch was flipped.',
      'Before paying for an emergency after-hours technician visit, perform these five fundamental checks.'
    ],
    tableOfCauses: [
      {
        cause: 'Furnace Power Switch Switched Off',
        notice: 'Unit completely dead; wall toggle switch near unit was accidentally flipped',
        safeCheck: 'Locate standard light switch on or near furnace cabinet and switch to ON'
      },
      {
        cause: 'Blower Compartment Door Switch Disengaged',
        notice: 'Furnace stopped working following filter change; door slightly loose',
        safeCheck: 'Firmly press and latch the blower compartment door'
      },
      {
        cause: 'Thermostat Dead Batteries or No Power',
        notice: 'Thermostat screen is blank; does not click when setpoint is raised',
        safeCheck: 'Replace AA or AAA batteries behind thermostat faceplate'
      },
      {
        cause: 'Tripped Electrical Circuit Breaker',
        notice: 'Dedicated 15A or 20A furnace breaker in main electrical panel is tripped',
        safeCheck: 'Inspect panel for center-tripped breaker; flip fully OFF, then ON'
      },
      {
        cause: 'Blown 3A/5A Fuse on Control Board',
        notice: 'Thermostat operational, but furnace LED is dark; low-voltage short',
        safeCheck: 'Inspect automotive-style purple/amber fuse on internal board'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Inspect the Thermostat',
        explanation: 'Ensure the thermostat is in HEAT mode, set at least 3 degrees above room temperature. If battery-powered, install new name-brand alkaline batteries.'
      },
      {
        stepNumber: 2,
        title: 'Check the Furnace Power Toggle Switch',
        explanation: 'Look on the wall or ceiling joist right next to the furnace. Building codes mandate an electrical shut-off switch that looks like a normal light switch. Confirm it is in the UP / ON position.'
      },
      {
        stepNumber: 3,
        title: 'Re-seat the Furnace Access Doors',
        explanation: 'Furnaces have a safety push-button interlock behind the blower door. If you recently changed the filter and the door is misaligned by 1/4 inch, the button is not pressed and the system remains unpowered.'
      },
      {
        stepNumber: 4,
        title: 'Check Circuit Breakers',
        explanation: 'Check your home electrical panel. Locate the breaker labeled "Furnace" or "Heating". If tripped in the middle, flip it firmly OFF, wait 5 seconds, and flip to ON.'
      }
    ],
    safeChecks: [
      'Ensure the main gas shutoff valve leading into the furnace has its lever parallel to the gas pipe.',
      'Look through the viewing port for a glowing green, red, or amber LED on the control board.'
    ],
    whatNotToDo: [
      'Do not stick screwdrivers or tools into the furnace electrical box while power is connected.',
      'Do not attempt to hot-wire the blower door interlock switch permanently with tape.'
    ],
    whenToCallProfessional: [
      'The control board LED is completely dead despite 120V power arriving at the unit.',
      'The circuit breaker trips immediately upon resetting.',
      'The furnace hums loudly but the draft inducer fan does not spin.'
    ],
    faqs: [
      {
        question: 'Why does my furnace have an electrical light switch next to it?',
        answer: 'Building codes require an emergency service disconnect switch right next to the furnace so technicians or homeowners can instantly cut electrical power during maintenance or emergencies.'
      },
      {
        question: 'Can a blown fuse stop my furnace from starting?',
        answer: 'Yes. Most modern furnaces have a 3-amp or 5-amp automotive blade fuse on the control board that protects the 24-volt transformer from low-voltage wiring shorts.'
      }
    ],
    relatedArticleSlugs: [
      'furnace-blowing-cold-air',
      'furnace-not-heating',
      'furnace-keeps-shutting-off',
      'how-often-hvac-serviced'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Residential Heating System Safety Guidelines' }
    ],
    publishedDate: '2025-05-12',
    updatedDate: '2025-08-11',
    readingTime: '6 min read',
    keywords: ['furnace not turning on', 'furnace wont start', 'furnace dead', 'gas furnace power troubleshooting'],
    safetyLevel: 'moderate',
    safetyNotice: 'Always shut off the furnace power switch before removing any access doors or handling air filters.'
  },
  {
    id: 'furnace-13',
    title: 'Furnace Not Heating: Diagnosing Ignition, Gas Valves, and Flame Detection',
    slug: 'furnace-not-heating',
    path: '/hvac/furnace/furnace-not-heating/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Furnaces',
    subcategorySlug: 'furnace',
    description: 'When the furnace turns on and the blower runs but produces no heat, learn how to troubleshoot the ignition sequence, draft inducer, and gas supply.',
    excerpt: 'If your furnace runs without generating heat, the failure usually lies in the combustion cycle: a dirty flame sensor, a failed hot surface igniter, or a pressure switch error.',
    quickAnswer: 'When a furnace runs but produces no heat, the ignition sequence is failing. Observe through the inspection window: if the small draft motor starts and the igniter glows orange, but gas never lights, the gas valve may be closed or stuck. If burners ignite and extinguish in 5 seconds, the flame sensor is dirty.',
    introduction: [
      'Your furnace is making noise, the vents are circulating air, but that air is lukewarm or cold. The furnace is running, but it is not producing actual heat.',
      'Unlike simple electric space heaters, a modern gas furnace is an advanced combustion appliance. It requires a precise sequence of events: exhausting combustion gases, proving negative air pressure, superheating an igniter, opening dual gas valves, and proving flame rectification.',
      'When any one of these steps fails, the furnace will abort the heating cycle. Here is how to understand what is stopping your furnace from producing warmth.'
    ],
    tableOfCauses: [
      {
        cause: 'Dirty Flame Sensor Rod',
        notice: 'Burners light normally for 4-7 seconds, then gas clicks off; repeats 3 times',
        safeCheck: 'Cleaning with ultra-fine steel wool by a technician or cautious homeowner'
      },
      {
        cause: 'Burned-Out Hot Surface Igniter (HSI)',
        notice: 'Inducer fan runs, but no orange glow appears in burner box before gas click',
        safeCheck: 'Visual inspection through viewport; cracked or blackened element'
      },
      {
        cause: 'Stuck Pressure Switch or Blocked Flue',
        notice: 'Inducer motor runs continuously, but igniter never receives power',
        safeCheck: 'Inspect outdoor exhaust termination for snow, ice, or leaves'
      },
      {
        cause: 'Gas Shutoff Valve Closed',
        notice: 'Igniter glows bright orange, clicks, but no fire ever appears',
        safeCheck: 'Check inline gas ball valve handle on the iron gas pipe'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check the Gas Supply',
        explanation: 'Verify that the yellow or black gas ball valve handle on the pipe entering the furnace is aligned parallel with the pipe (indicating it is OPEN). Also check that the manual gas control knob inside the furnace cabinet is set to ON.'
      },
      {
        stepNumber: 2,
        title: 'Observe the Diagnostic LED Flash Code',
        explanation: 'Look through the clear inspection window on the blower door. Count the number of flashes (e.g., 2 flashes, 3 flashes). Check the legend on the door panel to decode the exact error condition.'
      },
      {
        stepNumber: 3,
        title: 'Inspect the Flue Exhaust Pipe Outdoors',
        explanation: 'Go outside and check the white PVC intake and exhaust pipes (or metal chimney flue). Make sure heavy snow, birds, or leaves have not clogged the termination, which trips the safety pressure switch.'
      }
    ],
    safeChecks: [
      'Confirm other gas appliances in your home (like a gas stove or water heater) are receiving gas.',
      'Verify that the air filter is clean and installed properly.'
    ],
    whatNotToDo: [
      'Do not strike matches or hold open flames inside the combustion box.',
      'Do not attempt to bend or forcefully twist the delicate ceramic hot surface igniter element; it is extremely brittle and cracks easily.',
      'Do not use sand paper on flame sensors (use only fine Scotch-Brite or steel wool to avoid silica coating).'
    ],
    whenToCallProfessional: [
      'The hot surface igniter is cracked and requires electrical replacement.',
      'The gas valve fails to click open despite proper voltage from the control board.',
      'You suspect a cracked heat exchanger or notice rollout switch soot.'
    ],
    faqs: [
      {
        question: 'How long does a hot surface igniter last?',
        answer: 'Silicon carbide and silicon nitride igniters typically last between 4 and 7 years before thermal stress causes the heating element to burn out.'
      },
      {
        question: 'Why does my furnace try to start three times and then stop?',
        answer: 'This is called "soft lockout." If the furnace attempts ignition three consecutive times and cannot detect flame, it enters a 1-to-3-hour protective safety delay.'
      }
    ],
    relatedArticleSlugs: [
      'furnace-blowing-cold-air',
      'furnace-not-turning-on',
      'furnace-short-cycling',
      'furnace-keeps-shutting-off'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/furnaces-and-boilers', description: 'Gas Furnace Troubleshooting and Maintenance' }
    ],
    publishedDate: '2025-05-15',
    updatedDate: '2025-08-09',
    readingTime: '6 min read',
    keywords: ['furnace not heating', 'gas furnace ignition problem', 'furnace runs but no heat', 'furnace igniter glow'],
    safetyLevel: 'high',
    safetyNotice: 'Never operate a gas furnace with the combustion access panel removed for extended periods.'
  },
  {
    id: 'furnace-14',
    title: 'Furnace Short Cycling: Causes of Rapid Starting and Stopping',
    slug: 'furnace-short-cycling',
    path: '/hvac/furnace/furnace-short-cycling/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Furnaces',
    subcategorySlug: 'furnace',
    description: 'Learn why your furnace turns on, heats for just 2 to 5 minutes, and abruptly shuts down before the house gets warm. Discover how to stop short cycling.',
    excerpt: 'A furnace that cycles on and off repeatedly is almost always overheating due to a clogged filter, closed heat registers, or an oversized heating unit.',
    quickAnswer: 'Furnace short cycling is most commonly caused by an overheating heat exchanger. When a clogged air filter or closed supply vents restrict airflow, heat cannot escape, triggering the high-limit switch to cut off the burners for safety. Replace your filter and open all vents.',
    introduction: [
      'Under typical winter conditions, a furnace should run for 10 to 20 minutes per cycle, steadily elevating home temperature until the thermostat setpoint is satisfied.',
      'When your furnace turns on, heats for only 2 to 4 minutes, shuts off, and then attempts to start again a few minutes later, it is short cycling. This burns excess fuel, wears out ignition components, and leaves rooms cold.',
      'Short cycling is virtually always an indicator that a safety limit switch is cutting off the burners to protect the furnace from heat exchanger cracking or fire.'
    ],
    tableOfCauses: [
      {
        cause: 'Clogged Air Filter (Overheating)',
        notice: 'Furnace shuts off burners after 3-5 minutes while blower continues running loud',
        safeCheck: 'Remove air filter and replace with a fresh, clean filter'
      },
      {
        cause: 'Closed or Blocked Supply Registers',
        notice: 'Rooms in home have dampers shut; static pressure builds inside plenum',
        safeCheck: 'Walk through house and ensure all floor and wall registers are open'
      },
      {
        cause: 'Dirty or Failing Flame Sensor',
        notice: 'Burners ignite, burn for only 5 seconds, and shut down immediately',
        safeCheck: 'Observe burner window to see if shutdown occurs almost instantly'
      },
      {
        cause: 'Faulty High-Limit Switch',
        notice: 'Switch opens at lower-than-rated temperatures due to metal fatigue',
        safeCheck: 'Requires HVAC technician with digital temperature probe'
      },
      {
        cause: 'Oversized Furnace for Home Square Footage',
        notice: 'House blasts with intense hot air for 3 minutes, then shuts off; temperature swings',
        safeCheck: 'Verify BTU rating against home Manual J heat loss calculation'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check and Replace the Air Filter Immediately',
        explanation: 'Over 70% of furnace short cycling calls are solved simply by replacing a suffocated air filter. A clean filter allows air to absorb heat from the heat exchanger, keeping it below the 180°F-200°F limit switch trip point.'
      },
      {
        stepNumber: 2,
        title: 'Open All Supply and Return Vents',
        explanation: 'Closing registers in unused guest bedrooms causes heat to back up inside the furnace plenum. Make sure at least 90% of all supply vents remain wide open.'
      },
      {
        stepNumber: 3,
        title: 'Check Thermostat Anticipator / CPH Settings',
        explanation: 'If your thermostat has a Cycles Per Hour (CPH) setting for gas heat, verify it is set to 3 CPH (standard gas heat). Setting it to 5 or 6 causes unnecessarily brief cycles.'
      }
    ],
    safeChecks: [
      'Check that furniture or thick carpets are not covering large floor return grilles.',
      'Feel the supply registers: if air exiting is scalding hot right before shutdown, overheating is confirmed.'
    ],
    whatNotToDo: [
      'Do not bypass the high-limit switch to keep the furnace running. An uncooled heat exchanger can warp and crack within hours, releasing lethal carbon monoxide.',
      'Do not install extremely dense MERV 13-16 filters if your furnace blower motor is not designed for high static pressure.'
    ],
    whenToCallProfessional: [
      'The furnace short cycles even with the air filter completely removed during a test.',
      'The high-limit switch has tripped so many times that it is stuck open.',
      'The furnace was recently installed and appears grossly oversized for the house.'
    ],
    faqs: [
      {
        question: 'How many times per hour should a furnace cycle?',
        answer: 'A standard gas furnace should cycle roughly 2 to 3 times per hour during typical winter temperatures, running for approximately 10 to 15 minutes each time.'
      },
      {
        question: 'Does short cycling damage a furnace?',
        answer: 'Yes. The constant thermal expansion and contraction causes metal fatigue in the heat exchanger, and the repeated ignition attempts prematurely burn out the igniter and gas valve relays.'
      }
    ],
    relatedArticleSlugs: [
      'furnace-blowing-cold-air',
      'furnace-keeps-shutting-off',
      'furnace-making-strange-noises',
      'how-often-change-hvac-filter'
    ],
    sources: [
      { name: 'U.S. Department of Energy', url: 'https://www.energy.gov/energysaver/furnaces-and-boilers', description: 'Heating System Sizing and Cycling Optimization' }
    ],
    publishedDate: '2025-05-18',
    updatedDate: '2025-08-07',
    readingTime: '6 min read',
    keywords: ['furnace short cycling', 'furnace turns on and off fast', 'furnace overheating', 'high limit switch furnace'],
    safetyLevel: 'high',
    safetyNotice: 'Repeated high-temperature trips indicate severe thermal strain. Continued overheating can cause the heat exchanger to crack, leaking deadly carbon monoxide into household air.'
  },
  {
    id: 'furnace-15',
    title: 'Furnace Keeps Shutting Off: Diagnosing Safety Lockouts and Inducer Issues',
    slug: 'furnace-keeps-shutting-off',
    path: '/hvac/furnace/furnace-keeps-shutting-off/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Furnaces',
    subcategorySlug: 'furnace',
    description: 'If your furnace starts up but shuts off unexpectedly before reaching the thermostat setpoint, learn how to troubleshoot pressure switches, flue vents, and rollouts.',
    excerpt: 'A furnace that repeatedly shuts down prematurely is triggering an internal safety switch. Learn how to diagnose pressure switch trips, flue clogs, and rollout trips.',
    quickAnswer: 'When a furnace keeps shutting off, it is usually responding to a triggered safety switch: a clogged condensate drain backing up into the pressure switch tubing, an obstructed exhaust flue pipe outside, or a dirty air filter that repeatedly trips the high-limit thermostat.',
    introduction: [
      'You set your thermostat to 70°F, but the house never reaches the temperature because the furnace keeps shutting down after a few minutes of operation. After a delay, it tries again, only to shut off once more.',
      'Modern gas furnaces are engineered with a fail-safe philosophy: if any single condition deviates from safe parameters, the system terminates the combustion cycle immediately.',
      'Pinpointing which safety sensor is cutting power allows you to address the underlying cause safely without replacing parts unnecessarily.'
    ],
    tableOfCauses: [
      {
        cause: 'Blocked Exhaust or Intake Flue Pipe',
        notice: 'Pressure switch opens after inducer fan starts; LED flashes 3 times',
        safeCheck: 'Check exterior PVC pipes for snowdrifts, leaves, or bird nests'
      },
      {
        cause: 'Clogged Condensate Trap (High-Efficiency Furnaces)',
        notice: 'Water sloshes inside inducer housing; pressure switch cannot close',
        safeCheck: 'Inspect clear drain hoses and cleanout trap beneath the blower'
      },
      {
        cause: 'Dirty Flame Sensor',
        notice: 'System shuts down after 5 to 7 seconds of flame consistently',
        safeCheck: 'Requires cleaning or professional inspection'
      },
      {
        cause: 'Tripped Flame Rollout Switch',
        notice: 'Furnace completely shuts down and locks out; manually resettable button',
        safeCheck: 'DO NOT RESET MANUALLY. Indicates heat exchanger crack or chimney blockage.'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Check the LED Error Code on the Control Board',
        explanation: 'Before turning off power, look through the sight glass. The blinking LED code will tell you whether the shutdown was triggered by the high-limit switch, the pressure switch, or flame failure.'
      },
      {
        stepNumber: 2,
        title: 'Inspect Exterior Vent Terminations',
        explanation: 'Walk around the outside of your home and locate the furnace exhaust pipes. Clear away any accumulated snow, ice, or vegetation that prevents free flue gas expulsion.'
      },
      {
        stepNumber: 3,
        title: 'Check the High-Efficiency Condensate Drain',
        explanation: 'Condensing furnaces produce gallons of acidic water during operation. If the small plastic drain tube or trap clogs with debris, water backs up and triggers the pressure switch to shut off the gas.'
      }
    ],
    safeChecks: [
      'Ensure the furnace filter is clean and unobstructed.',
      'Verify that all floor and wall registers are open.',
      'Check that carbon monoxide detectors on all levels of your home are active and functional.'
    ],
    whatNotToDo: [
      'Do not manually press the button on a tripped flame rollout switch. Rollout switches trip when flames spill out toward the front of the furnace due to severe chimney blockage or cracked heat exchangers.',
      'Do not blow compressed air into pressure switches, as their rubber diaphragms will rupture.'
    ],
    whenToCallProfessional: [
      'A flame rollout switch has tripped.',
      'The diagnostic code indicates a continuous open pressure switch despite clear flue pipes.',
      'You notice soot accumulation around the burner door or draft hood.'
    ],
    faqs: [
      {
        question: 'What is a furnace lockout?',
        answer: 'A furnace lockout occurs when the control board encounters repeated failed ignition or safety trips. It disables further ignition attempts for 1 to 3 hours to prevent gas buildup.'
      },
      {
        question: 'How do I reset my furnace after it shuts off?',
        answer: 'Turn the power switch next to the furnace OFF for 60 seconds, then turn it back ON. If the underlying fault is unresolved, the furnace will shut off again.'
      }
    ],
    relatedArticleSlugs: [
      'furnace-short-cycling',
      'furnace-blowing-cold-air',
      'furnace-not-turning-on',
      'how-often-change-hvac-filter'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Combustion Gas Safety and Furnace Venting' }
    ],
    publishedDate: '2025-05-22',
    updatedDate: '2025-08-06',
    readingTime: '6 min read',
    keywords: ['furnace keeps shutting off', 'furnace shuts down', 'furnace safety lockout', 'pressure switch furnace'],
    safetyLevel: 'high',
    safetyNotice: 'Repeated shutdowns caused by pressure switches or rollouts protect your family from deadly flue gases and carbon monoxide. Never disable or bypass safety switches.'
  },
  {
    id: 'furnace-16',
    title: 'Furnace Making Strange Noises: Squeaking, Rattling, Banging, and Booming',
    slug: 'furnace-making-strange-noises',
    path: '/hvac/furnace/furnace-making-strange-noises/',
    category: 'HVAC',
    categorySlug: 'hvac',
    subcategory: 'Furnaces',
    subcategorySlug: 'furnace',
    description: 'Decode unusual furnace sounds. Understand what loud bangs on startup, high-pitched squeals, metal rattling, and scraping noises mean for your heating system.',
    excerpt: 'Loud bangs on startup, squeaking blower wheels, or metal rattling? Use our acoustic diagnostic guide to separate harmless duct expansion from delayed ignition and worn bearings.',
    quickAnswer: 'A loud bang or boom when the furnace first lights is delayed ignition—gas accumulates before lighting, which requires immediate professional servicing. A high-pitched squeak points to dry blower motor bearings or a loose belt. A dull metal pop a few minutes after the heat turns on is typically harmless ductwork thermal expansion.',
    introduction: [
      'Furnaces naturally make a gentle rush of moving air, accompanied by a soft click when the gas valve engages and the low hum of the draft inducer fan. Beyond those baseline sounds, loud or sudden noises should never be ignored.',
      'Unusual sounds from a furnace range from harmless physical phenomena (like metal ductwork expanding as hot air moves through it) to severe mechanical and combustion hazards (like delayed gas ignition or a broken blower wheel).',
      'Here is how to identify the exact sound your furnace is making and determine the safe course of action.'
    ],
    tableOfCauses: [
      {
        cause: 'Delayed Ignition (Loud Bang / Boom on Startup)',
        notice: 'Loud gunshot or explosion sound right when burners ignite; doors rattle',
        safeCheck: 'SHUT DOWN IMMEDIATELY. Gas buildup before ignition can crack heat exchanger.'
      },
      {
        cause: 'Ductwork Thermal Expansion ("Popping" / "Ping")',
        notice: 'Metal popping sound in ceilings or walls 2 minutes after furnace turns on or off',
        safeCheck: 'Harmless sheet metal expanding and contracting as temperature changes'
      },
      {
        cause: 'Dry or Failing Blower Bearings (High-Pitched Squeal)',
        notice: 'Shrill squeaking or squealing that continuous whenever blower fan runs',
        safeCheck: 'Bearings dry of oil or failing motor shaft; requires lubrication or motor swap'
      },
      {
        cause: 'Loose Blower Wheel or Debris (Rattling / Scraping)',
        notice: 'Loud vibration, rhythmic clatter, or metal scraping against housing',
        safeCheck: 'Turn power off; check if squirrel-cage blower wheel is loose on shaft'
      },
      {
        cause: 'Inducer Fan Motor Failure (Chirping / Humming)',
        notice: 'Chirping or loud buzzing starting 30 seconds before burners ignite',
        safeCheck: 'Draft inducer assembly bearings worn out; replace inducer unit'
      }
    ],
    troubleshootingSteps: [
      {
        stepNumber: 1,
        title: 'Note Exactly When the Noise Occurs',
        explanation: 'Does the noise happen before the fire lights (inducer fan)? The instant the burners ignite (delayed ignition)? Or several minutes after hot air begins moving (duct expansion)? Timing is the single best clue.'
      },
      {
        stepNumber: 2,
        title: 'Inspect Cabinet Panels and Screws',
        explanation: 'Vibrating sheet metal panels frequently sound like motor failures. Tighten loose thumb-screws and sheet metal screws on the furnace cabinet.'
      },
      {
        stepNumber: 3,
        title: 'Check Air Filter Fitment',
        explanation: 'An ill-fitting air filter can flutter in the return rack like a reed in an instrument, creating loud humming or whistling sounds.'
      }
    ],
    safeChecks: [
      'Ensure floor registers are not buzzing against hardwood or tile flooring.',
      'Check that objects or paint cans in the utility room are not vibrating against the furnace cabinet.'
    ],
    whatNotToDo: [
      'Never ignore a loud explosive bang on startup. Delayed ignition can violently crack the heat exchanger or rupture the furnace cabinet.',
      'Do not squirt WD-40 into sealed electric motor bearings; it washes out the factory grease and creates an electrical fire risk.',
      'Do not operate a furnace producing metallic grinding noises.'
    ],
    whenToCallProfessional: [
      'Any loud boom, bang, or pop during the ignition phase.',
      'Loud metal scraping noises from the blower compartment.',
      'Continuous screeching from the motor despite basic inspection.'
    ],
    faqs: [
      {
        question: 'Why does my furnace make a loud boom when it turns on?',
        answer: 'This is delayed ignition. If the burners or pilot assembly are dirty, gas accumulates in the combustion chamber before finally catching a spark, resulting in a miniature gas explosion.'
      },
      {
        question: 'Is a popping sound in the walls dangerous when the furnace runs?',
        answer: 'Usually no. Popping or ticking sounds in walls and ceilings are typically just rectangular sheet metal ducts expanding as hot air passes through them and contracting as they cool.'
      }
    ],
    relatedArticleSlugs: [
      'furnace-blowing-cold-air',
      'furnace-not-turning-on',
      'furnace-short-cycling',
      'how-often-hvac-serviced'
    ],
    sources: [
      { name: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov', description: 'Combustion Equipment Noise and Mechanical Failure Warning Signs' }
    ],
    publishedDate: '2025-05-25',
    updatedDate: '2025-08-03',
    readingTime: '7 min read',
    keywords: ['furnace making strange noises', 'furnace banging noise', 'furnace squealing', 'delayed ignition furnace', 'furnace rattling'],
    safetyLevel: 'high',
    safetyNotice: 'Delayed ignition explosive bangs can rupture the heat exchanger and release dangerous combustion products. Turn off the furnace and contact a licensed heating contractor.'
  }
];
