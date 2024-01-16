import AnchorLink from "react-anchor-link-smooth-scroll";
import { INavbar } from "./Navbar";
import { SelectedPage } from "@/shared/types";

interface ILink extends Omit<INavbar, "isTopOfPage"> {
  page: SelectedPage;
  setIsMenuToggled: () => void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: ILink) => {
  const lowerCaseVersion = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCaseVersion}`}
      onClick={() => {
        setSelectedPage(lowerCaseVersion);
        setIsMenuToggled();
      }}
      className={`${
        selectedPage === lowerCaseVersion && "text-primary-500"
      } transition duration-200 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
