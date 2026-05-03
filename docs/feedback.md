# Cuban Bucket List — Developer Spec

## Feature: "Want In?" Section + Contact Form

**Page:** V1 · Travel Journal (index.html)
**Priority:** High — this is the primary collaboration CTA
**Last updated:** May 2026

---

## 1. Where It Goes

Add a new section between **"Our Locals" (Section VI)** and **"Why Cuban Bucket List" (Section VII)**.

Give it the section number **VII** and renumber the sections below accordingly.

Nav anchor: `#join`
Nav label: Add **"Join us"** to the top and bottom nav menus.

---

## 2. Section Copy

```
VII. Want in?

## We're building this together.

Cuban Bucket List is in its early days — and we're looking for the right
people to help shape it.

Whether you're a local with a story worth telling, someone who knows Cuba
deeply, or a professional with skills that fit, we'd love to hear from you.
```

---

## 3. The Three Roles (displayed as cards above the form)

Show 3 cards side by side (or stacked on mobile). Each card has a role title,
a short description, and clicking it pre-selects that role in the form below.

### Card 1 — Local

**Title:** A local with a story
**Body:** You live on the island. You know a place, a craft, a route, or a
moment that visitors never find. We want to tell your story — and eventually,
bring people to you.

### Card 2 — Collaborator

**Title:** A collaborator
**Body:** You work in tourism, travel, content, or operations. You believe
in what this could be and want to help build it. Former colleagues, fellow
students, industry friends — you know who you are.

### Card 3 — Other

**Title:** Something else
**Body:** Maybe you're a photographer, a writer, a fixer, or just someone who
wants to be involved. Tell us about yourself.

---

## 4. The Contact Form

### Form fields

| Field                      | Type           | Required | Notes                                                                                                       |
| -------------------------- | -------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| Name                       | Text input     | Yes      | Placeholder: "Your name"                                                                                    |
| Email                      | Email input    | Yes      | Placeholder: "your@email.com"                                                                               |
| Role                       | Select / radio | Yes      | Options: Local · Collaborator · Other. Pre-filled if user clicked a card above.                             |
| Where are you based?       | Text input     | No       | Placeholder: "City, Country"                                                                                |
| Tell us about yourself     | Textarea       | Yes      | Placeholder: "What do you do, what draws you to this project, how could you be involved?" Min-height: 120px |
| How did you hear about us? | Text input     | No       | Placeholder: "Instagram, a friend, Google..."                                                               |

### Submit button

Label: **"Send it →"**
Style: Match the existing newsletter subscribe button style.

---

## 5. Form Behavior

### On submit

1. Disable the submit button and show a spinner / "Sending..." state.
2. POST the form data to the chosen form backend (see section 6).
3. On success: hide the form, show a confirmation message (see below).
4. On error: show an inline error message, re-enable the button.

### Confirmation message (replaces the form on success)

```
✓ Got it — thanks, [Name].

We'll read every message personally and get back to you soon.

— The Cuban Bucket List team
```

### Validation

- Name, email, role, and "tell us about yourself" are required.
- Show inline error messages below each field on failed submit.
- Email must be a valid format.

---

## 6. Backend / Form Handling Options

Pick one based on preference. No backend code needs to be written.

### Option A — Recommended: Formspark or Formspree

- Sign up at [formspark.io](https://formspark.io) or [formspree.io](https://formspree.io)
- Free tier handles ~50–250 submissions/month
- Submissions arrive by email and are stored in a dashboard
- Implementation: set `action="https://formspree.io/f/YOUR_ID"` or use their JS API for the AJAX version (no page reload — preferred)

### Option B — Notion via Make.com / Zapier

- Form submissions go directly into a Notion database
- Useful if the team wants to manage responses in Notion
- Use Formspree to receive the webhook, then Zapier/Make to push to Notion

### Option C — Netlify Forms (if hosting moves to Netlify)

- Zero config, just add `netlify` attribute to the `<form>` tag
- Submissions viewable in Netlify dashboard

---

## 7. Styling Notes

- Match the existing section aesthetic: serif heading, muted section label, consistent spacing.
- Cards should use the same card style as the experience cards in Section III.
- Selected card state: add a visible border highlight (matching the site's accent color) when a card is clicked / role is pre-selected.
- Form inputs: match the email subscribe input already on the page.
- Mobile: stack the 3 role cards vertically, full-width form fields.

---

## 8. Analytics (optional but recommended)

Fire a `join_form_submitted` event to Google Analytics / Plausible on successful
submission, with the `role` value as a property. This will tell the team which
type of collaborator is most interested over time.

---

## 9. Checklist for QA

- [ ] Section appears correctly between Locals and Why sections
- [ ] Nav link "Join us" scrolls to `#join`
- [ ] All 3 role cards render and clicking one pre-selects the dropdown/radio
- [ ] All required field validations fire on submit
- [ ] Form submits without page reload (AJAX)
- [ ] Confirmation message replaces form on success
- [ ] Error state displays if submission fails
- [ ] Form is fully functional on mobile
- [ ] Submissions arrive in the team's inbox / dashboard

---

_Spec prepared for Cuban Bucket List · V1 · May 2026_
