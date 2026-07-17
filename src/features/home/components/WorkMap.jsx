import { useEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { workFilters, workItems } from "../../../data/home";

const WorkMapRoot = styled.div.attrs(({ $isFiltered }) => ({
  className: ["map", $isFiltered ? "map--filtered" : ""].filter(Boolean).join(" "),
  "data-reveal": "",
  "data-motion": "20",
}))`
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

  &.map--filtered {
    grid-template-columns: repeat(2, minmax(280px, 520px));
    justify-content: center;
    row-gap: clamp(72px, 10vh, 120px);
  }

  &.map--filtered .map-item {
    grid-column: auto;
    grid-row: auto;
    justify-self: center;
    width: min(100%, 520px);
    margin-top: 0;
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
    padding: 76px var(--mobile-gutter) 100px;

    &.map--filtered {
      grid-template-columns: 1fr;
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

    .map-item {
      display: grid;
      grid-template-columns: clamp(68px, 20vw, 88px) minmax(0, 1fr);
      gap: 12px 14px;
      align-items: end;
    }

    .map-item strong {
      position: static;
      grid-column: 1;
      grid-row: 1;
      align-self: end;
      width: 100%;
    }

    .map-item span,
    .item-5 span,
    .item-6 span {
      position: static;
      grid-column: 2;
      grid-row: 1;
      align-self: end;
      width: auto;
      max-width: 100%;
      font-size: clamp(18px, 5.2vw, 28px);
      overflow-wrap: anywhere;
    }

    .map-item .thumb,
    .map-item .map-item-desc {
      grid-column: 1 / -1;
    }

    .map-item .thumb {
      grid-row: 2;
    }

    .map-item .map-item-desc {
      grid-row: 3;
    }
  }

`;

const WorkMapIntro = styled.div`
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(24px, 4vw, 64px);
  margin: 0 0 clamp(64px, 8vh, 110px);

  h2 {
    margin: 0;
    font-size: clamp(27px, 2.1vw, 44px);
    line-height: 1;
    letter-spacing: 0.12em;
  }

  @media (max-width: 900px) {
    display: grid;
    gap: 24px;
    margin-bottom: 18px;

    h2 {
      font-size: clamp(24px, 7vw, 34px);
      letter-spacing: 0.1em;
    }
  }
`;

const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const FilterGroup = styled.fieldset`
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
`;

const FilterLegend = styled.legend`
  width: 100%;
  margin: 0 0 12px;
  padding: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 11px;
  font-weight: 900;
  line-height: 1.3;
  letter-spacing: 0.12em;
  text-align: right;

  strong {
    color: ${({ theme }) => theme.colors.ink};
  }

  @media (max-width: 900px) {
    text-align: left;
  }
`;

const FilterResult = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 11px;
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-align: right;

  @media (max-width: 900px) {
    text-align: left;
  }
`;

const FilterButton = styled.button`
  min-height: 38px;
  padding: 0 14px;
  color: ${({ $active, theme }) => ($active ? theme.colors.paper : theme.colors.ink)};
  font: inherit;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.12em;
  background: ${({ $active, theme }) => ($active ? theme.colors.ink : "transparent")};
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.line};
    outline-offset: 3px;
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
      position: static;
      left: auto;
      top: auto;
      width: 100%;
    }

    span {
      position: static;
      left: auto;
      top: auto;
      width: auto;
      max-width: 100%;
      font-size: clamp(18px, 5.2vw, 28px);
      line-height: 1.18;
      letter-spacing: 0.08em;
      overflow-wrap: anywhere;
    }

    .map-item-desc {
      margin-top: 2px;
      font-size: 13px;
      line-height: 1.75;
    }
  }
`;

function WorkMapItem({ item }) {
  const thumbClassName = ["thumb", item.thumbnailClassName].filter(Boolean).join(" ");
  const itemNumber = Number(item.className.replace(/\D/g, ""));
  const itemMotion = itemNumber % 2 === 0 ? "23 28" : "23";

  return (
    <WorkLink $itemClassName={item.className} data-motion={itemMotion} to={item.href}>
      <strong data-motion="24">
        <img src={item.numberImage} alt={item.numberAlt} />
      </strong>
      <span data-motion="25">{item.title}</span>
      <img className={thumbClassName} data-motion="26" src={item.thumbnail} alt={item.thumbnailAlt} />
      <p className="map-item-desc" data-motion="27">{item.description}</p>
    </WorkLink>
  );
}

export function WorkMap() {
  const [activeFilter, setActiveFilter] = useState("all");
  const mapRef = useRef(null);
  const hasFilteredRef = useRef(false);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return workItems;
    return workItems.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    if (!hasFilteredRef.current) {
      hasFilteredRef.current = true;
      return undefined;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const items = mapRef.current?.querySelectorAll(".map-item");
    const activeButton = mapRef.current?.querySelector("button[aria-pressed='true']");
    const animations = [];

    if (items?.length) {
      animations.push(animate(items, {
        opacity: [0, 1],
        y: [28, 0],
        scale: [0.97, 1],
        delay: stagger(80),
        duration: 620,
        ease: "outExpo",
      }));
    }

    if (activeButton) {
      animations.push(animate(activeButton, {
        scale: [0.9, 1],
        duration: 360,
        ease: "outBack(1.5)",
      }));
    }

    return () => animations.forEach((animation) => animation.cancel());
  }, [activeFilter]);

  return (
    <WorkMapRoot $isFiltered={activeFilter !== "all"} id="works" ref={mapRef}>
      <WorkMapIntro>
        <h2 data-motion="21">これまでやってきたこと</h2>
        <FilterGroup>
          <FilterLegend><strong>FILTER</strong> / 作品を絞り込む</FilterLegend>
          <FilterList>
            {workFilters.map((filter) => (
              <FilterButton
                $active={filter.id === activeFilter}
                data-motion="22"
                aria-pressed={filter.id === activeFilter}
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterList>
          <FilterResult aria-live="polite">{filteredItems.length}件を表示</FilterResult>
        </FilterGroup>
      </WorkMapIntro>

      {filteredItems.map((item) => (
        <WorkMapItem key={item.href} item={item} />
      ))}
    </WorkMapRoot>
  );
}
