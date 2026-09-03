import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    slug: 'hvac',
    name: 'HVAC & Climate Control',
    path: '/hvac/',
    description: 'Practical troubleshooting for residential heating, ventilation, and air conditioning systems.',
    longDescription: 'Heating, ventilation, and air conditioning systems represent one of the most critical and cost-intensive components of any home. Our HVAC guides walk you through common airflow issues, temperature inconsistencies, strange noises, and safe diagnostic checks before calling an HVAC service technician.',
    icon: 'Wind',
    featuredArticleSlugs: [
      'why-is-my-ac-not-cooling',
      'ac-blowing-warm-air',
      'furnace-blowing-cold-air',
      'furnace-not-turning-on'
    ],
    subcategories: [
      {
        slug: 'air-conditioning',
        name: 'Air Conditioning',
        path: '/hvac/air-conditioning/',
        description: 'Diagnose cooling failures, water leaks, frozen coils, weak airflow, and strange AC noises.'
      },
      {
        slug: 'furnace',
        name: 'Furnaces & Heating',
        path: '/hvac/furnace/',
        description: 'Troubleshoot gas and electric furnaces blowing cold air, cycling prematurely, or failing to ignite.'
      }
    ]
  },
  {
    slug: 'appliances',
    name: 'Major Home Appliances',
    path: '/appliances/',
    description: 'Clear diagnostic guides for refrigerators, washers, clothes dryers, dishwashers, and ovens.',
    longDescription: 'Major kitchen and laundry appliances run heavy electrical and plumbing cycles daily. Our appliance troubleshooting guides explain how to safely inspect drainage hoses, door gaskets, heating elements, and lint traps before booking an appliance repair technician.',
    icon: 'Refrigerator',
    featuredArticleSlugs: [
      'refrigerator-not-cooling',
      'washing-machine-not-draining',
      'dryer-not-heating',
      'dishwasher-not-draining'
    ],
    subcategories: [
      {
        slug: 'refrigerator',
        name: 'Refrigerators',
        path: '/appliances/refrigerator/',
        description: 'Solve refrigerator warm temperatures, freezer frost, clogged defrost drains, and water leaks.'
      },
      {
        slug: 'washer',
        name: 'Washing Machines',
        path: '/appliances/washer/',
        description: 'Troubleshoot front-load and top-load washing machines that refuse to drain, spin, or complete cycles.'
      },
      {
        slug: 'dryer',
        name: 'Clothes Dryers',
        path: '/appliances/dryer/',
        description: 'Diagnose dryers tumbling without heat, restricted vent exhaust lines, and thermal fuses.'
      },
      {
        slug: 'dishwasher',
        name: 'Dishwashers',
        path: '/appliances/dishwasher/',
        description: 'Clear standing water in the bottom of the tub, unclog filters, and fix garbage disposal knockouts.'
      },
      {
        slug: 'oven',
        name: 'Ovens & Ranges',
        path: '/appliances/oven/',
        description: 'Troubleshoot bake elements, gas glow-bar igniters, thermal switches, and temperature sensor probes.'
      }
    ]
  },
  {
    slug: 'maintenance',
    name: 'Preventive Home Maintenance',
    path: '/maintenance/',
    description: 'Seasonal maintenance schedules, equipment lifespan planning, and cost-effective system upkeep.',
    longDescription: 'Proactive seasonal maintenance prevents expensive mid-season breakdowns. Explore verified service intervals, air filter replacement schedules, HVAC lifespan expectations, and financial formulas for repair vs. replacement decisions.',
    icon: 'Wrench',
    featuredArticleSlugs: [
      'how-often-change-hvac-filter',
      'how-often-hvac-serviced',
      'how-long-does-an-ac-unit-last',
      'ac-repair-vs-replacement'
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  const cleanSlug = slug.replace(/^\/|\/$/g, '');
  return CATEGORIES.find(c => {
    const cClean = c.path.replace(/^\/|\/$/g, '');
    return cClean === cleanSlug || c.slug === cleanSlug;
  });
}
