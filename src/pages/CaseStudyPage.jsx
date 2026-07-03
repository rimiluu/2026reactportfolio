import styled from "styled-components";
import { CaseStudyContent } from "../features/case-study/CaseStudySections";

const CaseMain = styled.main``;

const CaseSection = styled.section.attrs(({ $sectionClassName }) => ({
  className: `case ${$sectionClassName}`,
}))`
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

export function CaseStudyPage({ caseData }) {
  return (
    <CaseMain>
      <CaseSection $sectionClassName={caseData.sectionClassName} id="honnova">
        <CaseStudyContent caseData={caseData} />
      </CaseSection>
    </CaseMain>
  );
}
