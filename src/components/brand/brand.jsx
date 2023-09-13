import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="Google"></img>
      </div>
      <div>
        <img src={slack} alt="Slack"></img>
      </div>
      <div>
        <img src={atlassian} alt="Atlassian"></img>
      </div>
      <div>
        <img src={dropbox} alt="Dropbox"></img>
      </div>
      <div>
        <img src={shopify} alt="Shopify"></img>
      </div>
    </div>
  );
};

export default brand;
