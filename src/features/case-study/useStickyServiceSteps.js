import { useEffect, useMemo, useRef, useState } from "react";

export function useStickyServiceSteps(service) {
  const [activeStep, setActiveStep] = useState(service.steps[0][0]);
  const stepRefs = useRef(new Map());

  const activeScreen = useMemo(
    () => service.screens.find((screen) => screen.id === activeStep),
    [activeStep, service.screens],
  );

  const stackVariant = [
    service.stackClassName,
    activeScreen?.className?.includes("service-screen--landscape") ? "is-landscape-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveStep(entry.target.dataset.serviceStep);
        });
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    );

    const nodes = [...stepRefs.current.values()];
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [service.steps]);

  const setStepRef = (id) => (node) => {
    if (node) {
      stepRefs.current.set(id, node);
    } else {
      stepRefs.current.delete(id);
    }
  };

  return { activeStep, setStepRef, stackVariant };
}
