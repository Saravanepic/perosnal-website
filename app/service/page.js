import Partners from "@/components/Partners";
import Service from "@/components/Service";
import TestimonialSlider from "@/components/TestimonialSlider";
import WorkingProcess from "@/components/WorkingProcess";
import NikolasLayout from "@/layouts/NikolasLayout";
import Faq from "@/components/Faq";
const page = () => {
  return (
    <NikolasLayout>
      {" "}
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="underline">Specialized in</span>
              <span className="stroke_text"> website Development </span>and{" "}
              <span className="stroke_text">ecommerce </span>
              <span className="underline">system's</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Service */}
      <Service sectionNumber="" />
      {/* /Service */}
      {/* Testimonials */}
      {/* <TestimonialSlider sectionNumber="" /> */}
      {/* /Testimonials */}
      {/* Partners */}
      {/* <Partners sectionNumber="" /> */}
      {/* /Partners */}
      {/* Process */}
      <WorkingProcess />
      <div className="nicolas_sm_question" id="question">
          <div className="container">
            <div className="extra_container">
              <div className="question_in">
                <div className="main_title">
                  <h3>Have any questions?</h3>
                </div>
                <Faq />
              </div>
            </div>
          </div>
      </div>
      {/* /Process */}
    </NikolasLayout>
  );
};
export default page;
