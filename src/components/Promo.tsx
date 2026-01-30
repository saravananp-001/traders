import Image from "next/image";
import Link from "next/link";

export const Promo1 = () => {
  const causeCategories: {
    image: string;
    title: string;
    delay: string;
    width: number;
  }[] = [
      {
        image: "/assets/img/icon/cat1.png",
        title: "Pure Water",
        delay: ".2s",
        width: 53,
      },
      {
        image: "/assets/img/icon/cat2.png",
        title: "Health Food",
        delay: ".4s",
        width: 59,
      },
      {
        image: "/assets/img/icon/cat3.png",
        title: "No Poverty",
        delay: ".6s",
        width: 60,
      },
      {
        image: "/assets/img/icon/cat4.png",
        title: "Good Health",
        delay: ".7s",
        width: 56,
      },
      {
        image: "/assets/img/icon/cat5.png",
        title: "Partnerships",
        delay: ".8s",
        width: 62,
      },
      {
        image: "/assets/img/icon/cat6.png",
        title: "Good Health",
        delay: ".9s",
        width: 64,
      },
    ];
  return (
    <section className="promo-section section-padding pt-0">
      <div className="container">
        <div className="promo-wrapper style-3">
          <div className="row g-4">
            {causeCategories.map((item, index) => (
              <div
                className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
                key={index}
              >
                <div className="single-causes-cat">
                  <Link href="/causes-details">
                    <div className="icon">
                      <Image
                        width={59}
                        height={59}
                        sizes="100vw"
                        style={{ width: `${item.width}px`, height: "auto" }}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <h6>{item.title}</h6>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export const Promo2 = () => {
  const promoData = [
    {
      type: "support",
      delay: ".3s",
      bgImage: "/assets/img/scrap/img-1.jpg",
      label: "Step 1",
      title: "Quality Scrap Inspection",
      description:
        "We carefully check and evaluate your scrap to ensure accurate pricing and transparency.",
      // link: "/quality-check",
    },
    {
      type: "support",
      delay: ".5s",
      bgImage: "/assets/img/scrap/img-2.jpg",
      label: "Step 2",
      title: "Instant Payment",
      description:
        "Get paid immediately after scrap verification through cash or digital payment.",
      // link: "/payment",
      btnText: "Get Paid Now",
    },
    {
      type: "support",
      delay: ".7s",
      bgImage: "/assets/img/scrap/img-3.jpg",
      label: "Step 3",
      title: "Zero Pickup Charges",
      description:
        "We collect your scrap from your doorstep with absolutely no service or pickup fees.",
      btnText: "Get Paid Now",
    },
  ];

  return (
    <section className="promo-section section-padding pt-0">
      <div className="container">
        <div className="promo-wrapper">
          <div className="row g-4">
            {promoData.map((item, index) => (
              <div
                key={index}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="support-promo-box">
                  <div
                    className="promo-bg bg-cover"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="promo-details">
                    <span>{item.label}</span>
                    <h3>
                      {
                        item.title
                      }
                    </h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export const Promo3 = () => {
  const promoItems: {
    title: string;
    description: string;
    icon: string;
    image: string;
    styleClass?: string;
    delay: string;
  }[] = [
      {
        title: "Make Donation",
        description:
          "The Spring is a passionate and determined group of monthly givers on a mission",
        icon: "/assets/img/hand.png",
        image: "/assets/img/support-girl.jpg",
        delay: ".3s",
      },
      {
        title: "Foundries For Grow",
        description:
          "The Spring is a passionate and determined group of monthly givers on a mission",
        icon: "/assets/img/world.png",
        image: "/assets/img/waterboy.jpg",
        styleClass: "style-2",
        delay: ".5s",
      },
    ];

  return (
    <section className="promo-section section-padding pt-0">
      <div className="container">
        <div className="promo-wrapper promo-style-2">
          <div className="row g-0">
            {promoItems.map((item, index) => (
              <div
                key={index}
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div
                  className={`single-promo-box-items ${item.styleClass || ""
                    } bg-cover`}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "80px", height: "auto" }}
                      src={item.icon}
                      alt="img"
                    />
                  </div>
                  <div className="content">
                    <h3>
                      <Link href="/donation-details">{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <Link href="/donation-details" className="link-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
