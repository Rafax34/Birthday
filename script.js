/* ============================================
   CINEMATIC BIRTHDAY WEBSITE — SCRIPT
   ============================================ */

// ============ CONFIG — EDIT HERE ============
const CONFIG = {
    girlName: "HER NAME",
    musicEnabled: true,

    // Chat messages — edit the conversation
    chatMessages: [
        "Hey...",
        "So... today is a pretty special day.",
        "I was thinking about what kind of gift I should give you.",
        "Something normal didn't feel special enough.",
        "Then I thought...",
        "Why not make you a little universe?",
    ],

    // Star content — each star reveals one of these
    starData: [
        {
            title: "A little memory",
            paragraphs: [
                "Some moments are small when they happen,",
                "but somehow they become unforgettable.",
            ],
            hasPhoto: true,
            photoPath: "assets/images/memory-1.jpg",
        },
        {
            title: "Something I like about you",
            paragraphs: [
                "Your smile.",
                "Not just because it looks beautiful,",
                "but because somehow it can make everything feel lighter.",
            ],
        },
        {
            title: "A funny little reminder",
            paragraphs: [
                "Yes...",
                "You're getting older.",
                "But don't worry.",
                "You still look amazing.",
            ],
        },
        {
            title: "A wish for you",
            paragraphs: [
                "I hope this year brings you",
                "new places,",
                "new memories,",
                "and more reasons to smile.",
            ],
        },
        {
            title: "A secret",
            paragraphs: [
                "Out of all the stars in this universe...",
                "I'm really glad I got to know you.",
            ],
        },
    ],

    // Final message
    finalName: "HER NAME",
    finalMessage: "I hope this year brings you\nas much happiness as you bring\nto the people around you.",
    finalSmall: "Thank you for being part of my universe.\nEnjoy your special day. 🌙",

    // Constellation photos
    memoryPhotos: [
        { path: "assets/images/memory-1.jpg", caption: "A little memory" },
        { path: "assets/images/memory-2.jpg", caption: "Something beautiful" },
        { path: "assets/images/memory-3.jpg", caption: "Unforgettable" },
    ],
};
// ============ END CONFIG ============

// ---- State ----
let currentScene = null;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let starsOpened = 0;
let isMobile = false;
let reducedMotion = false;
let savedStarPositions = [];

// ---- Init ----
document.addEventListener("DOMContentLoaded", () => {
    isMobile = matchMedia("(hover: none) and (pointer: coarse)").matches;
    reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    initCanvas();
    initCursor();
    initSceneSystem();
    initIntro();
    initChat();
    initStars();
    initConstellation();
    initCake();
    initFinal();
    initMusic();
});

// ============================================
// CANVAS — Starfield background
// ============================================
function initCanvas() {
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");
    let w, h;
    const bgStars = [];
    const particles = [];
    const shootingStars = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function createStars() {
        bgStars.length = 0;
        particles.length = 0;
        const density = isMobile ? 0.4 : 1;
        for (let i = 0; i < 350 * density; i++) {
            bgStars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.5 + 0.3,
                a: Math.random() * 0.6 + 0.2,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * 0.008 + 0.002,
                depth: Math.random(), // 0=far, 1=near
            });
        }
        for (let i = 0; i < 60 * density; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.2 + 0.2,
                a: Math.random() * 0.3 + 0.1,
                vx: (Math.random() - 0.5) * 0.08,
                vy: (Math.random() - 0.5) * 0.06,
            });
        }
    }

    resize();
    createStars();
    window.addEventListener("resize", () => { resize(); createStars(); });

    // Mouse parallax
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Shooting stars
    function spawnShootingStar() {
        if (reducedMotion) return;
        shootingStars.push({
            x: Math.random() * w * 0.8,
            y: Math.random() * h * 0.4,
            len: Math.random() * 80 + 40,
            speed: Math.random() * 4 + 3,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
            life: 1,
        });
    }

    setInterval(() => {
        if (Math.random() < 0.4) spawnShootingStar();
    }, 3000);

    // Nebula blobs
    const nebulae = [];
    for (let i = 0; i < 4; i++) {
        nebulae.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 200 + 100,
            hue: Math.random() * 40 + 250, // purple-blue range
            a: Math.random() * 0.015 + 0.005,
        });
    }

    // ---- Render loop ----
    function draw() {
        ctx.clearRect(0, 0, w, h);

        // Parallax offset from mouse
        const cx = (mouseX - w / 2) / w;
        const cy = (mouseY - h / 2) / h;

        // Nebulae (very slow movement)
        for (const n of nebulae) {
            const px = n.x + cx * 15;
            const py = n.y + cy * 15;
            const grad = ctx.createRadialGradient(px, py, 0, px, py, n.r);
            grad.addColorStop(0, `hsla(${n.hue}, 60%, 30%, ${n.a})`);
            grad.addColorStop(1, "transparent");
            ctx.fillStyle = grad;
            ctx.fillRect(px - n.r, py - n.r, n.r * 2, n.r * 2);
        }

        // Background stars
        for (const s of bgStars) {
            s.twinkle += s.twinkleSpeed;
            const alpha = s.a * (0.7 + 0.3 * Math.sin(s.twinkle));
            const parallaxFactor = 0.02 + s.depth * 0.04;
            const sx = s.x + cx * w * parallaxFactor;
            const sy = s.y + cy * h * parallaxFactor;

            ctx.beginPath();
            ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230, 220, 255, ${alpha})`;
            ctx.fill();
        }

        // Particles
        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;
            const px = p.x + cx * 30;
            const py = p.y + cy * 30;
            ctx.beginPath();
            ctx.arc(px, py, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167, 139, 250, ${p.a})`;
            ctx.fill();
        }

        // Shooting stars
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const ss = shootingStars[i];
            ss.x += Math.cos(ss.angle) * ss.speed;
            ss.y += Math.sin(ss.angle) * ss.speed;
            ss.life -= 0.012;
            if (ss.life <= 0) { shootingStars.splice(i, 1); continue; }

            const endX = ss.x - Math.cos(ss.angle) * ss.len;
            const endY = ss.y - Math.sin(ss.angle) * ss.len;
            const grad = ctx.createLinearGradient(ss.x, ss.y, endX, endY);
            grad.addColorStop(0, `rgba(230, 220, 255, ${ss.life * 0.8})`);
            grad.addColorStop(1, "transparent");
            ctx.beginPath();
            ctx.moveTo(ss.x, ss.y);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    if (!reducedMotion) draw();
    else {
        // Static render for reduced motion
        for (const n of nebulae) {
            const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
            grad.addColorStop(0, `hsla(${n.hue}, 60%, 30%, ${n.a})`);
            grad.addColorStop(1, "transparent");
            ctx.fillStyle = grad;
            ctx.fillRect(n.x - n.r, n.y - n.r, n.r * 2, n.r * 2);
        }
        for (const s of bgStars) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(230, 220, 255, ${s.a})`;
            ctx.fill();
        }
    }
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
    if (isMobile || reducedMotion) return;
    const el = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
        document.body.classList.add("cursor-active");
    });
    document.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-active");
    });
}

// ============================================
// SCENE SYSTEM
// ============================================
function initSceneSystem() {
    currentScene = "intro";
}

function transitionTo(sceneId, callback) {
    const current = document.querySelector(".scene.active");
    const next = document.getElementById("scene-" + sceneId);
    if (!next || next === current) return;

    if (current) {
        current.classList.remove("active");
    }

    setTimeout(() => {
        next.classList.add("active");
        currentScene = sceneId;
        if (callback) callback();
    }, reducedMotion ? 50 : 1200);
}

// ============================================
// SCENE 1: INTRO
// ============================================
function initIntro() {
    const line1 = document.querySelector(".line-1");
    const line2 = document.querySelector(".line-2");
    const btn = document.querySelector(".continue-btn");

    setTimeout(() => line1.classList.add("visible"), reducedMotion ? 100 : 800);
    setTimeout(() => line2.classList.add("visible"), reducedMotion ? 200 : 2000);
    setTimeout(() => btn.classList.add("visible"), reducedMotion ? 400 : 4000);

    btn.addEventListener("click", () => {
        transitionTo("chat", startChat);
    });
}

// ============================================
// SCENE 2: FAKE CHAT
// ============================================
function initChat() {}

function startChat() {
    const container = document.querySelector(".chat-messages");
    container.innerHTML = "";
    let delay = 0;

    CONFIG.chatMessages.forEach((text, i) => {
        // Typing indicator
        const typingEl = document.createElement("div");
        typingEl.className = "chat-msg visible";
        typingEl.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
        typingEl.style.transitionDelay = "0s";

        // Message element
        const msgEl = document.createElement("div");
        msgEl.className = "chat-msg";
        msgEl.textContent = text;

        const typingDuration = reducedMotion ? 100 : Math.min(text.length * 30, 1500);
        const pauseAfter = reducedMotion ? 200 : 800;

        setTimeout(() => {
            container.appendChild(typingEl);
            container.scrollTop = container.scrollHeight;
        }, delay);

        delay += typingDuration;

        setTimeout(() => {
            typingEl.remove();
            container.appendChild(msgEl);
            requestAnimationFrame(() => msgEl.classList.add("visible"));
            container.scrollTop = container.scrollHeight;
        }, delay);

        delay += pauseAfter;
    });

    // After all messages, transition to universe
    setTimeout(() => {
        transitionTo("universe", startUniverse);
    }, delay + (reducedMotion ? 500 : 2000));
}

// ============================================
// SCENE 3: INTERACTIVE UNIVERSE / STARS
// ============================================
function initStars() {}

function startUniverse() {
    const container = document.querySelector(".interactive-stars");
    const counter = document.querySelector(".star-counter");
    container.innerHTML = "";
    starsOpened = 0;

    // Show text lines
    setTimeout(() => {
        document.querySelector(".u-line-1").classList.add("visible");
    }, reducedMotion ? 100 : 600);
    setTimeout(() => {
        document.querySelector(".u-line-2").classList.add("visible");
    }, reducedMotion ? 200 : 1800);

    // Show counter
    setTimeout(() => {
        counter.classList.add("visible");
        counter.textContent = `✦ ${starsOpened} / ${CONFIG.starData.length}`;
    }, reducedMotion ? 300 : 3000);

    // Place stars randomly
    const padding = 12;
    CONFIG.starData.forEach((_, i) => {
        const star = document.createElement("div");
        star.className = "i-star";
        star.dataset.index = i;
        star.setAttribute("role", "button");
        star.setAttribute("aria-label", `Star ${i + 1} — click to reveal`);
        star.setAttribute("tabindex", "0");

        const x = padding + Math.random() * (100 - padding * 2);
        const y = 20 + Math.random() * 60; // keep away from text areas
        star.style.left = x + "%";
        star.style.top = y + "%";
        star.style.animationDelay = `${Math.random() * 3}s`;

        star.addEventListener("click", () => openStar(i, star));
        star.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openStar(i, star); }
        });

        container.appendChild(star);
    });
}

function openStar(index, starEl) {
    if (starEl.classList.contains("opened")) return;
    starEl.classList.add("opened");
    starsOpened++;

    const data = CONFIG.starData[index];

    // Build panel
    const overlay = document.createElement("div");
    overlay.className = "star-panel-overlay";

    let photoHtml = "";
    if (data.hasPhoto) {
        photoHtml = `<div class="panel-photo">${data.photoPath}</div>`;
    }

    overlay.innerHTML = `
        <div class="star-panel">
            <h3>${data.title}</h3>
            ${photoHtml}
            ${data.paragraphs.map(p => `<p>${p}</p>`).join("")}
            <button class="close-panel" aria-label="Close">Close</button>
        </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));

    const close = () => {
        overlay.classList.remove("visible");
        setTimeout(() => overlay.remove(), 500);
    };

    overlay.querySelector(".close-panel").addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", function onEsc(e) {
        if (e.key === "Escape") { close(); document.removeEventListener("keydown", onEsc); }
    });

    // Update counter
    const counter = document.querySelector(".star-counter");
    counter.textContent = `✦ ${starsOpened} / ${CONFIG.starData.length}`;

    // All stars opened → save positions, then constellation
    if (starsOpened >= CONFIG.starData.length) {
        // Save star positions before scene hides them
        savedStarPositions = [];
        document.querySelectorAll(".i-star.opened").forEach((s) => {
            const rect = s.getBoundingClientRect();
            savedStarPositions.push({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        });

        setTimeout(() => {
            transitionTo("constellation", startConstellation);
        }, reducedMotion ? 300 : 1500);
    }
}

// ============================================
// SCENE 4: CONSTELLATION
// ============================================
function initConstellation() {
    const photos = document.querySelector(".memory-section");
    CONFIG.memoryPhotos.forEach((p, i) => {
        const el = document.createElement("div");
        el.className = "memory-photo";
        const rotations = [-3, 2, -1];
        const tys = [0, -8, 4];
        el.style.setProperty("--rot", rotations[i] + "deg");
        el.style.setProperty("--ty", tys[i] + "px");
        el.innerHTML = `
            <div class="photo-placeholder">${p.path}</div>
            <div class="photo-caption">${p.caption}</div>
        `;
        photos.appendChild(el);
    });
}

function startConstellation() {
    const svg = document.querySelector(".constellation-lines");
    svg.innerHTML = "";

    // Show text
    setTimeout(() => {
        document.querySelector(".c-line-1").classList.add("visible");
    }, reducedMotion ? 100 : 600);
    setTimeout(() => {
        document.querySelector(".c-line-2").classList.add("visible");
    }, reducedMotion ? 200 : 2000);

    // Use saved star positions
    const positions = savedStarPositions;

    // Draw connecting lines
    if (positions.length > 1) {
        for (let i = 0; i < positions.length - 1; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", positions[i].x);
            line.setAttribute("y1", positions[i].y);
            line.setAttribute("x2", positions[i + 1].x);
            line.setAttribute("y2", positions[i + 1].y);
            svg.appendChild(line);
        }

        setTimeout(() => {
            svg.querySelectorAll("line").forEach((l) => l.classList.add("drawn"));
        }, reducedMotion ? 100 : 300);
    }

    // Show memory photos
    setTimeout(() => {
        document.querySelector(".memory-section").classList.add("visible");
    }, reducedMotion ? 300 : 4000);

    // Transition to cake
    setTimeout(() => {
        transitionTo("cake", startCake);
    }, reducedMotion ? 1500 : 9000);
}

// ============================================
// SCENE 5: CAKE
// ============================================
function initCake() {
    // Add candle shafts
    document.querySelectorAll(".candle").forEach((c) => {
        const shaft = document.createElement("div");
        shaft.className = "candle-shaft";
        c.appendChild(shaft);
    });
}

function startCake() {
    setTimeout(() => {
        document.querySelector(".cake-text-1").classList.add("visible");
    }, reducedMotion ? 100 : 600);
    setTimeout(() => {
        document.querySelector(".cake-text-2").classList.add("visible");
    }, reducedMotion ? 200 : 1600);
    setTimeout(() => {
        document.querySelector(".cake").classList.add("visible");
    }, reducedMotion ? 300 : 2400);
    setTimeout(() => {
        document.querySelector(".wish-hint").classList.add("visible");
    }, reducedMotion ? 400 : 3600);

    // Candle click
    document.querySelectorAll(".candle").forEach((c) => {
        c.addEventListener("click", blowOutCandles);
    });
}

function blowOutCandles() {
    const flames = document.querySelectorAll(".flame");
    flames.forEach((f) => f.classList.add("out"));

    document.querySelector(".wish-hint").classList.remove("visible");
    document.querySelectorAll(".candle").forEach((c) => { c.style.pointerEvents = "none"; });

    // After blow out → wish reveal → final
    setTimeout(() => {
        transitionTo("final", startFinal);
    }, reducedMotion ? 300 : 2500);
}

// ============================================
// SCENE 6: FINAL — HAPPY BIRTHDAY
// ============================================
function initFinal() {
    document.querySelector(".final-name").textContent = CONFIG.finalName;

    const msg = document.querySelector(".final-msg");
    msg.innerHTML = CONFIG.finalMessage.replace(/\n/g, "<br>");

    const small = document.querySelector(".final-msg-small");
    small.innerHTML = CONFIG.finalSmall.replace(/\n/g, "<br>");
}

function startFinal() {
    const els = [".final-title", ".final-msg", ".final-msg-small", ".final-footer"];
    els.forEach((sel, i) => {
        setTimeout(() => {
            document.querySelector(sel).classList.add("visible");
        }, reducedMotion ? 100 * (i + 1) : 600 + i * 800);
    });

    // Shooting star
    if (!reducedMotion) {
        setTimeout(() => {
            const canvas = document.getElementById("starfield");
            // Spawn a big shooting star via custom event
            window.dispatchEvent(new CustomEvent("bigShootingStar"));
        }, 800);
    }

    // Confetti
    if (!reducedMotion) {
        setTimeout(() => startConfetti(), 1500);
    }
}

// ---- Confetti ----
function startConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

    const pieces = [];
    const colors = ["#a78bfa", "#c4b5fd", "#818cf8", "#e0d4fc", "#fde68a", "#f0abfc"];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            w: Math.random() * 8 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 1.5,
            vy: Math.random() * 2 + 1,
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.1,
            opacity: 1,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        for (const p of pieces) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.02; // gravity
            p.rot += p.rotSpeed;

            if (p.y > canvas.height * 0.8) p.opacity -= 0.008;
            if (p.opacity <= 0) continue;
            alive = true;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }

        if (alive) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    animate();
}

// ============================================
// MUSIC TOGGLE
// ============================================
function initMusic() {
    const audio = document.getElementById("bg-music");
    const btn = document.getElementById("sound-toggle");

    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => btn.classList.add("playing")).catch(() => {});
        } else {
            audio.pause();
            btn.classList.remove("playing");
        }
    });
}
