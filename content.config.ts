// content.config.ts
// This file contains ALL website content
// Non-technical users can edit this file to update text, images, and data
// DO NOT modify React components - just edit values in this file

export const siteConfig = {
  // ========================================
  // SITE METADATA
  // ========================================
  metadata: {
    siteName: "Shaikh Counseling",
    counselorName: "Shaikh Mendez",
    tagline: "Islamic Life Guidance",
    description: "Professional Islamic counseling for marriage, family, and spiritual growth. Over 15 years of experience serving the community.",
    url: "https://shaikhcounseling.com",
    email: "contact@shaikhcounseling.com",
    phone: "(555) 123-4567",
    location: "Princeton, NJ",
    timezone: "America/New_York",
  },

  // ========================================
  // BRANDING
  // ========================================
  branding: {
    // Logo can be text, image path, or both
    logo: {
      type: "both", // "text" | "image" | "both"
      text: "Shaikh Counseling", // Brand text
      imagePath: "/images/brand-logo.svg", // Path to logo file in /public folder
      textImagePath: "/images/brand-text.svg", // Path to brand text image
      alt: "Shaikh Counseling Logo",
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
      text: "Professional Islamic Counseling",
    },
    headline: "Find Peace Through",
    headlineHighlight: "Faith & Wisdom", // This will be gradient colored
    subheadline: "Alhamdulillah, I've had the honor of guiding families and individuals for over 15 years. Together, we'll navigate life's challenges with Islamic principles and compassionate care.",
    primaryCTA: {
      text: "Schedule Consultation",
      action: "openBooking", // Links to Cal.com booking
    },
    secondaryCTA: {
      text: "View Services",
      action: "scrollToServices", // Scrolls to #services
    },
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "500+", label: "Families Helped" },
      { value: "98%", label: "Satisfaction Rate" },
    ],
    image: {
      type: "photo", // "placeholder" | "photo" | "illustration"
      path: "/images/shaikh-photo.jpg", // Path to image in /public folder
      alt: "Shaikh Mendez",
      caption: {
        name: "Shaikh Mendez",
        title: "Licensed Islamic Counselor",
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
    heading: "About Shaikh",
    greeting: "As-salamu alaykum.",
    introParagraph: "I'm Shaikh Mendez, and for over 15 years, I've been blessed to serve our community through Islamic counseling and spiritual guidance.",
    bioParagraph: "With a Master's in Islamic Studies and certification in professional counseling, I blend traditional Islamic wisdom with contemporary therapeutic approaches. My goal is simple: help you find clarity, peace, and purpose through our beautiful deen.",
    credentials: [
      {
        icon: "check",
        text: "M.A. Islamic Studies, Al-Azhar University",
      },
      {
        icon: "check",
        text: "Licensed Professional Counselor (LPC)",
      },
      {
        icon: "check",
        text: "Member, Islamic Counselors Association",
      },
      {
        icon: "check",
        text: "Specialization in Family & Marriage Therapy",
      },
    ],
    quote: {
      text: "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
      reference: "Quran 65:2-3",
      commentary: "This ayah reminds us that with tawakkul and proper guidance, Allah provides solutions we never imagined. Let's work together on your path to wellness, in sha Allah.",
    },
    photo: {
      path: "/images/shaikh-about.jpg",
      alt: "Shaikh Mendez",
    },
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
        value: "Princeton, NJ",
        subvalue: "Eastern Time Zone",
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
    tagline: "Compassionate Islamic Counseling Since 2010",
    copyright: "© 2024 Shaikh Counseling. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cancellation Policy", href: "/cancellation" },
    ],
    socialMedia: [
      // Optional social media links
      // { platform: "facebook", url: "https://facebook.com/shaikhcounseling" },
      // { platform: "instagram", url: "https://instagram.com/shaikhcounseling" },
      // { platform: "linkedin", url: "https://linkedin.com/in/shaikhcounseling" },
    ],
  },

  // ========================================
  // BOOKING (Cal.com Integration)
  // ========================================
  booking: {
    // Your Cal.com username
    calUsername: "shaikh-counselor",

    // Default event type (used for main CTA buttons)
    defaultEventType: "consultation",

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
    title: "Shaikh Mendez - Islamic Counseling Services | Princeton, NJ",
    description: "Professional Islamic counseling for marriage, family, and spiritual growth. Licensed counselor with 15+ years experience. Book your consultation today.",
    keywords: [
      "Islamic counseling",
      "Muslim counselor",
      "marriage counseling",
      "Islamic therapy",
      "spiritual guidance",
      "family counseling",
      "Princeton counselor",
      "halal therapy",
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