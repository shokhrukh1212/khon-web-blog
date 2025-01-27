import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/my_image.jpg"
          alt="An image showing Shokhrukh"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Shokhrukh Karimov</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
export default Hero;
