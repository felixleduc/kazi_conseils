import CaseStudyItem from "./CaseStudyItem";

export default function CaseStudiesSection() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] font-extrabold pb-16 text-center min-[1400px]:text-left">ÉTUDE DE CAS</h3>
      <CaseStudyItem />
      <CaseStudyItem reverse />
      <CaseStudyItem />
    </>
  );
}

