# Build a Cinematic Interactive Birthday Website

Create a complete, highly polished, cinematic, interactive birthday website for a special girl.

The website should feel like a small emotional digital experience rather than a normal static birthday webpage. The main concept is a combination of:

- A beautiful night sky
- An interactive storytelling experience
- A fake chat conversation
- Clickable stars containing memories and messages
- A constellation animation
- A final birthday surprise

The experience should feel magical, modern, elegant, emotional, and personal.

---

# IMPORTANT DESIGN DIRECTION

Avoid generic AI-generated birthday website aesthetics.

DO NOT use:

- Excessive pink colors
- Random floating hearts everywhere
- Overused emoji decorations
- Cheap-looking gradients
- Generic birthday templates
- Excessive rounded cards
- Too much glassmorphism
- Cluttered layouts
- Loud rainbow colors
- Overly childish design

The design should feel more like a premium interactive digital art experience.

Visual inspiration:

- Cinematic night sky
- Modern Apple-style animations
- Awwwards interactive websites
- Premium portfolio websites
- Minimal storytelling experiences
- Elegant digital art

---

# TECH STACK

Use:

- HTML
- CSS
- Vanilla JavaScript

Do not use React or any backend.

The website must run as a static frontend project.

Organize the project properly:

```text
birthday-website/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   ├── music/
│   └── icons/
```

Write clean, readable, maintainable code.

Add comments only where useful.

---

# GENERAL VISUAL STYLE

The overall atmosphere should be a cinematic night sky.

Main colors:

- Deep navy
- Midnight blue
- Dark purple
- Soft violet
- Subtle blue glow
- White stars

Suggested background feeling:

```text
#050816
#080d24
#10153a
#20154a
```

Use subtle gradients, but keep everything dark and elegant.

Add:

- Animated stars
- Small particles
- Subtle noise texture
- Slow moving nebula-like gradients
- Occasional shooting stars
- Soft glow effects
- Smooth parallax movement

Animations must feel smooth and slow.

Avoid excessive animation happening everywhere at once.

---

# WEBSITE EXPERIENCE

The website should be a full-screen interactive storytelling journey.

The user should not immediately see everything.

Each section should feel like discovering the next part of a story.

Use smooth transitions between scenes.

The experience should follow this structure:

```text
INTRODUCTION
      ↓
FAKE CHAT STORY
      ↓
"A LITTLE UNIVERSE"
      ↓
INTERACTIVE STARS
      ↓
MEMORY CONSTELLATION
      ↓
MAKE A WISH
      ↓
FINAL HAPPY BIRTHDAY
```

---

# SCENE 1 — CINEMATIC NIGHT SKY INTRO

The website opens with a full-screen night sky.

Elements:

- Dark cinematic sky
- Hundreds of subtle stars
- Slowly moving particles
- Moon or subtle glowing light
- Very slow parallax movement when moving the mouse
- Soft ambient background animation

At the center, display a minimal message.

Text should appear gradually:

```text
Hey...

Look at the sky tonight.
```

Use a cinematic text reveal animation.

After a few seconds, show a button:

```text
Continue ✨
```

The button should be minimal and elegant.

On hover:

- Slight glow
- Subtle scale
- Smooth transition

When clicked:

- The screen should gently fade
- The camera should feel like it is moving deeper into space
- Transition into the fake chat section

---

# SCENE 2 — FAKE CHAT STORY

Create a minimal fake chat interface.

It should not look exactly like WhatsApp or Instagram.

Instead, design a custom modern messaging interface.

The chat container should feel subtle and elegant.

Use:

- Semi-transparent dark background
- Thin border
- Very subtle blur
- Soft glow
- Rounded corners, but not excessively rounded

Messages should appear one by one automatically.

Each message should have a typing effect.

Use this conversation:

```text
Hey...

So... today is a pretty special day.

I was thinking about what kind of gift I should give you.

Something normal didn't feel special enough.

Then I thought...

Why not make you a little universe?
```

Add realistic pauses between messages.

The typing animation should feel natural.

After the final message:

```text
Why not make you a little universe?
```

Pause for a moment.

Then the chat interface should slowly fade away.

The camera should transition back into the night sky.

---

# SCENE 3 — INTERACTIVE UNIVERSE

Show a large cinematic night sky.

At the center, reveal text:

```text
Every star here has something for you.
```

Then:

```text
Go ahead... explore.
```

Several stars should become subtly highlighted.

The stars should have:

- Soft glow
- Hover interaction
- Small pulse animation
- Cursor change
- Slight scale increase on hover

The user must click the stars.

Each star reveals a different piece of the birthday experience.

Example stars:

```text
Star 1 → A beautiful memory
Star 2 → Something I like about you
Star 3 → A funny message
Star 4 → A wish for your future
Star 5 → A secret message
```

Do not make the stars look like buttons.

They should feel naturally integrated into the night sky.

---

# STAR INTERACTION

When a star is clicked:

1. The background should slightly blur or darken
2. The star should glow brighter
3. A cinematic transition should happen
4. A content panel should appear
5. The content should be displayed elegantly

The content panel should be minimal.

Possible layouts:

- Polaroid photo
- Short handwritten-style message
- Minimal text card
- Image with caption
- Floating memory

Example content:

### Star 1

```text
A little memory.

[PHOTO PLACEHOLDER]

Some moments are small when they happen,
but somehow they become unforgettable.
```

### Star 2

```text
Something I like about you.

Your smile.

Not just because it looks beautiful,
but because somehow it can make everything feel lighter.
```

### Star 3

```text
A funny little reminder.

Yes...

You're getting older.

But don't worry.

You still look amazing.
```

### Star 4

```text
A wish for you.

I hope this year brings you
new places,
new memories,
and more reasons to smile.
```

### Star 5

```text
A secret.

Out of all the stars in this universe...

I'm really glad I got to know you.
```

Each message should feel personal and emotional without being overly cheesy.

Add a close button that smoothly returns the user to the star map.

Track which stars have been opened.

After all stars are opened, unlock the next section automatically.

---

# SCENE 4 — MEMORY CONSTELLATION

After all stars are explored:

The camera should slowly zoom out.

The opened stars should begin moving into position.

Thin glowing lines should connect them.

They should form a beautiful constellation.

The animation should feel cinematic and magical.

Use SVG or Canvas if needed.

While the constellation forms, show text:

```text
Some moments become memories...

And some memories become constellations.
```

Then show a beautiful memory section.

Possible layout:

- Several Polaroid-style photos floating gently
- Photos connected by subtle glowing lines
- Slow depth/parallax effect

Use placeholders for photos:

```text
assets/images/memory-1.jpg
assets/images/memory-2.jpg
assets/images/memory-3.jpg
```

The user should easily be able to replace the images later.

---

# SCENE 5 — MAKE A WISH

Transition from the constellation into the final birthday scene.

The stars should slowly move aside.

A small elegant birthday cake should appear.

Do NOT use a childish cartoon cake.

The cake should be minimalist and elegant.

Above the cake:

```text
One more thing...
```

Then:

# Make a wish.

Add candles.

Create an interactive candle effect.

The user can click the candle or interact with it to trigger the next animation.

When activated:

- Candle lights disappear
- Small particle effects appear
- The screen briefly darkens
- A shooting star crosses the screen
- Soft confetti appears
- Music reaches a slightly more emotional moment

Then transition into the final scene.

---

# FINAL SCENE — HAPPY BIRTHDAY

Create a cinematic final reveal.

The camera should slowly pull back.

The night sky becomes more beautiful.

More stars appear.

Soft particles float through the screen.

A subtle aurora or nebula glow can appear in the background.

Then reveal the final text:

# HAPPY BIRTHDAY, [HER NAME] ✨

Use a beautiful cinematic text reveal.

Below it:

```text
I hope this year brings you
as much happiness as you bring
to the people around you.
```

Then add a smaller personal message:

```text
Thank you for being part of my universe.

Enjoy your special day. 🌙
```

At the bottom:

```text
Made with something special for you.
```

Keep it subtle.

Do not make the final scene crowded.

---

# MUSIC

Add optional background music support.

The website should NOT automatically play music immediately because browsers may block autoplay.

Instead, create a subtle music toggle button.

Example:

```text
♫ Sound
```

When clicked:

- Music starts
- Icon changes state

Use a placeholder music file:

```text
assets/music/background.mp3
```

The music control should be fixed in a subtle corner.

---

# CURSOR EFFECT

On desktop, create a subtle custom cursor effect.

The cursor should have:

- Small glowing dot
- Soft trailing glow

Do not make it distracting.

On interactive stars:

- Cursor glow slightly increases
- Star reacts to cursor proximity

Disable custom cursor effects on mobile.

---

# PARALLAX

Add subtle mouse-based parallax.

Different layers should move at different speeds:

- Background stars → very slow
- Medium stars → medium
- Foreground particles → slightly faster

The effect should feel like depth.

Do not exaggerate the movement.

---

# ANIMATIONS

Use smooth, premium animations.

Recommended techniques:

- CSS transitions
- CSS keyframes
- JavaScript intersection logic
- requestAnimationFrame for smooth movement

Animations should use easing similar to:

```text
ease-out
cubic-bezier(0.22, 1, 0.36, 1)
```

Avoid:

- Bouncy animations everywhere
- Fast spinning elements
- Excessive fade-ins
- Random movement without purpose

Every animation should support the storytelling.

---

# RESPONSIVE DESIGN

The website must work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile is very important.

On mobile:

- Reduce particle count for performance
- Simplify parallax
- Disable heavy cursor effects
- Make text readable
- Ensure clickable stars are easy to tap
- Prevent horizontal scrolling
- Optimize animation performance

The experience should still feel cinematic on a phone.

---

# PERFORMANCE

Optimize the website.

Requirements:

- Avoid unnecessary heavy libraries
- Avoid huge images
- Use optimized animations
- Use requestAnimationFrame where appropriate
- Avoid creating too many DOM elements
- Respect prefers-reduced-motion
- Keep the website smooth on mid-range devices

If particle effects are implemented with JavaScript, make sure they are performant.

---

# ACCESSIBILITY

Include:

- Proper semantic HTML
- Buttons with aria-labels where necessary
- Keyboard accessibility for interactive elements
- Visible focus states
- prefers-reduced-motion support
- Sufficient text contrast

---

# CODE QUALITY

Write clean production-quality frontend code.

Requirements:

- Separate HTML, CSS, and JavaScript properly
- Use CSS custom properties for main colors
- Organize JavaScript into logical sections
- Avoid duplicated code
- Use reusable functions
- Keep naming clear and consistent

Add a configuration section near the top of the JavaScript file:

```javascript
const CONFIG = {
    girlName: "HER NAME",
    musicEnabled: true,
    starCount: 5,
};
```

Make the website easy to personalize.

Also create a clearly labeled section in the code for editing:

- Her name
- Chat messages
- Star messages
- Photos
- Final birthday message

---

# FINAL EXPECTATION

The final result should feel like:

> A cinematic interactive journey through a small personal universe made as a birthday gift.

It should NOT feel like:

> A generic HTML birthday template with balloons and random animations.

Prioritize:

- Emotional storytelling
- Premium visuals
- Smooth animations
- Strong atmosphere
- Interactivity
- Minimalism
- Personal feeling

Before finishing, test the entire flow:

1. Open website
2. Intro animation works
3. Continue button works
4. Fake chat plays correctly
5. Stars are clickable
6. Each star opens unique content
7. Progress is tracked
8. Constellation unlocks after all stars
9. Cake interaction works
10. Final birthday scene displays correctly
11. Music toggle works
12. Website is responsive on mobile
13. No console errors

Build the complete working website now. Do not only provide a design plan or explanation. Create all required HTML, CSS, and JavaScript files.