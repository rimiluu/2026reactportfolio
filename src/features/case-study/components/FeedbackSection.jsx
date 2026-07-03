import styled from "styled-components";
import { FieldRoot } from "./FieldSection";

const FeedbackBubbles = styled.div.attrs({ className: "feedback-bubbles" })`
  display: grid;
  grid-template-columns: repeat(2, minmax(360px, 520px));
  justify-content: center;
  gap: clamp(30px, 4vw, 58px) clamp(34px, 5vw, 72px);
  width: min(1180px, calc(100% - 44px));
  margin: 18px auto 0;

  p {
    --make-gradient: linear-gradient(135deg, #4750fd 0%, #ff25f0 100%);
    position: relative;
    min-height: 128px;
    padding: clamp(24px, 2.5vw, 34px);
    color: ${({ theme }) => theme.colors.ink};
    font-size: clamp(14px, 1vw, 16px);
    font-weight: 700;
    line-height: 2;
    border: 3px solid transparent;
    border-radius: 18px;
    background:
      linear-gradient(#ffffff, #ffffff) padding-box,
      var(--make-gradient) border-box;
  }

  p::before,
  p::after {
    content: "";
    position: absolute;
    left: 28px;
    bottom: -23px;
    width: 28px;
    height: 28px;
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }

  p::before {
    background: var(--make-gradient);
  }

  p::after {
    left: 32px;
    bottom: -15px;
    width: 20px;
    height: 20px;
    background: #ffffff;
  }

  p:nth-child(2) {
    margin-top: clamp(32px, 5vh, 64px);
  }

  p:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
    width: min(760px, 100%);
    margin-top: 0;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;

    p,
    p:nth-child(2),
    p:nth-child(3) {
      min-height: 0;
      margin-top: 0;
    }
  }
`;

export function FeedbackSection({ feedback }) {
  if (!feedback) return null;

  return (
    <FieldRoot $variant="make-feedback">
      <h3>Feed Back</h3>
      <FeedbackBubbles aria-label="ユーザビリティテストで得たコメント">
        {feedback.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </FeedbackBubbles>
    </FieldRoot>
  );
}
