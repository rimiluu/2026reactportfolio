import styled from "styled-components";
import { careItems } from "../../../data/home";

const CareRoot = styled.section.attrs({ className: "care", "data-reveal": "" })`
  display: grid;
  gap: clamp(42px, 6vh, 78px);
  padding: clamp(82px, 11vh, 140px) clamp(44px, 10vw, 180px);
  background: ${({ theme }) => theme.colors.paper};
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 34px;
    padding: var(--mobile-section-space) var(--mobile-gutter);
  }
`;

const CareHead = styled.div.attrs({ className: "care-head" })`
  width: min(920px, 100%);

  h2 {
    margin: 0 0 24px;
    font-size: clamp(22px, 2.3vw, 32px);
    line-height: 1;
    letter-spacing: 0.12em;
  }

  > p:last-child {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
  }
`;

const CareList = styled.div.attrs({ className: "care-list" })`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(48px, 6vw, 110px);
  padding-top: clamp(34px, 5vh, 64px);
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  section {
    padding-top: 0;
    border-top: 0;
  }

  h3 {
    margin: 0 0 clamp(18px, 2.8vh, 34px);
    font-size: clamp(17px, 1.35vw, 24px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.1em;
  }

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(15px, 1vw, 19px);
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

const CareFuture = styled.p.attrs({ className: "care-future", "data-motion": "19" })`
  width: 100%;
  max-width: none;
  margin: 0;
  padding-top: clamp(34px, 5vh, 64px);
  color: #383832;
  font-size: clamp(16px, 1.15vw, 24px);
  line-height: 2;
  letter-spacing: 0.08em;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const Eyebrow = styled.p.attrs({ className: "eyebrow" })`
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

export function Care() {
  return (
    <CareRoot>
      <CareHead>
        <Eyebrow data-motion="14">たいせつにしていること</Eyebrow>
        <h2 data-motion="15">What I Care About</h2>
        <p data-motion="16">人やもの、場所の背景に目を向け、それらのあいだにあるつながりを形にすることを大切にしています。</p>
      </CareHead>
      <CareList data-motion="17">
        {careItems.map((item) => (
          <section data-motion="18" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </section>
        ))}
      </CareList>
      <CareFuture>
        これからは、仕立てや手仕事を学びながら、一人ひとりの生活や時間に寄り添うものづくりを深めていきたいです。
      </CareFuture>
    </CareRoot>
  );
}
