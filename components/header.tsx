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
import { FaPhone } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", route: "/" },
    { name: "Servicios", route: "/servicios" },
    { name: "Contacto", route: "/contacto" },
  ];

  const services = [
    { name: "Mecanica Básica", route: "/servicios" },
    { name: "Mecanica Especializada", route: "/servicios" },
    { name: "Electricidad Automotriz", route: "/servicios" },
    { name: "Latoneria y Pintura", route: "/servicios" },
    { name: "Servicios Especiales", route: "/servicios" },
  ];

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
          <Link className="text-foreground hover:text-yellow-500" href="/">
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
            {services.map((service, index) => (
              <DropdownItem key={index}>
                <Link href={service.route}>
                  <a
                    onClick={() =>
                      localStorage.setItem("selectedService", service.name)
                    }
                    className="text-foreground hover:text-yellow-500"
                  >
                    {service.name}
                  </a>
                </Link>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        {/*<NavbarItem>
          <Link color="foreground" className="hover:text-yellow-500" href="#">
            Blog
          </Link>
        </NavbarItem>*/}
        <NavbarItem>
          <Link
            color="foreground"
            className="hover:text-yellow-500"
            href="/contacto"
          >
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem className="flex flex-row space-x-2 items-center">
          <FaPhone className="text-foreground-500" />
          <p className="text-foreground-500">Programe su cita</p>
          <p>+57 350 7800050</p>
        </NavbarItem>
        {/*<NavbarItem>
          <Link color="foreground" className="hover:text-yellow-500" href="#">
            Nosotros
          </Link>
      </NavbarItem>*/}
        {/*<Dropdown>
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
          </Dropdown>*/}
      </NavbarContent>
      <Link href="#agenda-section">
        <div className="flex flex-row items-center space-x-2 cursor-pointer text-foreground-600">
          <FaRegArrowAltCircleRight />
          <p>Reserve su cita</p>
        </div>
      </Link>

      {/*<NavbarContent justify="end">
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
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full"
              color="foreground" // Aquí asignamos el mismo color a todos los elementos
              href={item.route} // Aquí asignamos la ruta correspondiente a cada elemento
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
