import React from "react";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className="whyCompanyContainer" id='why-company'>
      <h2 className="whyContainerH2">What I love about Plexxis</h2>
      <p>Here are some fact that I really like about the Company:</p>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          1. Plexxis helps contractors/subcontractors implement technological solutions to improve performance and efficiency
        </h4>
        <p>
        Plexxis aim&apos;s to help contractors/subcontractors streamline their
          operations, improve productivity, and enhance relationships with
          customers and employees. I have family who work in the trades industry and when you don&apos;t have the proper technologies in place for communication and operations it can be very chaotic.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          2. Being passionate about what you do is highly important.
        </h4>
        <p>
          Being passionate about what you do is important to Plexxis and it is also important to me. I think we should always strive to love what we are doing and to always improve on it. I
          LOVE Plexxis&apos;s superhero code and I think our values fit very well!
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          3. Great and supportive team environment
        </h4>
        <p>
          Respect and trust between coworkers are values that are important to
          me. Having a strong team of people who are compassionate and
          help you to reach your greatest potential (and fun!) makes Plexxis sound like a great place to work.
        </p>
      </div>
    </div>
  );
};
