import styled from "styled-components";

const ProcessRoot = styled.div.attrs({ className: "process honnova-process", "data-reveal": "" })`
  position: relative;
  display: grid;
  isolation: isolate;
  min-height: calc(100svh - var(--header-height));
  padding: 80px clamp(70px, 10vw, 220px);
  background: #ffffff url("${import.meta.env.BASE_URL}assets/honnoba-aws.png") center / cover no-repeat;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background: rgba(0, 0, 0, 0.48);
    backdrop-filter: blur(1px) saturate(0.82);
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h3 {
    margin: 0 0 40px;
    color: #ffffff;
    font-size: clamp(26px, 2vw, 42px);
    letter-spacing: 0.14em;
    text-align: center;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: var(--mobile-section-space) var(--mobile-gutter);
  }
`;

const Timeline = styled.div.attrs({ className: "timeline" })`
  position: relative;
  display: grid;
  gap: 92px;
  width: min(820px, 100%);
  margin: 60px auto 0;

  .timeline-line {
    position: absolute;
    left: 22px;
    top: 12px;
    bottom: 12px;
    width: 3px;
    background: rgba(255, 255, 255, 0.92);
    transform-origin: center top;
  }

  div {
    position: relative;
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 36px;
  }

  span {
    color: #ffffff;
    font-weight: 900;
  }

  .timeline-dot {
    position: absolute;
    left: 10px;
    top: 26px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
  }

  p {
    margin: 0;
    color: #ffffff;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 560px) {
    gap: 66px;

    div {
      grid-template-columns: 70px 1fr;
      gap: 24px;
    }
  }
`;

export function TimelineSection({ timeline }) {
  if (!timeline) return null;

  return (
    <ProcessRoot>
      <h3 data-motion="70">Process &amp; Achievement</h3>
      <Timeline>
        <span className="timeline-line" data-motion="71" aria-hidden="true" />
        {timeline.map(([year, text]) => (
          <div data-motion="72" key={year}>
            <span>{year}</span>
            <i className="timeline-dot" data-motion="73" aria-hidden="true" />
            <p>{text}</p>
          </div>
        ))}
      </Timeline>
    </ProcessRoot>
  );
}
