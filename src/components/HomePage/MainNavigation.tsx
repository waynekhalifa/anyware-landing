import NavigationItem from "./NavigationItem";

const MainNavigation: React.FC = () => {
  return (
    <nav className="nav navigation__menu" aria-label="Main Navigation">
      <ul id="navigation" className="navigation__list" role="list">
        <NavigationItem />
      </ul>
      <div className="navigation__auth">
        <button
          className="navigation__link axiforma"
          type="button"
          data-modal="enterprise"
          data-ga-click-tracking
          ga-event="Enterprise quote click"
          ga-category="Enterprise quote button"
        >
          Contact Sales
        </button>
        <div className="navigation__auth-button-group">
          <button
            className="navigation__auth-item auth__item auth__item_trial axiforma"
            type="button"
            data-beta
            data-ga-click-tracking
            lp-plan="free-forever"
            ga-event="Free forever click"
            ga-category="Free forever button"
            ga-label="menu button"
            mail-label="menu free forever"
          >
            Sign Up
          </button>
          <a
            className="navigation__auth-item auth__item auth__item_sign-in axiforma"
            href="https://app.clickup.com"
            data-ga-click-tracking
            ga-event="Landing page SignIn button"
            ga-category="Landing page SignIn button"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
