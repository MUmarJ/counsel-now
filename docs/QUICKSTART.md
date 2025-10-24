# Quick Start Guide - 5 Minutes to Running

Get the Shaikh Counselor website running on your local machine in 5 minutes.

## ⚡ Prerequisites

You need these installed:
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** - [VS Code recommended](https://code.visualstudio.com/)

Check if installed:
```bash
node --version   # Should show v18.0.0 or higher
npm --version    # Should show 9.0.0 or higher
git --version    # Should show git version
```

---

## 🚀 Step 1: Create Project (2 minutes)

Open your terminal and run:

```bash
# Create Next.js project
npx create-next-app@latest shaikh-counselor \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"

# Navigate into project
cd shaikh-counselor
```

When prompted, answer:
- TypeScript? **Yes**
- ESLint? **Yes**
- Tailwind CSS? **Yes**
- `/src` directory? **No**
- App Router? **Yes**
- Import alias? **Yes** (`@/*`)

---

## 📦 Step 2: Install Dependencies (1 minute)

```bash
# Install shadcn/ui
npx shadcn-ui@latest init

# When prompted:
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes

# Install required components
npx shadcn-ui@latest add button card dialog badge

# Install additional packages
npm install @calcom/embed-react lucide-react framer-motion
```

---

## 📄 Step 3: Add Configuration Files (1 minute)

### Create `content.config.ts` in project root:

Copy the full `content.config.ts` file provided earlier into your project root.

### Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 🎨 Step 4: Create Basic Page (1 minute)

### Update `app/page.tsx`:

```typescript
'use client';

import { siteConfig } from '@/content.config';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Simple hero section to test */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-slate-900">
            {siteConfig.hero.headline}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {siteConfig.hero.headlineHighlight}
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {siteConfig.hero.subheadline}
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors">
            {siteConfig.hero.primaryCTA.text}
          </button>
        </div>
      </div>
    </main>
  );
}
```

### Update `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

---

## ▶️ Step 5: Run Development Server

```bash
npm run dev
```

Open browser: **http://localhost:3000**

You should see:
- ✅ Hero section with headline
- ✅ Gradient text coloring
- ✅ Emerald green button
- ✅ Content loaded from `content.config.ts`

---

## ✅ Verification Checklist

If you see this, you're good:
- [ ] Page loads without errors
- [ ] Headline shows "Find Peace Through Faith & Wisdom"
- [ ] Green gradient on "Faith & Wisdom"
- [ ] Button is emerald green
- [ ] No console errors (press F12 to check)

---

## 🎯 Next Steps

### Immediate (Today):
1. ✅ Read [`CONTENT_GUIDE.md`](./CONTENT_GUIDE.md) - Learn to edit content
2. ✅ Customize `content.config.ts` with real information
3. ✅ Add your logo to `/public/images/`

### This Week:
1. Build out full components (Hero, Services, About, etc.)
2. Set up Cal.com account
3. Add real images
4. Test booking flow

### Before Launch:
1. Deploy to Vercel
2. Connect custom domain
3. Test on mobile devices
4. Add privacy policy

---

## 🐛 Troubleshooting

### "Cannot find module 'content.config'"
- Make sure `content.config.ts` is in project root (same level as `package.json`)
- Restart dev server: `Ctrl+C` then `npm run dev`

### Tailwind styles not working
```bash
# Restart dev server
npm run dev
```

### Port 3000 already in use
```bash
# Kill existing process
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Regenerate types
rm -rf .next
npm run dev
```

---

## 📚 What You Have Now

```
shaikh-counselor/
├── app/
│   ├── layout.tsx        ✅ Created
│   ├── page.tsx          ✅ Created
│   └── globals.css       ✅ Auto-created
├── content.config.ts     ✅ You added this
├── tailwind.config.ts    ✅ Updated
├── package.json          ✅ Auto-created
└── node_modules/         ✅ Installed
```

---

## 🎓 Learning Resources

**Next.js Basics:**
- Official Tutorial: https://nextjs.org/learn
- Documentation: https://nextjs.org/docs

**Tailwind CSS:**
- Play CDN: https://play.tailwindcss.com/
- Documentation: https://tailwindcss.com/docs

**React Basics (if needed):**
- Official Tutorial: https://react.dev/learn

---

## 💡 Pro Tips

1. **Use VS Code Extensions:**
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux snippets
   - Prettier - Code formatter

2. **Browser DevTools:**
   - Press `F12` to open console
   - Check for errors (red messages)
   - Use "Toggle Device Toolbar" to test mobile

3. **Hot Reload:**
   - Dev server auto-refreshes on file save
   - If it doesn't, hard refresh: `Ctrl+Shift+R`

4. **Keep Terminal Open:**
   - Watch for errors in terminal
   - Don't close while developing

---

## 🆘 Need Help?

**Got stuck?**
1. Check terminal for error messages
2. Check browser console (F12)
3. Read the error message carefully
4. Google the specific error
5. Check Next.js documentation

**Common Issues:**
- Port 3000 in use → Use different port or kill process
- Module not found → Check file path and restart server
- Syntax error → Check for missing commas, brackets, quotes
- Tailwind not working → Restart dev server

---

**You're now ready to start building!** 🎉

Next: Follow [`project_plan.md`](./project_plan.md) for full implementation, or start customizing `content.config.ts` to make it yours.