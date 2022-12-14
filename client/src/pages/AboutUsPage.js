import React from "react";

function AboutUsPage(props) {
  return (
    <>
      <div className="col text-center">
        <div className="about">
        <h2 className="mb-3">About our project</h2>
        <p className="mb-5">
          VocaOrder is web-based food ordering system through use of voice coversation.
        </p>
        </div>
        <div className="aboutteam">
        <h2 className="mb-5">About our Team</h2>
        <div className="row">
          <div className="person col-lg-4">
            <h3>Choeden Dolma</h3>
            <p>
              A computer science student at Groove School of engineering 
              in City College of New York and fellow at Cuny Tech-Prep.
            </p>
          </div>
          <div className="person col-lg-4">
            <h3>Shahid Emdad</h3>
            <p>
            A computer science student at Groove School of engineering 
            in City College of New York and fellow at Cuny Tech-Prep.
            </p>
          </div>
          <div className="person col-lg-4">
            <h3>Iftiak Ahmed</h3>
            <p>
            A computer engineering student at Groove School of engineering 
            in City College of New York and fellow at Cuny Tech-Prep.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default AboutUsPage;