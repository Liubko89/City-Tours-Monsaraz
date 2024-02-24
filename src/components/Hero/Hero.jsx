import css from "./Hero.module.css";
import videoBG from "../../video/AdobeStock.mp4";

function Hero() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroWrap}>
        <div className={css.heroBackground}>
          <div className={css.heroContent}>
            <h1 className={css.heroTitle}>Reguengos de Monsaraz</h1>
          </div>
        </div>
        <video className={css.video} src={videoBG} autoPlay loop muted></video>
      </div>

      <p className={css.heroDescription}>
        Immerse yourself in the charming atmosphere and enjoy the beauty of the
        Portuguese countryside
      </p>
    </section>
  );
}

export default Hero;
