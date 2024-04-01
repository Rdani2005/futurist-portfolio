import { Tags } from "@/models";
import React, { FC } from "react";

interface Props {
  name: Tags;
  onClick: (name: Tags) => void;
  isSelected: boolean;
}

export const ProjectTag: FC<Props> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
