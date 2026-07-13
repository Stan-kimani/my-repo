# Contact — page copy (real values; final)

Voice: premium, calm, low-friction. Single primary action: Book a call (Calendly).
Form is the secondary path. Real Calendly link + inbox email swapped before launch.

---

## Heading
Let's talk about getting your time back.

## Subhead
Book a quick call and we'll walk through the role you need filled and how we'd find the
right person for it. Prefer to write first? Use the form below.

## Primary — Book a call
Calendly inline embed.
Placeholder URL (swap before launch): https://calendly.com/remotekind/discovery-call
Wire this from env: PUBLIC_CALENDLY_URL

## Secondary — Contact form
Fields: Name, Email, Message. Plus a hidden honeypot field (spam trap — not shown to users).
On submit → POST /api/contact → Postmark sends: (1) notification to RemoteKind, (2) confirmation
to the visitor. Show a thank-you state on success; a clear error on failure.

## Direct
Email: info@remotekind.co  (confirm real inbox + domain before launch)
Response time (optional): We reply within one business day.

## To replace before launch
- Real Calendly event URL (env PUBLIC_CALENDLY_URL)
- Real inbox email (env CONTACT_TO_EMAIL) + verified Postmark sender (env CONTACT_FROM_EMAIL)