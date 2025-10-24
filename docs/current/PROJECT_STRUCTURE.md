# Counsel Now - Project Structure Documentation
**Last Updated:** October 24, 2024
**For:** Coding Agents & Developers

---

## 📁 Complete Directory Structure

```
counsel-now/
├── app/                          # Next.js App Router directory
│   ├── components/               # React components (7 total)
│   │   ├── Navigation.tsx        # Sticky nav with mobile menu (5.3 KB)
│   │   ├── Hero.tsx              # Landing section with stats (5.6 KB)
│   │   ├── Services.tsx          # Service cards with pricing (6.0 KB)
│   │   ├── About.tsx             # Bio and credentials (4.6 KB)
│   │   ├── Testimonials.tsx      # Client reviews (4.3 KB)
│   │   ├── Contact.tsx           # Contact info & footer (6.1 KB)
│   │   └── BookingModal.tsx      # Cal.com integration (3.0 KB)
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Main homepage (imports all components)
│   └── globals.css               # Tailwind v4 config + custom styles
│
├── tests/                        # Playwright E2E tests (10 test files)
│   ├── homepage.spec.ts          # Homepage basic tests
│   ├── navigation.spec.ts        # Nav & smooth scroll tests
│   ├── services.spec.ts          # Services section tests
│   ├── about.spec.ts             # About section tests
│   ├── testimonials.spec.ts      # Testimonials tests
│   ├── contact.spec.ts           # Contact & footer tests
│   ├── booking-modal.spec.ts     # Modal interaction tests
│   ├── responsive.spec.ts        # Responsive design tests
│   └── accessibility.spec.ts     # A11y compliance tests
│
├── lib/                          # Utility functions
│   └── utils.ts                  # cn() utility for className merging
│
├── public/                       # Static assets
│   ├── images/                   # User-uploaded images (empty, ready)
│   └── patterns/
│       └── geometric.svg         # Islamic 8-pointed star pattern
│
├── docs/                         # Documentation
│   ├── current/                  # Session continuity docs
│   │   ├── PROJECT_STRUCTURE.md  # This file
│   │   └── CURRENT_PROGRESS.md   # Status & next steps
│   ├── PROJECT_PLAN.md           # Full implementation plan
│   ├── PROJECT_SUMMARY.md        # High-level overview
│   ├── DESIGN_TOKENS.md          # Design system spec
│   ├── CONTENT_GUIDE.md          # Non-technical user guide
│   ├── QUICKSTART.md             # 5-minute setup guide
│   ├── DEPLOYMENT_CHECKLIST.md   # Pre-launch checklist
│   └── EXAMPLE_COMPNENT.tsx      # Code pattern example
│
├── content.config.ts             # ⭐ SINGLE SOURCE OF TRUTH for all content
│
├── Configuration Files:
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
├── postcss.config.js             # PostCSS with Tailwind v4
├── playwright.config.ts          # Playwright test config
├── .gitignore                    # Git exclusions
└── VERIFICATION_REPORT.md        # Code verification report

Total Lines of Code: ~4,500
Total Test Cases: 90+
Total Documentation: 3,000+ lines
```

---

## 🎯 Key Files to Know

### 1. **content.config.ts** (12 KB) ⭐ MOST IMPORTANT
**Purpose:** Single source of truth for ALL website content
**Edit frequency:** High (every content change)

```typescript
export const siteConfig = {
  metadata: { siteName, counselorName, email, phone, location },
  branding: { logo, colors },
  hero: { headline, stats, CTAs },
  services: { items: [service1, service2, service3] },
  about: { bio, credentials, quote },
  testimonials: { items: [review1, review2, ...] },
  contact: { methods, officeHours },
  booking: { calUsername, defaultEventType },
  seo: { title, description, keywords }
}
```

**Components automatically inherit from this file - NO hardcoded text in components!**

### 2. **app/page.tsx** (Entry Point)
**Purpose:** Main homepage that imports all sections
**Structure:**
```typescript
'use client';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
// ... other imports

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main>
      <Navigation onBookingClick={openBookingModal} />
      <Hero onBookingClick={openBookingModal} />
      <Services onBookingClick={openBookingModal} />
      <About />
      <Testimonials />
      <Contact onBookingClick={openBookingModal} />
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  );
}
```

### 3. **app/globals.css** (Tailwind v4 Config)
**Purpose:** Tailwind CSS v4 configuration + custom styles
**Key sections:**
```css
@import "tailwindcss";

@theme {
  /* Custom color palette */
  --color-emerald-50 to --color-emerald-900
  --color-amber-50 to --color-amber-700
  --font-sans, --font-serif
}

/* Custom utilities */
.pattern-bg { background-image: url('/patterns/geometric.svg'); }
.text-balance { text-wrap: balance; }
```

### 4. **playwright.config.ts** (Test Configuration)
**Purpose:** E2E test configuration
**Features:**
- Tests 5 browsers: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- Auto-starts dev server on localhost:3000
- Generates HTML reports
- Screenshots on failure

---

## 🏗️ Architecture Patterns

### Component Pattern
All components follow this pattern:

```typescript
'use client'; // If interactive

import { siteConfig } from '@/content.config';
import { motion } from 'framer-motion'; // For animations
import { IconName } from 'lucide-react'; // For icons

export default function ComponentName({ onBookingClick }: Props) {
  return (
    <section id="section-name" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>{siteConfig.section.title}</h2>
        {/* Content from siteConfig */}
      </motion.div>
    </section>
  );
}
```

### State Management
- **Global state:** None needed (all state is local)
- **Modal state:** Managed in `app/page.tsx`, passed as props
- **Content:** Imported from `content.config.ts` (static)

### Styling Approach
- **Framework:** Tailwind CSS v4 (CSS-first, no JS config)
- **Utilities:** `cn()` function from `lib/utils.ts` for conditional classes
- **Animations:** Framer Motion for scroll reveals and transitions
- **Responsive:** Mobile-first with Tailwind breakpoints

---

## 📦 Dependencies

### Core (Production)
```json
{
  "next": "^16.0.0",              // React framework with Turbopack
  "react": "^19.2.0",             // UI library
  "react-dom": "^19.2.0",         // DOM rendering
  "typescript": "^5.9.3",         // Type safety
  "tailwindcss": "^4.1.16",       // CSS framework v4
  "@tailwindcss/postcss": "^4.1.16", // Required for v4
  "framer-motion": "^12.23.24",   // Animations
  "lucide-react": "^0.548.0",     // Icons
  "@calcom/embed-react": "^1.5.3", // Cal.com booking embed
  "clsx": "^2.1.1",               // Utility
  "tailwind-merge": "^3.3.1",     // Utility
  "class-variance-authority": "^0.7.1" // Utility
}
```

### Development
```json
{
  "@playwright/test": "^1.56.1",  // E2E testing
  "playwright": "^1.56.1"         // Browser automation
}
```

---

## 🎨 Design System

### Color Palette
```css
Primary (Emerald):
--color-emerald-600: #059669 (main brand color)
--color-emerald-700: #047857 (hover states)
--color-emerald-900: #064e3b (headings)

Accent (Gold):
--color-amber-400: #fbbf24 (highlights)
--color-amber-500: #f59e0b (stars, badges)

Neutrals (Slate):
--color-slate-50: #f8fafc (backgrounds)
--color-slate-600: #475569 (body text)
--color-slate-900: #0f172a (dark text)
```

### Typography
```css
Font Families:
--font-sans: 'Inter', system-ui, sans-serif (body)
--font-serif: 'Playfair Display', Georgia, serif (headings)

Sizes:
text-base: 16px (body)
text-xl: 20px (leads)
text-2xl: 24px (card titles)
text-4xl: 36px (section headings)
text-6xl: 60px (hero headline)
```

### Spacing
```css
py-20: Section vertical padding (5rem / 80px)
px-6: Container horizontal padding (1.5rem / 24px)
gap-8: Grid gap (2rem / 32px)
max-w-7xl: Content max width (1280px)
```

---

## 🔄 Component Communication

### Props Flow
```
app/page.tsx
  ├─> Navigation(onBookingClick)
  ├─> Hero(onBookingClick)
  ├─> Services(onBookingClick)
  ├─> About() [no props]
  ├─> Testimonials() [no props]
  ├─> Contact(onBookingClick)
  └─> BookingModal(isOpen, onClose)
```

### Event Handling
1. User clicks "Book Session" button
2. `onBookingClick()` called in page.tsx
3. `setIsBookingModalOpen(true)` updates state
4. `BookingModal` receives `isOpen={true}`
5. Modal renders with Cal.com embed

---

## 🧪 Testing Strategy

### Test Coverage
- **10 test files**
- **90+ test cases**
- **5 browsers tested**

### Test Categories
1. **Functional:** Do features work? (navigation, modal, etc.)
2. **Visual:** Are all sections visible?
3. **Responsive:** Mobile, tablet, desktop layouts
4. **Accessibility:** Keyboard nav, ARIA, semantic HTML
5. **Integration:** Smooth scroll, modal interactions

### Running Tests
```bash
# Run all tests
npx playwright test

# Run specific file
npx playwright test tests/navigation.spec.ts

# Run in headed mode (see browser)
npx playwright test --headed

# Run on specific browser
npx playwright test --project=chromium

# Generate HTML report
npx playwright show-report
```

---

## 🚀 Build & Deploy

### Development
```bash
npm run dev           # Start dev server (localhost:3000)
npm run build         # Production build
npm run start         # Run production build locally
npm run lint          # ESLint check
npx playwright test   # Run E2E tests
```

### Deployment (Vercel)
```bash
# Method 1: CLI
vercel --prod

# Method 2: Git integration
git push origin main  # Auto-deploys via Vercel GitHub integration
```

### Environment Variables
**None required!** Cal.com is embedded via public username.

Optional for production:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📝 Content Management

### How to Update Content
1. **Edit** `content.config.ts`
2. **Save** the file
3. **Refresh** browser (dev server hot-reloads)
4. **Deploy** to production when ready

### Content Sections
```typescript
metadata      → Site name, contact info, counselor name
branding      → Logo, colors
hero          → Headline, stats, CTAs
services      → 3 services with pricing
about         → Bio, credentials, quote
testimonials  → 5 client reviews
contact       → Contact methods, office hours
booking       → Cal.com username
seo           → Meta title, description, keywords
```

---

## 🔧 Common Tasks

### Add a New Service
```typescript
// In content.config.ts
services: {
  items: [
    // ... existing services
    {
      id: "new-service",
      title: "New Service Name",
      description: "Short description...",
      detailedDescription: "Longer details...",
      icon: "Heart", // Heart | BookOpen | Sparkles
      price: "$100",
      duration: "45 min",
      calendarLink: "new-service-slug", // Must match Cal.com
    }
  ]
}
```

### Update Colors
```css
/* In app/globals.css under @theme */
--color-emerald-600: #YOUR_COLOR;
```

### Add New Component
1. Create `app/components/NewComponent.tsx`
2. Import content from `content.config.ts`
3. Follow existing component pattern
4. Import in `app/page.tsx`
5. Add tests in `tests/new-component.spec.ts`

---

## 🐛 Troubleshooting

### Dev Server Issues
```bash
# Port 3000 in use
npx kill-port 3000
npm run dev

# Tailwind not updating
rm -rf .next
npm run dev

# TypeScript errors
rm -rf .next
npm run dev
```

### Build Issues
```bash
# Check for errors
npm run build

# Fix TypeScript
npx tsc --noEmit

# Fix ESLint
npm run lint
```

### Test Issues
```bash
# Install browsers
npx playwright install

# Update Playwright
npm install -D @playwright/test@latest playwright@latest

# Debug test
npx playwright test --debug
```

---

## 📚 Documentation Reference

### For Developers
- [PROJECT_PLAN.md](../PROJECT_PLAN.md) - Full implementation plan
- [DESIGN_TOKENS.md](../DESIGN_TOKENS.md) - Design system spec
- [VERIFICATION_REPORT.md](../../VERIFICATION_REPORT.md) - Code audit

### For Non-Technical Users
- [CONTENT_GUIDE.md](../CONTENT_GUIDE.md) - How to edit content
- [QUICKSTART.md](../QUICKSTART.md) - 5-minute setup
- [DEPLOYMENT_CHECKLIST.md](../DEPLOYMENT_CHECKLIST.md) - Pre-launch

### For Coding Agents
- **This file** - Project structure
- [CURRENT_PROGRESS.md](./CURRENT_PROGRESS.md) - Current status

---

## 🎯 Quick Reference

### File Sizes
- **Components:** ~34 KB total
- **Tests:** ~25 KB total
- **Docs:** ~100 KB total
- **Config:** ~15 KB total

### Performance Targets
- **Dev startup:** < 1 second
- **Hot reload:** < 100ms
- **Production build:** < 30 seconds
- **Page load:** < 3 seconds

### Code Quality
- ✅ TypeScript strict mode
- ✅ ESLint configured
- ✅ Playwright E2E tests
- ✅ 90+ test cases
- ✅ Mobile responsive
- ✅ Accessibility compliant

---

**This document provides complete project structure understanding for any coding agent to continue development without additional context.**

**Last Updated:** October 24, 2024
**Maintained By:** Automated on each significant change
**Version:** 1.0.0
