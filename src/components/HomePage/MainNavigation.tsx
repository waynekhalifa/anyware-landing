import useMenu from "@/hooks/useMenu";
import NavigationDropDown from "./NavigationDropDown";
import NavigationItem from "./NavigationItem";

const MainNavigation: React.FC = () => {
  const { menusListing } = useMenu("menus", "menu");

  return (
    <nav className="nav navigation__menu" aria-label="Main Navigation">
      <ul id="navigation" className="navigation__list" role="list">
        {menusListing.map((item: any) => {
          return item.children.length > 0 ? (
            <NavigationDropDown key={item.id} />
          ) : (
            <NavigationItem key={item.id} item={item} />
          );
        })}
      </ul>
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
          Contact Sales
        </button>
      </div>
    </nav>
  );
};

export default MainNavigation;
