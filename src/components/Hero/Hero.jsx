import css from "./Hero.module.css";

function Hero() {
  return (
    <section className={css.heroSection}>
      <h1>City tours in Monsaraz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et
        voluptatem alias quas sint incidunt aspernatur assumenda dicta a
        temporibus. Laboriosam maiores, sequi velit est dolores voluptates
        maxime tempore veniam.
      </p>
      <video controls>
        <source src="../../video/AdobeStock.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Hero;
