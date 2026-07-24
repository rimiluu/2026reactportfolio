import { useEffect } from "react";
import { animate, stagger } from "animejs";

const presets = {
  fade: { opacity: [0, 1], scale: [0.98, 1] },
  rise: { opacity: [0, 1], y: [72, 0], scale: [0.98, 1] },
  riseSoft: { opacity: [0, 1], y: [42, 0] },
  left: { opacity: [0, 1], x: [-92, 0], rotate: [-1, 0] },
  right: { opacity: [0, 1], x: [92, 0], rotate: [1, 0] },
  scale: { opacity: [0, 1], scale: [0.82, 1] },
  pop: { opacity: [0, 1], scale: [0.48, 1], rotate: [-4, 0] },
  tiltLeft: { opacity: [0, 1], x: [-96, 0], y: [48, 0], rotate: [-7, 0] },
  tiltRight: { opacity: [0, 1], x: [96, 0], y: [48, 0], rotate: [7, 0] },
  lineX: { opacity: [0, 1], scaleX: [0, 1] },
  lineY: { opacity: [0, 1], scaleY: [0, 1] },
};

// The 80 experiments discussed for the portfolio live here as small, reversible recipes.
export const portfolioMotionRecipes = [
  { id: 1, scope: ".hero", target: "self", preset: "fade" },
  { id: 2, scope: ".hero", target: ".desktop-hero-content .kana img", preset: "left", delay: 80 },
  { id: 3, scope: ".hero", target: ".desktop-hero-content h1 img", preset: "left", delay: 150 },
  { id: 4, scope: ".hero", target: ".tags", preset: "riseSoft", delay: 260 },
  { id: 5, scope: ".hero", target: ".years img", preset: "right", delay: 180 },
  { id: 6, scope: ".hero", target: ".mobile-hero-logo", preset: "tiltLeft", delay: 90 },
  { id: 7, scope: ".hero", target: ".mobile-hero-year", preset: "tiltRight", delay: 180 },
  { id: 8, scope: ".hero", target: ".mobile-hero-art", preset: "scale" },

  { id: 9, scope: ".about", target: ".photo", preset: "tiltLeft" },
  { id: 10, scope: ".about", target: ".profile .eyebrow", preset: "riseSoft", delay: 80 },
  { id: 11, scope: ".about", target: ".profile .kana", preset: "left", delay: 140 },
  { id: 12, scope: ".about", target: ".profile > p:last-child", preset: "rise", delay: 220 },
  { id: 13, scope: ".about", target: ".profile", preset: "fade" },

  { id: 14, scope: ".care", target: ".care-head .eyebrow", preset: "left" },
  { id: 15, scope: ".care", target: ".care-head h2", preset: "left", delay: 70 },
  { id: 16, scope: ".care", target: ".care-head > p:last-child", preset: "riseSoft", delay: 130 },
  { id: 17, scope: ".care", target: ".care-list", preset: "lineX", delay: 130 },
  { id: 18, scope: ".care", target: ".care-list section", preset: "rise", delay: 190, stagger: 90 },
  { id: 19, scope: ".care", target: ".care-future", preset: "riseSoft", delay: 360 },

  { id: 20, scope: ".map", target: "self", preset: "fade" },
  { id: 21, scope: ".map", target: "h2", preset: "left" },
  { id: 22, scope: ".map", target: "button", preset: "pop", delay: 80, stagger: 45 },
  { id: 23, scope: ".map", target: ".map-item", preset: "rise", delay: 170, stagger: 85 },
  { id: 24, scope: ".map", target: ".map-item strong", preset: "pop", delay: 240, stagger: 85 },
  { id: 25, scope: ".map", target: ".map-item span", preset: "left", delay: 270, stagger: 85 },
  { id: 26, scope: ".map", target: ".map-item .thumb", preset: "scale", delay: 210, stagger: 85 },
  { id: 27, scope: ".map", target: ".map-item-desc", preset: "riseSoft", delay: 310, stagger: 85 },
  { id: 28, scope: ".map", target: ".map-item:nth-of-type(even)", preset: "tiltRight", delay: 160, stagger: 80 },

  { id: 29, scope: ".info", target: ".skills h2", preset: "left" },
  { id: 30, scope: ".info", target: ".skill-item", preset: "rise", delay: 80, stagger: 85 },
  { id: 31, scope: ".info", target: ".skill-head h3", preset: "left", delay: 130, stagger: 65 },
  { id: 32, scope: ".info", target: ".tool-icons figure", preset: "pop", delay: 180, stagger: 35 },
  { id: 33, scope: ".info", target: ".skill-item p", preset: "riseSoft", delay: 210, stagger: 45 },
  { id: 34, scope: ".info", target: ".contact h2", preset: "right", delay: 100 },
  { id: 35, scope: ".info", target: ".contact dl > div", preset: "right", delay: 170, stagger: 90 },
  { id: 36, scope: ".info", target: ".contact a", preset: "pop", delay: 380, stagger: 45 },

  { id: 37, scope: ".honnova-intro-lock", target: ".honnova-logo-img, .makeyou-logo-img", preset: "scale" },
  { id: 38, scope: ".honnova-intro-lock", target: ".honnova-logo-panel > div", preset: "rise" },
  { id: 39, scope: ".honnova-intro-lock", target: ".honnova-overview-panel > div > div", preset: "rise", delay: 120, stagger: 100 },
  { id: 40, scope: ".honnova-intro-lock", target: ".honnova-fixed-mock img", preset: "scale", delay: 180, stagger: 110 },
  { id: 41, scope: ".honnova-intro-lock", target: ".honnova-fixed-mock img:nth-child(even)", preset: "tiltRight", delay: 220 },

  { id: 42, scope: ".problem", target: "h3", preset: "left" },
  { id: 43, scope: ".problem", target: ".problem-list > div", preset: "rise", delay: 100, stagger: 120 },
  { id: 44, scope: ".problem", target: ".thumb", preset: "pop", delay: 140, stagger: 120 },
  { id: 45, scope: ".problem", target: ".problem-list p", preset: "right", delay: 170, stagger: 120 },

  { id: 46, scope: ".concept-zone", target: "self", preset: "scale" },
  { id: 47, scope: ".concept-zone", target: "h3", preset: "left", delay: 80 },
  { id: 48, scope: ".concept-zone", target: "p", preset: "right", delay: 150 },
  { id: 49, scope: ".concept-zone", target: "p span", preset: "riseSoft", delay: 190, stagger: 65 },

  { id: 50, scope: ".sticky-service", target: ":scope > .eyebrow", preset: "left" },
  { id: 51, scope: ".sticky-service", target: ".sticky-service-body", preset: "scale", delay: 70 },
  { id: 52, scope: ".sticky-service", target: ".service-fixed-visual", preset: "left", delay: 100 },
  { id: 53, scope: ".sticky-service", target: ".service-screen-stack", preset: "pop", delay: 180 },
  { id: 54, scope: ".sticky-service", target: ".service-step__number", preset: "pop", delay: 130, stagger: 100 },
  { id: 55, scope: ".sticky-service", target: ".service-step h3", preset: "right", delay: 170, stagger: 100 },
  { id: 56, scope: ".sticky-service", target: ".service-step p", preset: "riseSoft", delay: 220, stagger: 100 },
  { id: 57, scope: ".sticky-service", target: ".service-step", preset: "fade", delay: 80, stagger: 80 },

  { id: 58, scope: ".make-feedback", target: "h3", preset: "rise" },
  { id: 59, scope: ".make-feedback", target: ".feedback-bubbles p", preset: "pop", delay: 100, stagger: 130 },
  { id: 60, scope: ".make-feedback", target: ".feedback-bubbles", preset: "scale", delay: 70 },

  { id: 61, scope: ".audio-section", target: ".audio-section__copy h3", preset: "left" },
  { id: 62, scope: ".audio-section", target: ".audio-section__copy p", preset: "left", delay: 90 },
  { id: 63, scope: ".audio-section", target: ".text-link", preset: "pop", delay: 170 },
  { id: 64, scope: ".audio-section", target: ".audio-card", preset: "tiltRight", delay: 120 },

  { id: 65, scope: ".field:not(.make-feedback)", target: "h3", preset: "left" },
  { id: 66, scope: ".field:not(.make-feedback)", target: ".map-visual", preset: "scale", delay: 120 },
  { id: 67, scope: ".field:not(.make-feedback)", target: "dt", preset: "left", delay: 140, stagger: 90 },
  { id: 68, scope: ".field:not(.make-feedback)", target: "dd", preset: "pop", delay: 190, stagger: 90 },
  { id: 69, scope: ".field:not(.make-feedback)", target: ":scope > p", preset: "rise", delay: 170 },

  { id: 70, scope: ".process", target: "h3", preset: "rise" },
  { id: 71, scope: ".process", target: ".timeline-line", preset: "lineY", delay: 90 },
  { id: 72, scope: ".process", target: ".timeline > div", preset: "left", delay: 140, stagger: 140 },
  { id: 73, scope: ".process", target: ".timeline-dot", preset: "pop", delay: 190, stagger: 140 },

  { id: 74, scope: ".role", target: "h3", preset: "rise" },
  { id: 75, scope: ".role", target: ".role-card", preset: "rise", delay: 100, stagger: 110 },
  { id: 76, scope: ".role", target: ".role-card h4, .role-card p", preset: "riseSoft", delay: 170, stagger: 55 },

  { id: 77, scope: ".final-grid", target: "article", preset: "rise", stagger: 120 },
  { id: 78, scope: ".final-grid", target: "article h3, article p", preset: "riseSoft", delay: 100, stagger: 70 },
  { id: 79, scope: ".mini-case-hero, .mini-case-photo, .mini-case-row, .mini-case-text", target: ":scope > *", preset: "rise", stagger: 90 },
  { id: 80, scope: ".contact-shell", target: "header, aside, form, label", preset: "rise", stagger: 100 },
];

const getTargets = (root, recipeId) => {
  const id = String(recipeId);
  const targets = root.matches(`[data-motion~="${id}"]`) ? [root] : [];

  root.querySelectorAll(`[data-motion~="${id}"]`).forEach((target) => {
    if (target.closest("[data-reveal]") === root) targets.push(target);
  });

  return targets;
};

const playRecipe = (root, recipe) => {
  const targets = getTargets(root, recipe.id);
  if (!targets.length) return null;

  targets.forEach((target) => {
    target.dataset.motionApplied = String(recipe.id);
  });

  const baseDelay = Math.round((recipe.delay ?? 0) * 0.55);

  return animate(targets, {
    ...presets[recipe.preset],
    duration: recipe.duration ?? 520,
    delay: recipe.stagger
      ? stagger(Math.round(recipe.stagger * 0.55), { start: baseDelay + 10 })
      : baseDelay,
    ease: recipe.preset === "pop" ? "outBack(1.85)" : "out(3)",
  });
};

const animateHover = (target, entering) => {
  const card = target.closest(".map-item, .role-card, .final-grid article, .feedback-bubbles p, .audio-card, .skill-item");
  const control = target.closest("button, .nav a, .text-link, .footer a");

  if (card) {
    animate(card, { y: entering ? -12 : 0, scale: entering ? 1.018 : 1, duration: 420, ease: "out(3)" });
    const visual = card.querySelector(".thumb, img, iframe");
    if (visual) animate(visual, { scale: entering ? 1.055 : 1, duration: 560, ease: "out(3)" });
  }

  if (control) {
    animate(control, { y: entering ? -5 : 0, scale: entering ? 1.06 : 1, duration: 320, ease: "out(3)" });
  }
};

export function usePortfolioMotion(pageId) {
  useEffect(() => {
    const roots = [...document.querySelectorAll("[data-reveal]")];
    const animations = [];

    document.documentElement.classList.add("motion-ready");

    const reveal = (root) => {
      if (root.dataset.motionPlayed === "true") return;
      root.dataset.motionPlayed = "true";
      root.classList.add("is-visible");

      const matching = portfolioMotionRecipes.filter((recipe) => getTargets(root, recipe.id).length > 0);
      if (!matching.length) {
        animations.push(animate(root, {
          opacity: [0, 1],
          y: [90, 0],
          scale: [0.97, 1],
          duration: 500,
          ease: "out(3)",
        }));
        return;
      }

      matching.forEach((recipe) => {
        const animation = playRecipe(root, recipe);
        if (animation) animations.push(animation);
      });

      if (root.matches(".field:not(.make-feedback)")) {
        root.querySelectorAll("dd").forEach((element) => {
          const original = element.textContent.trim();
          const numeric = Number(original.replace(/[^0-9.-]/g, ""));
          if (!Number.isFinite(numeric)) return;
          const suffix = original.replace(/[0-9.,-]/g, "");
          const counter = { value: 0 };
          let latestValue = 0;
          element.textContent = `0${suffix}`;

          animations.push(animate(counter, {
            value: numeric,
            duration: 1150,
            delay: 180,
            ease: "out(3)",
            onUpdate: () => {
              const progress = numeric === 0 ? 1 : counter.value / numeric;
              const randomLift = Math.random() * numeric * 0.08 * (1 - progress);
              latestValue = Math.max(latestValue, Math.min(numeric, counter.value + randomLift));
              element.textContent = `${Math.round(latestValue).toLocaleString("ja-JP")}${suffix}`;
            },
            onComplete: () => {
              element.textContent = `${Math.round(numeric).toLocaleString("ja-JP")}${suffix}`;
            },
          }));
        });
      }

      if (root.matches(".concept-zone")) {
        animations.push(animate(root, {
          backgroundPositionY: ["66%", "50%"],
          duration: 900,
          ease: "out(3)",
        }));
      }

    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -15%", threshold: 0.1 },
    );

    roots.forEach((root) => observer.observe(root));

    const hoverSelector = ".map-item, .role-card, .final-grid article, .feedback-bubbles p, .audio-card, .skill-item, button, .nav a, .text-link, .footer a";
    const onPointerOver = (event) => {
      if (event.target.closest("[data-motion-hover='false']")) return;
      const current = event.target.closest(hoverSelector);
      const related = event.relatedTarget instanceof Element ? event.relatedTarget.closest(hoverSelector) : null;
      if (!current || current === related) return;
      animateHover(event.target, true);
    };
    const onPointerOut = (event) => {
      const current = event.target.closest(hoverSelector);
      const related = event.relatedTarget instanceof Element ? event.relatedTarget.closest(hoverSelector) : null;
      if (!current || current === related) return;
      animateHover(event.target, false);
    };
    const onFocusIn = (event) => {
      const field = event.target.closest("label");
      if (field) animate(field, { x: 7, duration: 260, ease: "out(3)" });
    };
    const onFocusOut = (event) => {
      const field = event.target.closest("label");
      if (field) animate(field, { x: 0, duration: 260, ease: "out(3)" });
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);

    const headerTargets = document.querySelectorAll(".topbar .brand, .topbar .nav a");
    animations.push(animate(headerTargets, {
      opacity: [0, 1],
      y: [-42, 0],
      rotate: [-2, 0],
      delay: stagger(70, { start: 40 }),
      duration: 480,
      ease: "outBack(1.45)",
    }));

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation?.cancel());
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
      roots.forEach((root) => delete root.dataset.motionPlayed);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pageId]);
}
