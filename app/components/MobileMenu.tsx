import React from "react";
import NavLink from "./NavLink";

type Props = {
  links: {
    title: string;
    path: string;
  }[];
};

const MobileMenu: React.FC<Props> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
