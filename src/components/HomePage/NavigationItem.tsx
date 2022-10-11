import Link from "../UI/Link";

interface Props {
  item: any;
}

const NavigationItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="navigation__list-item">
      <Link href={item.path} className="navigation__link">
        {item.name}
      </Link>
    </li>
  );
};

export default NavigationItem;
