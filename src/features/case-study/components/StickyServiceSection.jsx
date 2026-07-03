import styled from "styled-components";
import { useStickyServiceSteps } from "../useStickyServiceSteps";

const ServiceRoot = styled.div.attrs(({ $variant }) => ({
  className: `service sticky-service ${$variant}`,
  "data-reveal": "",
}))`
  display: grid;
  align-content: start;
  min-height: calc(100svh - var(--header-height));
  padding: 0 0 clamp(46px, 6vh, 82px);
  background-color: #d8d8d8;
  overflow: clip;
  scroll-snap-align: start;

  ${({ $variant }) =>
    $variant === "honnova-service-design"
      ? `
        background-image:
          linear-gradient(rgba(216, 216, 216, 0.62), rgba(216, 216, 216, 0.62)),
          url("${import.meta.env.BASE_URL}assets/honnova-thumb.jpg.png");
      `
      : ""}

  ${({ $variant }) =>
    $variant === "cast-service-design"
      ? `
        background-image:
          linear-gradient(rgba(216, 216, 216, 0.62), rgba(216, 216, 216, 0.62)),
          url("${import.meta.env.BASE_URL}assets/kamiyamacast-top-2.jpg");
      `
      : ""}

  ${({ $variant }) =>
    $variant === "make-service-design"
      ? `
        background-image:
          linear-gradient(rgba(216, 216, 216, 0.62), rgba(216, 216, 216, 0.62)),
          url("${import.meta.env.BASE_URL}assets/makeyou-back.png");
      `
      : ""}

  background-position: center top;
  background-size: 100% auto;
  background-repeat: repeat-y;

  > .eyebrow {
    width: min(1460px, calc(100% - clamp(72px, 12vw, 220px)));
    margin: 0 auto;
    padding: clamp(18px, 2vh, 28px) 0 clamp(8px, 1vh, 16px);
    color: ${({ theme }) => theme.colors.ink};
    font-size: clamp(13px, 0.9vw, 16px);
    font-weight: 800;
    line-height: 1;
    letter-spacing: 0.16em;
    text-align: left;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding-bottom: 0;

    > .eyebrow {
      width: auto;
      margin: 0;
      padding: 28px 22px 12px;
    }
  }
`;

const StickyServiceBody = styled.div.attrs({ className: "sticky-service-body" })`
  display: grid;
  grid-template-columns: minmax(330px, 0.72fr) minmax(430px, 1fr);
  gap: 0;
  width: min(1460px, calc(100% - clamp(72px, 12vw, 220px)));
  min-height: clamp(560px, calc(100svh - var(--header-height) - 74px), 760px);
  margin: 0 auto;
  padding: 0;
  background: ${({ theme }) => theme.colors.paper};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 0;
    width: auto;
    margin: 0;
    padding: 0 22px 42px;
  }
`;

const ServiceFixedVisual = styled.div.attrs({ className: "service-fixed-visual" })`
  position: sticky;
  top: calc(var(--header-height) + 46px);
  display: grid;
  place-items: center;
  align-self: start;
  min-height: clamp(560px, calc(100svh - var(--header-height) - 74px), 760px);
  padding: clamp(42px, 6vh, 70px) clamp(30px, 4vw, 72px);
  background: ${({ theme }) => theme.colors.paper};
  border-right: 1px solid ${({ theme }) => theme.colors.line};

  &:not(:has(.media-service-screen)):not(:has(.service-screen--landscape.is-active))::before {
    content: "";
    position: absolute;
    top: clamp(78px, 9vh, 118px);
    left: 50%;
    z-index: 2;
    width: clamp(54px, 4vw, 76px);
    height: 10px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.ink};
    transform: translateX(-50%);
  }

  @media (max-width: 900px) {
    top: var(--header-height);
    z-index: 3;
    min-height: auto;
    padding: 16px 20px;
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }
`;

const ServiceScreenStack = styled.div.attrs(({ $variant }) => ({
  className: ["service-screen-stack", $variant].filter(Boolean).join(" "),
}))`
  position: relative;
  width: ${({ $variant }) =>
    $variant?.includes("is-landscape-active") || $variant?.includes("service-screen-stack--media")
      ? "min(100%, clamp(260px, 28vw, 420px))"
      : "min(100%, clamp(170px, 18vw, 260px))"};
  aspect-ratio: ${({ $variant }) =>
    $variant?.includes("is-landscape-active") || $variant?.includes("service-screen-stack--media") ? "4 / 3" : "0.48"};

  .service-screen {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 0.48;
    object-fit: cover;
    background: ${({ theme }) => theme.colors.paper};
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .service-screen.is-active {
    opacity: 1;
  }

  .service-screen:not(.media-service-screen) {
    border: 1.5px solid #555555;
    border-radius: clamp(30px, 3vw, 48px);
    box-shadow: inset 0 -42px 38px rgba(255, 255, 255, 0.85);
  }

  .service-screen--landscape,
  .media-service-screen {
    aspect-ratio: 4 / 3;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .media-service-screen {
    aspect-ratio: 1.42;
  }

  .cast-service-screen {
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;
    border: 1px solid ${({ theme }) => theme.colors.line};
    object-fit: cover;
  }

  @media (max-width: 900px) {
    width: ${({ $variant }) =>
      $variant?.includes("is-landscape-active") || $variant?.includes("service-screen-stack--media")
        ? "min(100%, 320px)"
        : "min(46vw, 170px)"};
  }
`;

const ServiceCopy = styled.div.attrs({ className: "service-copy" })`
  display: grid;
  min-width: 0;
`;

const ServiceStep = styled.div.attrs({ className: "service-step" })`
  --service-step-number-top: clamp(86px, 11vh, 124px);
  position: relative;
  display: block;
  min-height: clamp(560px, calc(100svh - var(--header-height) - 74px), 760px);
  padding: 0 clamp(80px, 8vw, 130px) clamp(70px, 9vh, 110px) clamp(58px, 6vw, 96px);
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  &:last-child {
    border-bottom: 0;
  }

  .service-step__number {
    position: absolute;
    top: var(--service-step-number-top);
    right: clamp(18px, 2vw, 34px);
    z-index: 0;
    display: block;
    width: clamp(96px, 10vw, 180px);
    height: auto;
  }

  h3,
  p {
    position: relative;
    z-index: 1;
  }

  h3 {
    margin: 0 0 40px;
    padding-top: clamp(190px, 26vh, 270px);
    font-size: clamp(30px, 3vw, 52px);
    line-height: 1.15;
    letter-spacing: 0.08em;
  }

  p {
    max-width: 520px;
    margin: 0;
    color: #383832;
    font-size: clamp(15px, 1.05vw, 20px);
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: 64px 22px 52px;
    border-top: 1px solid ${({ theme }) => theme.colors.line};

    .service-step__number {
      top: 64px;
      right: 18px;
      width: clamp(72px, 24vw, 120px);
    }

    h3 {
      margin-bottom: 20px;
      padding-top: 0;
    }
  }
`;

function ServiceScreen({ screen, isActive, service }) {
  const className = [
    "service-screen",
    service.screenClassName,
    screen.className,
    isActive ? "is-active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <img className={className} data-service-image={screen.id} src={screen.src} alt="" />;
}

export function StickyServiceSection({ service }) {
  const { activeStep, setStepRef, stackVariant } = useStickyServiceSteps(service);

  return (
    <ServiceRoot $variant={service.className}>
      <p className="eyebrow">{service.eyebrow}</p>
      <StickyServiceBody>
        <ServiceFixedVisual>
          <ServiceScreenStack $variant={stackVariant}>
            {service.screens.map((screen) => (
              <ServiceScreen key={screen.id} screen={screen} isActive={screen.id === activeStep} service={service} />
            ))}
          </ServiceScreenStack>
        </ServiceFixedVisual>
        <ServiceCopy>
          {service.steps.map(([id, numberSrc, numberAlt, heading, text]) => (
            <ServiceStep data-service-step={id} key={id} ref={setStepRef(id)}>
              <img className="service-step__number" src={numberSrc} alt={numberAlt} />
              <h3>{heading}</h3>
              <p>{text}</p>
            </ServiceStep>
          ))}
        </ServiceCopy>
      </StickyServiceBody>
    </ServiceRoot>
  );
}
