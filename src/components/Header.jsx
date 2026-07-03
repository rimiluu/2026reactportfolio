import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { usePageContext } from "../context/PageContext";
import { navItems } from "../data/navigation";
import { asset } from "../utils/assets";

const Topbar = styled.header.attrs({ className: "topbar" })`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.layers.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${({ theme }) => theme.layout.headerHeight};
  padding: 0 clamp(22px, 5vw, 96px);
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  backdrop-filter: blur(14px);

  @media (max-width: 900px) {
    flex-direction: row;
    gap: 18px;
    min-height: 76px;
    padding: 0 clamp(16px, 4.5vw, 26px);
  }
`;

const Brand = styled(Link).attrs({ className: "brand" })`
  display: flex;
  align-items: center;
  gap: clamp(12px, 1.8vw, 24px);
  font-weight: 700;
  letter-spacing: 0.08em;

  span {
    font-size: clamp(12px, 0.95vw, 15px);
  }

  strong {
    font-size: clamp(17px, 1.55vw, 24px);
    letter-spacing: 0.02em;
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
    flex-direction: row;
    min-width: 0;
  }
`;

const BrandLogo = styled.img.attrs({ className: "brand-logo" })`
  display: block;
  width: clamp(132px, 15vw, 220px);
  height: auto;

  @media (max-width: 900px) {
    display: none;
  }
`;

const BrandText = styled.strong.attrs({ className: "brand-text" })`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const SrOnly = styled.span.attrs({ className: "sr-only" })``;

const Nav = styled.nav.attrs({ className: "nav" })`
  display: flex;
  gap: clamp(12px, 2.2vw, 34px);
  font-size: clamp(12px, 0.95vw, 15px);
  font-weight: 700;
  letter-spacing: 0.2em;

  @media (max-width: 900px) {
    flex: 0 0 auto;
    width: auto;
    justify-content: flex-start;
    gap: clamp(10px, 3.2vw, 16px);
    overflow-x: auto;
    padding-bottom: 0;
    font-size: clamp(11px, 3.1vw, 13px);
    letter-spacing: 0.12em;
    white-space: nowrap;
  }
`;

const ProgressTrack = styled.div`
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 2px;
  overflow: hidden;
  pointer-events: none;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.ink};
  transform: scaleX(${({ $progress }) => $progress});
  transform-origin: left center;
  transition: transform 120ms linear;
`;

export function Header() {
  const { page, scrollProgress } = usePageContext();

  return (
    <Topbar aria-label="Site header" data-page={page.id}>
      <Brand to="/" aria-label="Portfolio top">
        <SrOnly>PORTFOLIO</SrOnly>
        <BrandText>PORTFOLIO</BrandText>
        <BrandLogo src={asset("assets/type-portfolio.svg")} alt="" aria-hidden="true" />
      </Brand>
      <Nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href}>
            {item.label}
          </NavLink>
        ))}
      </Nav>
      <ProgressTrack aria-hidden="true">
        <ProgressBar $progress={scrollProgress} />
      </ProgressTrack>
    </Topbar>
  );
}
