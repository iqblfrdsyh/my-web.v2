"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Portofolio",
      href: "/portofolio",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isBordered
      isBlurred={true}
      isMenuOpen={isMenuOpen}
      className="bg-transparent md:px-4 py-2 sm:px-[25px]"
      style={{ zIndex: "1000" }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden w-full" justify="between">
        <NavbarBrand>
          <h1 className="font-bold text-[24px] sm:text-[27px]">
            M Iqbal Ferdiansyah
          </h1>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-between">
        <NavbarBrand>
          <p className="font-bold text-[20px] md:text-[27px]">
            M Iqbal Ferdiansyah
          </p>
        </NavbarBrand>
        {menuItems.map((data) => (
          <NavbarItem key={data.name}>
            <Link className="text-white" href={data.href}>
              {data.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu
        className="bg-[#212121] pt-10 flex flex-col items-center"
        style={{ zIndex: "999" }}
      >
        {menuItems.map((data) => (
          <NavbarMenuItem key={data.name}>
            <Link className="w-full" onClick={closeMenu} href={data.href}>
              {data.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
