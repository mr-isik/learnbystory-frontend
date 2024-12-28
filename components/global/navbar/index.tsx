"use client";

import { usePaths } from "@/hooks/use-paths";
import Link from "next/link";
import React from "react";
import Items from "./items";
import { User } from "lucide-react";

type Props = {
  slug: string;
};

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths();

  return (
    <nav className="flex relative w-full items-center justify-between py-4 border-b px-4">
      <Link href={"/"}>
        <h3 className="font-medium text-xl">LearnByStory</h3>
      </Link>

      <div className="flex absolute inset-0 justify-center items-center gap-x-4">
        <Items page={page} slug={slug} />
      </div>

      <User />
    </nav>
  );
};

export default Navbar;
