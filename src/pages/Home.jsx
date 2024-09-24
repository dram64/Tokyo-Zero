import DDShowcase from "../components/Showcase";
import ImageSlideshow from "../components/ImageSlideshow";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <ImageSlideshow></ImageSlideshow>
      <div id="animated-text-strip">
        <span class="marquee">CHARACTER ANNOUNCEMENT COMING SOON&nbsp;</span>
        <span class="marquee">CHARACTER ANNOUNCEMENT COMING SOON&nbsp;</span>
        <span class="marquee">CHARACTER ANNOUNCEMENT COMING SOON&nbsp;</span>
      </div>
      <div></div>
      <DDShowcase></DDShowcase>;
    </div>
  );
};

export default Home;
