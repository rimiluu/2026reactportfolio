export const sectionHeading = `
  h3 {
    margin: 0 0 40px;
    font-size: clamp(26px, 2vw, 42px);
    letter-spacing: 0.14em;
  }

  p {
    margin: 0;
    color: #383832;
    font-size: clamp(16px, 1.15vw, 24px);
    line-height: 2;
    letter-spacing: 0.08em;
  }

  @media (max-width: 560px) {
    h3 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
      line-height: 1.9;
    }
  }
`;

