const Opportunities: React.FC = () => {
  return (
    <div className="cu-main-section cu-main-section-opportunities cu-main-section_rounded cu-main-section_pink">
      <div className="cu-main-section-opportunities__wrapper hide-on-desktop">
        <nav
          className="cu-main-section-opportunities__tabs-nav"
          aria-label="Opportunities Navigation"
        >
          <a
            href="#"
            cu-data-tab-nav="project-and-tasks-tab"
            className="cu-main-section-opportunities__tabs-nav-item cu-tab__item"
          >
            Projects &amp; Tasks
          </a>
          <a
            href="#"
            cu-data-tab-nav="chat-tab"
            className="cu-main-section-opportunities__tabs-nav-item cu-tab__item"
          >
            Chat
          </a>
          <a
            href="#"
            cu-data-tab-nav="goals-tab"
            className="cu-main-section-opportunities__tabs-nav-item cu-tab__item"
          >
            Goals
          </a>
          <a
            href="#"
            cu-data-tab-nav="all-views-tab"
            className="cu-main-section-opportunities__tabs-nav-item cu-tab__item cu-tab__item_active"
          >
            Views
          </a>
        </nav>
      </div>
      <div className="cu-main-section__wrapper cu-main-section-opportunities__wrapper">
        <div className="cu-main-section-opportunities__tabs cu-tab">
          <nav
            className="cu-main-section-opportunities__tabs-nav show-on-desktop"
            aria-label="Opportunities Navigation"
          >
            <a
              href="#"
              cu-data-tab-nav="project-and-tasks-tab"
              className="cu-main-section-opportunities__tabs-nav-item cu-tab__item cu-tab__item_active"
            >
              Project &amp; Tasks
            </a>
            <a
              href="#"
              cu-data-tab-nav="chat-tab"
              className="cu-main-section-opportunities__tabs-nav-item cu-tab__item"
            >
              Chat
            </a>
            <a
              href="#"
              cu-data-tab-nav="goals-tab"
              className="cu-main-section-opportunities__tabs-nav-item cu-tab__item"
            >
              Goals
            </a>
            <a
              href="#"
              cu-data-tab-nav="all-views-tab"
              className="cu-main-section-opportunities__tabs-nav-item cu-tab__item"
            >
              Views
            </a>
          </nav>
          <div className="cu-main-section-opportunities__tabs-content cu-tab__content">
            <div
              className="cu-main-section-opportunities__tabs-panel cu-tab__panel cu-tab__panel_active"
              cu-data-tab-panel="project-and-tasks-tab"
            >
              <div className="cu-main-section-opportunities__tabs-panel-wrapper">
                <div className="cu-main-section-opportunities__tabs-description">
                  <h2 className="cu-main-section__header cu-main-section-opportunities__header">
                    Simplify work and get more done.
                  </h2>
                  <p className="cu-main-section__text cu-main-section-opportunities__text">
                    Plan, track, and manage any type of work with project
                    management that flexes to your team's needs.
                  </p>
                  <div className="cu-main-section-opportunities__tabs-description-replaces">
                    <div className="cu-main-section-opportunities__tabs-description-replaces-title">
                      Replaces:
                    </div>
                    <div className="cu-main-section-opportunities__tabs-description-replaces-icons">
                      <span>Asana</span>
                      <span>Monday</span>
                      <span>Jira</span>
                    </div>
                  </div>
                  <a
                    data-beta
                    data-ga-click-tracking
                    ga-category="Free forever button"
                    ga-event="Free forever click"
                    lp-plan="free-forever"
                    ga-label="menu button"
                    href="#"
                    mail-label="menu free forever"
                    className="cu-main-section__btn cu-main-section__btn--pink cu-main-section-opportunities__btn"
                  >
                    Get Started
                  </a>
                </div>
                <div className="cu-main-section__video cu-main-section-opportunities__tabs-video">
                  <video
                    autoPlay
                    className="lazy loaded"
                    loop
                    height={650}
                    muted
                    playsInline
                    poster="/images/poster-images/videos/main/views.png"
                    width={980}
                  >
                    <source
                      data-src="/videos/main/views.mp4"
                      type="video/mp4"
                      src="/videos/main/views.mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div
              className="cu-main-section-opportunities__tabs-panel cu-tab__panel"
              cu-data-tab-panel="chat-tab"
            >
              <div className="cu-main-section-opportunities__tabs-panel-wrapper">
                <div className="cu-main-section-opportunities__tabs-description">
                  <h2 className="cu-main-section__header cu-main-section-opportunities__header">
                    Bring everyone together in Chat.
                  </h2>
                  <p className="cu-main-section__text cu-main-section-opportunities__text">
                    Work smarter as a team with real-time chat. Tag individuals
                    or groups, assign comments for action items, and link tasks
                    to get more done together.
                  </p>
                  <div className="cu-main-section-opportunities__tabs-description-replaces">
                    <div className="cu-main-section-opportunities__tabs-description-replaces-title">
                      Replaces:
                    </div>
                    <div className="cu-main-section-opportunities__tabs-description-replaces-icons">
                      <span>Slack</span>
                      <span>MS Teams</span>
                      <span>Google Hangouts</span>
                    </div>
                  </div>
                  <a
                    data-beta
                    data-ga-click-tracking
                    ga-category="Free forever button"
                    ga-event="Free forever click"
                    lp-plan="free-forever"
                    ga-label="menu button"
                    href="#"
                    mail-label="menu free forever"
                    className="cu-main-section__btn cu-main-section__btn--pink cu-main-section-opportunities__btn"
                  >
                    Get Started
                  </a>
                </div>
                <div className="cu-main-section__video cu-main-section-opportunities__tabs-video">
                  <video
                    autoPlay
                    loop
                    className="lazy loaded"
                    height={650}
                    muted
                    playsInline
                    poster="/images/poster-images/videos/main/chat.png"
                    width={980}
                  >
                    <source
                      data-src="/videos/main/chat.mp4"
                      type="video/mp4"
                      src="/videos/main/chat.mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div
              className="cu-main-section-opportunities__tabs-panel cu-tab__panel"
              cu-data-tab-panel="goals-tab"
            >
              <div className="cu-main-section-opportunities__tabs-panel-wrapper">
                <div className="cu-main-section-opportunities__tabs-description">
                  <h2 className="cu-main-section__header cu-main-section-opportunities__header">
                    Set goals and crush them faster.
                  </h2>
                  <p className="cu-main-section__text cu-main-section-opportunities__text">
                    Stay on track to hit your goals with targets for task
                    completions, numbers, monetary values and more. Track
                    progress in real-time connecting tasks to goals and keep
                    your objectives organized with Goal Folders.
                  </p>
                  <div className="cu-main-section-opportunities__tabs-description-replaces">
                    <div className="cu-main-section-opportunities__tabs-description-replaces-title">
                      Replaces:
                    </div>
                    <div className="cu-main-section-opportunities__tabs-description-replaces-icons">
                      <span>Lattice</span>
                      <span>Gtmhub</span>
                      <span>7geese</span>
                    </div>
                  </div>
                  <a
                    data-beta
                    data-ga-click-tracking
                    ga-category="Free forever button"
                    ga-event="Free forever click"
                    lp-plan="free-forever"
                    ga-label="menu button"
                    href="#"
                    mail-label="menu free forever"
                    className="cu-main-section__btn cu-main-section__btn--pink cu-main-section-opportunities__btn"
                  >
                    Get Started
                  </a>
                </div>
                <div className="cu-main-section__video cu-main-section-opportunities__tabs-video">
                  <video
                    autoPlay
                    loop
                    className="lazy loaded"
                    height={650}
                    muted
                    playsInline
                    poster="/images/poster-images/videos/main/goals.png"
                    width={980}
                  >
                    <source
                      data-src="/videos/main/goals.mp4"
                      type="video/mp4"
                      src="/videos/main/goals.mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div
              className="cu-main-section-opportunities__tabs-panel cu-tab__panel"
              cu-data-tab-panel="all-views-tab"
            >
              <div className="cu-main-section-opportunities__tabs-panel-wrapper">
                <div className="cu-main-section-opportunities__tabs-description">
                  <h2 className="cu-main-section__header cu-main-section-opportunities__header">
                    See your work, your way.
                  </h2>
                  <p className="cu-main-section__text cu-main-section-opportunities__text">
                    Tackle work from any angle with 20+ real-time views that
                    adapt to your needs. Track tasks on List, update workflows
                    on a Board, drag-and-drop due dates on a Calendar, and so
                    much more.
                  </p>
                  <div className="cu-main-section-opportunities__tabs-description-replaces">
                    <div className="cu-main-section-opportunities__tabs-description-replaces-title">
                      Replaces:
                    </div>
                    <div className="cu-main-section-opportunities__tabs-description-replaces-icons">
                      <span>Monday</span>
                      <span>Jira</span>
                      <span>Trello</span>
                    </div>
                  </div>
                  <a
                    data-beta
                    data-ga-click-tracking
                    ga-category="Free forever button"
                    ga-event="Free forever click"
                    lp-plan="free-forever"
                    ga-label="menu button"
                    href="#"
                    mail-label="menu free forever"
                    className="cu-main-section__btn cu-main-section__btn--pink cu-main-section-opportunities__btn"
                  >
                    Get Started
                  </a>
                </div>
                <div className="cu-main-section-opportunities__tabs-image cu-main-section__image">
                  <img
                    height={650}
                    loading="lazy"
                    alt="All views"
                    src="/images/main/views/all.png"
                    width={980}
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
