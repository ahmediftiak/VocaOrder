import React from "react";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <h2 className="mb-3">About our project</h2>
        <p className="mb-5">
          VocaOrder is web-based food ordering system through use of voice coversation.
        </p>
        <h2 className="mb-3">About our Team</h2>
        <div className="row">
          <div className="col-lg-4">
            <h3>Choeden Dolma</h3>
            <p>
              A computer science student at Groove School of engineering 
              in City College of New York and fellow at Cuny Tech-Prep.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Shahid Emdad</h3>
            <p>
            A computer science student at Groove School of engineering 
            in City College of New York and fellow at Cuny Tech-Prep.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Iftiak Ahmed</h3>
            <p>
            A computer science student at Groove School of engineering 
            in City College of New York and fellow at Cuny Tech-Prep.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;