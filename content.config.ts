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
    heading: "Services & Programs",
    subheading: "Sacred education, spiritual guidance, and community services rooted in Islamic tradition",

    // Featured services shown prominently
    featured: [
      {
        id: "marital-counseling",
        title: "Marital & Family Counseling",
        description: "Credentialed counseling grounded in Islamic ethics. Address conflicts, improve communication, and mediate disputes.",
        icon: "Heart",
        duration: "45 min",
        price: "300",
        priceNote: "online",
        altPrice: "350",
        altPriceNote: "in-person",
        followUpPrice: "250-275",
        popular: true,
      },
      {
        id: "nikah",
        title: "Nikah Officiation",
        description: "Sacred marriage ceremony services at mosque, venue, or home.",
        icon: "Sparkles",
        duration: "45 min",
        price: "500",
        priceNote: "in-house/mosque",
        altPrice: "1,150",
        altPriceNote: "off-site venue/home",
      },
      {
        id: "islamic-classes",
        title: "Islamic Classes",
        description: "Structured learning programs for youth and adults in sacred sciences.",
        icon: "BookOpen",
        duration: "45 min",
        price: "350",
        priceNote: "youth",
        altPrice: "550",
        altPriceNote: "adult",
      },
    ],

    // All services organized by category
    categories: [
      {
        id: "education",
        name: "Religious & Spiritual Education",
        icon: "BookOpen",
        services: [
          {
            id: "tajweed",
            title: "Quranic Recitation (Tajweed)",
            description: "Learn proper Quranic recitation with traditional methods.",
            duration: "45 min",
            price: "350",
            priceNote: "1-to-1 intro",
            altPrice: "800",
            altPriceNote: "full course",
            classPrice: "250/700",
          },
          {
            id: "tafsir",
            title: "Tafsir (Quranic Exegesis)",
            description: "Deep dive into Quranic interpretation and meanings.",
            duration: "45 min",
            price: "350",
            priceNote: "1-to-1 intro",
            altPrice: "800",
            altPriceNote: "full course",
          },
          {
            id: "hadith",
            title: "Hadith Studies",
            description: "Study of Prophetic traditions and their applications.",
            duration: "45 min",
            price: "350",
            priceNote: "1-to-1 intro",
            altPrice: "800",
            altPriceNote: "full course",
          },
          {
            id: "fiqh",
            title: "Fiqh (Islamic Jurisprudence)",
            description: "Understanding Islamic law and its practical applications.",
            duration: "45 min",
            price: "350",
            priceNote: "1-to-1 intro",
            altPrice: "800",
            altPriceNote: "full course",
          },
          {
            id: "aqeeda",
            title: "Aqeeda (Islamic Theology)",
            description: "Foundations of Islamic belief and creed.",
            duration: "45 min",
            price: "350",
            priceNote: "1-to-1 intro",
            altPrice: "800",
            altPriceNote: "full course",
          },
          {
            id: "sirah",
            title: "Sirah (Prophetic Biography)",
            description: "Study of the Prophet's life and legacy.",
            duration: "45 min",
            price: "350",
            priceNote: "1-to-1 intro",
            altPrice: "800",
            altPriceNote: "full course",
          },
          {
            id: "halaqas",
            title: "Halaqas (Study Circles)",
            description: "Special invited study circles for deeper learning.",
            duration: "45 min",
            price: "1,000",
          },
          {
            id: "youth-programs",
            title: "Youth Learning Programs",
            description: "Structured Islamic education for young Muslims.",
            duration: "45 min",
            price: "350",
          },
          {
            id: "adult-programs",
            title: "Adult Learning Programs",
            description: "Comprehensive sacred sciences for adult learners.",
            duration: "45 min",
            price: "550",
          },
        ],
      },
      {
        id: "counseling",
        name: "Counseling & Support",
        icon: "Heart",
        services: [
          {
            id: "marital-counseling",
            title: "Marital & Family Counseling",
            description: "Credentialed counseling for relationships and family issues, grounded in Islamic ethics.",
            duration: "45 min",
            price: "300",
            priceNote: "online",
            altPrice: "350",
            altPriceNote: "in-person",
            followUpPrice: "250-275",
          },
          {
            id: "pastoral-support",
            title: "Pastoral & Mental Health Support",
            description: "Spiritual counseling for anxiety, depression, discrimination, or substance use.",
            duration: "45 min",
            price: "Contact for pricing",
          },
          {
            id: "wellness-education",
            title: "Health & Wellness Education",
            description: "Talks promoting preventive health, hygiene, and healthy living as religiously endorsed behaviors.",
            duration: "45 min",
            price: "Contact for pricing",
          },
        ],
      },
      {
        id: "engagement",
        name: "Community Engagement",
        icon: "Users",
        services: [
          {
            id: "interfaith",
            title: "Interfaith & Civic Participation",
            description: "Spokesperson services at interfaith events, mosques, universities, and civic contexts.",
            duration: "45 min",
            price: "Contact for pricing",
          },
          {
            id: "chaplaincy",
            title: "Chaplaincy Services",
            description: "Muslim chaplain services in hospitals, universities, prisons, military, and first responder agencies.",
            duration: "45 min",
            price: "Contact for pricing",
          },
        ],
      },
      {
        id: "ceremonies",
        name: "Ceremonies & Events",
        icon: "Calendar",
        services: [
          {
            id: "nikah",
            title: "Wedding / Nikah Officiation",
            description: "Sacred marriage ceremony services.",
            duration: "45 min",
            price: "500",
            priceNote: "in-house/mosque",
            altPrice: "1,150",
            altPriceNote: "off-site venue/home",
          },
          {
            id: "khutaba",
            title: "Khutaba Service",
            description: "Friday sermon and religious address.",
            duration: "45 min",
            price: "800",
          },
          {
            id: "ramadan",
            title: "Ramadan Services",
            description: "Ramadan lectures, programs, and fundraising participation.",
            duration: "30 days",
            price: "25,000",
          },
          {
            id: "weekend-visits",
            title: "Weekend Visits",
            description: "Multi-day community engagement and programming.",
            duration: "2-3 days",
            price: "5,000",
          },
          {
            id: "zakat",
            title: "Charity & Zakat Coordination",
            description: "Guidance to masajids on Zakat/charity law and education.",
            duration: "45 min",
            price: "Contact for pricing",
          },
          {
            id: "workshops",
            title: "Educational Events & Workshops",
            description: "Lectures, seminars, retreats, gender-based or youth events, halal living discussions.",
            duration: "45 min",
            price: "Contact for pricing",
          },
        ],
      },
      {
        id: "speaking",
        name: "Speaking Engagements",
        icon: "Mic",
        services: [
          {
            id: "speaking",
            title: "Speaking Engagements",
            description: "Renowned speaker available for corporate events and speaking engagements.",
            duration: "Varies",
            price: "10,000 - 25,000",
          },
        ],
      },
      {
        id: "special",
        name: "Special Services",
        icon: "Globe",
        services: [
          {
            id: "umrah",
            title: "Umrah Request",
            description: "Guided Umrah pilgrimage services.",
            duration: "2 weeks",
            price: "15,000",
          },
        ],
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
    trainingParagraph: "After attending Morehouse College and Ohio State University, I traveled around the world studying Classical Arabic, theology, sacred jurisprudence, contemplative arts, and the science of spiritual illumination from living masters in Syria, Sudan, Mauritania, Morocco, Nigeria, and Senegal. I have been teaching these and other sacred sciences since 2001.",
    education: [
      { institution: "Morehouse College", location: "Atlanta, GA" },
      { institution: "Ohio State University", location: "Columbus, OH" },
    ],
    highlights: [
      { value: "24+", label: "Years Teaching" },
      { value: "Global", label: "Speaker" },
      { value: "2020", label: "Spiritual Impact Award" },
    ],
    credentials: [
      // {
      //   category: "service",
      //   role: "Imam & Scholar-in-Residence",
      //   org: "Muslim Center of Greater Princeton, NJ",
      // },
      // {
      //   category: "service",
      //   role: "Imam",
      //   org: "Masjid al-Mo'mineen & Madina Institute Masjid, GA",
      // },
      {
        category: "recognition",
        role: "2020 Spiritual Impact Award",
        org: "Center for Global Muslim Life",
      },
      {
        category: "teaching",
        role: "Teacher",
        org: "CelebrateMercy, Wasat, Rumi Center for Spirituality and the Arts",
      },
      {
        category: "leadership",
        role: "Founder",
        org: "The Nibras Foundation",
      },
      {
        category: "leadership",
        role: "Founder",
        org: "Bilal Spiritual Center for Peace and the Arts",
      },
      {
        category: "leadership",
        role: "Co-founder",
        org: "AHAD Collective",
      },
      {
        category: "advisory",
        role: "Advisory Board",
        org: "Goodtree Institute, Islamic Society for Holistic Education",
      },
    ],
    publication: {
      title: "The Spirits of Black Folk: Sages Through the Ages",
      subtitle: "Translation of Imam al-Suyuti's Rafʿ Shaʾn al-Ḥubshān",
      link: "https://store.celebratemercy.com/products/elevating-the-importance-of-the-blacks-%d8%b1%d9%81%d8%b9-%d8%b4%d8%a3%d9%86-%d8%a7%d9%84%d8%ad%d8%a8%d8%b4%d8%a7%d9%86-by-imam-al-suyuti",
    },
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
export type FeaturedService = typeof siteConfig.services.featured[0];
export type ServiceCategory = typeof siteConfig.services.categories[0];
export type TestimonialItem = typeof siteConfig.testimonials.items[0];
export type NavigationLink = typeof siteConfig.navigation.links[0];