"use client";
import React from "react";
import HeaderPage from "@/components/header";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Servicios() {
  const size = 24;
  const rows = new Array(6).fill(null);
  const cols = new Array(size).fill(null);

  return (
    <>
      <HeaderPage />
      <main className="w-full py-4 px-6 flex justify-center">
        <div className="max-w-[1024px] w-[100%]">
          <section>
            <p className="text-center">SERVICIOS</p>
            <div className="flex flex-wrap justify-center h-[20vh] relative">
              <div
                className="grid w-full h-[100%] gap-0.5"
                style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
              >
                {rows.map((_, i) =>
                  cols.map((_, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`relative ${
                        i % 2 === j % 2 ? "bg-yellow-500" : "bg-black"
                      }`}
                      style={{ paddingBottom: `${100 / size}%` }}
                    >
                      <div className="absolute inset-0"></div>
                    </div>
                  ))
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            </div>
          </section>
          <section>
            <div className="w-full bg-gray-500 flex">
              <div className="w-1/2 bg-gradient-to-r from-transparent  to-black" />
              <div className="relative bg-background ">
                <Image
                  alt=""
                  src={"/ICONO-CARRO-AMARILLO.png"}
                  width={700}
                  height={200}
                  objectFit="contain"
                />
              </div>

              <div className="w-1/2 bg-gradient-to-l from-transparent  to-black" />
            </div>
          </section>
          <section>
            <Accordion selectionMode="multiple">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Mecánica básica"
              >
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, similique pariatur? Veniam deserunt possimus eligendi
                    voluptas, optio deleniti labore cumque impedit alias saepe
                    ducimus unde, voluptate dicta in aspernatur suscipit?
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil eveniet officiis non distinctio, explicabo asperiores
                    quia dolorum ipsam nesciunt ea minima nam, ut a odit ducimus
                    excepturi animi! Corrupti, ex!
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    veniam laudantium a dolorum maiores magni doloremque soluta
                    nemo tenetur praesentium mollitia perferendis eum optio
                    nulla autem quas, excepturi quisquam molestiae?
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Mecánica especializada"
              >
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, similique pariatur? Veniam deserunt possimus eligendi
                    voluptas, optio deleniti labore cumque impedit alias saepe
                    ducimus unde, voluptate dicta in aspernatur suscipit?
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil eveniet officiis non distinctio, explicabo asperiores
                    quia dolorum ipsam nesciunt ea minima nam, ut a odit ducimus
                    excepturi animi! Corrupti, ex!
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    veniam laudantium a dolorum maiores magni doloremque soluta
                    nemo tenetur praesentium mollitia perferendis eum optio
                    nulla autem quas, excepturi quisquam molestiae?
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Electricidad Automotriz"
              >
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, similique pariatur? Veniam deserunt possimus eligendi
                    voluptas, optio deleniti labore cumque impedit alias saepe
                    ducimus unde, voluptate dicta in aspernatur suscipit?
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil eveniet officiis non distinctio, explicabo asperiores
                    quia dolorum ipsam nesciunt ea minima nam, ut a odit ducimus
                    excepturi animi! Corrupti, ex!
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    veniam laudantium a dolorum maiores magni doloremque soluta
                    nemo tenetur praesentium mollitia perferendis eum optio
                    nulla autem quas, excepturi quisquam molestiae?
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Accordion 4"
                title="Latoneria y pintura"
              >
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, similique pariatur? Veniam deserunt possimus eligendi
                    voluptas, optio deleniti labore cumque impedit alias saepe
                    ducimus unde, voluptate dicta in aspernatur suscipit?
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil eveniet officiis non distinctio, explicabo asperiores
                    quia dolorum ipsam nesciunt ea minima nam, ut a odit ducimus
                    excepturi animi! Corrupti, ex!
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    veniam laudantium a dolorum maiores magni doloremque soluta
                    nemo tenetur praesentium mollitia perferendis eum optio
                    nulla autem quas, excepturi quisquam molestiae?
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
              <AccordionItem
                key="5"
                aria-label="Accordion 5"
                title="Servicios especiales"
              >
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, similique pariatur? Veniam deserunt possimus eligendi
                    voluptas, optio deleniti labore cumque impedit alias saepe
                    ducimus unde, voluptate dicta in aspernatur suscipit?
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil eveniet officiis non distinctio, explicabo asperiores
                    quia dolorum ipsam nesciunt ea minima nam, ut a odit ducimus
                    excepturi animi! Corrupti, ex!
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                    veniam laudantium a dolorum maiores magni doloremque soluta
                    nemo tenetur praesentium mollitia perferendis eum optio
                    nulla autem quas, excepturi quisquam molestiae?
                  </AccordionItem>
                </Accordion>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

{
  /**/
}
