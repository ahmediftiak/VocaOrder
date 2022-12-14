import React from "react";
import backgroundImage from "../images/landingPage-img.png";

function LandingPage() {
    return (
        <div>
            <a href="/menus">
                <img src={backgroundImage}
                    height="auto"
                    width="100%"
                ></img>
            </a>
        </div>
    );
};
export default LandingPage;