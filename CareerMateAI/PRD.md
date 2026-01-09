# CareerMate AI — Product Requirements Document

## 1. Product Overview
- **Purpose**: CareerMate AI is a web and mobile experience that uses generative AI to coach job seekers through resume optimization, mock interviews, career habit building, and portfolio storytelling so they can land offers faster.
- **Problem**: University students and early-career professionals struggle with non-responsive resumes, limited interview practice, and lack of structured career guidance. Existing solutions are fragmented (resume builders, interview question lists, generic mentorship) and do not provide continuous, personalized coaching.
- **Vision**: Become the always-on "career practice partner" that simulates a full coaching loop—diagnose readiness, prescribe improvements, rehearse interviews, and track career habits—delivered through an approachable assistant UI that can be embedded in JR Academy programs.

## 2. Objectives & Key Results
| Objective | Key Results (measured over first 3 months post launch) |
|-----------|--------------------------------------------------------|
| Launch an end‑to‑end AI coaching workflow that keeps candidates engaged | • ≥60% of onboarded users complete resume upload & AI review within 48h • ≥40% run at least one mock interview scenario • ≥30% return for 3+ sessions in 2 weeks |
| Improve job search outcomes | • ≥70% users report higher interview confidence (post-survey) • ≥20% users attribute a shortlist/interview to CareerMate AI feedback |
| Establish monetization readiness | • Collect willingness-to-pay data from ≥200 users • Prototype paywall for premium mock interviews by end of V1 |

## 3. Scope
### In Scope (MVP → V1)
1. Guided onboarding wizard collecting role targets, experience level, preferred industries.
2. Resume ingestion (PDF/DOCX) with AI parsing and scoring (ATS compliance, quantified impact, structure).
3. AI-generated resume improvement suggestions + rewrite snippets.
4. Mock interview practice with conversational AI: question sets by role, speech-to-text input, instant critique along competency rubric.
5. Career habit planner: weekly checklists, reminders, and AI habit suggestions (networking, project work, applications).
6. "Project Resume" builder: guided templates pulling portfolio entries + auto-summarized project highlights for sharing.
7. Progress dashboard summarizing readiness scores, session history, next best actions.
8. Support touchpoints: contact form, knowledge base, escalate to human coach.

### Out of Scope (Current Release)
- Automated job application submission or job board aggregation.
- Real-time recruiter chat or human matchmaking.
- Native mobile app; responsive web only.

## 4. Personas
1. **Emily – Final-year CS student (Age 21)**: Limited industry experience, first internship search, needs confidence and structure. Measures success by landing interviews before graduation.
2. **Jason – Recent graduate career shifter (Age 24)**: Trying to move into software engineering from non-traditional background, values realistic mock interviews and actionable resume edits.
3. **Career Services Partner (JR Academy Coach)**: Needs aggregated learner insights to intervene, values admin dashboards and usage analytics (post-MVP).

## 5. User Journeys
1. **Resume readiness loop**
   - Sign up → upload resume → AI parsing produces ATS score, highlights issues → user accepts inline rewrites → exports revised resume or saves in library.
2. **Mock interview rehearsal**
   - Picks target role (e.g., SWE, PM) → selects scenario (behavioral/technical) → AI interviewer conducts session (voice/chat) → user receives scorecard + concrete improvement plan → option to schedule follow-up.
3. **Habit coaching**
   - Weekly check-in questionnaire → AI suggests three high-impact habits → user tracks completion → streak badge/unlock advanced tips.
4. **Portfolio/storytelling**
   - Imports project details → AI suggests narrative (STAR framework) → one-click add to “Project Resume” share link.

## 6. Functional Requirements
| Area | Requirement | Priority |
|------|-------------|----------|
| Onboarding | Collect name, location, education, role targets, experience level, region of interest; store profile for personalization. | Must |
| Resume Analysis | Accept PDF/DOCX, parse to structured JSON, compute ATS score, highlight gaps (keywords, metrics, format), generate improvement suggestions and sample bullet rewrites. | Must |
| Feedback Delivery | Display prioritized checklist, allow user to accept/decline AI edits, create downloadable resume version. | Must |
| Mock Interviews | Provide selectable interview modes, deliver AI questions sequentially, capture user responses (text/voice), generate transcript + rubric scoring + tips. | Must |
| Career Habits | Recommend weekly tasks, allow marking complete, visualize streak, push reminders (email/web notifications). | Should |
| Project Resume | Provide template library, auto-populate from project entries, shareable public link with analytics. | Should |
| Support | Contact form (already in landing), auto-response email, escalate urgent issues to support inbox. | Must |
| Analytics | Track funnel steps, NPS survey post-session, capture WTP responses. | Should |

## 7. Non-Functional Requirements
- **Performance**: Resume parsing turnaround <10s for 2-page PDF; mock interview response latency <3s/question.
- **Security & Privacy**: Encrypt uploaded resumes at rest (AES-256) and in transit (TLS 1.2+). Allow deletion of profile & documents. Comply with Australian Privacy Principles.
- **Scalability**: Support 500 concurrent mock interviews via autoscaled inference workers (OpenAI/Anthropic APIs + optional fine-tuned models).
- **Accessibility**: WCAG 2.1 AA for landing and app; provide captions/text transcripts for audio interactions.

## 8. Success Metrics & Analytics
- Activation rate: % of sign-ups completing resume analysis.
- Practice depth: average mock interview sessions per active user per week.
- Resume quality lift: delta between initial and post-feedback ATS scores (target ≥15-point average gain).
- Engagement: weekly active / monthly active ratio ≥0.45.
- Satisfaction: CSAT ≥4.3/5, qualitative testimonials count.

## 9. Release Plan
| Milestone | Timeline | Deliverables |
|-----------|----------|--------------|
| Prototype (Week 0–3) | Landing page refresh, clickable onboarding + resume analysis mock, collect waitlist signups. |
| MVP Beta (Week 4–8) | Resume upload + AI feedback end-to-end, simple chat-based mock interview (text), progress dashboard v0. |
| V1 Production (Week 9–14) | Voice input/output for interviews, habit planner, project resume builder, payment experiment (one premium scenario). |
| V1.1 (Post-Launch) | Coach dashboard, analytics exports, expanded role libraries. |

## 10. Risks & Mitigations
- **AI hallucinations or generic feedback** → Introduce human-reviewed prompt templates, add confidence indicators, allow “flag feedback” action.
- **Uploads failing due to uncommon formats** → Provide template, plain-text paste fallback, run format validation prior to inference call.
- **Low activation** → Trigger lifecycle emails, integrate demo video + guided tours, partner with JR Academy cohorts for seeded usage.
- **Regulatory/privacy concerns** → Draft transparent data policy, localize storage for AU users if required.

## 11. Open Questions
1. What price sensitivity exists between tiers (resume-only vs full coaching)? Need survey + pricing experiment.
2. Do we need integration with JR Academy LMS for SSO and progress sync?
3. Should we prioritize technical mock interviews (coding environment) versus behavioral for MVP?
4. How will we capture audio for mock interviews on web reliably (WebRTC vs browser API)?

## 12. Appendix
- **Tech Stack Assumptions**: React (web app), Node/Express API, AWS S3 + Lambda for document parsing, OpenAI GPT-4/4o & Anthropic Claude for conversational layers, Pinecone/Postgres for storing insights.
- **Dependencies**: Access to OpenAI/Anthropic APIs, resume parsing service (e.g., Affinda or in-house), transactional email (SendGrid), analytics (PostHog).

