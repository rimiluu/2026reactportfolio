import { Fragment } from "react";
import styled from "styled-components";
import { sectionHeading } from "../sharedStyles";

export const FieldRoot = styled.div.attrs(({ $variant }) => ({
  className: ["field", $variant].filter(Boolean).join(" "),
  "data-reveal": "",
}))`
  display: grid;
  grid-template-columns: ${({ $variant }) =>
    $variant === "make-feedback" ? "1fr" : "minmax(340px, 0.72fr) minmax(0, 1.28fr)"};
  align-content: center;
  justify-items: center;
  gap: 0 54px;
  min-height: calc(100svh - var(--header-height));
  padding: 80px clamp(70px, 10vw, 220px);
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  scroll-snap-align: start;
  scroll-snap-stop: always;

  ${sectionHeading}

  h3 {
    grid-column: 1 / -1;
    text-align: ${({ $variant }) => ($variant === "make-feedback" ? "center" : "left")};
  }

  .map-visual {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    display: block;
    width: min(862px, 100%);
    height: auto;
    object-fit: contain;
  }

  dl {
    display: grid;
    grid-column: 1;
    grid-row: 2;
    grid-template-columns: minmax(0, 1fr) max-content;
    gap: clamp(46px, 7vh, 82px) clamp(24px, 3vw, 48px);
    align-items: baseline;
    justify-self: center;
    width: min(100%, 620px);
    margin: 0;
  }

  dt {
    font-size: clamp(20px, 1.6vw, 32px);
    font-weight: 800;
    white-space: nowrap;
  }

  dd {
    margin: 0;
    min-width: max-content;
    font-size: clamp(36px, 4vw, 54px);
    font-weight: 900;
    letter-spacing: 0.08em;
    overflow-wrap: normal;
    white-space: nowrap;
  }

  > p {
    grid-column: 1 / -1;
    width: min(920px, 100%);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: var(--mobile-section-space) var(--mobile-gutter);

    .map-visual,
    dl,
    > p {
      grid-column: auto;
      grid-row: auto;
    }

    dl {
      grid-template-columns: max-content max-content;
      gap: 34px 70px;
      justify-self: start;
      width: fit-content;
      max-width: 100%;
    }

    dt {
      font-size: inherit;
      white-space: normal;
    }

    dd {
      display: inline-block;
      min-width: 0;
      font-size: 28px;
      line-height: 1.1;
    }

    &.make-feedback {
      border-bottom: 0;
    }
  }

  @media (max-width: 560px) {
    gap: 36px;

    dl {
      gap: 22px 56px;
    }
  }
`;

export function FieldSection({ field }) {
  if (!field) return null;

  return (
    <FieldRoot>
      <h3 data-motion="65">{field.heading}</h3>
      <img className="map-visual" data-motion="66" src={field.image} alt={field.imageAlt} />
      {field.stats ? (
        <dl>
          {field.stats.map(([term, detail]) => (
            <Fragment key={term}>
              <dt data-motion="67">{term}</dt>
              <dd data-motion="68">{detail}</dd>
            </Fragment>
          ))}
        </dl>
      ) : null}
      {field.text ? <p data-motion="69">{field.text}</p> : null}
    </FieldRoot>
  );
}
