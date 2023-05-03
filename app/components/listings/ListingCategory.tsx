"use client";
import React from "react";
import { IconType } from "react-icons/lib";

type ListingCategoryProps = {
  label: string;
  description: string;
  icon: IconType;
};

const ListingCategory = ({
  icon: Icon,
  label,
  description,
}: ListingCategoryProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon className="text-neutral-600" size={40} />
        <div className="text-lg font-semibold">{label}</div>
        <div className="text-neutral-500 font-light">{description}</div>
      </div>
    </div>
  );
};

export default ListingCategory;
