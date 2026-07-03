import { AudioSection } from "./components/AudioSection";
import { CaseIntro } from "./components/CaseIntro";
import { ConceptZone } from "./components/ConceptZone";
import { FeedbackSection } from "./components/FeedbackSection";
import { FieldSection } from "./components/FieldSection";
import { FinalGrid } from "./components/FinalGrid";
import { ProblemSection } from "./components/ProblemSection";
import { RoleSection } from "./components/RoleSection";
import { StickyServiceSection } from "./components/StickyServiceSection";
import { TimelineSection } from "./components/TimelineSection";

export function CaseStudyContent({ caseData }) {
  return (
    <>
      <CaseIntro caseData={caseData} />
      <ProblemSection problems={caseData.problems} />
      <ConceptZone concept={caseData.concept} />
      <StickyServiceSection service={caseData.service} />
      <FeedbackSection feedback={caseData.feedback} />
      <AudioSection audio={caseData.audio} />
      <FieldSection field={caseData.field} />
      <TimelineSection timeline={caseData.timeline} />
      <RoleSection roles={caseData.roles} />
      <FinalGrid items={caseData.finalGrid} />
    </>
  );
}
