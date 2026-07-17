import styled from "styled-components";

const FinalGridRoot = styled.div.attrs({ className: "text-grid final-grid", "data-reveal": "" })`
  display: grid;
  grid-template-columns: repeat(2, minmax(320px, 620px));
  align-content: center;
  justify-content: center;
  gap: clamp(56px, 8vw, 120px);
  min-height: 100svh;
  padding: clamp(86px, 12vh, 150px) 10vw;
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  scroll-snap-align: start;
  scroll-snap-stop: always;

  article {
    min-height: 0;
    padding: clamp(30px, 5vh, 58px) 0;
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.line};
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 0;
    background: transparent;
  }

  article h3 {
    margin: 0 0 clamp(24px, 4vh, 42px);
    font-size: clamp(19px, 1.6vw, 28px);
    line-height: 1.35;
    letter-spacing: 0.08em;
  }

  article p {
    margin: 0;
    color: #383832;
    font-size: 15px;
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 44px;
    min-height: auto;
    padding: var(--mobile-section-space) var(--mobile-gutter);
  }
`;

export function FinalGrid({ items }) {
  return (
    <FinalGridRoot>
      {items.map(([heading, text]) => (
        <article data-motion="77" key={heading}>
          <h3 data-motion="78">{heading}</h3>
          <p data-motion="78">{text}</p>
        </article>
      ))}
    </FinalGridRoot>
  );
}
