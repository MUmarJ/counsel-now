# Content Guide - How to Edit Your Website

**For Non-Technical Users:** This guide shows you how to update all website content without touching any React code.

---

## 📝 Quick Start

**All website content is in ONE file:** `content.config.ts`

This includes:
- ✅ All text (headlines, descriptions, testimonials)
- ✅ Contact information (phone, email, address)
- ✅ Service details (prices, durations, descriptions)
- ✅ Images and logos
- ✅ Colors and branding

**You only need to edit `content.config.ts` to update the entire website.**

---

## 🎯 Common Editing Tasks

### Change Phone Number or Email

**File:** `content.config.ts`
**Location:** Lines 10-14

```typescript
metadata: {
  email: "contact@shaikhcounseling.com",  // ← Change email here
  phone: "(555) 123-4567",                 // ← Change phone here
  location: "Princeton, NJ",               // ← Change location here
}
```

### Update Hero Section Text

**File:** `content.config.ts`
**Location:** Lines 47-50

```typescript
hero: {
  headline: "Find Peace Through",          // ← Change main headline
  headlineHighlight: "Faith & Wisdom",     // ← This part is colored
  subheadline: "Your intro text here...",  // ← Change description
}
```

### Edit Services

**File:** `content.config.ts`
**Location:** Lines 72-107

Each service has:
- `title` - Service name
- `description` - Short description (shows on card)
- `price` - Session cost
- `duration` - Session length
- `detailedDescription` - Full details (shows when expanded)

```typescript
{
  title: "Marriage & Family Counseling",      // ← Service name
  description: "Short description here...",   // ← Preview text
  duration: "60 min",                         // ← Session length
  price: "$120",                              // ← Cost
  detailedDescription: "Full details...",     // ← Expanded view
}
```

**To add a new service:** Copy an entire service block (lines 73-82) and paste it below, then edit the values.

### Update Testimonials

**File:** `content.config.ts`
**Location:** Lines 160-195

```typescript
{
  name: "Amina R.",                          // ← Client name
  rating: 5,                                 // ← Stars (1-5)
  text: "Quote from client...",              // ← Testimonial text
}
```

**To add more testimonials:** Copy a testimonial block and paste it in the array.

### Change About Section

**File:** `content.config.ts`
**Location:** Lines 113-157

```typescript
about: {
  greeting: "As-salamu alaykum.",           // ← Opening greeting
  introParagraph: "I'm Shaikh...",          // ← First paragraph
  bioParagraph: "With a Master's...",       // ← Second paragraph
}
```

Update credentials:
```typescript
credentials: [
  { text: "M.A. Islamic Studies..." },      // ← Edit or add credentials
  { text: "Licensed Professional..." },
]
```

---

## 🖼️ Changing Images

### Replace Logo

1. Add your logo file to the `/public` folder
2. Name it something like `logo.png` or `logo.svg`
3. Update `content.config.ts`:

```typescript
branding: {
  logo: {
    type: "image",                    // Change from "text" to "image"
    imagePath: "/logo.png",           // ← Your logo filename
    alt: "Shaikh Counseling Logo",
  }
}
```

### Replace Hero Image

1. Add your photo to `/public/images/` folder
2. Update `content.config.ts`:

```typescript
hero: {
  image: {
    type: "photo",                    // Change from "placeholder"
    path: "/images/shaikh-photo.jpg", // ← Your photo filename
    alt: "Shaikh Abdullah",
  }
}
```

### Add Testimonial Photos (Optional)

1. Add photos to `/public/images/testimonials/`
2. Update testimonial:

```typescript
{
  name: "Amina R.",
  text: "Great experience...",
  photo: "/images/testimonials/amina.jpg",  // ← Add this line
}
```

---

## 🎨 Changing Colors

**File:** `content.config.ts`
**Location:** Lines 22-27

```typescript
colors: {
  primary: "#059669",      // ← Main green color (hex code)
  primaryDark: "#047857",  // ← Darker shade for hover effects
  accent: "#F59E0B",       // ← Gold/amber accent color
}
```

**How to pick colors:**
1. Use a color picker tool: https://htmlcolorcodes.com/color-picker/
2. Copy the hex code (e.g., `#059669`)
3. Paste it in place of the existing color

**Recommended color combinations:**
- Emerald + Gold (current)
- Navy Blue + Gold (#1e3a8a + #f59e0b)
- Teal + Coral (#0d9488 + #fb923c)
- Forest Green + Amber (#065f46 + #f59e0b)

---

## 📅 Cal.com Booking Setup

**File:** `content.config.ts`
**Location:** Lines 244-254

```typescript
booking: {
  calUsername: "shaikh-counselor",   // ← Your Cal.com username
  defaultEventType: "consultation",  // ← Default booking type
}
```

**Steps:**
1. Create account at https://cal.com
2. Set up your event types (services)
3. Copy your username from Cal.com
4. Update `calUsername` in config file

**Match service links to Cal.com:**
```typescript
services: {
  items: [
    {
      calendarLink: "marriage-counseling",  // ← Must match Cal.com event slug
    }
  ]
}
```

---

## 📞 Contact Information

**File:** `content.config.ts`
**Location:** Lines 200-230

```typescript
contact: {
  methods: [
    {
      label: "Phone",
      value: "(555) 123-4567",           // ← Display number
      link: "tel:+15551234567",          // ← Clickable link (remove spaces/dashes)
    },
    {
      label: "Email",
      value: "contact@example.com",      // ← Your email
      link: "mailto:contact@example.com",
    }
  ]
}
```

**Office Hours:**
```typescript
officeHours: {
  schedule: [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM EST" },  // ← Edit schedule
    { days: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { days: "Sunday", hours: "Closed" },
  ]
}
```

---

## 🔍 SEO (Search Engine Optimization)

**File:** `content.config.ts`
**Location:** Lines 269-284

```typescript
seo: {
  title: "Your Title Here",              // ← Shows in Google search
  description: "Your description...",    // ← Shows below title in search
  keywords: [
    "Islamic counseling",                // ← Add relevant keywords
    "Muslim counselor",
    "your city counselor",
  ]
}
```

**Tips for good SEO:**
- Include your location in title
- Use specific keywords people search for
- Keep description under 160 characters
- Include your main service in title

---

## 📄 Legal Pages

**File:** `content.config.ts`
**Location:** Lines 289-310

Update dates and summaries:
```typescript
legal: {
  privacyPolicy: {
    lastUpdated: "October 24, 2024",   // ← Update this date
    summary: "Your privacy summary...",
  },
  cancellationPolicy: {
    details: [
      "24+ hours notice: Full refund",  // ← Edit your policy
      "12-24 hours: 50% charge",
    ]
  }
}
```

---

## ✅ Before Publishing Checklist

After editing `content.config.ts`, check:

- [ ] All phone numbers and emails are correct
- [ ] All service prices are accurate
- [ ] Cal.com username matches your account
- [ ] Office hours are current
- [ ] All testimonials are approved by clients
- [ ] Images are uploaded to `/public/images/`
- [ ] Logo displays correctly
- [ ] Colors look good (test on website preview)
- [ ] No typos in text (use spell check)
- [ ] Links work (especially Cal.com booking)

---

## 🚨 Important Notes

### DO Edit:
✅ `content.config.ts` - All content, text, images, colors
✅ Files in `/public/images/` - Add your photos and logos
✅ Files in `/content/` - Privacy policy, terms (markdown files)

### DON'T Edit:
❌ Files in `/app/components/` - React code
❌ Files in `/app/` - Page structure
❌ `tailwind.config.ts` - Unless changing advanced styling
❌ `package.json` - Dependencies

### If You Break Something:
1. Look for syntax errors (missing commas, quotes)
2. Check the line numbers in error messages
3. Compare your changes to the original file
4. Ask your developer for help

---

## 🎓 Quick Syntax Tips

### Strings (Text)
```typescript
title: "Your text here"           // ✅ Correct - use quotes
title: 'Your text here'           // ✅ Also correct - single quotes work too
title: Your text here             // ❌ Wrong - needs quotes
```

### Numbers
```typescript
rating: 5                         // ✅ Correct - no quotes for numbers
price: "$120"                     // ✅ Correct - use quotes for prices
duration: "60 min"                // ✅ Correct - quotes for text with numbers
```

### Lists (Arrays)
```typescript
items: [
  { name: "Item 1" },             // Each item separated by comma
  { name: "Item 2" },             // Comma here
  { name: "Item 3" }              // No comma on last item (optional)
]
```

### Comments
```typescript
// This is a comment - won't affect the website
phone: "(555) 123-4567"           // Comments can be at end of line
```

---

## 📧 Need Help?

**For content questions:**
- Review this guide
- Check examples in `content.config.ts`
- Look at similar sections for patterns

**For technical issues:**
- Contact your developer
- Share the exact error message
- Mention which file and line you edited

**For Cal.com setup:**
- Visit https://cal.com/docs
- Check your Cal.com dashboard
- Verify event type names match config

---

## 🔄 Making Updates

### Development (Testing)
1. Edit `content.config.ts`
2. Save the file
3. Refresh your browser at `localhost:3000`
4. Check that changes look correct

### Production (Live Site)
1. Edit `content.config.ts`
2. Save the file
3. Commit changes: `git add . && git commit -m "Update content"`
4. Push to GitHub: `git push`
5. Vercel will automatically deploy (2-3 minutes)
6. Check live site after deployment

---

## 💡 Pro Tips

1. **Test on mobile** - View on your phone after changes
2. **Keep backups** - Save a copy before major edits
3. **Change one thing at a time** - Easier to debug
4. **Use Find & Replace** - Change text across multiple places
5. **Check for typos** - Content is visible to clients
6. **Update dates** - Keep "last updated" dates current
7. **Optimize images** - Use compressed images (< 500KB each)
8. **Test booking flow** - Book a test appointment monthly

---

## 📚 Additional Resources

**Markdown Guide** (for legal pages):
https://www.markdownguide.org/basic-syntax/

**Color Picker:**
https://htmlcolorcodes.com/color-picker/

**Image Optimization:**
https://tinypng.com/

**Cal.com Documentation:**
https://cal.com/docs

---

Remember: **When in doubt, don't edit React components.** Everything you need to change is in `content.config.ts`!