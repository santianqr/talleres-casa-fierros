"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { TCFlogo } from "./tcf-logo";
import { ChevronDown } from "./icons";
import { useState } from "react";

export default function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Perfil", "Log Out"];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <TCFlogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <TCFlogo />
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-foreground hover:text-yellow-500" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-yellow-500"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="TCF Services"
            className="w-[190px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>Mecanica basica</DropdownItem>
            <DropdownItem>Mecanica especializada</DropdownItem>
            <DropdownItem>Mecanica 3</DropdownItem>
            <DropdownItem>Mecanica 4</DropdownItem>
            <DropdownItem>Mecanica 5</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link color="foreground" className="hover:text-yellow-500" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="hover:text-yellow-500" href="#">
            Contacto
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent min-w-unit-6 hover:text-yellow-500"
                radius="sm"
                variant="light"
                size="sm"
              >
                :
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="TCS us"
            className="w-[160px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>Nosotros</DropdownItem>
            <DropdownItem>Trabaja con nosotros</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link href="#" className="text-yellow-500">
            Inicia Sesión
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="bg-yellow-700" href="#" variant="flat">
            Registrarse
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
