import styled from "styled-components";
import { About } from "./components/About";
import { Care } from "./components/Care";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { WorkMap } from "./components/WorkMap";

const HomeSection = styled.section.attrs({ className: "home" })`
  display: grid;

  @media (max-width: 900px) {
    display: block;
  }
`;

export function HomeContent() {
  return (
    <HomeSection>
      <Hero />
      <About />
      <Care />
      <Info />
      <WorkMap />
    </HomeSection>
  );
}
