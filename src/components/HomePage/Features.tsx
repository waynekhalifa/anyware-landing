interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <div className="cu-main-section cu-main-section-features cu-main-section_rounded cu-main-section_purple">
      <div className="cu-main-section-features__wrapper hide-on-desktop">
        <nav
          className="cu-main-section-features__tabs-nav"
          aria-label="Features types Navigation"
        >
          <a
            href="#"
            cu-data-tab-nav="docs-features-tab"
            className="cu-main-section-features__tabs-nav-item cu-tab__item"
          >
            Docs
          </a>
          <a
            href="#"
            cu-data-tab-nav="whiteboard-features-tab"
            className="cu-main-section-features__tabs-nav-item cu-tab__item cu-tab__item_active"
          >
            Whiteboards
          </a>
          <a
            href="#"
            cu-data-tab-nav="dashboard-features-tab"
            className="cu-main-section-features__tabs-nav-item cu-tab__item"
          >
            Dashboards
          </a>
        </nav>
      </div>
      <div className="cu-main-section__wrapper cu-main-section-features__wrapper">
        <div className="cu-main-section-features__tabs cu-tab">
          <nav
            className="cu-main-section-features__tabs-nav show-on-desktop"
            aria-label="Features types Navigation"
          >
            <a
              href="#"
              cu-data-tab-nav="docs-features-tab"
              className="cu-main-section-features__tabs-nav-item cu-tab__item"
            >
              Docs
            </a>
            <a
              href="#"
              cu-data-tab-nav="whiteboard-features-tab"
              className="cu-main-section-features__tabs-nav-item cu-tab__item cu-tab__item_active"
            >
              Whiteboards
            </a>
            <a
              href="#"
              cu-data-tab-nav="dashboard-features-tab"
              className="cu-main-section-features__tabs-nav-item cu-tab__item"
            >
              Dashboards
            </a>
          </nav>
          <div className="cu-main-section-features__tabs-content cu-tab__content">
            <div
              className="cu-main-section-features__tabs-panel cu-tab__panel"
              cu-data-tab-panel="docs-features-tab"
            >
              <h2 className="cu-main-section__header cu-main-section-features__header">
                The world's most powerful <br /> (and fun) Docs.
              </h2>
              <div className="cu-main-section__video cu-main-section-features__tabs-video">
                <video
                  autoPlay
                  loop
                  className="lazy loaded"
                  height={587}
                  muted
                  playsInline
                  poster="/images/poster-images/videos/main/docs.png"
                  width={860}
                >
                  <source
                    data-src="/videos/main/docs.mp4"
                    type="video/mp4"
                    src="/videos/main/docs.mp4"
                  />
                </video>
              </div>
            </div>
            <div
              className="cu-main-section-features__tabs-panel cu-tab__panel cu-tab__panel_active"
              cu-data-tab-panel="whiteboard-features-tab"
            >
              <h2 className="cu-main-section__header cu-main-section-features__header">
                Bring your ideas to <br /> life with Whiteboards.
              </h2>
              <div className="cu-main-section__video cu-main-section-features__tabs-video">
                <video
                  autoPlay
                  loop
                  className="lazy loaded"
                  height={587}
                  muted
                  playsInline
                  poster="/images/poster-images/videos/main/whiteboard.png"
                  width={860}
                >
                  <source
                    data-src="/videos/main/whiteboard.mp4"
                    type="video/mp4"
                    src="/videos/main/whiteboard.mp4"
                  />
                </video>
              </div>
            </div>
            <div
              className="cu-main-section-features__tabs-panel cu-tab__panel"
              cu-data-tab-panel="dashboard-features-tab"
            >
              <h2 className="cu-main-section__header cu-main-section-features__header">
                See how you're doing in <br /> real-time with Dashboards.
              </h2>
              <div className="cu-main-section__video cu-main-section-features__tabs-video">
                <video
                  autoPlay
                  loop
                  className="lazy loaded"
                  height={587}
                  muted
                  playsInline
                  poster="/images/poster-images/videos/main/dashboard.png"
                  width={860}
                >
                  <source
                    data-src="/videos/main/dashboard.mp4"
                    type="video/mp4"
                    src="/videos/main/dashboard.mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        data-ga-click-tracking
        ga-category="Free forever button"
        ga-event="Free forever click"
        lp-plan="free-forever"
        ga-label="menu button"
        href="#"
        mail-label="menu free forever"
        className="cu-main-section__btn cu-main-section__btn--with-arrow"
      >
        <span>Get Started</span>
      </a>
    </div>
  );
};

export default Features;
