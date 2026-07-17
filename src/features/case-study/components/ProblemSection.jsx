import styled from "styled-components";
import { sectionHeading } from "../sharedStyles";
import { asset } from "../../../utils/assets";

const ProblemRoot = styled.div.attrs({ className: "problem", "data-reveal": "" })`
  display: grid;
  place-items: center;
  min-height: calc(100svh - var(--header-height));
  padding: 80px clamp(70px, 10vw, 220px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  ${sectionHeading}

  @media (max-width: 900px) {
    min-height: auto;
    padding: var(--mobile-section-space) var(--mobile-gutter);
  }
`;

const ProblemList = styled.div.attrs({ className: "problem-list" })`
  display: grid;
  gap: clamp(60px, 8vh, 110px);
  width: min(980px, 100%);

  div {
    display: grid;
    grid-template-columns: 140px minmax(0, 1fr);
    align-items: center;
    gap: clamp(70px, 8vw, 140px);
  }

  .thumb {
    display: block;
    width: 60px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 900px) {
    gap: 28px;
    width: min(620px, 100%);

    div {
      grid-template-columns: 58px 1fr;
      gap: 28px;
    }

    .thumb {
      width: 50px;
    }
  }

  @media (max-width: 560px) {
    div {
      grid-template-columns: 44px 1fr;
      gap: 18px;
    }
  }
`;

export function ProblemSection({ problems }) {
  if (!problems?.length) return null;

  return (
    <ProblemRoot>
      <h3 data-motion="42">Problem</h3>
      <ProblemList>
        {problems.map(([heading, text]) => (
          <div data-motion="43" key={heading}>
            <img className="thumb" data-motion="44" src={asset("assets/hitokage-img.png")} alt="" />
            <p data-motion="45">
              <strong>{heading}</strong>
              <br />
              {text}
            </p>
          </div>
        ))}
      </ProblemList>
    </ProblemRoot>
  );
}
