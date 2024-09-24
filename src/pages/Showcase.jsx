import "./Showcase.css";
import imShowcase from "../assets/IMShowcase.png";
import mikuShowcase from "../assets/MikuShowcase.png";
import pantyShowcase from "../assets/PantyShowcase.png";
import imFlag from "../assets/IronmouseBannerShowcase.png";
import mikuFlag from "../assets/MikuFlagShowcase.png";
import comingSoon from "../assets/ComingSoonText.png";
import topazSplash from "../assets/TopazTrimmed.png";
import kafkaSplash from "../assets/KafkaTrimmed.png";
import swSplash from "../assets/SilverWolfTrimmed.png";
import topazShowcase from "../assets/TopazShowcase.png";
import KafkaShowcase from "../assets/KafkaShowcase.png";

export const Showcase = () => {
  return (
    <div>
      <div className="imageFadeProducts">
        <img src={imFlag}></img>
      </div>
      <div className="imageAnimShowcaseIM">
        <img src={imShowcase}></img>
      </div>

      <div className="rectangleIM"></div>

      <div className="mikuProduct">
        <img src={mikuFlag}></img>
      </div>
      <div className="imageAnimShowcaseMiku">
        <img src={mikuShowcase}></img>
      </div>
      <div className="rectangleMiku"></div>

      <div className="imageFadeProducts">
        <img src={comingSoon}></img>
      </div>
      <div className="imageAnimShowcasePanty">
        <img src={pantyShowcase}></img>
      </div>
      <div className="rectanglePanty"></div>

      <div>
        <div className="sidebySide">
          <img src={topazSplash}></img>
          <img src={kafkaSplash}></img>
          <img src={swSplash}></img>
        </div>
        <div className="sidebySideAcrylics">
          <img src={KafkaShowcase}></img>
          <img src={topazShowcase}></img>
        </div>
      </div>
      <div className="rectangleHoyo"></div>
    </div>
  );
};

export default Showcase;
