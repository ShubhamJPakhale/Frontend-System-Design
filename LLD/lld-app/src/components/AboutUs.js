import React from "react";
import { langData } from "./multi-language/languageConstant";

const AboutUs = ({ lang }) => {
  console.log("Selected Language:", lang);
  const content = langData[lang] || langData["en"];
  return (
    <div>
      <h1 className="font-bold text-2xl my-5">{content.aboutUs.title}</h1>
      <p>{content.aboutUs.content}</p>
      <h1 className="font-bold text-2xl my-5">{content.ourMission.title}</h1>
      <p>{content.ourMission.content}</p>
      <h1 className="font-bold text-2xl my-5">{content.ourVision.title}</h1>
      <p>{content.ourVision.content}.</p>
      <h1 className="font-bold text-2xl my-5">
        {content.aboutTheProduct.title}
      </h1>
      <p>{content.aboutTheProduct.content}</p>
      <h1 className="font-bold text-2xl my-5">{content.team.title}</h1>
      <p>{content.team.content}</p>
    </div>
  );
};

export default AboutUs;
