import { Link } from "react-router-dom";
import styled from "styled-components";
import { workItems } from "../../../data/home";

const WorkMapRoot = styled.div.attrs({ className: "map", "data-reveal": "" })`
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(360px, 1fr);
  grid-auto-rows: max-content;
  column-gap: clamp(96px, 12vw, 220px);
  row-gap: clamp(92px, 12vh, 150px);
  align-items: start;
  width: 100%;
  max-width: 1680px;
  min-height: auto;
  margin-inline: auto;
  padding: clamp(70px, 10vh, 130px) clamp(90px, 11vw, 220px) clamp(100px, 13vh, 180px);
  overflow: visible;

  h2 {
    grid-column: 1 / -1;
    grid-row: 1;
    margin: 0 0 clamp(64px, 8vh, 110px);
    font-size: clamp(27px, 2.1vw, 44px);
    line-height: 1;
    letter-spacing: 0.12em;
  }

  .item-1 {
    grid-column: 1;
    grid-row: 2;
    justify-self: end;
    margin-top: 0;
  }

  .item-2 {
    grid-column: 2;
    grid-row: 2;
    justify-self: start;
    margin-top: 0;
  }

  .item-3 {
    grid-column: 1;
    grid-row: 3;
    justify-self: end;
    width: min(100%, 520px);
  }

  .item-3 .thumb {
    aspect-ratio: 1.35;
  }

  .item-4 {
    grid-column: 2;
    grid-row: 3;
    justify-self: start;
    width: min(100%, 520px);
    margin-top: 0;
  }

  .item-5 {
    grid-column: 1;
    grid-row: 4;
    justify-self: end;
    width: min(100%, 520px);
    margin-top: 0;
  }

  .item-6 {
    grid-column: 2;
    grid-row: 4;
    justify-self: start;
    width: min(100%, 520px);
    margin-top: 0;
  }

  .map-item span,
  .item-5 span,
  .item-6 span {
    left: clamp(92px, 7vw, 136px);
    max-width: min(520px, calc(100vw - 160px));
    font-size: clamp(22px, 1.65vw, 36px);
    line-height: 1.18;
  }

  .map-item strong {
    left: clamp(-44px, -2.6vw, -20px);
    width: clamp(96px, 7.2vw, 144px);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 96px;
    min-height: auto;
    padding: 76px 28px 100px;

    h2 {
      margin: 0 0 18px;
      font-size: clamp(24px, 7vw, 34px);
      letter-spacing: 0.1em;
    }

    .item-1,
    .item-2,
    .item-3,
    .item-4,
    .item-5,
    .item-6 {
      grid-column: auto;
      grid-row: auto;
      justify-self: center;
      width: min(100%, 520px);
      margin-top: 0;
    }

    .map-item span,
    .item-5 span,
    .item-6 span {
      left: clamp(60px, 19vw, 108px);
      max-width: none;
      font-size: clamp(21px, 6vw, 32px);
    }
  }

  @media (max-width: 380px) {
    padding-inline: 18px;
  }
`;

const WorkLink = styled(Link).attrs(({ $itemClassName }) => ({
  className: `map-item ${$itemClassName}`,
}))`
  position: relative;
  inset: auto;
  display: block;
  width: min(100%, 520px);
  color: ${({ theme }) => theme.colors.ink};
  transition: transform 0.35s ease;

  strong {
    position: absolute;
    z-index: 2;
    left: clamp(-44px, -2.6vw, -20px);
    top: clamp(-62px, -4.2vw, -30px);
    display: block;
    width: clamp(96px, 7.2vw, 144px);
  }

  strong img {
    display: block;
    width: 100%;
    height: auto;
  }

  span {
    position: absolute;
    z-index: 3;
    left: clamp(92px, 7vw, 136px);
    top: clamp(-32px, -2.2vw, -14px);
    width: max-content;
    max-width: min(520px, calc(100vw - 160px));
    min-width: 0;
    font-size: clamp(22px, 1.65vw, 36px);
    line-height: 1.18;
    letter-spacing: 0.15em;
    white-space: normal;
  }

  .thumb {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.35;
    margin: 0;
    object-fit: cover;
    transition: filter 0.35s ease;
  }

  .logo-thumb {
    object-fit: contain;
    padding: clamp(28px, 4vw, 68px);
    background: ${({ theme }) => theme.colors.paper};
  }

  .map-item-desc {
    width: min(100%, 520px);
    margin: clamp(16px, 2vh, 28px) 0 0;
    color: #383832;
    font-size: clamp(14px, 1vw, 18px);
    font-weight: 700;
    line-height: 1.85;
    letter-spacing: 0.06em;
  }

  &:hover {
    transform: translateY(-6px);
  }

  &:hover .thumb {
    filter: brightness(1.08) contrast(1.03);
  }

  @media (max-width: 900px) {
    strong {
      left: -18px;
      top: -44px;
      width: clamp(78px, 24vw, 112px);
    }

    span {
      left: clamp(60px, 19vw, 108px);
      top: -20px;
      width: min(72vw, 360px);
      max-width: none;
      font-size: clamp(21px, 6vw, 32px);
      line-height: 1.18;
      letter-spacing: 0.12em;
    }

    .map-item-desc {
      margin-top: 14px;
      font-size: 13px;
      line-height: 1.75;
    }
  }
`;

function WorkMapItem({ item }) {
  const thumbClassName = ["thumb", item.thumbnailClassName].filter(Boolean).join(" ");

  return (
    <WorkLink $itemClassName={item.className} to={item.href}>
      <strong>
        <img src={item.numberImage} alt={item.numberAlt} />
      </strong>
      <span>{item.title}</span>
      <img className={thumbClassName} src={item.thumbnail} alt={item.thumbnailAlt} />
      <p className="map-item-desc">{item.description}</p>
    </WorkLink>
  );
}

export function WorkMap() {
  return (
    <WorkMapRoot>
      <h2>これまでやってきたこと</h2>
      {workItems.map((item) => (
        <WorkMapItem key={item.href} item={item} />
      ))}
    </WorkMapRoot>
  );
}



