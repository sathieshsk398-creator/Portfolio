<div align="center">

# Sathiesh Kumar M — Portfolio

### Full Stack & AI Developer

Building Intelligent Full-Stack Applications with React, Node.js, and the Google Gemini API

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Gemini API](https://img.shields.io/badge/Google_Gemini_API-Integrated-4285F4?logo=google&logoColor=white)

[Live Demo](#) · [LinkedIn](https://www.linkedin.com/in/sathieshkumar3662633a3/) · [LeetCode](https://leetcode.com/u/Sathiesh_Kumar-SK17/) · [Resume](https://drive.google.com/file/d/1kp2uJseMJWN0wrpk1g_riyO_fZubF6VN/view?usp=drive_link)

</div>

---

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
6. [Available Scripts](#available-scripts)
7. [Featured Projects](#featured-projects)
8. [Experience](#experience)
9. [Skills](#skills)
10. [Certifications & Achievements](#certifications--achievements)
11. [Patent](#patent)
12. [Education](#education)
13. [Contact](#contact)


---

## About

This repository contains the source code for my personal developer portfolio — a single-page React application that presents my work as a Computer Science undergraduate and full-stack developer. It combines production-grade web engineering with practical AI integration via the Google Gemini API, and is designed around a dark, bento-grid aesthetic with scroll-triggered motion and interactive detail modals.

| | |
|---|---|
| **Name** | Sathiesh Kumar M |
| **Role** | Full Stack & AI Developer |
| **Location** | Coimbatore, India |
| **Status** | Available for Internships & Full-Stack Roles |
| **Focus** | React, Node.js, Google Gemini API, Spring Boot, MySQL |

---

## Features

- **Animated hero & navigation** — scroll-based section reveals powered by Framer Motion
- **About & Experience bento grid** — internship history and impact metrics at a glance
- **Interactive project showcase** — case-study modals covering architecture, key metrics, features, and challenges solved
- **Tech stack marquee** — scrolling display of languages, frameworks, and tools with proficiency context
- **Achievements & certifications bento** — patents, certifications, and quantified stats
- **Interactive contact section** with a resume preview modal
- **Custom magnetic cursor & scroll progress bar** for a tactile browsing experience
- **Fully responsive**, dark-themed UI

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS 4 |
| **Animation** | Motion (Framer Motion) |
| **AI Integration** | Google Gemini API (`@google/genai`) |
| **Backend (portfolio API layer)** | Node.js, Express |
| **Icons** | Lucide React |
| **Tooling** | TypeScript Compiler (lint), ESLint, Bun / npm |

---

## Project Structure

```
├── src/
│   ├── components/            # UI components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── AboutExperienceBento.tsx
│   │   ├── ProjectShowcase.tsx
│   │   ├── ProjectDetailsModal.tsx
│   │   ├── TechStackMarquee.tsx
│   │   ├── AchievementsBento.tsx
│   │   ├── InteractiveContact.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts   # Centralized content: profile, experience, projects, skills
│   ├── assets/images/         # Profile images and graphics
│   ├── App.tsx                 # Root component composing all sections
│   ├── types.ts                 # Shared TypeScript interfaces
│   ├── index.css
│   └── main.tsx                  # App entry point
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

> All content — profile info, experience, patents, education, projects, skills, and certifications — is centrally managed in `src/data/portfolioData.ts`, so the site can be updated without touching component logic.

---

## Getting Started

### Prerequisites
- Node.js v18+
- A Google Gemini API key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sathieshsk398-creator/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# then add: GEMINI_API_KEY=your_api_key_here

# 4. Run the development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Type-checks the project (`tsc --noEmit`) |
| `npm run clean` | Removes build artifacts |

---

## Featured Projects

### 🚗 AI Car Damage Estimator
**Multimodal AI & Full-Stack Platform** · [GitHub](https://github.com/sathieshsk398-creator/AI-Car-Damage-Estimator)

A full-stack vehicle appraisal platform integrating Google Gemini's multimodal LLM API to classify damaged automobile components and generate deterministic, auditable repair estimates.

| Metric | Value |
|---|---|
| Classification Accuracy | 95% |
| Estimating Error Reduction | -40% |
| Inference Latency | < 1.4s |

**Key Features:** multi-angle image upload with preprocessing · Gemini-based structural damage detection · deterministic pricing engine with fuzzy component matching · JWT-secured role-based access · exportable damage reports.

**Tech Stack:** React.js, Node.js, TypeScript, Google Gemini API, JWT, Tailwind CSS, Express

---

### 🏥 AI-Powered Hospital Management System
**Healthcare Infrastructure & AI Workflow** · [GitHub](https://github.com/sathieshsk398-creator/Hospital-Management-System)

An enterprise-grade hospital management and clinical operations platform processing 10,000+ daily operational records, with AI-driven symptom triage and automated scheduling.

| Metric | Value |
|---|---|
| Daily Records Throughput | 10,000+ |
| Operational Efficiency Gain | +25% |
| Dashboard Modules | 6 Core |

**Key Features:** AI-driven clinical symptom triage · smart practitioner scheduling · modular role-based dashboards (Doctors, Nurses, Pharmacists, Admins) · automated pharmacy inventory management · diagnostic reporting & billing.

**Tech Stack:** React.js, Node.js, TypeScript, Tailwind CSS, Google Gemini API, JSON Database, Vite

---

## Experience

**Full Stack Development Intern** — Viruzverse Solutions, Coimbatore, India *(2024)*

- Built resilient full-stack components connecting Spring Boot REST APIs to React interfaces
- Optimized complex MySQL queries, indexing schemes, and CRUD workflows
- Engineered structured data-access layers for high-concurrency enterprise workflows
- Collaborated on API contract specifications and payload validation schemas

**Stack:** Java, React.js, Spring Boot, MySQL, REST APIs, SQL Optimization

---

## Skills

| Category | Skills |
|---|---|
| **Languages** | Java, JavaScript, TypeScript, SQL |
| **Frontend** | React.js, Tailwind CSS, HTML5/CSS3 |
| **Backend & AI** | Node.js, Google Gemini API, Spring Boot, REST APIs |
| **Databases & Tools** | MySQL, Git & GitHub, Postman, VS Code, Cloud Computing |

---

## Certifications & Achievements

| Title | Issuer |
|---|---|
| Cloud Computing Certification | NPTEL (IIT) |
| Full Stack Development | Infosys Springboard |
| TCS CodeVita Season 13 — Rank Achiever | Tata Consultancy Services |
| Java Programming | Great Learning |
| Introduction to Data Analysis using MS Excel | Coursera Project Network |

**Highlights:** 120+ LeetCode problems solved · 2 published patent applications · 95% AI vision classification accuracy achieved in production project.

---

## Patent

**Fraud Detection in Voting System Using Hybrid Biometric Scanner**
Application No. `202541037560 A` · Status: Published (India)

A novel electronic voting architecture featuring multi-factor biometric authentication, real-time cryptographic anomaly verification, and decentralized fraud prevention — benchmarked to process 1,000+ secure votes per minute with deterministic duplicate-vote prevention.

---

## Education

| Degree | Institution | Period | Score |
|---|---|---|---|
| B.E. Computer Science and Engineering | V.S.B College of Engineering Technical Campus | 2023 – 2027 | 7.39/10 CGPA |
| Higher Secondary Certificate (H.S.C) | N.S.V.V Matric Hr Sec School | 2021 – 2023 | 76% |

---

## Contact

| | |
|---|---|
| 📧 **Email** | sathieshsk398@gmail.com |
| 📱 **Phone** | +91-9344515118 |
| 💼 **LinkedIn** | [sathieshkumar](https://www.linkedin.com/in/sathieshkumar3662633a3/) |
| 💻 **GitHub** | [@sathieshsk398-creator](https://github.com/sathieshsk398-creator) |
| 🧩 **LeetCode** | [Sathiesh_Kumar-SK17](https://leetcode.com/u/Sathiesh_Kumar-SK17/) |
| 📍 **Location** | Coimbatore, India |

---


## Author

**Sathiesh Kumar M**


Visit my website in : https://portfolio-amber-one-84.vercel.app/
