import styled from "styled-components";

const RoleRoot = styled.div.attrs({ className: "role", "data-reveal": "" })`
  min-height: calc(100svh - var(--header-height));
  padding: 80px clamp(70px, 10vw, 220px);
  scroll-snap-align: start;
  scroll-snap-stop: always;

  h3 {
    margin: 0 0 40px;
    font-size: clamp(26px, 2vw, 42px);
    letter-spacing: 0.14em;
    text-align: center;
  }

  @media (max-width: 900px) {
    min-height: auto;
    padding: var(--mobile-section-space) var(--mobile-gutter);
  }
`;

const RoleGrid = styled.div.attrs({ className: "role-grid" })`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  width: min(1180px, 100%);
  margin: 42px auto 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-left: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-top: 28px;
    border: 0;
  }
`;

const RoleCard = styled.div.attrs({ className: "role-card" })`
  min-height: clamp(220px, 24vh, 300px);
  padding: clamp(30px, 4vw, 58px);
  background: transparent;
  border-right: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  overflow: hidden;

  h4 {
    margin: 0 0 clamp(26px, 4vh, 48px);
    font-size: clamp(16px, 1.35vw, 22px);
    line-height: 1.45;
    letter-spacing: 0.04em;
  }

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(14px, 1vw, 18px);
    line-height: 2;
    letter-spacing: 0.06em;
  }

  @media (max-width: 900px) {
    min-height: 0;
    padding: 16px 18px;
    background: #f3f3f1;
    border: 1px solid #d8d8d5;
    border-radius: 8px;

    h4 {
      margin: 0;
      font-size: 15px;
      line-height: 1.35;
      letter-spacing: 0.06em;
    }

    p {
      display: none;
    }
  }
`;

export function RoleSection({ roles }) {
  if (!roles) return null;

  return (
    <RoleRoot>
      <h3 data-motion="74">私の役割</h3>
      <RoleGrid>
        {roles.map(([heading, text], index) => (
          <RoleCard data-motion="75" key={index}>
            <h4 data-motion="76">{heading}</h4>
            <p data-motion="76">{text}</p>
          </RoleCard>
        ))}
      </RoleGrid>
    </RoleRoot>
  );
}
