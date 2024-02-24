import css from "./Hero.module.css";
import videoBG from "../../video/AdobeStock.mp4";

function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroBackground}>
        <div className={css.heroContent}>
          <h1>Monsaraz</h1>
        </div>
        <p className={css.subdescr}>
          Immerse yourself in the charming atmosphere and enjoy the beauty of
          the Portuguese countryside
        </p>
      </div>
      <video className={css.video} src={videoBG} autoPlay loop muted></video>
    </section>
  );
}

export default Hero;
