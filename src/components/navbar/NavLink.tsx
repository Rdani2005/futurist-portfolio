import React, { FC } from "react";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
}

export const NavLink: FC<Props> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
