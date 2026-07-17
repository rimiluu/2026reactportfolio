import styled from "styled-components";
import { asset } from "../../../utils/assets";

const AboutRoot = styled.div.attrs({ className: "about", "data-reveal": "" })`
  display: grid;
  grid-template-columns: minmax(260px, 500px) minmax(420px, 720px);
  align-items: center;
  justify-content: center;
  gap: clamp(76px, 12vw, 180px);
  min-height: 560px;
  padding: clamp(80px, 10vh, 130px) clamp(80px, 11vw, 220px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 42px;
    min-height: auto;
    padding-inline: var(--mobile-gutter);
  }

  @media (max-width: 560px) {
    padding-block: 64px;
  }

`;

const Photo = styled.img.attrs({ className: "photo", "data-motion": "9" })`
  display: block;
  width: min(100%, 500px);
  aspect-ratio: 1;
  object-fit: cover;

  @media (max-width: 900px) {
    width: min(100%, 220px);
  }
`;

const Profile = styled.div.attrs({ className: "profile", "data-motion": "13" })`
  max-width: 680px;

  p:last-child {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
  }
`;

const Eyebrow = styled.p.attrs({ className: "eyebrow", "data-motion": "10" })`
  margin: 0 0 8px;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

const Kana = styled.p.attrs({ className: "kana" })`
  margin: 0 0 clamp(24px, 3.2vh, 48px);

  img {
    display: block;
    width: clamp(250px, 26vw, 500px);
    max-width: 100%;
    height: auto;
  }
`;

export function About() {
  return (
    <AboutRoot id="about">
      <Photo src={asset("assets/face.png")} alt="" />
      <Profile>
        <Eyebrow>神山まるごと高専3年</Eyebrow>
        <Kana data-motion="11">
          <img src={asset("assets/type-name.svg")} alt="いとう りみ" />
        </Kana>
        <p data-motion="12">
          神山まるごと高専で、Web制作やUI/UXデザイン、企画づくりに取り組んでいます。本や地域、音声など、身近にあるものを人に届けるWebアプリ「ホンノバ」、健康情報をToDoに変えるUI「MAKE YOU」、Podcastメディア「KamiyamaCast」の運用などを通して、情報や体験を見つけやすく届けることを考えています。
        </p>
      </Profile>
    </AboutRoot>
  );
}
