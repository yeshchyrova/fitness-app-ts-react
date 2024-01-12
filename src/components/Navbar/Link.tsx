import AnchorLink from "react-anchor-link-smooth-scroll";
import { INavbar } from "./Navbar";

interface ILink extends INavbar {
  page: string;
}

const Link = ({ page, selectedPage, setSelectedPage }: ILink) => {
  const lowerCaseVersion = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      href={`#${lowerCaseVersion}`}
      onClick={() => setSelectedPage(lowerCaseVersion)}
      className={`${
        selectedPage === lowerCaseVersion && "text-primary-500"
      } transition duration-300 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
