import styled from "styled-components";

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
    padding-inline: 22px;
  }

  @media (max-width: 560px) {
    padding-block: 64px;
  }

  @media (max-width: 380px) {
    padding-inline: 18px;
  }
`;

const Photo = styled.img.attrs({ className: "photo" })`
  display: block;
  width: min(100%, 500px);
  aspect-ratio: 1;
  object-fit: cover;

  @media (max-width: 900px) {
    width: min(100%, 220px);
  }
`;

const Profile = styled.div.attrs({ className: "profile" })`
  max-width: 680px;

  p:last-child {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
  }
`;



export function About() {
  return (
    <AboutRoot>
      <Photo src="/assets/face.png" alt="" />
      <Profile>
        <Eyebrow>神山まるごと高専3年</Eyebrow>
        <Kana>
          <img src="/assets/type-name.svg" alt="いとう りみ" />
        </Kana>
        <p>
          神山まるごと高専で、Web制作やUI/UXデザイン、企画づくりに取り組んでいます。本や地域、音声など、身近にあるものを人に届けるWebアプリ「ホンノバ」、健康情報をToDoに変えるUI「MAKE YOU」、Podcastメディア「KamiyamaCast」の運用などを通して、情報や体験を見つけやすく届けることを考えています。
        </p>
      </Profile>
    </AboutRoot>
  );
}
