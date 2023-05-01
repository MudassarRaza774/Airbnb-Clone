"use client";
import React from "react";
// import type { IconType } from "react-icons";
import { IconType } from "react-icons/lib";

type ButtonProps = {
  disabled?: boolean;
  icon?: IconType;
  label: string;
  outline?: boolean;
  small?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white"
      }
      ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-[2px]"
      }
      `}
    >
      {Icon && (
        <Icon
          className={`absolute left-4  ${small ? "" : "top-3"}`}
          size={small ? 20 : 24}
        />
      )}
      {label}
    </button>
  );
};

export default Button;
