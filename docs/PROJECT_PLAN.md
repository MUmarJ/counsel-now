# Shaikh Counselor Website - Project Plan

## Project Overview
Build a professional, Islamic-styled single-page counseling website for "Shaikh" with integrated Cal.com booking, payment via Stripe, and Google Meet video calls.

**Target Launch:** 1 week
**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Cal.com (SaaS)

# Project Instructions

## Use Context7 by Default
Always use context7 when I need code generation, setup or configuration steps, or library/API documentation. This means you should automatically use the Context7 MCP tools to resolve library id and get library docs without me having to explicitly ask.

---

## Design Requirements

### Visual Style
- **Theme:** Professional Islamic/Arabic aesthetic
- **Colors:**
  - Primary: Emerald green (#059669, #047857) - represents peace, growth
  - Accent: Gold/Amber (#F59E0B) for highlights
  - Neutrals: Slate grays (#1e293b, #64748b)
  - Backgrounds: Warm whites, soft emerald tints
- **Typography:**
  - Headings: Clean serif (Playfair Display or similar)
  - Body: Sans-serif (Inter or system fonts)
  - Consider Arabic script elements in logo/headers
- **Design Elements:**
  - Subtle geometric Islamic patterns (low opacity backgrounds)
  - Smooth gradients (emerald to teal)
  - Rounded corners, soft shadows
  - Calming, trustworthy feel

### Layout
Single-page application with smooth scroll sections:
1. Hero with strong CTA
2. Services overview
3. About Shaikh
4. Testimonials
5. Contact/Footer

---

## Technical Architecture

```
┌─────────────────────────────────────────┐
│  Next.js 14 App (Vercel)                │
│  ├── Hero Section                        │
│  ├── Services Section                    │
│  ├── About Section                       │
│  ├── Testimonials                        │
│  ├── Contact Section                     │
│  └── Cal.com Embed (booking modal)       │
└─────────────────────────────────────────┘
              ↓
    ┌─────────────────────┐
    │  Cal.com (SaaS)      │
    │  - Event Types       │
    │  - Availability      │
    │  - Stripe Connect    │
    │  - Google Meet       │
    └─────────────────────┘
```

---

## Phase 1: Project Setup (Day 1)

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest shaikh-counselor \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"
cd shaikh-counselor
```

### 1.2 Install Dependencies
```bash
# UI Components
npx shadcn-ui@latest init

# Install specific shadcn components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add badge

# Cal.com embed
npm install @calcom/embed-react

# Icons
npm install lucide-react

# Animations
npm install framer-motion
```

### 1.3 Project Structure
```
shaikh-counselor/
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx              # Main landing page
│   ├── globals.css           # Tailwind + custom styles
│   └── components/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── BookingModal.tsx  # Cal.com embed
│       └── Navigation.tsx
├── public/
│   └── images/               # Logo, patterns, etc.
├── lib/
│   └── utils.ts              # Helper functions
└── tailwind.config.ts        # Custom theme colors
```

---

## Phase 2: Core Development (Days 2-4)

### 2.1 Configure Tailwind Theme
**File:** `tailwind.config.ts`

```typescript
export default {
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        amber: {
          400: '#fbbf24',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'islamic-pattern': "url('/patterns/geometric.svg')",
      }
    }
  }
}
```

### 2.2 Component Development Order

#### Navigation Component
- Sticky header with logo
- Smooth scroll links
- "Book Session" CTA button
- Mobile responsive hamburger menu

#### Hero Section
- Large heading: "Find Peace Through Faith & Wisdom"
- Subtext about Shaikh's services
- Two CTAs: "Schedule Consultation" + "View Services"
- Stats display: Years experience, families helped, satisfaction rate
- Placeholder image/illustration for Shaikh

#### Services Section
- 3-column grid (mobile: stack)
- Service cards with:
  - Icon (Heart, BookOpen, Star from lucide-react)
  - Title (e.g., "Marriage & Family Counseling")
  - Description
  - Duration & Price
  - Expand for more details
- Each card is clickable/expandable

**Service Ideas:**
1. Marriage & Family Counseling (60 min, $120)
2. Spiritual Development (45 min, $90)
3. Life Transitions Support (60 min, $120)

#### About Section
- Bio paragraph for Shaikh Mendez
- Credentials:
  - M.A. Islamic Studies
  - Licensed Professional Counselor (LPC)
  - Years of experience
- Quranic quote in styled callout box
- Professional headshot placeholder

#### Testimonials Section
- 3-column grid of testimonial cards
- Star ratings
- Client names (anonymized: "Amina R.")
- Quote about experience

#### Contact Section
- Contact information (phone, email, location)
- Office hours
- Final CTA to book
- Footer with copyright, privacy policy links

### 2.3 Booking Modal (Cal.com Integration)
**File:** `app/components/BookingModal.tsx`

```typescript
'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'light',
        styles: {
          branding: { brandColor: '#059669' }
        },
      });
    })();
  }, []);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <Cal
          calLink="shaikh-counselor/consultation"
          style={{ width: '100%', height: '100%' }}
          config={{ theme: 'light' }}
        />
      </DialogContent>
    </Dialog>
  );
}
```

---

## Phase 3: Cal.com Setup (Day 3)

### 3.1 Create Cal.com Account
1. Sign up at https://cal.com/signup
2. Choose Cal.com Teams plan ($15/month)
3. Set username: `shaikh-counselor`

### 3.2 Configure Event Types
Create 3 event types:

**Event 1: Marriage & Family Counseling**
- Duration: 60 minutes
- Price: $120
- Location: Google Meet (auto-generated)
- Buffer: 15 min before/after
- Booking limits: Max 1/day

**Event 2: Spiritual Development**
- Duration: 45 minutes
- Price: $90
- Location: Google Meet
- Buffer: 10 min before/after

**Event 3: Life Transitions Support**
- Duration: 60 minutes
- Price: $120
- Location: Google Meet
- Buffer: 15 min before/after

### 3.3 Connect Integrations

#### Stripe Setup
1. In Cal.com: Settings → Payments
2. Connect Stripe account
3. Enable payments for each event type
4. Set currency to USD
5. Test with Stripe test mode first

#### Google Meet Setup
1. In Cal.com: Settings → Integrations
2. Connect Google Calendar
3. Enable Google Meet for all event types
4. Grant calendar permissions

#### Email Setup
1. Configure email notifications
2. Customize booking confirmation emails
3. Add reminder emails (24h before, 1h before)

### 3.4 Availability Settings
- Set working hours (e.g., Mon-Fri, 9 AM - 5 PM EST)
- Block out lunch (12-1 PM)
- Add buffer times between sessions
- Set minimum notice (e.g., 24 hours)

---

## Phase 4: Styling & Polish (Day 4-5)

### 4.1 Islamic Pattern Background
Create or download SVG geometric pattern:
```svg
<!-- public/patterns/geometric.svg -->
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="islamic" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M30 15 L45 30 L30 45 L15 30 Z" fill="#064e3b" opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="60" height="60" fill="url(#islamic)"/>
</svg>
```

Apply as background:
```css
.hero-section {
  background-image: url('/patterns/geometric.svg');
  background-repeat: repeat;
}
```

### 4.2 Animation Guidelines
Use framer-motion for:
- Fade-in on scroll for sections
- Button hover effects
- Service card expansion
- Modal entrance/exit

Example:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### 4.3 Responsive Design Checklist
- [ ] Mobile navigation (hamburger menu)
- [ ] Service cards stack on mobile
- [ ] Hero text scales down
- [ ] Stats display wraps
- [ ] Testimonials stack on small screens
- [ ] Contact info stacks vertically
- [ ] Booking modal is mobile-friendly

### 4.4 Performance Optimization
- Use Next.js Image component for all images
- Lazy load Cal.com embed
- Minimize bundle size (check with `npm run build`)
- Add loading states for booking modal

---

## Phase 5: Content & Assets (Day 5)

### 5.1 Content Needed

**Hero Section:**
- Headline: "Find Peace Through Faith & Wisdom"
- Subheading: About Shaikh's 15+ years of experience
- CTA text: "Schedule Consultation" / "View Services"

**About Section:**
- Bio paragraph (150-200 words)
- Credentials list
- Quranic quote (suggestion: 65:2-3 about tawakkul)

**Services:**
- 3 service descriptions (50 words each)
- Pricing information
- Session duration

**Testimonials:**
- 3-5 client testimonials (anonymized names)
- Each 2-3 sentences

**Contact:**
- Phone number
- Email address
- Office location/timezone
- Office hours

### 5.2 Visual Assets Needed
- [ ] Logo/Arabic calligraphy for "ش" (Shaikh)
- [ ] Placeholder headshot (or professional illustration)
- [ ] Islamic geometric pattern SVG
- [ ] Favicon (emerald/gold theme)
- [ ] Social media preview image (OG image)

### 5.3 Legal Pages
Create simple pages for:
- Privacy Policy (use template)
- Terms of Service
- Cancellation/Refund Policy

---

## Phase 6: Deployment (Day 6)

### 6.1 Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### 6.2 Domain Setup
1. Purchase domain (e.g., `shaikhcounseling.com`)
   - Namecheap: ~$10/year
   - Cloudflare Registrar: ~$9/year
2. Point domain to Vercel
3. Add domain in Vercel dashboard
4. Wait for DNS propagation (5-60 min)
5. SSL auto-enabled by Vercel

### 6.3 Environment Variables
No sensitive env vars needed (Cal.com is embedded via public link)

### 6.4 Testing Checklist
- [ ] All sections scroll smoothly
- [ ] Booking modal opens/closes properly
- [ ] Cal.com embed loads correctly
- [ ] Test booking flow end-to-end (use Stripe test mode)
- [ ] Verify Google Meet link in confirmation email
- [ ] Mobile responsive on real devices
- [ ] All links work (privacy policy, etc.)
- [ ] Page load speed < 3 seconds

---

## Phase 7: Launch & Post-Launch (Day 7)

### 7.1 Pre-Launch
- [ ] Final content review
- [ ] Test all booking flows
- [ ] Verify Stripe is in LIVE mode (not test)
- [ ] Check Google Analytics/Vercel Analytics setup
- [ ] Add meta tags for SEO:
  ```html
  <title>Shaikh Mendez - Islamic Counseling Services</title>
  <meta name="description" content="Professional Islamic counseling for marriage, family, and spiritual growth. 15+ years experience.">
  ```

### 7.2 Launch Day
1. Switch domain from staging to production
2. Share with Shaikh for approval
3. Test booking as real user
4. Monitor first few bookings closely

### 7.3 Post-Launch Monitoring
- Check Vercel Analytics daily
- Monitor Cal.com booking rate
- Watch for payment issues in Stripe dashboard
- Collect user feedback

### 7.4 Future Enhancements
**Phase 2 features (optional):**
- Blog for Islamic guidance articles
- Resource library (PDFs, worksheets)
- Client portal for returning clients
- Waitlist for popular times
- Group session booking
- Multi-language support (Arabic/English toggle)

---

## Budget Breakdown

| Item | Provider | Cost | Notes |
|------|----------|------|-------|
| **Domain** | Namecheap | $10/year | One-time annual |
| **Hosting** | Vercel | $0 | Free Hobby plan |
| **Booking Platform** | Cal.com Teams | $15/month | Includes all features |
| **Email** | Gmail | $0 | Free for Google Meet |
| **OR Email** | Google Workspace | $6/month | Professional email |
| **Payment Processing** | Stripe | 2.9% + $0.30/transaction | Only charged on bookings |
| **SSL Certificate** | Let's Encrypt (via Vercel) | $0 | Auto-included |

**Monthly Total:** $15-21/month
**Annual Total:** ~$190-262/year

---

## Development Timeline

| Day | Tasks | Time |
|-----|-------|------|
| **Day 1** | Project setup, dependencies, structure | 2-3 hrs |
| **Day 2** | Build Navigation, Hero, Services sections | 4-6 hrs |
| **Day 3** | Build About, Testimonials, Contact sections | 3-4 hrs |
| **Day 3** | Cal.com account setup & configuration | 2 hrs |
| **Day 4** | Booking modal integration, styling polish | 3-4 hrs |
| **Day 5** | Content insertion, responsive testing | 3-4 hrs |
| **Day 6** | Deployment, domain setup, final testing | 2-3 hrs |
| **Day 7** | Launch, monitoring, minor fixes | 2 hrs |

**Total Development Time:** ~20-28 hours

---

## Key Files Reference

### Essential Commands
```bash
# Development
npm run dev              # Start dev server at localhost:3000
npm run build            # Production build
npm run start            # Start production server locally

# Deployment
vercel                   # Deploy to preview
vercel --prod            # Deploy to production

# Code quality
npm run lint             # Check for errors
npx prettier --write .   # Format code
```

### Key Configuration Files

**tailwind.config.ts** - Theme colors, fonts, patterns
**app/layout.tsx** - Global layout, metadata, fonts
**app/page.tsx** - Main landing page
**app/globals.css** - Global styles, custom CSS

### Cal.com Embed URL Structure
```
https://cal.com/shaikh-counselor/consultation
https://cal.com/shaikh-counselor/marriage-counseling
https://cal.com/shaikh-counselor/spiritual-development
```

---

## Support Resources

**Next.js Docs:** https://nextjs.org/docs
**shadcn/ui Components:** https://ui.shadcn.com
**Cal.com Embed Docs:** https://cal.com/docs/introduction/embed
**Tailwind CSS:** https://tailwindcss.com/docs
**Vercel Deployment:** https://vercel.com/docs

---

## Success Criteria

✅ **Launch Complete When:**
- Website loads in < 3 seconds
- All sections are visually polished
- Booking flow works end-to-end
- Payments process successfully
- Google Meet links generate automatically
- Mobile responsive on all devices
- Domain is live with SSL
- Client approves final design

---

## Notes for Claude Code

**Context to provide:**
- This is a counseling website for Islamic counselor "Shaikh Mendez"
- Design should be professional, calming, Islamic-inspired
- Single-page app with smooth scrolling sections
- Cal.com handles all booking/payment backend
- Focus on clean code, good TypeScript types, component reusability

**Preferred patterns:**
- Server components by default (Next.js 14)
- Client components only when needed (interactivity)
- Tailwind for all styling (no CSS modules)
- shadcn/ui for complex components
- lucide-react for all icons

**Code style:**
- Functional components
- TypeScript strict mode
- Named exports for components
- Descriptive variable names
- Comments for complex logic