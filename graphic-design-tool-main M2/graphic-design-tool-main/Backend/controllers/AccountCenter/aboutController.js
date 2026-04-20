// ===============================
// ABOUT CONTROLLER
// ===============================
 
const aboutData = {
  app: {
    name: "Stackly Studio",
    description:
      "Stackly Studio is a browser-based design platform that helps individuals and teams create, collaborate, and export professional graphics with ease.",
    version: "0.0.0.0",
    release_tag: "Alpha Release",
  },
  company: {
    product_by: "The Stackly",
    headquarters: "Coimbatore, India",
    contact: "support@stacklystudio.com",
    website: "www.stacklystudio.com",
  },
  legal: {
    links: [
      { label: "Terms of Service", url: "/api/legal/terms" },
      { label: "Privacy Policy", url: "/api/legal/privacy" },
      { label: "Cookie Policy", url: "/api/legal/cookies" },
      { label: "Acceptable Use Policy", url: "/api/legal/acceptable-use" },
      { label: "Third-Party Licenses", url: "/api/legal/third-party-licenses" },
    ],
    disclaimer:
      "All third-party trademarks, assets, and brand names remain the property of their respective owners.",
  },
  technology: {
    note: "This product uses licensed open-source and third-party software components.",
    attribution_info:
      "Full attribution details are available in the Third-Party Licenses section.",
  },
  availability: {
    info: "Stackly Studio is accessible via modern web browsers and optimized for global users.",
    language_note: "Language support and features may vary by region.",
  },
  copyright: "© 2026 Stackly Studio. All rights reserved.",
};
 
// ===============================
// GET ABOUT... (Static   Data)
// ===============================
exports.getAbout = async (req, res) => {
  try {
    res.json(aboutData);
  } catch (err) {
    console.error("About fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
 