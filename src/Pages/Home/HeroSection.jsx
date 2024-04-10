export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi There!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Sandy and Ollie</span>{" "}
            <br />
            Lifestyle Applications
          </h1>
          <p className="hero--section-description">
            Building applications that inspire.
            <br /> What do you want to create today?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/pups_front.png" alt="Hero Section" />
      </div>
    </section>
  );
}
