// content.config.ts
// This file contains ALL website content
// Non-technical users can edit this file to update text, images, and data
// DO NOT modify React components - just edit values in this file

export const siteConfig = {
  // ========================================
  // SITE METADATA
  // ========================================
  metadata: {
    siteName: "Imam Mendes",
    counselorName: "Imam Adéyínká Muhammad Mendes",
    tagline: "Sacred Tradition • Transformative Justice • Ancestral Healing",
    description: "Spiritual leadership bridging sacred tradition, transformative justice, and the healing wisdom of African and Islamic civilizations. Over 24 years of teaching sacred sciences globally.",
    url: "https://imammendes.com",
    email: "contact@shaikhcounseling.com",
    phone: "(555) 123-4567",
    location: "Houston, TX",
    timezone: "America/Chicago",
  },

  // ========================================
  // BRANDING
  // ========================================
  branding: {
    // Logo can be text, image path, or both
    logo: {
      type: "both", // "text" | "image" | "both"
      text: "Imam Mendes", // Brand text
      imagePath: "/images/brand-logo.svg", // Path to logo file in /public folder
      textImagePath: "/images/brand-text.svg", // Path to brand text image
      alt: "Imam Mendes Logo",
      logoColor: "#046e50", // Fill color for logo SVG
      textColor: "#047857", // Fill color for text SVG (#07875B per request)
    },
    // Main brand colors (used throughout the site)
    colors: {
      primary: "#059669", // Emerald green
      primaryDark: "#047857",
      accent: "#F59E0B", // Gold/Amber
      accentLight: "#FDE68A",
    },
  },

  // ========================================
  // NAVIGATION
  // ========================================
  navigation: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: {
      text: "Book Session",
      variant: "primary", // "primary" | "secondary"
    },
  },

  // ========================================
  // HERO SECTION
  // ========================================
  hero: {
    badge: {
      emoji: "✨",
      text: "Spiritual Leader • Scholar • Educator",
    },
    headline: "Sacred Service Through",
    headlineHighlight: "Wisdom & Healing", // This will be gradient colored
    subheadline: "Bridging sacred tradition, transformative justice, and the healing wisdom of African and Islamic civilizations. My work is dedicated to liberating the human spirit through love, justice, and inner illumination.",
    primaryCTA: {
      text: "Begin Your Journey",
      action: "openBooking", // Links to Cal.com booking
    },
    secondaryCTA: {
      text: "Explore Services",
      action: "scrollToServices", // Scrolls to #services
    },
    stats: [
      { value: "24+", label: "Years Teaching" },
      { value: "Global", label: "Speaker" },
      { value: "2020", label: "Spiritual Impact Award" },
    ],
    image: {
      type: "photo", // "placeholder" | "photo" | "illustration"
      path: "/images/shaikh-photo.jpg", // Path to image in /public folder
      alt: "Imam Adéyínká Muhammad Mendes",
      caption: {
        name: "Imam Mendes",
        title: "Spiritual Leader & Scholar",
      },
    },
  },

  // ========================================
  // SERVICES SECTION
  // ========================================
  services: {
    heading: "Counseling Services",
    subheading: "Comprehensive support rooted in Islamic values, tailored to your unique journey",
    items: [
      {
        id: "marriage-family",
        title: "Marriage & Family Counseling",
        description: "Strengthen your relationships with Islamic guidance and modern therapeutic approaches.",
        icon: "Heart", // Options: "Heart" | "BookOpen" | "Sparkles"
        duration: "60 min",
        price: "120",
        detailedDescription: "Navigate marital challenges, improve communication, and build lasting harmony in your family life. We'll work together using principles from the Quran and Sunnah combined with evidence-based counseling techniques.",
        calendarLink: "marriage-counseling", // Cal.com event type slug
      },
      {
        id: "spiritual-development",
        title: "Spiritual Development",
        description: "Deepen your connection with Allah through personalized spiritual guidance.",
        icon: "BookOpen",
        duration: "45 min",
        price: "90",
        detailedDescription: "Overcome spiritual struggles, develop consistent worship habits, and find peace in your faith journey. Perfect for those seeking to strengthen their relationship with Allah and understand Islam more deeply.",
        calendarLink: "spiritual-development",
      },
      {
        id: "life-transitions",
        title: "Life Transitions Support",
        description: "Navigate major life changes with wisdom from Islamic teachings.",
        icon: "Sparkles",
        duration: "60 min",
        price: "120",
        detailedDescription: "Career changes, relocation, loss, or new responsibilities - receive guidance rooted in faith and practical wisdom. We'll help you find clarity and direction during uncertain times.",
        calendarLink: "life-transitions",
      },
    ],
  },

  // ========================================
  // ABOUT SECTION
  // ========================================
  about: {
    heading: "About Imam Mendes",
    greeting: "As-salamu alaykum.",
    introParagraph: "I'm Imam Adéyínká Muhammad Mendes, a spiritual leader, translator, educator, and public speaker whose work bridges sacred tradition, transformative justice, and the healing wisdom of African and Islamic civilizations.",
    journeyParagraph: "Born in Dayton, Ohio in 1975 to an African-American attorney and a Nigerian physician, I was raised where respect for diverse faiths, cultures, and the pursuit of justice were core values. My formative years included a pivotal move to Lagos, Nigeria, where I was deeply influenced by traditional African spirituality, communal living, and interfaith harmony. A life-changing journey to Jerusalem in 1993 led me to embrace Islam and dedicate my life to spiritual scholarship and service.",
    trainingParagraph: "I studied Classical Arabic, theology, jurisprudence, and spiritual psychology under traditional masters across West Africa, the Middle East, and North Africa—including in Syria, Sudan, Mauritania, Morocco, Senegal, and Nigeria. Since 2001, I have taught these sacred sciences across the globe.",
    highlights: [
      { value: "24+", label: "Years Teaching" },
      { value: "Global", label: "Speaker" },
      { value: "2020", label: "Spiritual Impact Award" },
    ],
    credentials: [
      {
        icon: "check",
        text: "Founder, The Nibras Foundation",
      },
      {
        icon: "check",
        text: "Founder, Bilal Spiritual Center for Peace and the Arts",
      },
      {
        icon: "check",
        text: "Co-founder, AHAD Collective",
      },
      {
        icon: "check",
        text: "2020 Spiritual Impact Award, Center for Global Muslim Life",
      },
      {
        icon: "check",
        text: "Teacher: CelebrateMercy, Wasat, Rumi Center for Spirituality and the Arts",
      },
      {
        icon: "check",
        text: "Advisory Board: Goodtree Institute, Islamic Society for Holistic Education",
      },
    ],
    quote: {
      text: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
      reference: "Quran 65:2-3",
      commentary: "This ayah reminds us that with tawakkul and proper guidance, Allah provides solutions we never imagined. Let's work together on your path to wellness, in sha Allah.",
    },
    photo: {
      type: "photo", // "photo" | "placeholder"
      path: "/images/shaikh-about.png",
      alt: "Imam Adéyínká Muhammad Mendes",
    },
  },

  // ========================================
  // WRITTEN WORKS & SPEAKING
  // ========================================
  writtenWorks: {
    heading: "Publications & Speaking",
    subheading: "Sacred texts, translations, and international speaking engagements",
    featuredBook: {
      title: "The Spirits of Black Folk: Sages Through the Ages",
      description: "A groundbreaking translation of Imam al-Suyuti's writings on early Black Muslim luminaries",
      status: "Available Now",
    },
    translationWork: "Engaged in the translation of sacred texts and poetry from Classical Arabic",
    speakingTopics: [
      "Qur'anic Spirituality",
      "Rites of Passage for Youth and Adults",
      "Peacebuilding and Interfaith Engagement",
      "The Role of Black Muslim Civilizations in History and Healing",
      "Sacred Activism and Anti-Slavery Resistance in the Americas",
    ],
  },

  // ========================================
  // TESTIMONIALS SECTION
  // ========================================
  testimonials: {
    heading: "What Clients Say",
    subheading: "Alhamdulillah for the trust our community has placed in this work",
    items: [
      {
        id: 1,
        name: "Amina R.",
        rating: 5,
        text: "Shaikh helped our marriage tremendously. His wisdom and patience gave us tools we still use today.",
        // Optional: photo: "/images/testimonials/amina.jpg"
      },
      {
        id: 2,
        name: "Yusuf K.",
        rating: 5,
        text: "The spiritual guidance sessions transformed my relationship with salah and Quran. Highly recommend.",
      },
      {
        id: 3,
        name: "Fatima S.",
        rating: 5,
        text: "Professional, compassionate, and deeply knowledgeable. A blessing to our community.",
      },
      {
        id: 4,
        name: "Omar M.",
        rating: 5,
        text: "Going through a difficult career transition, Shaikh helped me see Allah's wisdom in the struggle. Grateful beyond words.",
      },
      {
        id: 5,
        name: "Khadija L.",
        rating: 5,
        text: "As a new Muslim, I was struggling with many questions. Shaikh's patient guidance made everything clearer.",
      },
    ],
  },

  // ========================================
  // CONTACT SECTION
  // ========================================
  contact: {
    heading: "Get In Touch",
    subheading: "Ready to begin your journey? Reach out today",
    methods: [
      {
        icon: "phone",
        label: "Phone",
        value: "(555) 123-4567",
        link: "tel:+15551234567",
      },
      {
        icon: "mail",
        label: "Email",
        value: "contact@shaikhcounseling.com",
        link: "mailto:contact@shaikhcounseling.com",
      },
      {
        icon: "map",
        label: "Location",
        value: "Houston, TX",
        subvalue: "Central Time Zone",
        link: null,
      },
    ],
    officeHours: {
      heading: "Office Hours",
      schedule: [
        { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM EST" },
        { days: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
        { days: "Sunday", hours: "Closed" },
      ],
    },
    finalCTA: {
      text: "Book Your First Session",
      subtext: "Most appointments available within 48 hours",
    },
  },

  // ========================================
  // FOOTER
  // ========================================
  footer: {
    tagline: "Sacred Service • Spiritual Beauty • Ancestral Resilience",
    copyright: "© 2025 Imam Mendes. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cancellation Policy", href: "/cancellation" },
    ],
    socialMedia: [
      // Optional social media links
      { platform: "facebook", url: "https://facebook.com/shaikhcounseling" },
      { platform: "instagram", url: "https://www.instagram.com/adeyinka.mendes/" },
      { platform: "linkedin", url: "https://linkedin.com/in/shaikhcounseling" },
    ],
  },

  // ========================================
  // BOOKING (Cal.com Integration)
  // ========================================
  booking: {
    // Your Cal.com username
    calUsername: "mumarj",

    // Default event type (used for main CTA buttons)
    defaultEventType: "marriage-counseling",

    // Cal.com embed styling
    embedConfig: {
      theme: "light", // "light" | "dark"
      brandColor: "#059669", // Should match branding.colors.primary
      hideEventTypeDetails: false,
    },
  },

  // ========================================
  // SEO & META TAGS
  // ========================================
  seo: {
    title: "Imam Adéyínká Muhammad Mendes - Spiritual Leader & Scholar | Houston, TX",
    description: "Spiritual leadership bridging sacred tradition, transformative justice, and the healing wisdom of African and Islamic civilizations. 24+ years teaching sacred sciences globally.",
    keywords: [
      "Islamic spiritual leadership",
      "African Islamic traditions",
      "spiritual guidance",
      "Imam Mendes",
      "sacred sciences",
      "transformative justice",
      "Houston spiritual leader",
      "Black Muslim history",
      "ancestral healing",
    ],
    ogImage: "/images/og-image.jpg", // Social media preview image
    twitterHandle: "@shaikhcounseling", // Optional
  },

  // ========================================
  // LEGAL PAGES (Basic Content)
  // ========================================
  legal: {
    privacyPolicy: {
      lastUpdated: "October 24, 2024",
      summary: "We respect your privacy and protect your personal information. All sessions are confidential.",
      // Full content should be in separate markdown files
      content: "/content/privacy-policy.md",
    },
    termsOfService: {
      lastUpdated: "October 24, 2024",
      summary: "By booking a session, you agree to our terms of service and cancellation policy.",
      content: "/content/terms-of-service.md",
    },
    cancellationPolicy: {
      summary: "Please provide 24 hours notice for cancellations. Late cancellations may be charged 50% of the session fee.",
      details: [
        "24+ hours notice: Full refund",
        "12-24 hours notice: 50% charge",
        "Less than 12 hours: Full charge",
        "Emergency situations reviewed case-by-case",
      ],
    },
  },
};

// Type definitions for TypeScript autocomplete
export type SiteConfig = typeof siteConfig;
export type ServiceItem = typeof siteConfig.services.items[0];
export type TestimonialItem = typeof siteConfig.testimonials.items[0];
export type NavigationLink = typeof siteConfig.navigation.links[0];