# Design Tokens & System

This document defines the visual design system for the Shaikh Counselor website. All values are centralized for consistency and easy updates.

---

## 🎨 Color Palette

### Primary Colors (Emerald Green)
```css
--emerald-50:  #ecfdf5  /* Very light background tints */
--emerald-100: #d1fae5  /* Light backgrounds, subtle highlights */
--emerald-200: #a7f3d0  /* Hover states, light borders */
--emerald-300: #6ee7b7  /* Disabled states */
--emerald-400: #34d399  /* Bright accents */
--emerald-500: #10b981  /* Medium intensity */
--emerald-600: #059669  /* PRIMARY - Main brand color */
--emerald-700: #047857  /* Hover states, darker elements */
--emerald-800: #065f46  /* Dark text, strong contrast */
--emerald-900: #064e3b  /* Very dark, headings */
```

**Primary Use Cases:**
- Buttons, links, CTAs: `--emerald-600`
- Button hover: `--emerald-700`
- Headings: `--emerald-900`
- Backgrounds: `--emerald-50` to `--emerald-100`
- Borders: `--emerald-200` to `--emerald-300`

### Accent Colors (Gold/Amber)
```css
--amber-50:  #fffbeb  /* Light gold tints */
--amber-100: #fef3c7  /* Soft gold backgrounds */
--amber-200: #fde68a  /* Light gold accents */
--amber-300: #fcd34d  /* Medium gold */
--amber-400: #fbbf24  /* ACCENT - Main gold color */
--amber-500: #f59e0b  /* Rich gold */
--amber-600: #d97706  /* Dark gold */
--amber-700: #b45309  /* Deep gold */
```

**Accent Use Cases:**
- Highlights, badges: `--amber-400`
- Decorative elements: `--amber-200`
- Icons, stars: `--amber-400` to `--amber-500`
- Backgrounds (subtle): `--amber-50`

### Neutral Colors (Slate)
```css
--slate-50:  #f8fafc  /* Page backgrounds */
--slate-100: #f1f5f9  /* Card backgrounds */
--slate-200: #e2e8f0  /* Borders, dividers */
--slate-300: #cbd5e1  /* Disabled elements */
--slate-400: #94a3b8  /* Placeholder text */
--slate-500: #64748b  /* Secondary text */
--slate-600: #475569  /* Body text */
--slate-700: #334155  /* Dark text */
--slate-800: #1e293b  /* Headings */
--slate-900: #0f172a  /* Darkest text */
```

**Neutral Use Cases:**
- Body text: `--slate-600` to `--slate-700`
- Headings: `--slate-800` to `--slate-900`
- Backgrounds: `--slate-50` to `--slate-100`
- Borders: `--slate-200` to `--slate-300`
- Secondary text: `--slate-500` to `--slate-600`

### Semantic Colors
```css
/* Success */
--success: #10b981   /* Emerald-500 */
--success-bg: #d1fae5 /* Emerald-100 */

/* Warning */
--warning: #f59e0b   /* Amber-500 */
--warning-bg: #fef3c7 /* Amber-100 */

/* Error */
--error: #ef4444     /* Red-500 */
--error-bg: #fee2e2  /* Red-100 */

/* Info */
--info: #3b82f6      /* Blue-500 */
--info-bg: #dbeafe   /* Blue-100 */
```

---

## 📐 Spacing Scale

Based on 4px base unit (Tailwind default):

```css
--space-0:  0px      /* 0 */
--space-1:  4px      /* 0.25rem */
--space-2:  8px      /* 0.5rem */
--space-3:  12px     /* 0.75rem */
--space-4:  16px     /* 1rem */
--space-5:  20px     /* 1.25rem */
--space-6:  24px     /* 1.5rem */
--space-8:  32px     /* 2rem */
--space-10: 40px     /* 2.5rem */
--space-12: 48px     /* 3rem */
--space-16: 64px     /* 4rem */
--space-20: 80px     /* 5rem */
--space-24: 96px     /* 6rem */
```

**Common Usage:**
- Button padding: `--space-4` (vertical) × `--space-6` (horizontal)
- Card padding: `--space-6` to `--space-8`
- Section spacing: `--space-20` (between major sections)
- Component gaps: `--space-4` to `--space-6`
- Content max-width: `1280px` (max-w-6xl in Tailwind)

---

## 🔤 Typography

### Font Families
```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-serif: 'Playfair Display', Georgia, serif;
--font-arabic: 'Amiri', 'Traditional Arabic', serif; /* Optional for Arabic text */
```

**Usage:**
- Body text: `--font-sans`
- Headings: `--font-serif` or `--font-sans` (bold)
- Arabic elements: `--font-arabic`

### Font Sizes
```css
--text-xs:   12px  /* 0.75rem - Small captions */
--text-sm:   14px  /* 0.875rem - Small text, labels */
--text-base: 16px  /* 1rem - Body text */
--text-lg:   18px  /* 1.125rem - Lead paragraphs */
--text-xl:   20px  /* 1.25rem - Small headings */
--text-2xl:  24px  /* 1.5rem - Card titles */
--text-3xl:  30px  /* 1.875rem - Section headings */
--text-4xl:  36px  /* 2.25rem - Page headings */
--text-5xl:  48px  /* 3rem - Hero headlines */
--text-6xl:  60px  /* 3.75rem - Large hero text */
```

### Font Weights
```css
--font-normal:    400  /* Body text */
--font-medium:    500  /* Subtle emphasis */
--font-semibold:  600  /* Button text, strong emphasis */
--font-bold:      700  /* Headings */
--font-extrabold: 800  /* Display text */
```

### Line Heights
```css
--leading-tight:  1.25  /* Headings */
--leading-snug:   1.375 /* Short paragraphs */
--leading-normal: 1.5   /* Body text */
--leading-relaxed: 1.625 /* Comfortable reading */
--leading-loose:  1.75  /* Spacious text blocks */
```

**Typography Guidelines:**
- Headings: Use `--font-serif` with `--font-bold`
- Body: Use `--font-sans` with `--leading-relaxed`
- Buttons: Use `--font-medium` or `--font-semibold`
- Small text: Never go below `--text-sm` (14px) for readability

---

## 🎯 Component Specifications

### Buttons

#### Primary Button
```css
Background: emerald-600
Text: white
Padding: 16px 32px (space-4 space-8)
Border radius: 12px (rounded-xl)
Font size: 16px (text-base)
Font weight: 500 (font-medium)
Hover: emerald-700
Shadow: 0 10px 15px rgba(5, 150, 105, 0.1)
```

#### Secondary Button
```css
Background: transparent
Border: 2px solid emerald-600
Text: emerald-700
Padding: 14px 30px (accounting for border)
Border radius: 12px
Font size: 16px
Font weight: 500
Hover: emerald-50 background
```

#### Button States
```css
Default: emerald-600
Hover: emerald-700 + shadow-lg
Active: emerald-800
Disabled: slate-300 background, slate-500 text
Focus: emerald-600 + ring-2 ring-emerald-300
```

### Cards

#### Service Card
```css
Background: white to emerald-50 gradient
Border: 2px solid emerald-100
Border radius: 16px (rounded-2xl)
Padding: 32px (space-8)
Hover: emerald-300 border, shadow-xl
Icon size: 56px (w-14 h-14)
Icon background: emerald-600 to emerald-700 gradient
Icon border radius: 12px (rounded-xl)
```

#### Testimonial Card
```css
Background: emerald-50 to white gradient
Border: 1px solid emerald-100
Border radius: 16px
Padding: 32px (space-8)
Hover: shadow-lg
```

### Badges
```css
Background: emerald-50
Text: emerald-700
Padding: 6px 16px (space-1.5 space-4)
Border radius: 9999px (rounded-full)
Font size: 14px (text-sm)
Font weight: 500
```

### Inputs (if needed later)
```css
Border: 2px solid slate-200
Border radius: 8px (rounded-lg)
Padding: 12px 16px (space-3 space-4)
Font size: 16px
Focus: emerald-600 border, ring-2 ring-emerald-300
```

---

## 🌊 Shadows

```css
--shadow-sm:  0 1px 2px rgba(0, 0, 0, 0.05)
--shadow:     0 1px 3px rgba(0, 0, 0, 0.1)
--shadow-md:  0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg:  0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl:  0 20px 25px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15)

/* Colored shadows (for primary buttons) */
--shadow-emerald: 0 10px 15px rgba(5, 150, 105, 0.2)
--shadow-amber:   0 10px 15px rgba(245, 158, 11, 0.2)
```

---

## 📏 Border Radius

```css
--rounded-none: 0px
--rounded-sm:   2px
--rounded:      4px
--rounded-md:   6px
--rounded-lg:   8px     /* Inputs, small cards */
--rounded-xl:   12px    /* Buttons, icons */
--rounded-2xl:  16px    /* Cards, images */
--rounded-3xl:  24px    /* Large feature cards */
--rounded-full: 9999px  /* Circles, badges */
```

---

## 🎨 Gradients

### Background Gradients
```css
/* Hero background */
background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #f8fafc 100%);

/* Primary button */
background: linear-gradient(90deg, #059669 0%, #047857 100%);

/* Card backgrounds */
background: linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%);

/* Dark footer/contact */
background: linear-gradient(135deg, #0f172a 0%, #064e3b 100%);
```

### Text Gradients
```css
/* Headline highlight */
background: linear-gradient(90deg, #059669 0%, #0d9488 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 🖼️ Images & Media

### Image Specifications

**Logo:**
- Format: SVG (preferred) or PNG
- Size: 48×48px (w-12 h-12)
- Background: Emerald gradient or transparent
- Usage: Navigation bar

**Hero Image:**
- Aspect ratio: 4:5 (portrait)
- Recommended size: 800×1000px
- Format: JPG (optimized) or WebP
- Max file size: 500KB

**About Section Photo:**
- Aspect ratio: 1:1 (square) or 4:3
- Recommended size: 600×600px or 800×600px
- Format: JPG or WebP
- Max file size: 300KB

**Testimonial Photos (Optional):**
- Aspect ratio: 1:1 (square)
- Recommended size: 200×200px
- Format: JPG or WebP
- Max file size: 100KB

**OG Image (Social Media):**
- Size: 1200×630px
- Format: JPG or PNG
- Max file size: 1MB
- Include site name and tagline

### Islamic Geometric Pattern

**SVG Pattern Example:**
```svg
<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
  <pattern id="islamic-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
    <!-- Simple 8-pointed star pattern -->
    <path d="M30 15 L35 25 L45 30 L35 35 L30 45 L25 35 L15 30 L25 25 Z"
          fill="#064e3b"
          opacity="0.03"/>
  </pattern>
  <rect width="60" height="60" fill="url(#islamic-pattern)"/>
</svg>
```

**Usage:**
- Background overlay: Opacity 0.02-0.05
- Color: emerald-900 (#064e3b)
- Fixed position, full screen coverage

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--mobile:  0px      /* Default, no media query needed */
--sm:      640px    /* Small tablets */
--md:      768px    /* Tablets */
--lg:      1024px   /* Small laptops */
--xl:      1280px   /* Desktops */
--2xl:     1536px   /* Large screens */
```

**Tailwind Breakpoints:**
```typescript
screens: {
  'sm': '640px',   // @media (min-width: 640px)
  'md': '768px',   // @media (min-width: 768px)
  'lg': '1024px',  // @media (min-width: 1024px)
  'xl': '1280px',  // @media (min-width: 1280px)
  '2xl': '1536px', // @media (min-width: 1536px)
}
```

**Component Behavior:**
- **Navigation:** Hamburger menu on mobile (< 768px)
- **Hero Stats:** Stack vertically on mobile (< 640px)
- **Services Grid:** 1 column mobile, 2 columns tablet, 3 columns desktop
- **Testimonials:** 1 column mobile, 2 columns tablet, 3 columns desktop
- **Contact Info:** Stack vertically on mobile

---

## ♿ Accessibility

### Color Contrast Ratios

**WCAG AA Compliant (Minimum 4.5:1 for normal text):**
- ✅ emerald-900 on white: 11.6:1
- ✅ emerald-700 on white: 6.9:1
- ✅ slate-700 on white: 9.2:1
- ✅ white on emerald-600: 4.7:1
- ✅ white on emerald-700: 6.9:1

**WCAG AAA Compliant (Minimum 7:1 for normal text):**
- ✅ emerald-900 on white: 11.6:1
- ✅ slate-800 on white: 13.4:1
- ✅ white on emerald-700: 6.9:1

**Avoid:**
- ❌ emerald-400 on white: 2.3:1 (too low)
- ❌ slate-400 on white: 3.1:1 (too low)

### Focus States
```css
/* Keyboard focus indicator */
outline: 2px solid emerald-600;
outline-offset: 2px;
box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.3); /* ring-2 ring-emerald-300 */
```

### Text Sizing
- Minimum body text: 16px (never smaller)
- Minimum interactive elements: 44×44px (touch targets)
- Line length: Maximum 75 characters per line
- Line height: Minimum 1.5 for body text

---

## 🎭 Animation & Motion

### Transition Durations
```css
--duration-fast:   150ms  /* Hover effects */
--duration-normal: 300ms  /* Standard transitions */
--duration-slow:   500ms  /* Large animations */
```

### Easing Functions
```css
--ease-in:     cubic-bezier(0.4, 0, 1, 1)
--ease-out:    cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Common Animations

**Fade In:**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Scale on Hover:**
```css
transition: transform 300ms ease-out;
hover { transform: scale(1.05); }
```

**Button Hover:**
```css
transition: all 300ms ease-in-out;
hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(5, 150, 105, 0.2);
}
```

---

## 📐 Layout Grid

### Container Widths
```css
--container-sm:  640px   /* max-w-sm */
--container-md:  768px   /* max-w-md */
--container-lg:  1024px  /* max-w-lg */
--container-xl:  1280px  /* max-w-xl */
--container-2xl: 1536px  /* max-w-2xl */

/* Recommended for content */
--container-content: 1280px  /* max-w-6xl - Main content width */
--container-reading: 768px   /* max-w-3xl - Optimal reading width */
```

### Grid Layouts
```css
/* 3-column grid (services, testimonials) */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 32px; /* space-8 */

/* 2-column grid (about section) */
grid-template-columns: repeat(2, 1fr);
gap: 48px; /* space-12 */
```

---

## 🎨 Islamic Design Elements

### Geometric Patterns
- **Style:** Simple 8-pointed stars, interlocking circles
- **Opacity:** 0.02 to 0.05 (very subtle)
- **Color:** emerald-900
- **Placement:** Fixed background, full-page overlay

### Calligraphy Elements
- **Logo:** Arabic letter "ش" (Shaikh)
- **Font:** Amiri or Traditional Arabic (if using actual Arabic text)
- **Color:** White on emerald gradient, or emerald-900 on light backgrounds
- **Size:** 48px for logo (text-5xl)

### Gold Accents
- **Usage:** Stars (ratings), badges, decorative elements
- **Color:** amber-400 to amber-500
- **Subtle:** Use sparingly for elegance
- **Pairs with:** Emerald green as primary color

### Rounded Corners
- **Philosophy:** Soft, welcoming, approachable
- **Minimum:** 8px (rounded-lg)
- **Standard:** 12-16px (rounded-xl to rounded-2xl)
- **Avoid:** Sharp corners except for borders/dividers

---

## 📦 Component States

### Interactive States
```css
/* Default state */
opacity: 1;
transform: none;

/* Hover state */
hover:opacity-90
hover:scale-105
hover:shadow-lg

/* Active/Pressed state */
active:scale-95
active:brightness-90

/* Focus state (keyboard) */
focus:outline-2
focus:outline-emerald-600
focus:ring-2
focus:ring-emerald-300

/* Disabled state */
disabled:opacity-50
disabled:cursor-not-allowed
disabled:bg-slate-300
```

---

## 🎯 Brand Voice in Design

The design should communicate:
- **Trust:** Professional, consistent, polished
- **Warmth:** Soft colors, rounded corners, welcoming imagery
- **Spirituality:** Islamic patterns, Quranic quotes, emerald/gold palette
- **Competence:** Clean typography, clear hierarchy, organized layout
- **Approachability:** Open space, clear CTAs, easy navigation

---

## 📝 Design Checklist

Before launching, verify:
- [ ] All colors meet WCAG AA contrast standards
- [ ] Touch targets are at least 44×44px
- [ ] Fonts are readable at all sizes (minimum 16px body)
- [ ] Images are optimized (< 500KB each)
- [ ] Animations are smooth (60fps)
- [ ] Gradients are subtle and purposeful
- [ ] Islamic patterns are low-opacity (< 0.05)
- [ ] Buttons have clear hover/focus states
- [ ] Mobile breakpoints work correctly
- [ ] Page loads in < 3 seconds
- [ ] No horizontal scroll on mobile
- [ ] Forms are accessible (labels, error states)

---

## 🔧 Tailwind Config Reference

Implement these tokens in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        emerald: { /* emerald palette */ },
        amber: { /* amber palette */ },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: { /* spacing scale */ },
      borderRadius: { /* radius values */ },
      boxShadow: { /* shadow definitions */ },
    }
  }
}
```

---

This design system ensures consistency, accessibility, and cultural appropriateness throughout the Shaikh Counselor website.