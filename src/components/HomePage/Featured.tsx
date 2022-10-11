const Featured: React.FC = () => {
  return (
    <div className="wrapper cu-main-section-header__wrapper">
      <div className="cu-main-section-header__wrapper-inner">
        <h1
          className="cu-main-section-header__title"
          style={{ display: "none !important" }}
        >
          One app to <br /> replace them all.
        </h1>
        <h1
          is="mutiny-h1-personalization"
          data-mutiny-root="true"
          data-mutiny-id="3fbe0f5d-94bf-40e3-b121-e70cd57367a3"
          className="cu-main-section-header__title"
          style={{ fontSize: "50px" }}
        >
          One app to do
          <br data-mutiny="true" /> it all.
        </h1>
        <p className="cu-main-section-header__subtitle">
          All of your work in one place: Tasks, Docs, Chat, Goals, &amp; more.
        </p>
        <div className="cu-em-get-started">
          <input
            className="cu-em-get-started__input"
            data-input-landing-page
            placeholder="Enter your email address"
            type="email"
          />
          <div className="cu-em-get-started__error" data-error-landing-page>
            Please enter a valid email address
          </div>
          <button
            className="btn btn_v2 btn-round"
            data-ga-click-tracking
            data-submit-landing-page
            ga-event="landingpage_lead main click"
          >
            <div className="btn__text">Get Started</div>
            <div className="btn-spinner">
              <div className="btn-spinner__bounce1"></div>
              <div className="btn-spinner__bounce2"></div>
              <div className="btn-spinner__bounce3"></div>
            </div>
          </button>
        </div>
        <div className="cu-main-section-header__rating">
          <div className="cu-main-section-header__rating-text">
            <div className="rating">
              <span className="rating-star"></span>
              <span className="rating-star"></span>
              <span className="rating-star"></span>
              <span className="rating-star"></span>
              <span className="rating-star"></span>
            </div>
            Based on 10,000+ reviews on
          </div>
          <div className="rating-logos">
            <a
              href="https://www.g2crowd.com/products/clickup/reviews"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                alt="G2crowd"
                height={69}
                loading="lazy"
                src="/images/reviews/color/g2crowd.png"
                style={{ width: "63px" }}
                width={245}
                draggable="false"
              />
            </a>
            <a
              href="https://www.capterra.com/p/158833/ClickUp/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                alt="Capterra"
                height={69}
                loading="lazy"
                src="/images/reviews/color/capterra.png"
                style={{ width: "70px" }}
                width={299}
                draggable="false"
              />
            </a>
            <a
              href="https://www.getapp.com/project-management-planning-software/a/clickup/reviews/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                alt="Getapp"
                height={16}
                loading="lazy"
                src="/images/reviews/color/getapp.svg"
                style={{ width: "77px" }}
                width={77}
                draggable="false"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="cu-main-section-header__wrapper-inner">
        <div className="cu-main-section-header__img">
          <picture>
            <source
              srcSet="images/home/home-banner-graphic-v2@2x.avif"
              type="image/avif"
            />
            <source
              srcSet="images/home/home-banner-graphic-v2@2x.webp"
              type="image/webp"
            />
            <img
              src="/images/home/home-banner-graphic-v2.png"
              width={977}
              height={729}
              loading="eager"
              decoding="async"
              alt="One app to replace them all."
              draggable="false"
            />
          </picture>
        </div>
        <div className="cu-main-section-header__video">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n            .video-component--mutiny {\n              width: unset;\n              height: unset;\n            }\n            .video-component--mutiny video {\n              max-width: 90%;\n              margin-left: 4rem;\n            }\n            @media (max-width: 768px) {\n              .video-component--mutiny video {\n                max-width: 100%;\n                margin: 0 0 0 2rem;\n              }\n            }\n            @media (max-width: 500px) {\n              .video-component--mutiny video {\n                margin: 0;\n              }\n            }\n          ",
            }}
          />
          <div className="video-component__wrapper">
            <div
              className="video-component video-component--mutiny"
              style={{
                backgroundColor: "transparent",
                boxShadow: "0px 0px 0px rgba(16, 30, 54, 0.09)",
              }}
            >
              <video
                id="mutiny-video"
                loop
                muted
                width={1880}
                height={1224}
                poster="https://clickup.com/videos/mutiny/CLK-109988/header-graphic.min.png"
                autoPlay
                playsInline
              >
                <source
                  src="https://clickup.com/videos/mutiny/CLK-109988/header-graphic-v08.mp4"
                  type="video/mp4;codecs=hvc1"
                />
                <source
                  src="https://clickup.com/videos/mutiny/CLK-109988/header-graphic-v08.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n          @media screen and (min-width:600px) {\n            .cu-main-section-header__img {\n              display: none;\n            }\n          }\n          @media screen and (max-width:600px) {\n            .cu-main-section-header__video {\n              display: none;\n            }\n          }\n        ",
          }}
        />
      </div>
    </div>
  );
};

export default Featured;
