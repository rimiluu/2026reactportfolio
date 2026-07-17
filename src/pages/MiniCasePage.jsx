import { Fragment } from "react";
import styled from "styled-components";

const MiniMain = styled.main`
  scroll-snap-align: none;
  scroll-snap-stop: normal;
`;

const MiniArticle = styled.article.attrs({ className: "mini-case" })`
  background: ${({ theme }) => theme.colors.paper};
  scroll-snap-align: none;
  scroll-snap-stop: normal;
`;

const MiniInner = styled.div.attrs({ className: "mini-case-inner" })`
  width: min(1180px, calc(100% - clamp(44px, 10vw, 180px)));
  margin: 0 auto;
  padding: clamp(72px, 10vh, 132px) 0 clamp(96px, 13vh, 180px);

  @media (max-width: 900px) {
    width: min(calc(100% - (var(--mobile-gutter) * 2)), 720px);
    padding-block: 58px 92px;
  }
`;

const MiniHero = styled.header.attrs({ className: "mini-case-hero", "data-reveal": "" })`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(26px, 4vh, 48px);
  align-items: start;
  margin-bottom: clamp(42px, 7vh, 86px);

  h1 {
    margin: 0;
    font-size: clamp(52px, 6vw, 80px);
    line-height: 1.04;
    letter-spacing: 0.08em;
  }

  p:not(.mini-case-kicker) {
    width: min(900px, 100%);
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    font-weight: inherit;
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;

    h1 {
      font-size: clamp(40px, 12vw, 68px);
      overflow-wrap: anywhere;
    }
  }
`;

const MiniKicker = styled.p.attrs({ className: "mini-case-kicker", "data-motion": "79" })`
  grid-column: 1 / -1;
  margin: 0;
  font-size: clamp(12px, 0.9vw, 15px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.18em;
`;

const MiniPhoto = styled.figure.attrs(({ $variant }) => ({
  className: ["mini-case-photo", $variant].filter(Boolean).join(" "),
  "data-reveal": "",
}))`
  margin: ${({ $variant }) =>
    $variant === "mini-case-photo--wide"
      ? "0 0 clamp(48px, 8vh, 98px)"
      : $variant === "mini-case-photo--narrow"
        ? "clamp(48px, 8vh, 98px) 0 0 auto"
        : "clamp(48px, 8vh, 98px) 0 0"};
  width: ${({ $variant }) => ($variant === "mini-case-photo--narrow" ? "min(760px, 100%)" : "auto")};

  img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  figcaption {
    margin-top: 12px;
    color: #6a6a62;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.8;
    letter-spacing: 0.08em;
  }

  @media (max-width: 900px) {
    width: ${({ $variant }) => ($variant === "mini-case-photo--narrow" ? "100%" : "auto")};

    img {
      aspect-ratio: 4 / 3;
    }
  }
`;

const MiniRow = styled.section.attrs(({ $reverse }) => ({
  className: ["mini-case-row", $reverse ? "mini-case-row--reverse" : ""].filter(Boolean).join(" "),
  "data-reveal": "",
}))`
  display: grid;
  grid-template-columns: ${({ $reverse }) =>
    $reverse ? "minmax(360px, 1fr) minmax(210px, 0.38fr)" : "minmax(210px, 0.38fr) minmax(360px, 1fr)"};
  gap: clamp(44px, 8vw, 120px);
  align-items: start;
  padding: clamp(40px, 7vh, 86px) 0;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  .mini-case-meta {
    grid-column: ${({ $reverse }) => ($reverse ? "2" : "auto")};
    grid-row: ${({ $reverse }) => ($reverse ? "1" : "auto")};
  }

  .mini-case-copy {
    grid-column: ${({ $reverse }) => ($reverse ? "1" : "auto")};
    grid-row: ${({ $reverse }) => ($reverse ? "1" : "auto")};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;

    .mini-case-meta,
    .mini-case-copy {
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

const MiniMeta = styled.div.attrs({ className: "mini-case-meta", "data-motion": "79" })`
  > p {
    margin: 0 0 32px;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.18em;
  }

  dl {
    display: grid;
    gap: 18px;
    margin: 0;
  }

  div {
    display: grid;
    gap: 5px;
  }

  dt {
    color: #6a6a62;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.55;
  }
`;

const copyText = `
  h2 {
    margin: 0 0 24px;
    font-size: clamp(22px, 2.2vw, 36px);
    line-height: 1.45;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    font-weight: inherit;
    line-height: 2;
    letter-spacing: 0.08em;
  }
`;

const MiniCopy = styled.div.attrs({ className: "mini-case-copy", "data-motion": "79" })`
  ${copyText}
`;

const MiniText = styled.section.attrs({ className: "mini-case-text", "data-reveal": "" })`
  width: min(820px, 100%);
  margin: clamp(48px, 8vh, 98px) 0 0 auto;
  padding-top: clamp(36px, 6vh, 72px);
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  ${copyText}

  p + p {
    margin-top: 1.35em;
  }

  .aki-page & {
    border-top: 0;
  }

  @media (max-width: 900px) {
    margin-left: 0;
  }
`;

function RichHeading({ lines }) {
  return (
    <h1 data-motion="79">
      {lines.map((line, index) => (
        <Fragment key={line}>
          {line.replace(/[、，,]/g, "")}
          {index < lines.length - 1 ? <br /> : null}
        </Fragment>
      ))}
    </h1>
  );
}

function MiniCasePhoto({ photo }) {
  return (
    <MiniPhoto $variant={photo.className}>
      <img data-motion="79" src={photo.src} alt={photo.alt} />
      {photo.caption ? <figcaption data-motion="79">{photo.caption}</figcaption> : null}
    </MiniPhoto>
  );
}

function MiniCaseMeta({ title, items }) {
  return (
    <MiniMeta>
      <p>{title}</p>
      <dl>
        {items.map(([term, detail]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
    </MiniMeta>
  );
}

function MiniCaseRow({ section }) {
  return (
    <MiniRow $reverse={section.reverse}>
      <MiniCaseMeta title={section.metaTitle} items={section.meta} />
      <MiniCopy>
        <h2>{section.heading.replace(/[、，,]/g, "")}</h2>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </MiniCopy>
    </MiniRow>
  );
}

function MiniCaseText({ text }) {
  return (
    <MiniText>
      <h2 data-motion="79">{text.heading.replace(/[、，,]/g, "")}</h2>
      {text.paragraphs.map((paragraph) => (
        <p data-motion="79" key={paragraph}>{paragraph}</p>
      ))}
    </MiniText>
  );
}

export function MiniCasePage({ caseData }) {
  const openingPhoto = caseData.photos.find((photo) => photo.afterSection === undefined);

  return (
    <>
      <MiniMain>
        <MiniArticle>
          <MiniInner>
            <MiniHero>
              <MiniKicker>{caseData.kicker}</MiniKicker>
              <RichHeading lines={caseData.heading} />
              <p data-motion="79">{caseData.intro}</p>
            </MiniHero>

            {openingPhoto ? <MiniCasePhoto photo={openingPhoto} /> : null}

            {caseData.sections.map((section, index) => (
              <Fragment key={section.heading}>
                <MiniCaseRow section={section} />
                {caseData.photos
                  .filter((photo) => photo.afterSection === index)
                  .map((photo) => (
                    <MiniCasePhoto key={photo.src} photo={photo} />
                  ))}
              </Fragment>
            ))}

            <MiniCaseText text={caseData.finalText} />
          </MiniInner>
        </MiniArticle>
      </MiniMain>
    </>
  );
}
