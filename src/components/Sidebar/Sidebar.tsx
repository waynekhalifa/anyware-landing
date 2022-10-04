import { selectSelected } from "@/store/pageSlice";
import { useSelector } from "react-redux";
import StickyBox from "react-sticky-box";
import Image from "next/image";
interface Props {
  slug: string;
}

const Sidebar: React.FC<Props> = ({ slug }) => {
  const page = useSelector(selectSelected);

  const renderContent = () => {
    if (page !== null)
      return <Image src={page.thumbnail} width={362} height={156} />;

    return <></>;
  };

  return (
    <StickyBox offsetTop={64} offsetBottom={0}>
      {renderContent()}
    </StickyBox>
  );
};

export default Sidebar;
