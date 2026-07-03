import { Link } from "react-router-dom";
import styled from "styled-components";
import { usePageContext } from "../context/PageContext";

const SiteFooter = styled.footer.attrs({ className: "footer" })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 104px;
  padding: 34px clamp(22px, 5vw, 96px);
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.paper};
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  font-weight: 800;

  body:not(.home-page) & {
    scroll-snap-align: end;
    scroll-snap-stop: always;
  }

  @media (min-width: 901px) {
    body:not(.home-page) & {
      min-height: clamp(120px, 16vh, 180px);
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    min-height: 96px;
    padding: 30px 22px;
  }
`;

export function Footer() {
  const { isHome } = usePageContext();

  return (
    <SiteFooter>
      <p>Rimi Ito Portfolio</p>
      <Link to={isHome ? "/#top" : "/"}>Back to top</Link>
    </SiteFooter>
  );
}
