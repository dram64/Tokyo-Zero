import { useEffect, useState } from "react";
import styles from "./ImageSlideshow.module.css";
import { imagesData } from "../data/imagesData";
import { backgroundData } from "../data/backgroundData";
import { textData } from "../data/textData";
import { iconData } from "../data/iconData";

const TIMER_SLIDE = 5000;
const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < imagesData.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    let timer: number;
    if (autoPlay) {
      timer = window.setInterval(() => {
        nextImage();
      }, TIMER_SLIDE);
    }

    return () => clearInterval(timer);
  }, [autoPlay, currentIndex]);

  return (
    <div className={styles.slideshow_container}>
      {textData.map((item, index) => (
        <div
          className={`${styles.text_title} ${
            index === currentIndex ? styles.image_visible : ""
          }`}
          key={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      ))}

      {imagesData.map((item, index) => (
        <div
          className={`${styles.splash} ${
            index === currentIndex ? styles.image_visible : ""
          }`}
          key={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      ))}
      {backgroundData.map((item, index) => (
        <div
          className={`${styles.image} ${
            index === currentIndex ? styles.image_visible : ""
          }`}
          key={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
      ))}

      <div className={styles.icons}>
        <span>
          {iconData.map((item, index) => {
            return (
              <div>
                <img
                  key={index}
                  src={item.image}
                  onClick={() => setCurrentIndex(index)}
                ></img>
              </div>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default ImageSlideshow;
