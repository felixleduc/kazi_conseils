import CaseStudyItem from "./CaseStudyItem";

export default function CaseStudiesSection() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] min-[1052px]:text-left text-center font-extrabold pb-16">
        ÉTUDE DE CAS
      </h3>
      <CaseStudyItem />
      <CaseStudyItem reverse />
      <CaseStudyItem />
    </>
  );
}
