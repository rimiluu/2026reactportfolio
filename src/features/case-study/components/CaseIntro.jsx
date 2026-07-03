import styled from "styled-components";

const IntroLock = styled.div.attrs({ className: "honnova-intro-lock" })`
  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: minmax(360px, 0.78fr) minmax(620px, 1.22fr);
    gap: clamp(70px, 9vw, 150px);
    padding-inline: clamp(70px, 10vw, 220px);
    background: ${({ theme }) => theme.colors.paper};
  }

  @media (max-width: 900px) {
    display: grid;
    gap: 0;
  }
`;

const IntroCopy = styled.div.attrs({ className: "honnova-intro-copy" })`
  @media (min-width: 901px) {
    display: grid;
    min-width: 0;
  }
`;

const LogoPanel = styled.div.attrs({ className: "honnova-logo-panel" })`
  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    min-height: calc(100svh - var(--header-height));
    padding: clamp(80px, 10vh, 130px) 0;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  > div {
    padding: clamp(24px, 4vw, 56px) 0;
  }

  .honnova-logo-img,
  .makeyou-logo-img {
    display: block;
    height: auto;
  }

  .makeyou-logo-img {
    width: min(100%, 280px);
  }

  @media (min-width: 901px) {
    .honnova-logo-img {
      width: min(100%, 520px);
    }
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;
    min-height: min(420px, 58svh);
    padding: 54px 22px;

    > div {
      padding: 18px 0;
    }
  }
`;

const OverviewPanelRoot = styled.div.attrs({ className: "honnova-overview-panel", "data-reveal": "" })`
  @media (min-width: 901px) {
    display: grid;
    align-content: center;
    gap: clamp(38px, 5vw, 72px);
    min-height: calc(100svh - var(--header-height));
    padding: clamp(80px, 10vh, 130px) 0;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 42px 22px 54px;
  }
`;

const FixedMock = styled.div.attrs({ className: "honnova-fixed-mock" })`
  @media (min-width: 901px) {
    position: sticky;
    top: calc(var(--header-height) + clamp(48px, 7vh, 86px));
    align-self: start;
    justify-self: center;
    display: grid;
    grid-template-columns: 0.72fr 1fr;
    grid-template-rows: 0.46fr 0.54fr;
    gap: clamp(22px, 3vw, 52px);
    width: min(100%, calc((100svh - var(--header-height) - clamp(96px, 14vh, 172px)) * 1.18));
    aspect-ratio: 1.18;
    min-height: 0;
    padding-block: 0;

    img {
      width: 100%;
      height: 100%;
      min-height: 0;
      border-radius: clamp(16px, 1.45vw, 24px);
      object-fit: cover;
      overflow: hidden;
    }

    img:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
      object-position: 50% 46%;
    }

    img:nth-child(2) {
      grid-column: 2;
      grid-row: 1 / 3;
      object-position: 48% 50%;
    }

    img:nth-child(3) {
      grid-column: 1;
      grid-row: 2;
      object-position: 50% 0;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

function OverviewPanel({ rows }) {
  return (
    <OverviewPanelRoot>
      <div>
        {rows.map(([heading, content]) => (
          <div key={heading}>
            <h3>{heading}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </OverviewPanelRoot>
  );
}

export function CaseIntro({ caseData }) {
  return (
    <IntroLock>
      <IntroCopy>
        <LogoPanel>
          <div>
            <img className={caseData.logo.className} src={caseData.logo.src} alt={caseData.logo.alt} />
          </div>
        </LogoPanel>

        {caseData.overviewPanels.map((panel, index) => (
          <OverviewPanel key={index} rows={panel} />
        ))}
      </IntroCopy>

      <FixedMock aria-hidden="true">
        {caseData.mockImages.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </FixedMock>
    </IntroLock>
  );
}
