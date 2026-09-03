/**
 * Central site configuration
 * All canonical URLs, sitemaps, Open Graph, and JSON-LD schemas derive from SITE_URL.
 * Before production deployment, replace YOUR-DOMAIN.com with the real production domain.
 */
export const SITE_URL = "https://YOUR-DOMAIN.com";

export const SITE_NAME = "Home Problem Solver";
export const SITE_TAGLINE = "Practical Home Troubleshooting & Maintenance";
export const SITE_POSITIONING = "A practical home troubleshooting and maintenance resource for American homeowners.";
export const SITE_DESCRIPTION = "Practical, easy-to-follow guides for troubleshooting, maintaining, and understanding the systems and appliances in your home. Learn safe checks and when to call a professional.";

/**
 * Advertising Configuration (Google AdSense & display networks)
 * When ADSENSE_ENABLED is false, no fake publisher ads are rendered.
 * When enabled in production, replace publisherId with approved AdSense client ID.
 */
export const ADSENSE_CONFIG = {
  enabled: false,
  publisherId: "", // e.g. "ca-pub-XXXXXXXXXXXXXXXX"
  slots: {
    inArticleTop: "",
    inArticleMid: "",
    inArticleBottom: "",
    sidebarSticky: ""
  }
};

/**
 * Analytics Configuration
 * If empty, no analytics scripts are loaded.
 */
export const ANALYTICS_ID = ""; // e.g. "G-XXXXXXXXXX"
