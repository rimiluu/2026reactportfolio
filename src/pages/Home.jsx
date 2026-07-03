import styled from "styled-components";
import { HomeContent } from "../features/home/HomeSections";

const HomeMain = styled.main``;

export function Home() {
  return (
    <HomeMain id="top">
      <HomeContent />
    </HomeMain>
  );
}
