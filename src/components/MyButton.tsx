"use client";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import React from "react";

type btnProp = {
  handleClick: () => void;
};

export const ButtonFwd = ({ handleClick }: btnProp) => {
  return (
    <button onClick={handleClick}>
      <ChevronRightIcon className="w-8 h-8 text-zinc-200/50 bg-zinc-900/50 rounded-full border-[1px] border-zinc-800 " />
    </button>
  );
};

export const ButtonBack = ({ handleClick }: btnProp) => {
  return (
    <button onClick={handleClick}>
      <ChevronLeftIcon className="w-8 h-8 text-zinc-200/50 bg-zinc-900/50 rounded-full border-[1px] border-zinc-800" />
    </button>
  );
};
