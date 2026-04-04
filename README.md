<div align="center">
  <img src="./readme_images/logo.png" alt="BuyCarCheck" width="80" style="border-radius: 50%;" />
  <h1>BuyCarCheck</h1>
  <p><strong>UK Vehicle History Checker</strong> — live at <a href="https://buycarcheck.com">buycarcheck.com</a></p>
</div>

---

> ## ⚠️ Public Showcase — Proprietary Source Code is Private
>
> This repository is a **intentionally limited public showcase** of [buycarcheck.com](https://buycarcheck.com).
>
> The full production codebase is **privately held** to protect:
> - Government API credentials (DVLA, DVSA)
> - Payment processing logic (Stripe)
> - Proprietary business logic and admin infrastructure
> - Internal analytics and operational tooling
>
> What you'll find here: the README, TypeScript type definitions, a Zod validation schema, a representative API route, and a test suite — enough to demonstrate architecture, code style, and engineering approach.
>
> **To view the live product, visit [buycarcheck.com](https://buycarcheck.com).**

---

![BuyCarCheck Screenshot](readme_images/screenshot.png)

![BuyCarCheck Screenshot](readme_images/screenshot2.png)

## What is BuyCarCheck?

BuyCarCheck is a full-stack SaaS product built for the UK used car market. A buyer enters any UK number plate and receives an instant vehicle history report — pulled in real time from official government data sources.

The service helps buyers avoid purchasing written-off, uninsured, or incorrectly advertised vehicles before handing over money.

## Features

- **Free Basic Check** — Make, model, colour, engine size, fuel type, CO2 emissions, tax status, MOT status, V5C date
- **Paid Full Check (£2.99)** — Write-off category (Cat S / Cat N), outstanding finance, mileage history, plate change history
- MOT history with pass/fail records, advisories, failure reasons, and mileage progression
- VED (road tax) band calculator — CO2-based, with separate pre/post-2017 logic
- Fuel efficiency estimator (MPG, L/100km, annual cost)

## User Engagement

- 7 SEO-optimised blog articles targeting UK car buying search terms
- Structured data (JSON-LD) for Google rich results
- Dynamic sitemap + robots.txt

![BuyCarCheck Screenshot](readme_images/screenshot4.png)

## Detailed Vehicle Statistics

- CO2 band lookup across all 13 UK VED bands (A–M)
- Estimated annual and 6-month road tax cost
- Pre/post-2017 registration split (different tax rules apply by law)

![BuyCarCheck Screenshot](readme_images/screenshot3.png)

## Pricing & Conversion

- Tiered free/paid model
- Customer reviews section
- Animated stats counters

![BuyCarCheck Screenshot](readme_images/screenshot5.png)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + shadcn/ui |
| State | Zustand |
| Data Fetching | TanStack React Query |
| Validation | Zod |
| Database | Supabase (PostgreSQL) |
| Payments | Stripe |
| Testing | Jest + Testing Library |
| Deployment | Vercel |

## External API Integrations

- **DVLA Vehicle Enquiry API** — real-time tax, MOT and registration data
- **DVSA MOT History API** — full MOT test history via Azure AD OAuth2 (client credentials flow with in-memory token caching)
- **Write-off data provider** — Cat S/N check (integration in progress)
- **Stripe** — payment processing for full reports

## Architecture Highlights

- **Server Components by default** — all data-fetching pages are server-rendered for SEO and TTFB
- **OAuth2 token caching** — DVSA Azure AD tokens cached in-memory, auto-refreshed on 401
- **Graceful mock fallback** — runs fully without API credentials using deterministic seeded mock data
- **Privacy-first analytics** — custom visitor tracking, no cookies, no IP storage
- **Bot filtering** — headless browser detection, UA pattern matching, rate-limited auth endpoints

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── check/
│   │       ├── basic/          # Free DVLA vehicle check
│   │       ├── mot-history/    # DVSA MOT history (OAuth2)
│   │       └── writeoff/       # Paid write-off check
│   ├── blog/                   # 7 static SEO articles
│   ├── sample-report/          # Example report page
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── vehicle/
│   │   ├── VehicleCheckForm.tsx  # UK plate input with search history
│   │   └── VehicleReport.tsx     # Full report — MOT, tax, VED, write-off
│   ├── home/                     # Hero, pricing, reviews, stats
│   └── ui/                       # shadcn/ui base components
├── lib/
│   ├── ved.ts                    # UK road tax band calculator (13 CO2 bands)
│   └── validators/               # Zod schemas
├── types/
│   └── vehicle.ts                # TypeScript interfaces
└── __tests__/                    # Jest test suite
```

## Tests

```bash
npm test
```

```
PASS src/__tests__/vehicle-validator.test.ts
  registrationSchema
    ✓ accepts a standard current-format plate
    ✓ strips spaces and uppercases input
    ✓ accepts a personalised plate
    ✓ rejects a single character
    ✓ rejects a plate over 8 characters
    ✓ rejects an empty string

PASS src/__tests__/mock-data.test.ts
  getMockData
    ✓ returns the registration that was passed in
    ✓ returns numeric engine capacity
    ✓ returns a valid tax status string
    ✓ returns a valid MOT status string
    ✓ returns a year within a plausible range
```

## Running Locally

```bash
git clone https://github.com/TechAngelX/buycarcheck-public.git
cd buycarcheck-public
npm install
npm run dev
```

Without API keys the app runs entirely on mock data — no credentials needed to explore the UI.

## Environment Variables

```env
# Government APIs
DVLA_API_KEY=your_key
DVSA_CLIENT_ID=your_client_id
DVSA_CLIENT_SECRET=your_client_secret

# Payments
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...

# Database
NEXT_PUBLIC_SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=...
```

---

***

<div align="center">
  <br />
  <a href="https://techangelx.com" target="_blank" rel="noopener noreferrer">
    <img src="./readme_images/logo.png" alt="Tech Angel X" width="70" height="70" style="border-radius: 50%; border: 4px solid #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
  </a>
  <br /><br />
  <strong>Built by Ricki Angel</strong> · <a href="https://techangelx.com">Tech Angel X</a>
  <br />
  <sub>© 2026 · Proprietary · All rights reserved</sub>
</div>
