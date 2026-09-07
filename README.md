<div align='center'>

# Myles Jefferson Portfolio

![MJ-Logo-Design-01-White-BG](https://user-images.githubusercontent.com/76969330/155625307-659f3221-81f1-43f8-9c60-d720ae979e0c.png)

A modern, responsive portfolio website showcasing full-stack development expertise.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**[Live Site](https://myles.is-a.dev)**

</div>

## About

Modern single-page portfolio built with Next.js 16 and TypeScript. Features smooth animations, responsive design, and interactive project showcases with detailed case studies.


## Tech Stack

**Frontend:** Next.js 16, TypeScript, TailwindCSS, Framer Motion
**UI:** shadcn/ui with Base UI primitives, Radix Icons, Lucide React, React Hook Form, Zod
**Tools:** Biome, Vercel Analytics, Nodemailer  

## Scripts

```bash
bun dev          # Development server
bun build        # Production build
bun start        # Production server
bun run check    # Lint code
bun test         # Business-logic tests
bun run test:browser # Desktop/mobile browser regressions
bun run clean    # Clean artifacts
```

Install the test browser once with `bunx playwright install chromium`. Browser tests
start an isolated server on port 3107 using `.next-e2e`, mock reCAPTCHA and contact
submissions, and save screenshots under `/tmp/portfolio-ui-after`.

The primitive migration follows the [official shadcn Radix-to-Base guidance](https://github.com/shadcn-ui/ui/tree/main/skills/migrate-radix-to-base).
Existing styles are retained; `components.json` selects Base UI for future additions.

---

<div align="center">
  <p>Built with ❤️ by <strong>Myles Jefferson</strong></p>
</div>
