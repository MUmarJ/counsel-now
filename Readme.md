# Counsel Now

Professional Arabic counseling website template with integrated booking system.

![Demo](counsel-now-demo.gif)

##  Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## Project Structure

```
shaikh-counselor/
├── app/
│   ├── components/          # React components (DON'T edit for content)
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── BookingModal.tsx
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── public/
│   ├── images/              # Add your photos here
│   │   ├── logo.svg
│   │   ├── shaikh-photo.jpg
│   │   └── og-image.jpg
│   └── patterns/            # Arabic geometric patterns
├── content.config.ts        # ⭐ EDIT THIS for all content
├── tailwind.config.ts       # Design system configuration
├── package.json
└── README.md                # This file
```

##  Editing Content

**To update website content (phone, services, text, etc.):**

1. Open `content.config.ts`
2. Find the section you want to edit
3. Change the values
4. Save the file
5. Refresh your browser

**Detailed instructions:** See [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md)

## 🎨 Design System

All colors, fonts, spacing, and visual design tokens are documented in [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md)

## 🔧 Common Tasks

### Update Phone Number or Email
**File:** `content.config.ts` → `metadata` section
```typescript
metadata: {
  phone: "(555) 123-4567",  // ← Change here
  email: "new@email.com"    // ← Change here
}
```

### Add a New Service
**File:** `content.config.ts` → `services.items` array
1. Copy an existing service block
2. Paste it in the array
3. Update the values (title, price, duration, etc.)
4. Make sure there's a comma after the previous item

### Add a Testimonial
**File:** `content.config.ts` → `testimonials.items` array
1. Copy an existing testimonial
2. Paste it in the array
3. Update name, rating, and text
4. Save

### Change Hero Image
**File:** `content.config.ts` → `hero.image` section
1. Add your photo to `/public/images/`
2. Update config:
```typescript
hero: {
  image: {
    type: "photo",                     // Change from "placeholder"
    path: "/images/your-photo.jpg",    // Your filename
    alt: "Shaikh Mendez"
  }
}
```

### Update Service Prices
**File:** `content.config.ts` → `services.items` → find service → update `price`
```typescript
{
  title: "Marriage & Family Counseling",
  price: "$150",  // ← Change price here
}
```

##  Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

Your site will be live at: `https://your-project.vercel.app`

### Connect Custom Domain

1. Purchase domain (Namecheap, Cloudflare, etc.)
2. Go to Vercel dashboard → Your Project → Settings → Domains
3. Add your domain (e.g., `shaikhcounseling.com`)
4. Update DNS records as instructed by Vercel
5. Wait 5-60 minutes for DNS propagation
6. SSL certificate auto-configured ✅

##  Cal.com Setup

### Initial Setup

1. Create account at https://cal.com/signup
2. Choose Cal.com Teams plan ($15/month)
3. Set your username (e.g., `shaikh-counselor`)
4. Update `content.config.ts`:
```typescript
booking: {
  calUsername: "shaikh-counselor",  // ← Your Cal.com username
}
```

### Create Event Types

Create an event type for each service:

**Example: Marriage Counseling**
- Name: `marriage-counseling` (must match `calendarLink` in config)
- Duration: 60 minutes
- Location: Google Meet
- Price: $120 (via Stripe)

**In `content.config.ts`:**
```typescript
services: {
  items: [
    {
      id: "marriage-family",
      title: "Marriage & Family Counseling",
      calendarLink: "marriage-counseling",  // ← Must match Cal.com event slug
      price: "$120",
      duration: "60 min"
    }
  ]
}
```

### Connect Integrations

**Stripe (Payments):**
1. Cal.com → Settings → Payments
2. Connect Stripe account
3. Enable for each event type

**Google Meet (Video):**
1. Cal.com → Settings → Integrations
2. Connect Google Calendar
3. Enable Google Meet

**Email Notifications:**
1. Cal.com → Settings → Emails
2. Customize booking confirmation template
3. Set up reminders (24h, 1h before)

##  Testing

### Local Testing
```bash
npm run dev
# Test booking flow
# Test all links
# Test mobile view (Chrome DevTools → Toggle Device Toolbar)
```

### Pre-Launch Checklist
- [ ] All content is accurate (phone, email, prices)
- [ ] Cal.com booking works end-to-end
- [ ] Test payment with Stripe test mode
- [ ] All images load correctly
- [ ] Mobile responsive on real devices
- [ ] Page loads in < 3 seconds
- [ ] Privacy policy and terms pages exist
- [ ] Google Meet links generate in confirmation emails

## Analytics

### Vercel Analytics (Free)
Already included! View in Vercel dashboard.

### Google Analytics (Optional)
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (e.g., `G-XXXXXXXXXX`)
3. Add to `app/layout.tsx`:
```typescript
<Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
```

##  Environment Variables

No sensitive environment variables needed! Cal.com is embedded via public links.

##  Monthly Costs

| Service | Cost | Notes |
|---------|------|-------|
| Domain | $10/year | One-time annual |
| Vercel Hosting | $0 | Free tier |
| Cal.com | $15/month | Booking platform |
| Stripe | 2.9% + $0.30 | Per transaction |
| Google Meet | $0 | Free with Gmail |

**Total: ~$15-21/month** ($180-252/year)

## Troubleshooting

### Booking Modal Won't Open
- Check that Cal.com username in `content.config.ts` matches your account
- Verify `calendarLink` in services matches Cal.com event slug
- Check browser console for errors (F12)

### Images Not Loading
- Verify file exists in `/public/images/`
- Check filename exactly matches config (case-sensitive)
- Clear browser cache (Ctrl+Shift+R)

### Content Changes Not Showing
- Make sure you saved `content.config.ts`
- Refresh browser (hard reload: Ctrl+Shift+R)
- Check for syntax errors in config file
- Restart dev server (`npm run dev`)

### Styling Looks Wrong
- Clear browser cache
- Check Tailwind classes are valid
- Run `npm run build` to check for errors

##  Additional Resources

- **Project Plan:** [`project_plan.md`](./project_plan.md) - Full development roadmap
- **Content Guide:** [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) - How to edit content
- **Design System:** [`DESIGN_TOKENS.md`](./DESIGN_TOKENS.md) - Visual design reference
- **Component Example:** [`EXAMPLE_COMPONENT.tsx`](./EXAMPLE_COMPONENT.tsx) - Code patterns

### External Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Cal.com: https://cal.com/docs
- Vercel: https://vercel.com/docs

##  Support

**For content updates:** See [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md)
**For technical issues:** Contact your developer
**For Cal.com help:** https://cal.com/docs or support@cal.com
**For Vercel help:** https://vercel.com/support

## License

This project is released under the MIT License. See the `LICENSE` file for details.

---

**Last Updated:** October 24, 2025
**Version:** 1.0.0
**Status:**  Active Development