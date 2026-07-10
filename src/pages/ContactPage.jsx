import { useState } from "react";
import styled from "styled-components";
import { contactFaqItems, contactItems } from "../data/contact";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const ContactMain = styled.main.attrs({ className: "contact-page-main" })`
  min-height: calc(100svh - var(--header-height));
  padding: clamp(70px, 10vh, 128px) clamp(24px, 8vw, 160px) clamp(96px, 13vh, 170px);
  background: ${({ theme }) => theme.colors.paper};
`;

const ContactShell = styled.section.attrs({ "data-reveal": "" })`
  display: grid;
  gap: clamp(54px, 8vh, 104px);
  width: min(1040px, 100%);
  margin-inline: auto;
`;

const ContactHero = styled.header`
  display: grid;
  gap: 24px;
  padding-bottom: clamp(34px, 5vh, 64px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  h1 {
    margin: 0;
    font-size: clamp(58px, 10vw, 132px);
    line-height: 0.9;
    letter-spacing: 0.08em;
  }

  p {
    width: min(760px, 100%);
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.2vw, 22px);
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (min-width: 901px) {
    h1 {
      font-size: clamp(52px, 5.8vw, 86px);
      line-height: 0.98;
    }
  }
`;

const ContactBody = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.78fr) minmax(360px, 1fr);
  gap: clamp(46px, 8vw, 118px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactNotes = styled.aside`
  display: grid;
  gap: clamp(28px, 4vh, 46px);

  h2 {
    margin: 0;
    font-size: clamp(22px, 1.9vw, 34px);
    line-height: 1.35;
    letter-spacing: 0.1em;
  }
`;

const FaqList = styled.div`
  display: grid;
  gap: 28px;
`;

const FaqItem = styled.article`
  display: grid;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: clamp(14px, 1.1vw, 18px);
    line-height: 1.55;
    letter-spacing: 0.1em;
  }

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(14px, 1vw, 17px);
    line-height: 1.9;
    letter-spacing: 0.08em;
  }
`;

const ContactList = styled.dl`
  display: grid;
  gap: 14px;
  margin: 0;
  padding-top: 6px;
`;

const ContactMeta = styled.div`
  display: grid;
  gap: 4px;

  dt {
    color: #6a6a62;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    color: #383832;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.65;
    letter-spacing: 0.08em;
  }

  span {
    display: block;
  }
`;

const ContactForm = styled.form`
  display: grid;
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.ink};
`;

const Field = styled.label`
  display: grid;
  gap: 14px;
  padding: clamp(24px, 4vh, 38px) 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  span {
    font-size: 13px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  input,
  textarea {
    width: 100%;
    padding: 0;
    color: ${({ theme }) => theme.colors.ink};
    font: inherit;
    font-size: clamp(18px, 1.6vw, 28px);
    font-weight: 800;
    line-height: 1.6;
    letter-spacing: 0.06em;
    background: transparent;
    border: 0;
    outline: 0;
  }

  textarea {
    min-height: 190px;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #aaa99f;
  }
`;

const FormFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-top: clamp(24px, 4vh, 42px);

  p {
    margin: 0;
    color: #383832;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.08em;
  }
`;

const SubmitButton = styled.button`
  min-width: 150px;
  min-height: 48px;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.paper};
  font: inherit;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.16em;
  background: ${({ theme }) => theme.colors.ink};
  border: 1px solid ${({ theme }) => theme.colors.ink};
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.line};
    outline-offset: 3px;
  }
`;

function ContactMetaValue({ item }) {
  if (item.lines) {
    return item.lines.map((line) => <span key={line}>{line}</span>);
  }

  if (item.href) {
    return (
      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
        {item.value}
      </a>
    );
  }

  return item.value;
}

export function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [`お名前: ${form.name}`, `メール: ${form.email}`, "", form.message].join("\n");
    const href = `mailto:razeria02@gmail.com?subject=${encodeURIComponent("Portfolio contact")}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus("メールソフトを開きました。内容を確認して送信してください。");
  };

  return (
    <ContactMain>
      <ContactShell>
        <ContactHero>
          <h1>CONTACT</h1>
          <p>お問い合わせ、制作や企画のご相談は下記フォームよりお願いいたします。</p>
          <p>For inquiries and project requests, please use the form below.</p>
        </ContactHero>

        <ContactBody>
          <ContactNotes>
            <h2>お問い合わせの前に</h2>
            <FaqList>
              {contactFaqItems.map((item) => (
                <FaqItem key={item.heading}>
                  <h3>■{item.heading}</h3>
                  <p>{item.text}</p>
                </FaqItem>
              ))}
            </FaqList>

            <ContactList>
              {contactItems.map((item) => (
                <ContactMeta key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>
                    <ContactMetaValue item={item} />
                  </dd>
                </ContactMeta>
              ))}
            </ContactList>
          </ContactNotes>

          <ContactForm onSubmit={handleSubmit}>
            <Field>
              <span>Name</span>
              <input autoComplete="name" name="name" onChange={updateField("name")} placeholder="いとう りみ" required type="text" value={form.name} />
            </Field>
            <Field>
              <span>E-mail</span>
              <input autoComplete="email" name="email" onChange={updateField("email")} placeholder="mail@example.com" required type="email" value={form.email} />
            </Field>
            <Field>
              <span>Message</span>
              <textarea name="message" onChange={updateField("message")} placeholder="お問い合わせ内容をご記入ください。" required value={form.message} />
            </Field>
            <FormFooter>
              <p aria-live="polite">{status}</p>
              <SubmitButton type="submit">送信</SubmitButton>
            </FormFooter>
          </ContactForm>
        </ContactBody>
      </ContactShell>
    </ContactMain>
  );
}
