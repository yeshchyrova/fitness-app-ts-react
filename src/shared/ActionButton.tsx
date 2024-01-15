import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

interface IActionButton {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: IActionButton) => {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      className="cursor-pointer rounded-md bg-secondary-500 px-10 py-2 transition duration-200 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
