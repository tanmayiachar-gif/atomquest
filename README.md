# AtomQuest 1.0 — In-House Goal Setting & Tracking Portal

An enterprise-grade, web-based Goal Management application built for Atomberg. This platform eliminates offline spreadsheets by digitizing the lifecycle of employee performance tracking with strict metric guardrails, dynamic role workflows, and clear progress computing models.

## 🚀 Live Hosted Link
[👉 CLICK HERE TO OPEN LIVE DEMO PORTAL](YOUR_VERCEL_OR_NETLIFY_URL_HERE)

## 🔑 Test Credentials & Quick Evaluation Journeys
To evaluate all roles effortlessly without multiple registrations, use the **Persona Switcher Bar** pinned at the top of the interface, or log in with these simulated data accounts:

* **Employee Persona:** `employee@atomberg-portal.com` | Password: `password123`
  * *Journey:* Create goals, validate the 100% weightage check, and track ongoing target scores.
* **Manager (L1) Persona:** `manager@atomberg-portal.com` | Password: `password123`
  * *Journey:* Review, dynamically edit target metrics, and toggle approval/lock status on employee rows.
* **HR Admin Persona:** `admin@atomberg-portal.com` | Password: `password123`
  * *Journey:* Access systemic audit-trail reports and clear corporate master thrust settings.

## 🛠️ Technology Choices & Optimization Setup
* **Frontend UI Framework:** React with Next.js (TailwindCSS for high usability rendering).
* **Database & Security Layer:** Supabase / PostgreSQL relational structure ensuring role execution tracking.
* **Hosting Pipeline:** Vercel edge deployment for instantaneous load optimization.
* **Cost Optimization Architecture:** Structured with database triggers instead of continuous API poll calls to limit server runtimes and reduce corporate cloud infrastructure overhead.

## 📐 Platform Architecture Diagram
The platform is engineered using an efficient, decoupled 3-Tier Application Model optimized for scalability and zero maintenance costs:

```text
  [ Client Tier ]             [ App Edge Gateway ]          [ Data Persistence ]
+-------------------+        +----------------------+      +----------------------+
|  Next.js Frontend | -----> | Edge Serverless APIs | ---->| PostgreSQL Database  |
| (Tailwind Engine) |        |  (Validation Layer)  |      |  (Supabase Cluster)  |
+-------------------+        +----------------------+      +----------------------+
          ^                             |                             |
          |_____________________________|_____________________________|
                        Secure State Engine & Auth Policies
