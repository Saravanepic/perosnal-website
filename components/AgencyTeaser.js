import Link from "next/link";
const AgencyTeaser = () => {
  return (
    <div className="nicolas_sm_section" id="agencies">
      <div className="nicolas_sm_experience">
        <div className="container">
          <div className="nicolas_sm_main_title">
            <div className="left">
              <span>// For agencies</span>
            </div>
            <div className="center">
              <p>
                Running a design or marketing agency? I work as your
                white-label Shopify &amp; web developer, so you can take on
                more clients without hiring.
              </p>
            </div>
            <div className="right">
              <Link href="/agencies">(( Agency plans ))</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="extra_container">
            <div className="experience_in">
              <div className="list_inner">
                <div className="left">
                  <p>White-label &amp; NDA</p>
                </div>
                <div className="center">
                  <p>Built under your brand. Your client never needs to know.</p>
                </div>
                <div className="right">
                  <span>Your brand</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Monthly retainer</p>
                </div>
                <div className="center">
                  <p>40 dev hours a month to use across any of your clients.</p>
                </div>
                <div className="right">
                  <span>From $1,200/mo</span>
                </div>
              </div>
              <div className="list_inner">
                <div className="left">
                  <p>Per project</p>
                </div>
                <div className="center">
                  <p>Send designs and scope, get a fixed quote and timeline.</p>
                </div>
                <div className="right">
                  <span>Fixed quote</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgencyTeaser;
