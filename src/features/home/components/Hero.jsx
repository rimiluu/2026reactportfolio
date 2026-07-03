import styled from "styled-components";

const HeroRoot = styled.div.attrs({ className: "hero", "data-reveal": "" })`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(150px, 240px);
  align-items: center;
  gap: clamp(32px, 5vw, 82px);
  width: min(100%, 1540px);
  min-height: calc(100svh - var(--header-height));
  margin-inline: auto;
  padding: clamp(72px, 9vh, 112px) clamp(56px, 8vw, 140px);
  overflow: hidden;

  h1 {
    margin: 0;
    overflow: hidden;
  }

  h1 img {
    display: block;
    width: clamp(640px, 54vw, 1120px);
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    display: block;
    width: 100%;
    max-width: none;
    min-height: calc(100svh - var(--header-height));
    margin: 0;
    padding: 0;
    border: 0;
    background: ${({ theme }) => theme.colors.paper};
  }
`;

const MobileHeroArt = styled.div.attrs({ className: "mobile-hero-art" })`
  display: none;

  @media (max-width: 900px) {
    position: relative;
    display: block;
    width: 100%;
    max-width: none;
    min-height: calc(100svh - var(--header-height));
    margin: 0;
    background: ${({ theme }) => theme.colors.paper};
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      right: clamp(36px, 8vw, 58px);
      bottom: clamp(66px, 8vh, 92px);
      width: min(48vw, 226px);
      height: clamp(30px, 7vw, 42px);
      background-image: url("/assets/type-name.svg");
      background-repeat: no-repeat;
      background-position: right center;
      background-size: contain;
    }

    &::before {
      content: "Book   UI/UX   Media";
      position: absolute;
      right: clamp(36px, 8vw, 58px);
      bottom: clamp(38px, 5vh, 62px);
      color: ${({ theme }) => theme.colors.ink};
      font-size: clamp(13px, 3.8vw, 18px);
      font-weight: 800;
      line-height: 1;
      letter-spacing: 0.16em;
      white-space: pre;
    }
  }

  @media (max-width: 560px) {
    &::after {
      right: clamp(28px, 7vw, 42px);
      bottom: clamp(62px, 7vh, 82px);
    }

    &::before {
      right: clamp(28px, 7vw, 42px);
      bottom: clamp(34px, 4vh, 52px);
    }
  }

  @media (max-width: 430px) {
    &::after {
      right: 24px;
      bottom: clamp(70px, 9svh, 86px);
      width: min(44vw, 168px);
      height: clamp(24px, 6vw, 34px);
    }

    &::before {
      right: 24px;
      bottom: clamp(42px, 6svh, 58px);
      font-size: clamp(12px, 3.45vw, 14px);
      letter-spacing: 0.14em;
    }
  }

  @media (max-width: 380px) {
    &::after,
    &::before {
      right: 22px;
    }
  }

  @media (max-width: 380px) and (max-height: 720px) {
    &::after {
      bottom: 66px;
      width: min(42vw, 152px);
    }

    &::before {
      bottom: 40px;
      font-size: 12px;
      letter-spacing: 0.12em;
    }
  }
`;

const MobileHeroLogo = styled.img.attrs({ className: "mobile-hero-logo" })`
  position: absolute;
  left: clamp(22px, 5vw, 34px);
  top: clamp(150px, 18vh, 220px);
  width: min(72vw, 345px);
  height: auto;

  @media (max-width: 560px) {
    top: clamp(132px, 16vh, 190px);
    width: 73vw;
  }

  @media (max-width: 430px) {
    top: clamp(104px, 17svh, 128px);
    width: auto;
    max-width: 68vw;
    height: min(45svh, 320px);
  }

  @media (max-width: 380px) {
    left: 18px;
    top: 128px;
    width: 74vw;
  }

  @media (max-width: 380px) and (max-height: 720px) {
    top: 112px;
    height: min(43svh, 286px);
    max-width: 66vw;
  }
`;

const MobileHeroYear = styled.img.attrs({ className: "mobile-hero-year" })`
  position: absolute;
  top: clamp(54px, 8svh, 92px);
  right: clamp(24px, 6vw, 36px);
  width: auto;
  max-width: none;
  height: clamp(360px, 58svh, 520px);
  transform: none;

  @media (max-width: 430px) {
    top: clamp(48px, 7svh, 76px);
    right: clamp(22px, 6vw, 30px);
    height: clamp(330px, 56svh, 470px);
  }

  @media (max-width: 380px) and (max-height: 720px) {
    top: 44px;
    right: 22px;
    height: min(54svh, 360px);
  }
`;

const DesktopHeroContent = styled.div.attrs({ className: "desktop-hero-content" })`
  display: contents;

  @media (max-width: 900px) {
    display: none;
  }
`;
const Intro = styled.div.attrs({ className: "intro" })``;
const Kana = styled.p.attrs({ className: "kana" })`
  margin: 0 0 clamp(24px, 3.2vh, 48px);

  img {
    display: block;
    width: clamp(250px, 26vw, 500px);
    max-width: 100%;
    height: auto;
  }
`;

const Tags = styled.p.attrs({ className: "tags" })`
  margin: clamp(36px, 5.5vh, 72px) 0 0;
  font-size: clamp(18px, 1.45vw, 28px);
  font-weight: 800;
  letter-spacing: 0.18em;
`;

const Years = styled.div.attrs({ className: "years" })`
  justify-self: end;
  margin-right: 0;

  img {
    display: block;
    width: clamp(150px, 13vw, 280px);
    max-height: none;
  }
`;

const Eyebrow = styled.p.attrs({ className: "eyebrow" })`
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.12em;
`;



export function Hero() {
  return (
    <HeroRoot>
      <MobileHeroArt aria-hidden="true">
        <MobileHeroLogo src="/assets/mobile-logo.png" alt="" />
        <MobileHeroYear src="/assets/mobile-year.png" alt="" />
      </MobileHeroArt>

      <DesktopHeroContent>
        <Intro>
          <Kana>
            <img src="/assets/type-name.svg" alt="いとう りみ" />
          </Kana>
          <h1>
            <span className="sr-only">PORTFOLIO</span>
            <img src="/assets/type-portfolio.svg" alt="" aria-hidden="true" />
          </h1>
          <Tags>Book&nbsp;&nbsp; UI/UX&nbsp;&nbsp; Media</Tags>
        </Intro>
        <Years aria-label="Portfolio period">
          <img src="/assets/type-years.svg" alt="2024 2026" />
        </Years>
      </DesktopHeroContent>
    </HeroRoot>
  );
}
