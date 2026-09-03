import { SITE_URL } from '../config/site';

const DOMAIN_NAME = SITE_URL.replace(/^https?:\/\//, '').replace(/\/$/, '');

export interface LegalPageContent {
  title: string;
  slug: string;
  path: string;
  metaDescription: string;
  lastUpdated: string;
  sections: {
    heading: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
}

export const ABOUT_PAGE_CONTENT: LegalPageContent = {
  title: 'About Home Problem Solver',
  slug: 'about',
  path: '/about/',
  metaDescription: 'Learn about Home Problem Solver, our mission to provide practical home troubleshooting guides, and our editorial standards for American homeowners.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: 'Our Mission',
      paragraphs: [
        'Home Problem Solver was founded with a singular, practical mission: to provide American homeowners with clear, calm, and technically accurate troubleshooting guides when critical household systems break down.',
        'When your air conditioner stops cooling during a scorching summer weekend or your furnace blows cold air on a freezing January night, you need reliable answers immediately. Homeowners are often caught between high-pressure contractor sales tactics and dangerously vague internet advice. We exist to close that gap.'
      ]
    },
    {
      heading: 'Practical, Safety-First Guidance',
      paragraphs: [
        'We believe in empowering homeowners to perform safe, sensible diagnostic checks—such as replacing dirty air filters, resetting tripped circuit breakers, and unblocking condensate drains—before spending hundreds of dollars on an emergency service call.',
        'Equally important, however, is knowing your limits. We explicitly outline when a situation involves high-voltage electricity, pressurized refrigerants, toxic carbon monoxide, or combustible natural gas. We never encourage dangerous DIY projects that put homeowners or property at risk.'
      ]
    },
    {
      heading: 'Our Content Standards',
      paragraphs: [
        'We do not publish generic automated articles or sponsored promotional fluff. Every guide published on Home Problem Solver is grounded in established manufacturer service manuals, federal energy standards, and recognized trade guidelines (including ACCA and ASHRAE).',
        'We maintain a transparent editorial process. We do not invent imaginary technicians or fake testimonials. Our advice is direct, practical, and rigorously cited against authoritative institutions like the U.S. Department of Energy, EPA, and Consumer Product Safety Commission.'
      ]
    }
  ]
};

export const EDITORIAL_POLICY_CONTENT: LegalPageContent = {
  title: 'Editorial Policy & Standards',
  slug: 'editorial-policy',
  path: '/editorial-policy/',
  metaDescription: 'Read our editorial standards, research methodology, source selection criteria, safety verification process, and corrections policy.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: 'Editorial Philosophy',
      paragraphs: [
        'Home Problem Solver is an independent consumer information resource. Our primary goal is to help homeowners solve household mechanical and appliance problems safely and cost-effectively. To maintain reader trust, we adhere to strict editorial standards across all published articles.'
      ]
    },
    {
      heading: 'How Content is Researched',
      paragraphs: [
        'Our technical research begins with primary documentation rather than secondary summaries. When analyzing heating, cooling, or appliance failures, we consult:',
      ],
      listItems: [
        'Original equipment manufacturer (OEM) technical service manuals and sequence-of-operation schematics.',
        'U.S. Department of Energy (DOE) energy conservation and equipment sizing benchmarks.',
        'Air Conditioning Contractors of America (ACCA) standards, including Manual J (load calculation) and Manual D (duct design).',
        'U.S. Environmental Protection Agency (EPA) regulations regarding refrigerant handling (Section 608) and indoor air quality.',
        'U.S. Consumer Product Safety Commission (CPSC) product safety bulletins and recall notices.'
      ]
    },
    {
      heading: 'Safety Verification & Professional Boundaries',
      paragraphs: [
        'Safety is our utmost priority. Every article clearly segregates "Safe Things You Can Check" from "What NOT To Do" and "When to Call a Professional."',
        'We strictly prohibit DIY instructions involving: opening pressurized refrigeration circuits, handling R-410A or R-22 refrigerants, working inside live 240V high-voltage electrical panels, adjusting gas supply pressures, or bypassing furnace safety limit switches. When these hazards are present, we instruct readers to contact certified, licensed professionals.'
      ]
    },
    {
      heading: 'Transparent Review & No Fictitious Credentials',
      paragraphs: [
        'We believe in absolute honesty. We do not invent fictional "expert reviewers," manufactured personas, or fabricated technician endorsements. Our technical content is compiled from verified trade and governmental documentation, and we state our sources transparently at the bottom of every article.'
      ]
    },
    {
      heading: 'Corrections Policy',
      paragraphs: [
        'We actively maintain and update our troubleshooting library. When building codes, appliance specifications, or regulatory standards evolve, our articles are updated accordingly.',
        `If you spot an error, an outdated reference, or a broken source link, please contact us at editorial@${DOMAIN_NAME}. Confirmed errors are corrected promptly with a note reflecting the update date.`
      ]
    }
  ]
};

export const ADVERTISING_POLICY_CONTENT: LegalPageContent = {
  title: 'Advertising & Commercial Disclosure',
  slug: 'advertising-policy',
  path: '/advertising-policy/',
  metaDescription: 'Learn how advertising works on Home Problem Solver, our commitment to editorial independence, and clear ad labeling standards.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: 'Our Monetization Model',
      paragraphs: [
        'Home Problem Solver provides free, unrestricted access to all troubleshooting guides. To fund our research, technical maintenance, and hosting infrastructure, we display digital advertisements provided through reputable programmatic networks (such as Google AdSense and certified display exchanges).'
      ]
    },
    {
      heading: 'Clear Distinction Between Ads and Editorial',
      paragraphs: [
        'We maintain a rigid barrier between editorial decisions and commercial advertising. To ensure readers are never misled:',
      ],
      listItems: [
        'All advertising slots are clearly labeled with the heading "Advertisement".',
        'Advertisements are visually separated from article text and will never be formatted to mimic navigational links or editorial recommendations.',
        'Advertisers have zero input or influence over the content, conclusions, or safety warnings in our articles.',
        'We do not accept paid compensation to alter diagnostic advice or steer readers toward specific service companies.'
      ]
    },
    {
      heading: 'Future Affiliate Disclosures',
      paragraphs: [
        'If Home Problem Solver introduces affiliate product links in the future (such as links to replacement air filters or hygrometers on retail sites), those links will be accompanied by prominent, FTC-compliant disclosures immediately adjacent to the recommendation.'
      ]
    }
  ]
};

export const PRIVACY_POLICY_CONTENT: LegalPageContent = {
  title: 'Privacy Policy',
  slug: 'privacy-policy',
  path: '/privacy-policy/',
  metaDescription: 'Read the Home Problem Solver privacy policy explaining data collection, analytics, advertising cookies, and your consumer privacy rights.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: 'Introduction',
      paragraphs: [
        `Home Problem Solver ("we," "our," or "us") respects your personal privacy. This Privacy Policy describes how we collect, use, and protect information when you visit our website (${SITE_URL}).`
      ]
    },
    {
      heading: 'Information We Collect',
      paragraphs: [
        'We do not require user account registration, passwords, or personal profiles to read our content. The information collected falls into two categories:',
      ],
      listItems: [
        'Voluntary Information: When you contact us via email or contact forms, you provide your name and email address so we can reply to your inquiry.',
        'Automated Technical Data: When you browse our site, our hosting servers and analytics tools automatically record your IP address, browser type, device operating system, referring URLs, and page visit timestamps.'
      ]
    },
    {
      heading: 'Cookies and Advertising Technologies',
      paragraphs: [
        'We and our third-party advertising partners (including Google) use cookies, web beacons, and similar technologies to serve advertisements based on your prior visits to our website or other sites across the internet.',
        'Google\'s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google Ads Settings (www.aboutads.info).'
      ]
    },
    {
      heading: 'How We Protect Your Information',
      paragraphs: [
        'We employ standard SSL/TLS encryption for all data in transit across our website. We do not sell, rent, or trade your personal contact details to third-party data brokers.'
      ]
    },
    {
      heading: 'Contact Us Regarding Privacy',
      paragraphs: [
        `If you have questions about this policy or wish to exercise privacy rights under applicable state laws (such as CCPA/CPRA), please email privacy@${DOMAIN_NAME}.`
      ]
    }
  ]
};

export const COOKIE_POLICY_CONTENT: LegalPageContent = {
  title: 'Cookie Policy',
  slug: 'cookie-policy',
  path: '/cookie-policy/',
  metaDescription: 'Understand how Home Problem Solver uses cookies for website functionality, anonymous analytics, and display advertising.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: 'What Are Cookies?',
      paragraphs: [
        'Cookies are small text files stored on your computer or mobile device when you visit a website. They allow the website to recognize your device, remember preferences, and provide analytical data to site operators.'
      ]
    },
    {
      heading: 'Types of Cookies We Use',
      paragraphs: [
        'Home Problem Solver uses the following categories of cookies:',
      ],
      listItems: [
        'Strictly Necessary Cookies: Essential for site security, navigation, and delivering requested pages.',
        'Performance & Analytics Cookies: Help us measure visitor volume, popular search queries, and page loading speeds so we can optimize performance.',
        'Advertising & Targeting Cookies: Placed by third-party advertising networks to measure ad effectiveness and prevent showing you the exact same ad repeatedly.'
      ]
    },
    {
      heading: 'Managing Your Cookie Preferences',
      paragraphs: [
        'Most modern web browsers allow you to manage or block cookies through their settings. Please note that blocking all cookies may impact your browsing experience on some websites.',
        'For more information on managing third-party marketing cookies, visit the Digital Advertising Alliance at www.aboutads.info/choices.'
      ]
    }
  ]
};

export const TERMS_CONTENT: LegalPageContent = {
  title: 'Terms of Service',
  slug: 'terms',
  path: '/terms/',
  metaDescription: 'Review the terms and conditions governing the use of Home Problem Solver, including our informational disclaimer and limitation of liability.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: '1. Agreement to Terms',
      paragraphs: [
        `By accessing and browsing Home Problem Solver (${SITE_URL}), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the website.`
      ]
    },
    {
      heading: '2. Informational Disclaimer (Not Professional Advice)',
      paragraphs: [
        'The content provided on Home Problem Solver is for general educational and informational purposes only. It does not constitute licensed mechanical engineering, master plumbing, or licensed electrical contracting advice.',
        'Home heating, cooling, plumbing, and electrical systems involve inherent risks including electrical shock, high pressure, explosive gas, fire, and toxic carbon monoxide. Homeowners must use sound judgment and consult a qualified, licensed technician whenever a procedure exceeds their physical ability or comfort level.'
      ]
    },
    {
      heading: '3. Limitation of Liability',
      paragraphs: [
        'Under no circumstances shall Home Problem Solver, its operators, or contributors be held liable for any direct, indirect, incidental, or consequential damages, personal injury, property damage, or repair expenses arising out of the use of or inability to use the information provided on this website.'
      ]
    },
    {
      heading: '4. Intellectual Property',
      paragraphs: [
        'All text, layout, graphics, diagnostic tables, and custom software code on Home Problem Solver are the intellectual property of Home Problem Solver and protected by United States copyright laws. Content may not be copied, scraped, reproduced, or republished without express written consent.'
      ]
    }
  ]
};

export const CONTACT_CONTENT: LegalPageContent = {
  title: 'Contact Home Problem Solver',
  slug: 'contact',
  path: '/contact/',
  metaDescription: 'Get in touch with the Home Problem Solver team for editorial inquiries, corrections, feedback, or general questions.',
  lastUpdated: 'August 15, 2025',
  sections: [
    {
      heading: 'We Value Reader Feedback',
      paragraphs: [
        'Have a question about a troubleshooting guide, spotted a technical correction, or want to suggest a home problem for our next editorial cycle? We welcome inquiries from homeowners and industry practitioners alike.'
      ]
    },
    {
      heading: 'How to Reach Us',
      paragraphs: [
        `For editorial questions, corrections, or source inquiries: editorial@${DOMAIN_NAME}`,
        `For advertising or partnership inquiries: advertising@${DOMAIN_NAME}`,
        `For privacy requests or terms: legal@${DOMAIN_NAME}`
      ]
    }
  ]
};
