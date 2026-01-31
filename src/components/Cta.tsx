import Link from "next/link";

export const Cta1 = () => {
  return (
    <section className="cta-banner fix">
      <div className="container">
        <div
          className="cta-banner-wrapper section-padding bg-cover"
          style={{ backgroundImage: 'url("assets/img/join-cat-bg.jpg")' }}
        >
          <div className="row">
            <div className="offset-xl-5 col-xl-6 col-lg-8 offset-lg-2 col-md-12">
              <div className="section-title">
                <span className="sub-title text-white wow fadeInUp">
                  <i className="far fa-heart" />
                  Life Changing Video
                </span>
                <h2 className="mt-char-animation text-white">
                  Joel Orphanage Of Ministry Uganda
                </h2>
              </div>
              <div className="button-items mt-4 mt-md-0">
                <Link
                  href="causes"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <i className="fal fa-briefcase" />
                  Careers
                </Link>
                <Link
                  href="donation-details"
                  className="theme-btn transparent-btn wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <i className="fal fa-user" />
                  Internship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta2 = () => {
  return (
    <section className="cta-banner-section-3 fix section-padding">
      <div className="container">
        <div className="cta-banner-wrapper-3">
          <div className="section-title mb-0">
            <span className="sub-title text-white wow fadeInUp">
              <i className="far fa-heart" /> Join With Us
            </span>
            <h2 className="mt-char-animation text-white">
              Let’s be a Part <br /> of us
            </h2>
          </div>
          <form
            action="#"
            id="contact-form"
            method="POST"
            className="newsletter-items"
          >
            <div className="form-clt wow fadeInUp" data-wow-delay=".7s">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
              <button
                className="theme-btn wow fadeInUp"
                data-wow-delay=".9s"
                type="submit"
              >
                <span>
                  Join Now <i className="far fa-arrow-right" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export const Cta3 = () => {
  return (
    <section className="cta-subscribe-section fix theme-bg section-padding">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5">
            <div className="section-title mb-0">
              <span className="sub-title color-3 wow fadeInUp">
                <i className="far fa-gear" />
                Our Works
              </span>
              <h2 className="mt-char-animation text-white">
                Turning Your Scrap Into Value
              </h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cta-subscribe-form">
              <div className="text-center section-title mb-0">
                <span className="sub-title color-2 wow fadeInUp">
                  <i className="far fa-gear" />
                  Why Choose Us
                </span>
              </div>
              <p className="text-white text-center">Jeni Traders is a trusted scrap collection and recycling service committed to fair pricing, timely pickup, and responsible handling of materials. We serve homes, businesses, and industries with transparent weighing, quick payment, and eco-friendly recycling practices you can rely on.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta4 = () => {
  return (
    <section className="cta-video-section fix section-padding theme-bg">
      <div className="container">
        <div className="cta-video-wrapper">
          <div className="section-title mb-0">
            <span className="sub-title wow color-3 fadeInUp">
              <i className="far fa-heart" />
              Life Changing Video
            </span>
            <h2 className="mt-char-animation text-white">
              Joel Orphanage Of <br />
              Ministry Uganda
            </h2>
          </div>
          <div className="video-play-btn wow fadeInUp" data-wow-delay=".5s">
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-btn ripple video-popup"
            >
              <i className="fas fa-play" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-text video-popup wow fadeInUp"
              data-wow-delay=".5s"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta5 = () => {
  return (
    <section
      className="cta-video-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/cta-video.jpg")' }}
    >
      <div className="container">
        <div className="cta-video-wrapper d-block center">
          <div className="section-title">
            <span className="sub-title color-2 wow fadeInUp">
              <i className="far fa-heart" />
              Life Changing Video
            </span>
            <h2 className="mt-char-animation text-white">
              Joel Orphanage Of <br />
              Ministry Uganda
            </h2>
          </div>
          <div
            className="video-play-btn pt-4 mt-md-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-btn ripple video-popup"
            >
              <i className="fas fa-play" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
              className="video-text video-popup wow fadeInUp"
              data-wow-delay=".5s"
            >
              Play Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
