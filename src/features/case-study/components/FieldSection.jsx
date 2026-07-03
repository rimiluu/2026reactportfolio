import { Fragment } from "react";
import styled from "styled-components";
import { sectionHeading } from "../sharedStyles";

export const FieldRoot = styled.div.attrs(({ $variant }) => ({
  className: ["field", $variant].filter(Boolean).join(" "),
  "data-reveal": "",
}))`
  display: grid;
  grid-template-columns: ${({ $variant }) =>
    $variant === "make-feedback" ? "1fr" : "minmax(320px, 0.58fr) minmax(660px, 1.32fr)"};
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
    grid-template-columns: minmax(150px, auto) auto;
    gap: clamp(46px, 7vh, 82px) clamp(60px, 6vw, 100px);
    align-items: baseline;
    justify-self: center;
    width: min(100%, 620px);
    margin: 0;
  }

  dt {
    font-size: clamp(22px, 1.8vw, 36px);
    font-weight: 800;
    white-space: nowrap;
  }

  dd {
    margin: 0;
    font-size: 54px;
    font-weight: 900;
    letter-spacing: 0.08em;
  }

  > p {
    grid-column: 1 / -1;
    width: min(920px, 100%);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 64px 22px;

    .map-visual,
    dl,
    > p {
      grid-column: auto;
      grid-row: auto;
    }

    dl {
      grid-template-columns: 1fr auto;
      gap: 34px 72px;
      width: min(520px, 100%);
    }

    dt {
      font-size: inherit;
    }

    dd {
      font-size: 24px;
    }
  }

  @media (max-width: 560px) {
    gap: 36px;

    dl {
      gap: 22px 36px;
    }
  }
`;

export function FieldSection({ field }) {
  if (!field) return null;

  return (
    <FieldRoot>
      <h3>{field.heading}</h3>
      <img className="map-visual" src={field.image} alt={field.imageAlt} />
      {field.stats ? (
        <dl>
          {field.stats.map(([term, detail]) => (
            <Fragment key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </Fragment>
          ))}
        </dl>
      ) : null}
      {field.text ? <p>{field.text}</p> : null}
    </FieldRoot>
  );
}
