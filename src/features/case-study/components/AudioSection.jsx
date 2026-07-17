import styled from "styled-components";

const AudioRoot = styled.div.attrs({ className: "audio-section", "data-reveal": "" })`
  display: grid;
  grid-template-columns: minmax(280px, 0.86fr) minmax(360px, 1fr);
  align-items: center;
  gap: clamp(32px, 6vw, 96px);
  min-height: calc(100svh - var(--header-height));
  margin: 0;
  padding: clamp(72px, 10vh, 128px) clamp(70px, 10vw, 220px);
  background: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  scroll-snap-align: start;
  scroll-snap-stop: always;

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: clamp(26px, 2vw, 42px);
    line-height: 1.35;
    letter-spacing: 0.12em;
  }

  p {
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
  }

  .text-link {
    width: fit-content;
    padding: 9px 14px;
    border: 1px solid ${({ theme }) => theme.colors.ink};
    border-radius: 999px;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.3;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .text-link:hover {
    color: ${({ theme }) => theme.colors.paper};
    background: ${({ theme }) => theme.colors.ink};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
    min-height: auto;
    padding: 72px var(--mobile-gutter);
  }

  @media (max-width: 560px) {
    gap: 24px;
    padding: var(--mobile-section-space) var(--mobile-gutter);

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
      line-height: 1.9;
    }
  }
`;

const AudioCopy = styled.div.attrs({ className: "audio-section__copy" })`
  display: grid;
  align-content: center;
  gap: 22px;
  min-width: 0;
`;

const AudioCard = styled.div.attrs({ className: "audio-card" })`
  display: grid;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;

  iframe {
    display: block;
    width: 100%;
    border: 0;
    border-radius: 12px;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 560px;
    justify-self: stretch;
  }

  @media (max-width: 560px) {
    padding: 0;
  }
`;

export function AudioSection({ audio }) {
  if (!audio) return null;

  return (
    <AudioRoot>
      <AudioCopy>
        <h3 data-motion="61">{audio.heading}</h3>
        <p data-motion="62">{audio.text}</p>
        <a className="text-link" data-motion="63" href={audio.link} target="_blank" rel="noreferrer">
          Spotifyで番組を開く
        </a>
      </AudioCopy>

      <AudioCard data-motion="64">
        <iframe
          title="夢みる朗読をSpotifyで聴く"
          src={audio.embed}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </AudioCard>
    </AudioRoot>
  );
}
