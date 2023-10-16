import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "./Icons";
import { AcmeLogo } from "./AcmeLogo";

export default function App() {
  const menuItems = [
    "Inicio",
    "Servicios",
    "Blog",
    "Contacto",
    "Nosotros",
    "Trabaja con nosotros",
    "Cerrar sesión",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarBrand>
          <AcmeLogo />
          
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-white hover:text-primary-500" href="#">
            Inicio
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white hover:text-primary-500"
                endContent={icons.chevron}
                size="lg"
              >
                Servicios
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[180px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="new">Mecánica básica</DropdownItem>
            <DropdownItem key="copy">Mecáncia especializada</DropdownItem>
            <DropdownItem key="edit">Electricidad automotriz</DropdownItem>
            <DropdownItem key="edit">Latoneria y pintura</DropdownItem>
            <DropdownItem key="edit">Servicios Especiales</DropdownItem>
            
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link href="#" className="text-white hover:text-primary-500">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white hover:text-primary-500" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white hover:text-primary-500" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white hover:text-primary-500">
            Iniciar sesion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className="text-white bg-primary-700 " href="#" variant="flat">
            Crear cuenta
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white hover:text-primary-500"
              href="#"
              size="md"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
