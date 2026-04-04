# BuyCarCheck

> **Note**: This is a public portfolio showcase of a live, private project.
> The full source code is kept private to protect proprietary business logic, API integrations, and infrastructure.
> This repo exists to demonstrate tech stack, architecture, and code quality to prospective employers and collaborators.
>
> The live site is at **[buycarcheck.com](https://buycarcheck.com)**

---

![BuyCarCheck Screenshot](readme_images/screenshot.png)

![BuyCarCheck Screenshot](readme_images/screenshot2.png)

## What is BuyCarCheck?

BuyCarCheck is a live UK vehicle history checking service. Users enter a number plate and instantly receive vehicle data pulled from official government sources — helping buyers make informed decisions before purchasing a used car.

## Features

- **Free Basic Check** — Vehicle make, model, colour, tax status, MOT status, engine size, fuel type & CO2 emissions
- **Paid Full Check (£2.99)** — Write-off category (Cat S/N), finance check, mileage history, plate changes
- Real-time data via official DVLA & DVSA APIs
- MOT history with pass/fail records, advisories, and mileage progression
- VED (road tax) band calculator based on CO2 emissions
- Mobile-responsive, fast, SEO-optimised

## User Engagement

- Feature-rich educational blog (7 articles, statically rendered, SEO-first)
- Structured data / JSON-LD for Google rich results
- Dynamic sitemap & robots.txt

![BuyCarCheck Screenshot](readme_images/screenshot4.png)

## Detailed Vehicle Statistics

- CO2 band & estimated annual road tax cost
- Fuel efficiency calculator (MPG / L/100km / estimated annual fuel cost)
- Pre/post-2017 VED logic (different tax rules apply)

![BuyCarCheck Screenshot](readme_images/screenshot3.png)

## Call To Action

- Tiered pricing plan (Free / Full Check)
- Customer reviews section

![BuyCarCheck Screenshot](readme_images/screenshot5.png)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + shadcn/ui |
| State Management | Zustand |
| Data Fetching | TanStack React Query |
| Validation | Zod |
| Database | Supabase (PostgreSQL) |
| Payments | Stripe |
| Deployment | Vercel |

## External API Integrations

- **DVLA Vehicle Enquiry API** — tax status, MOT status, registration data
- **DVSA MOT History API** — full MOT test history via Azure AD OAuth2 (client credentials flow)
- **Write-off data provider** — Cat S/N check (integration in progress)
- **Stripe** — payment processing for full reports

## Architecture Highlights

- **Server Components by default** — all data-fetching pages are server-rendered for SEO and performance
- **OAuth2 token caching** — DVSA access tokens cached in-memory with auto-refresh on expiry
- **Graceful mock fallback** — if API keys are absent, realistic seeded mock data is returned (deterministic by registration)
- **Privacy-first analytics** — custom visitor tracking with no cookies, no IP storage, Supabase backend
- **Bot filtering** — headless browser detection (`navigator.webdriver`), UA pattern matching, rate-limited auth endpoints

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── check/
│   │       ├── basic/          # Free DVLA vehicle check
│   │       ├── mot-history/    # DVSA MOT history (OAuth2)
│   │       └── writeoff/       # Paid write-off check
│   ├── blog/                   # 7 static SEO blog posts
│   ├── sample-report/          # Example report page
│   ├── layout.tsx
│   └── page.tsx                # Homepage
├── components/
│   ├── vehicle/
│   │   ├── VehicleCheckForm.tsx  # UK plate input with recent history
│   │   └── VehicleReport.tsx     # Full report display
│   ├── home/                     # Hero, pricing, reviews, stats
│   └── ui/                       # shadcn/ui base components
├── lib/
│   ├── ved.ts                    # UK road tax band calculator
│   └── validators/               # Zod schemas
└── types/
    └── vehicle.ts                # TypeScript interfaces
```

## Why is the full repo private?

The live codebase contains:
- Government API credentials (DVLA, DVSA)
- Payment processing logic (Stripe)
- Admin dashboard and internal analytics
- Proprietary business logic

Keeping it private protects the integrity of the live service. This portfolio repo exists to give visibility into the architecture and code quality without exposing production infrastructure.

---

## Scripts

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

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

Without API keys the app runs entirely on mock data, so you can run it locally without any credentials.

---

***

<h2 style="text-align: center;">Built by Ricki Angel</h2>
<div align="center">
  <a href="https://techangelx.com" target="_blank" rel="noopener noreferrer">
    <img src="./readme_images/logo.png" alt="Tech Angel X Logo" width="70" height="70" style="vertical-align: middle; border-radius: 50%; border: 4px solid #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
  </a>
  <br /><br />
  <span style="font-size: 1.4em; font-weight: 300;">
    <b>Ricki Angel</b> • <a href="https://techangelx.com" target="_blank" rel="noopener noreferrer">Tech Angel X</a>
  </span>
  <br />
  <span style="font-size: 1em; color: #888;">© 2026 · All rights reserved</span>
</div>
