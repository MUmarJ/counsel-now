# Deployment Checklist - Pre-Launch Guide

Complete this checklist before launching the Shaikh Counselor website to production.

---

## 📋 Phase 1: Content Review

### Essential Content
- [ ] All text in `content.config.ts` is finalized
- [ ] Phone number is correct and formatted consistently
- [ ] Email address is correct and monitored
- [ ] Office location/timezone is accurate
- [ ] Office hours are current
- [ ] All service prices are correct
- [ ] Service descriptions are approved
- [ ] About section bio is reviewed
- [ ] Credentials are accurate and up-to-date
- [ ] No placeholder text remains (search for "Lorem" or "TODO")

### Testimonials
- [ ] All testimonials are real and approved by clients
- [ ] Client names are properly anonymized (First name + Last initial)
- [ ] Star ratings are accurate
- [ ] No confidential information is disclosed

### Legal Content
- [ ] Privacy policy is complete
- [ ] Terms of service is complete
- [ ] Cancellation policy is clearly stated
- [ ] HIPAA compliance language (if applicable)
- [ ] "Last Updated" dates are current

---

## 🖼️ Phase 2: Images & Media

### Required Images
- [ ] Logo added to `/public/images/logo.svg` or `.png`
- [ ] Logo displays correctly at all sizes
- [ ] Hero image added (if using real photo)
- [ ] About section photo added
- [ ] All images are optimized (< 500KB each)
- [ ] Images have appropriate alt text
- [ ] OG image for social media (1200×630px)
- [ ] Favicon created and added

### Image Optimization
```bash
# Check image sizes
ls -lh public/images/

# If images are too large, use:
# https://tinypng.com/ or https://squoosh.app/
```

**Target file sizes:**
- Logo: < 50KB
- Hero image: < 500KB
- About photo: < 300KB
- OG image: < 1MB

---

## 🔧 Phase 3: Technical Setup

### Cal.com Configuration
- [ ] Cal.com account created
- [ ] Cal.com username set correctly in `content.config.ts`
- [ ] All event types created and match `calendarLink` in config
- [ ] Event durations are correct
- [ ] Event prices are correct
- [ ] Google Calendar connected
- [ ] Google Meet enabled for all events
- [ ] Stripe account connected
- [ ] Stripe in LIVE mode (not test mode)
- [ ] Test booking completed successfully
- [ ] Confirmation email received
- [ ] Google Meet link generated correctly

### Email Configuration
- [ ] Booking confirmation emails customized
- [ ] Reminder emails set up (24h, 1h before)
- [ ] Email signature includes contact info
- [ ] Cancellation emails configured
- [ ] Test emails sent and received

### Domain & Hosting
- [ ] Domain purchased (e.g., shaikhcounseling.com)
- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Custom domain connected in Vercel
- [ ] DNS records updated
- [ ] SSL certificate active (https://)
- [ ] WWW redirect configured (if desired)

---

## 🧪 Phase 4: Testing

### Functional Testing
- [ ] All navigation links work
- [ ] Smooth scroll to sections works
- [ ] Booking modal opens correctly
- [ ] Cal.com embed loads in modal
- [ ] Can complete full booking flow
- [ ] Payment processes successfully (use test mode first!)
- [ ] Confirmation email arrives
- [ ] Google Meet link is in email
- [ ] Calendar event created
- [ ] Phone number links work (mobile)
- [ ] Email links work
- [ ] All external links open in new tabs

### Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (Mac/iOS)
- [ ] Edge (latest)

### Device Testing
Test on:
- [ ] Desktop (1920×1080)
- [ ] Laptop (1366×768)
- [ ] Tablet (iPad - 768×1024)
- [ ] Mobile (iPhone - 375×667)
- [ ] Mobile (Android - 360×640)

### Mobile Specific
- [ ] Navigation menu works (hamburger)
- [ ] All text is readable (min 16px)
- [ ] Buttons are tappable (min 44×44px)
- [ ] Forms work correctly
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Booking modal is mobile-friendly

---

## ⚡ Phase 5: Performance

### Speed Testing
Run tests at:
- [ ] https://pagespeed.web.dev/
- [ ] https://gtmetrix.com/

**Target scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Optimization Checklist
- [ ] All images use Next.js Image component
- [ ] Images are WebP or optimized JPG
- [ ] Fonts are preloaded
- [ ] No console errors
- [ ] No console warnings
- [ ] Bundle size < 200KB (check with `npm run build`)
- [ ] Page loads in < 3 seconds on 4G

---

## ♿ Phase 6: Accessibility

### WCAG 2.1 AA Compliance
- [ ] All images have alt text
- [ ] Color contrast ratios meet standards (4.5:1 minimum)
- [ ] Can navigate entire site with keyboard only
- [ ] Focus indicators are visible
- [ ] Form inputs have labels
- [ ] Buttons have descriptive text
- [ ] Headings follow hierarchical order (H1 → H2 → H3)
- [ ] No flashing/strobing content

### Screen Reader Testing
- [ ] Test with VoiceOver (Mac) or NVDA (Windows)
- [ ] All content is readable
- [ ] Navigation makes sense
- [ ] Interactive elements are announced

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus order makes sense
- [ ] Can open/close modal with keyboard
- [ ] Can submit forms with Enter key
- [ ] Escape key closes modal

---

## 🔍 Phase 7: SEO

### On-Page SEO
- [ ] Page title is descriptive and includes keywords
- [ ] Meta description is compelling (< 160 characters)
- [ ] H1 tag is unique and includes primary keyword
- [ ] URL is clean and descriptive
- [ ] Internal linking structure makes sense
- [ ] Images have descriptive filenames
- [ ] Alt text includes relevant keywords (naturally)

### Technical SEO
- [ ] Sitemap.xml generated (Next.js does this)
- [ ] Robots.txt allows indexing
- [ ] Canonical URLs set correctly
- [ ] Schema.org markup added (LocalBusiness, Service)
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card meta tags

### Check with:
```bash
# Lighthouse audit
npx lighthouse https://your-site.com --view

# Or use Chrome DevTools:
# F12 → Lighthouse tab → Generate report
```

---

## 🔒 Phase 8: Security

### Basic Security
- [ ] HTTPS enabled (SSL certificate)
- [ ] No sensitive data in client-side code
- [ ] No API keys exposed
- [ ] CORS configured correctly
- [ ] Content Security Policy headers set
- [ ] No mixed content warnings (http on https page)

### Privacy Compliance
- [ ] Privacy policy clearly visible
- [ ] Cookie notice (if using cookies/analytics)
- [ ] Data collection disclosed
- [ ] Contact information for privacy inquiries
- [ ] GDPR compliance (if serving EU users)
- [ ] HIPAA compliance statement (healthcare)

---

## 📊 Phase 9: Analytics

### Setup Tracking
- [ ] Vercel Analytics enabled
- [ ] Google Analytics 4 set up (optional)
- [ ] Goal tracking configured (bookings, contact)
- [ ] Conversion tracking set up
- [ ] Error tracking configured (Sentry, optional)

### Events to Track
- [ ] Page views
- [ ] Booking button clicks
- [ ] Completed bookings
- [ ] Phone number clicks
- [ ] Email clicks
- [ ] Service card interactions

---

## 📱 Phase 10: Business Setup

### Communication Channels
- [ ] Professional email set up (not Gmail)
- [ ] Phone system ready to receive calls
- [ ] Voicemail message recorded
- [ ] Email auto-responder configured
- [ ] Booking notification emails forwarded to phone

### Cal.com Settings
- [ ] Availability calendar up-to-date
- [ ] Buffer times between appointments
- [ ] Maximum bookings per day limit set
- [ ] Minimum notice period configured (e.g., 24 hours)
- [ ] Time zone settings correct
- [ ] Holiday/vacation blocks added

### Payment Processing
- [ ] Stripe account verified
- [ ] Bank account connected for payouts
- [ ] Tax information updated in Stripe
- [ ] Payment receipt emails configured
- [ ] Refund policy clearly stated
- [ ] Payment dispute process documented

---

## 🚀 Phase 11: Pre-Launch Final Checks

### 24 Hours Before Launch
- [ ] Full site backup created
- [ ] All team members notified of launch
- [ ] Support email/phone ready to handle inquiries
- [ ] Social media accounts ready (if applicable)
- [ ] Launch announcement prepared
- [ ] Test booking made and verified

### Launch Day Morning
- [ ] Verify site is loading correctly
- [ ] Test booking flow one more time
- [ ] Check email notifications are working
- [ ] Monitor Vercel deployment status
- [ ] Check DNS propagation (https://dnschecker.org/)
- [ ] Verify SSL certificate is active
- [ ] Test on mobile device

### Content Final Review
```bash
# Search for common placeholder text
grep -r "Lorem" app/
grep -r "TODO" app/
grep -r "placeholder" content.config.ts
grep -r "example.com" content.config.ts
grep -r "555-" content.config.ts
```

### Production Checklist
- [ ] `content.config.ts` has production data (no test data)
- [ ] Cal.com is in live mode (not sandbox)
- [ ] Stripe is in live mode (not test mode)
- [ ] Google Analytics tracking ID is production (not test)
- [ ] Email addresses are production (not test)
- [ ] Phone numbers are real
- [ ] No debug code or console.logs in production

---

## 📞 Phase 12: Communication Prep

### Client Communication
Prepare responses for:
- [ ] "How do I book an appointment?"
- [ ] "What are your rates?"
- [ ] "Do you accept insurance?"
- [ ] "What happens in first session?"
- [ ] "How do I cancel/reschedule?"
- [ ] "Is this HIPAA compliant?"
- [ ] "Can we meet in person or only video?"

### Technical Support
Document:
- [ ] How to update content (refer to CONTENT_GUIDE.md)
- [ ] How to add new service
- [ ] How to update prices
- [ ] How to pause bookings (Cal.com settings)
- [ ] Emergency contact for technical issues

---

## 🎯 Phase 13: Launch Execution

### Go-Live Process
```bash
# 1. Final build check
npm run build

# 2. Check for errors
npm run lint

# 3. Deploy to Vercel
vercel --prod

# 4. Wait for deployment (2-3 minutes)

# 5. Verify deployment URL
curl -I https://your-domain.com
```

### Post-Launch Immediate Checks (First 30 minutes)
- [ ] Homepage loads without errors
- [ ] All sections visible and formatted correctly
- [ ] Booking modal opens
- [ ] Complete a test booking
- [ ] Verify confirmation email arrives
- [ ] Check Google Meet link works
- [ ] Test on mobile device
- [ ] Verify payment went through
- [ ] Check all links work

### First 24 Hours Monitoring
- [ ] Monitor Vercel analytics for traffic
- [ ] Watch for error alerts
- [ ] Check booking rate
- [ ] Monitor email inbox for issues
- [ ] Test speed periodically
- [ ] Check mobile performance
- [ ] Verify no broken links reported

---

## 📈 Phase 14: Post-Launch (Week 1)

### Daily Checks
- [ ] Review booking confirmations
- [ ] Check for client questions/issues
- [ ] Monitor website uptime
- [ ] Review analytics data
- [ ] Check for broken links
- [ ] Monitor page load speed
- [ ] Verify Cal.com sync working

### Metrics to Track
- Total visitors
- Booking conversion rate (visitors → bookings)
- Most popular services
- Average time on site
- Mobile vs desktop traffic
- Top referral sources
- Bounce rate

### Common Post-Launch Issues
**Issue:** Bookings not showing in calendar
- **Fix:** Check Cal.com → Google Calendar integration

**Issue:** Payment failing
- **Fix:** Verify Stripe is in live mode, check API keys

**Issue:** Emails not arriving
- **Fix:** Check spam folder, verify email settings in Cal.com

**Issue:** Site loading slowly
- **Fix:** Optimize images, check Vercel analytics

**Issue:** Mobile layout broken
- **Fix:** Test responsive breakpoints, check Tailwind classes

---

## 🔄 Phase 15: Ongoing Maintenance

### Weekly Tasks
- [ ] Review bookings for the week
- [ ] Update availability in Cal.com
- [ ] Check for new testimonials to add
- [ ] Review analytics data
- [ ] Backup content.config.ts

### Monthly Tasks
- [ ] Review and update content as needed
- [ ] Check for broken links
- [ ] Update service prices if needed
- [ ] Review privacy policy
- [ ] Audit SEO performance
- [ ] Check security updates
- [ ] Review payment processor fees
- [ ] Update credentials if needed

### Quarterly Tasks
- [ ] Full site audit
- [ ] Update photos/images
- [ ] Refresh testimonials
- [ ] Review cancellation policy
- [ ] Update office hours
- [ ] Renew domain (if annual)
- [ ] Review hosting costs
- [ ] Security audit

---

## 🆘 Emergency Procedures

### Site Down Emergency
1. Check Vercel status: https://www.vercel-status.com/
2. Check domain DNS: https://dnschecker.org/
3. Verify deployment in Vercel dashboard
4. Check for error logs in Vercel
5. Rollback to previous deployment if needed

### Booking System Down
1. Check Cal.com status
2. Verify Cal.com integration
3. Test with different browser
4. Provide alternative booking method (phone/email)
5. Post notice on website if extended outage

### Payment Issues
1. Check Stripe dashboard for errors
2. Verify Stripe API connection
3. Test payment in test mode
4. Contact Stripe support if needed
5. Offer alternative payment temporarily

### Contact Information
Keep this list handy:
- **Vercel Support:** https://vercel.com/support
- **Cal.com Support:** support@cal.com
- **Stripe Support:** https://support.stripe.com/
- **Domain Registrar:** [Your registrar support]
- **Developer Contact:** [Your developer email/phone]

---

## ✅ Final Launch Sign-Off

### Launch Approval Checklist
Before officially announcing the launch:

**Shaikh (Client) Approval:**
- [ ] All content reviewed and approved
- [ ] Photos approved
- [ ] Services and pricing approved
- [ ] About section approved
- [ ] Testimonials approved
- [ ] Test booking completed successfully
- [ ] Overall design approved

**Technical Approval:**
- [ ] All functionality working
- [ ] No critical bugs
- [ ] Performance benchmarks met
- [ ] Security checks passed
- [ ] Accessibility standards met
- [ ] Mobile responsive
- [ ] All integrations working

**Business Approval:**
- [ ] Payment processing working
- [ ] Calendar sync working
- [ ] Email notifications working
- [ ] Legal pages complete
- [ ] Privacy compliance verified

### Launch Announcement

Once all checks pass:

1. **Update status:**
   ```typescript
   // In content.config.ts (optional status field)
   status: "live" // Change from "development"
   ```

2. **Announce via:**
   - [ ] Email to existing clients
   - [ ] Social media posts
   - [ ] Community announcements
   - [ ] Professional networks

3. **Share launch URL:**
   ```
   🎉 New Website Live!
   Visit: https://shaikhcounseling.com
   Book: [Direct Cal.com link]
   ```

---

## 📊 Success Metrics

Track these KPIs post-launch:

**Week 1 Targets:**
- [ ] 50+ unique visitors
- [ ] 5+ booking inquiries
- [ ] 2+ completed bookings
- [ ] < 3 second load time
- [ ] < 5% bounce rate

**Month 1 Targets:**
- [ ] 200+ unique visitors
- [ ] 20+ bookings
- [ ] 10+ testimonials requested
- [ ] 90+ performance score
- [ ] 5+ organic search visits

**Quarter 1 Targets:**
- [ ] 1,000+ unique visitors
- [ ] 100+ bookings
- [ ] Page 1 Google ranking for "[city] Islamic counselor"
- [ ] 20+ returning clients
- [ ] 4.5+ star average rating

---

## 🎓 Resources for Ongoing Success

### Content Updates
- **When to update:** Monthly or as needed
- **How to update:** Edit `content.config.ts` and deploy
- **Guide:** See `CONTENT_GUIDE.md`

### SEO Improvement
- **Google Search Console:** https://search.google.com/search-console
- **Keyword Research:** Google Keyword Planner
- **Local SEO:** Google Business Profile

### Marketing
- **Email Marketing:** Mailchimp, ConvertKit
- **Social Media:** Instagram, Facebook, LinkedIn
- **Content Marketing:** Blog posts, newsletters
- **Local Directories:** Yelp, Healthgrades, Psychology Today

---

## 📝 Notes

**Launch Date:** _______________
**Deployed By:** _______________
**Domain:** _______________
**Cal.com Username:** _______________
**Initial Tests Completed By:** _______________

**Issues Encountered:**
-
-
-

**Resolutions:**
-
-
-

**Post-Launch Improvements Needed:**
-
-
-

---

## 🎉 Congratulations!

If you've completed this checklist, you're ready to launch!

**Remember:**
- Monitor closely for first 24-48 hours
- Be ready to respond quickly to issues
- Collect user feedback
- Iterate and improve continuously

**The website is a living project - not "set it and forget it."**

Good luck with your launch! May Allah bless your counseling practice. 🤲

---

**Checklist Version:** 1.0
**Last Updated:** October 24, 2024
**Next Review:** [30 days after launch]