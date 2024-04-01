import { LinkModel } from "@/models";
import React, { FC } from "react";
import { NavLink } from "./NavLink";

interface Props {
  links: LinkModel[];
}

export const MenuOverlay: FC<Props> = ({ links }) => {
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
