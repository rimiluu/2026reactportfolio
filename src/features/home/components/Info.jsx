import styled from "styled-components";
import { contactItems } from "../../../data/contact";
import { skillItems } from "../../../data/home";

const InfoRoot = styled.div.attrs({ className: "info", "data-reveal": "" })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  min-height: 620px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const InfoPanel = styled.div`
  padding: clamp(80px, 10vh, 130px) clamp(80px, 10vw, 190px);

  h2 {
    margin: 0 0 25px;
    font-size: clamp(28px, 2.1vw, 42px);
    line-height: 1;
    letter-spacing: 0.12em;
  }

  @media (max-width: 900px) {
    padding: 56px 22px;
  }
`;

const SkillsRoot = styled(InfoPanel).attrs({ className: "skills" })``;
const SkillList = styled.div.attrs({ className: "skill-list" })`
  display: grid;
  gap: clamp(20px, 2.2vh, 36px);
  margin: 0;
`;

const SkillArticle = styled.section.attrs({ className: "skill-item" })`
  display: grid;
  gap: 10px;

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 1.75;
    letter-spacing: 0.12em;
  }
`;

const SkillHead = styled.div.attrs({ className: "skill-head" })`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 10px 14px;

  h3 {
    margin: 0;
    font-size: clamp(15px, 1.15vw, 20px);
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: 0.12em;
  }
`;

const ToolIcons = styled.div.attrs({ className: "tool-icons" })`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  figure {
    display: block;
    margin: 0;
  }

  figcaption {
    display: block;
    padding: 3px 8px 4px;
    color: #383832;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.04em;
    white-space: nowrap;
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.paper};
  }

  img {
    display: none;
  }
`;

const ContactRoot = styled(InfoPanel).attrs({ className: "contact" })`
  border-left: 0;

  dl {
    display: grid;
    grid-template-columns: 1fr;
    gap: 34px;
    align-items: baseline;
    margin: 0;
  }

  dl > div {
    display: grid;
    grid-template-columns: 120px minmax(260px, 1fr);
    gap: 72px;
    align-items: baseline;
  }

  dt {
    margin: 0;
    font-size: clamp(15px, 1.15vw, 20px);
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: 0.12em;
  }

  dd {
    margin: 0;
    color: #383832;
    font-size: clamp(14px, 1vw, 20px);
    line-height: 1.75;
    letter-spacing: 0.12em;
    white-space: nowrap;
    word-break: normal;
  }

  dd span {
    display: block;
  }

  @media (max-width: 900px) {
    border-top: 1px solid ${({ theme }) => theme.colors.line};

    dl {
      gap: 30px;
    }

    dl > div {
      grid-template-columns: minmax(80px, 120px) minmax(0, 1fr);
      gap: 42px;
    }

    dd {
      white-space: normal;
      word-break: break-word;
    }
  }
`;



function ToolIcon({ tool }) {
  return (
    <figure>
      <figcaption>{tool.label}</figcaption>
      {tool.icon ? <img src={tool.icon} alt={tool.alt ?? tool.label} /> : null}
    </figure>
  );
}

function SkillItem({ item }) {
  return (
    <SkillArticle>
      <SkillHead>
        <h3>{item.title}</h3>
        {item.tools.length ? (
          <ToolIcons>
            {item.tools.map((tool) => (
              <ToolIcon key={tool.label} tool={tool} />
            ))}
          </ToolIcons>
        ) : null}
      </SkillHead>
      {item.descriptions.map((description) => (
        <p key={description}>{description}</p>
      ))}
    </SkillArticle>
  );
}

function Skills() {
  return (
    <SkillsRoot>
      <h2>Skills &amp; Tools</h2>
      <SkillList>
        {skillItems.map((item) => (
          <SkillItem key={item.title} item={item} />
        ))}
      </SkillList>
    </SkillsRoot>
  );
}

function Contact() {
  return (
    <ContactRoot>
      <h2>Contact</h2>
      <dl>
        {contactItems.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                  {item.value}
                </a>
              ) : (
                item.lines.map((line) => <span key={line}>{line}</span>)
              )}
            </dd>
          </div>
        ))}
      </dl>
    </ContactRoot>
  );
}

export function Info() {
  return (
    <InfoRoot>
      <Skills />
      <Contact />
    </InfoRoot>
  );
}
