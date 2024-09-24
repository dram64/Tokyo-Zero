import "./Showcase.css";
import panty from "../assets/Panty.png";
import ironMouse from "../assets/IronmouseRaceQueen.png";
import miku from "../assets/Miku.png";
import oc from "../assets/Reika.png";
import chiaki from "../assets/ChiakiShowcase.png";

const Showcase = () => {
  return (
    <div className="showcase_container">
      <div className="card">
        <img src={panty} className="" height={"100%"} width={"100%"} alt="" />
      </div>
      <div className="card">
        <img
          src={ironMouse}
          className=""
          height={"100%"}
          width={"100%"}
          alt=""
        />
      </div>

      <div className="card">
        <img src={miku} className="" height={"100%"} width={"100%"} alt="" />
      </div>
      <div className="card">
        <img src={chiaki} className="" height={"100%"} width={"100%"} alt="" />
      </div>
      <div className="card">
        <img src={oc} className="" height={"100%"} width={"100%"} alt="" />
      </div>
    </div>
  );
};

export default Showcase;
