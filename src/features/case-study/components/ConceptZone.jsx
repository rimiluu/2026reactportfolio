import styled from "styled-components";

const ConceptRoot = styled.div.attrs(({ $variant }) => ({
  className: `concept-zone ${$variant}`,
  "data-reveal": "",
}))`
  position: relative;
  display: grid;
  grid-template-columns: minmax(360px, 0.78fr) minmax(520px, 1fr);
  align-items: center;
  gap: clamp(80px, 10vw, 170px);
  min-height: calc(100svh - var(--header-height));
  padding: clamp(90px, 11vh, 150px) clamp(70px, 10vw, 220px);
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  isolation: isolate;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  ${({ $variant }) =>
    $variant === "honnova-concept"
      ? `
        background: #ffffff url("${import.meta.env.BASE_URL}assets/honnnoba-top-2.png") center / cover no-repeat;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(1px);
        }
      `
      : ""}

  ${({ $variant }) =>
    $variant === "cast-concept"
      ? `
        background: #ffffff url("${import.meta.env.BASE_URL}assets/kamiyamacast-top-2.jpg") center / cover no-repeat;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background: rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(1px);
        }
      `
      : ""}

  ${({ $variant }) =>
    $variant === "make-concept"
      ? `
        background: #ffffff url("${import.meta.env.BASE_URL}assets/makeyou-back.png") center / cover no-repeat;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          background: rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(1px);
        }
      `
      : ""}

  > * {
    position: relative;
    z-index: 1;
    min-width: 0;
    max-width: 100%;
  }

  h3 {
    margin: 0;
    font-size: clamp(34px, 3vw, 58px);
    line-height: 1.6;
    text-align: center;
  }

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
    min-height: auto;
    padding: 64px 22px;
  }
`;

export function ConceptZone({ concept }) {
  return (
    <ConceptRoot $variant={concept.className}>
      <h3>{concept.heading}</h3>
      {concept.lines ? (
        <p>
          {concept.lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < concept.lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      ) : (
        <p>{concept.text}</p>
      )}
    </ConceptRoot>
  );
}
