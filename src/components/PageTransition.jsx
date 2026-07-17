import { useEffect, useLayoutEffect, useRef } from "react";
import { animate } from "animejs";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { asset } from "../utils/assets";

const TransitionLayer = styled.div.attrs({ "aria-hidden": "true" })`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.paper};
  background: ${({ theme }) => theme.colors.ink};
  pointer-events: none;
  transform: translateX(100%);
  will-change: transform;

  img {
    display: block;
    width: min(74vw, 920px);
    height: auto;
    transform: scale(0.72) rotate(-3deg);
    opacity: 0;
    will-change: transform, opacity;
  }

  @media (max-width: 700px) {
    img {
      width: min(82vw, 560px);
    }
  }
`;

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

function toRouterPath(url) {
  const pathname = basename && url.pathname.startsWith(basename)
    ? url.pathname.slice(basename.length) || "/"
    : url.pathname;

  return `${pathname}${url.search}${url.hash}`;
}

export function PageTransition({ children }) {
  const layerRef = useRef(null);
  const transitionRef = useRef(null);
  const titleTransitionRef = useRef(null);
  const fallbackRef = useRef(null);
  const isCoveredRef = useRef(false);
  const skipNextTransitionRef = useRef(false);
  const isFirstRenderRef = useRef(true);
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return undefined;
    }

    const layer = layerRef.current;
    if (!layer) return undefined;

    if (skipNextTransitionRef.current) {
      skipNextTransitionRef.current = false;
      isCoveredRef.current = false;
      window.clearTimeout(fallbackRef.current);
      transitionRef.current?.cancel();
      titleTransitionRef.current?.cancel();
      layer.style.transform = "translateX(100%)";
      const title = layer.querySelector("img");
      if (title) {
        title.style.opacity = "0";
        title.style.transform = "scale(0.72) rotate(-3deg)";
      }
      return undefined;
    }

    window.clearTimeout(fallbackRef.current);
    if (!isCoveredRef.current) layer.style.transform = "translateX(0)";

    isCoveredRef.current = false;
    transitionRef.current?.cancel();
    const title = layer.querySelector("img");
    if (title) {
      titleTransitionRef.current?.cancel();
      titleTransitionRef.current = animate(title, {
        opacity: [1, 0],
        scale: [1, 1.12],
        rotate: [0, 1],
        duration: 360,
        ease: "in(3)",
      });
    }

    const hideLayer = () => {
      window.clearTimeout(fallbackRef.current);
      layer.style.transform = "translateX(100%)";
      if (title) {
        title.style.opacity = "0";
        title.style.transform = "scale(0.72) rotate(-3deg)";
      }
      transitionRef.current = null;
    };

    transitionRef.current = animate(layer, {
      x: ["0%", "-100%"],
      delay: 160,
      duration: 440,
      ease: "inOut(3)",
      onComplete: hideLayer,
    });
    fallbackRef.current = window.setTimeout(hideLayer, 720);

    return undefined;
  }, [location.key]);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = event.target.closest("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || !["http:", "https:"].includes(url.protocol)) return;

      const current = new URL(window.location.href);
      if (anchor.dataset.transition === "instant") {
        skipNextTransitionRef.current =
          url.pathname !== current.pathname ||
          url.search !== current.search ||
          url.hash !== current.hash;
        return;
      }
      if (url.pathname === current.pathname && url.search === current.search) return;
      if (isCoveredRef.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      const layer = layerRef.current;
      if (!layer) {
        navigate(toRouterPath(url));
        return;
      }

      isCoveredRef.current = true;
      window.clearTimeout(fallbackRef.current);
      transitionRef.current?.cancel();
      layer.style.transform = "translateX(100%)";
      const title = layer.querySelector("img");
      if (title) {
        titleTransitionRef.current?.cancel();
        titleTransitionRef.current = animate(title, {
          opacity: [0, 1],
          scale: [0.72, 1],
          rotate: [-3, 0],
          delay: 90,
          duration: 420,
          ease: "outBack(1.5)",
        });
      }

      let navigated = false;
      const finishNavigation = () => {
        if (navigated) return;
        navigated = true;
        window.clearTimeout(fallbackRef.current);
        layer.style.transform = "translateX(0)";
        navigate(toRouterPath(url));
      };

      transitionRef.current = animate(layer, {
        x: ["100%", "0%"],
        duration: 560,
        ease: "inOut(3)",
        onComplete: finishNavigation,
      });
      fallbackRef.current = window.setTimeout(finishNavigation, 700);
    };

    document.addEventListener("click", onDocumentClick, true);
    return () => {
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [navigate]);

  useEffect(() => () => {
    window.clearTimeout(fallbackRef.current);
    transitionRef.current?.cancel();
    titleTransitionRef.current?.cancel();
  }, []);

  return (
    <>
      {children}
      <TransitionLayer ref={layerRef}>
        <img src={asset("assets/portfolio_white.svg")} alt="" />
      </TransitionLayer>
    </>
  );
}
