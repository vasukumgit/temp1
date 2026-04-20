// ===============================
// LEGAL CONTROLLER
// ===============================
 
// ===============================
// TERMS OF SERVICE
// ===============================
exports.getTerms = async (req, res) => {
  try {
    res.json({
      title: "Terms of Service",
      last_updated: "2026-01-01",
      content: [
        {
          heading: "Acceptance of Terms",
          body: "By accessing or using Stackly Studio, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.",
        },
        {
          heading: "Use of Service",
          body: "Stackly Studio is intended for personal and professional use. You agree not to misuse the platform or use it for any unlawful purpose.",
        },
        {
          heading: "Intellectual Property",
          body: "All content, designs, and assets created using Stackly Studio remain the property of the respective creators. Stackly Studio retains rights to its platform and tools.",
        },
        {
          heading: "Termination",
          body: "We reserve the right to suspend or terminate your account if you violate these terms.",
        },
        {
          heading: "Changes to Terms",
          body: "We may update these terms from time to time. Continued use of the platform means you accept the updated terms.",
        },
      ],
    });
  } catch (err) {
    console.error("Terms fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
 
// ===============================
// PRIVACY POLICY
// ===============================
exports.getPrivacy = async (req, res) => {
  try {
    res.json({
      title: "Privacy Policy",
      last_updated: "2026-01-01",
      content: [
        {
          heading: "Information We Collect",
          body: "We collect information you provide directly such as name, email, and profile data when you register or use our services.",
        },
        {
          heading: "How We Use Your Information",
          body: "Your information is used to provide, maintain, and improve our services, and to communicate with you about updates and features.",
        },
        {
          heading: "Data Sharing",
          body: "We do not sell your personal data. We may share data with trusted third-party services only as necessary to operate Stackly Studio.",
        },
        {
          heading: "Data Security",
          body: "We implement industry-standard security measures to protect your personal information from unauthorized access.",
        },
        {
          heading: "Your Rights",
          body: "You have the right to access, update, or delete your personal data at any time through your account settings.",
        },
      ],
    });
  } catch (err) {
    console.error("Privacy fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
 
// ===============================
// COOKIE POLICY
// ===============================
exports.getCookies = async (req, res) => {
  try {
    res.json({
      title: "Cookie Policy",
      last_updated: "2026-01-01",
      content: [
        {
          heading: "What Are Cookies",
          body: "Cookies are small text files stored on your device that help us provide a better experience on Stackly Studio.",
        },
        {
          heading: "How We Use Cookies",
          body: "We use cookies for authentication, session management, and to remember your preferences.",
        },
        {
          heading: "Third-Party Cookies",
          body: "Some third-party services integrated into Stackly Studio may also set cookies on your device.",
        },
        {
          heading: "Managing Cookies",
          body: "You can control or disable cookies through your browser settings. Note that disabling cookies may affect platform functionality.",
        },
      ],
    });
  } catch (err) {
    console.error("Cookie policy fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
 
// ===============================
// ACCEPTABLE USE POLICY
// ===============================
exports.getAcceptableUse = async (req, res) => {
  try {
    res.json({
      title: "Acceptable Use Policy",
      last_updated: "2026-01-01",
      content: [
        {
          heading: "Prohibited Activities",
          body: "You may not use Stackly Studio to create, share, or distribute content that is illegal, harmful, abusive, or violates any third-party rights.",
        },
        {
          heading: "Account Responsibility",
          body: "You are responsible for all activity that occurs under your account. Do not share your credentials with others.",
        },
        {
          heading: "Platform Integrity",
          body: "You must not attempt to hack, reverse engineer, or disrupt the platform or its services in any way.",
        },
        {
          heading: "Enforcement",
          body: "Violations of this policy may result in suspension or permanent termination of your account.",
        },
      ],
    });
  } catch (err) {
    console.error("Acceptable use fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
 
// ===============================
// THIRD-PARTY LICENSES.
// ===============================
exports.getThirdPartyLicenses = async (req, res) => {
  try {
    res.json({
      title: "Third-Party Licenses",
      last_updated: "2026-01-01",
      note: "Stackly Studio uses the following open-source and third-party software components.",
      licenses: [
        {
          name: "Express.js",
          version: "4.x",
          license: "MIT",
          url: "https://expressjs.com",
        },
        {
          name: "MySQL2",
          version: "3.x",
          license: "MIT",
          url: "https://github.com/sidorares/node-mysql2",
        },
        {
          name: "JSON Web Token (jsonwebtoken)",
          version: "9.x",
          license: "MIT",
          url: "https://github.com/auth0/node-jsonwebtoken",
        },
        {
          name: "bcryptjs",
          version: "2.x",
          license: "MIT",
          url: "https://github.com/dcodeIO/bcrypt.js",
        },
        {
          name: "Cloudinary",
          version: "1.x",
          license: "MIT",
          url: "https://cloudinary.com",
        },
        {
          name: "Multer",
          version: "1.x",
          license: "MIT",
          url: "https://github.com/expressjs/multer",
        },
      ],
    });
  } catch (err) {
    console.error("Third-party licenses fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
 