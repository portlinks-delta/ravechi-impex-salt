"use client";

import { CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-slate-50 text-slate-900">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">
          About Us
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
          Shree Ravechi Impex Delivering High-Quality Salt
        </h2>
        <p className="text-lg md:text-xl text-primary font-medium">
          From India to the World
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-foreground  mb-6">
            We are a producer and exporter of high-quality salt based in the
            Kutch region of Gujarat, India — one of the world's largest natural
            salt producing areas. With strategic proximity to Mundra Port, we
            supply a wide range of salt products to industrial, food processing
            and infrastructure sectors across international markets.
          </p>

          <p className="text-lg text-foreground  mb-8">
            We focus on consistent quality, dependable supply and transparent
            export practices, enabling our partners to source salt from India
            with confidence.
            <br />
            We work with importers, distributors and industrial users across
            multiple sectors that require consistent salt quality for their
          </p>

          <div className="space-y-4">
            {[
              "Strategic location near Mundra Port",
              "Wide range of salt grades & granulations",
              "Flexible packaging options",
              "Third-party inspection available (SGS / BV)",
              "Reliable export documentation & logistics",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 w-5 h-5 mt-1" />
                <p className="text-foreground ">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {[
                "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
                "https://www.krishnasalts.com/wp-content/uploads/2024/01/triple-refined-free-flow-Iodized-salt-1.jpg",
                "https://www.krishnasalts.com/wp-content/uploads/2024/01/industrial-salt-freeflow-500x500-1.png",
              ].map((src, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      width={500}
                      height={500}
                      src={src}
                      alt={`Salt Image ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              variant={"default"}
              className="left-2 cursor-pointer"
            />
            <CarouselNext
              variant={"default"}
              className="right-2 cursor-pointer"
            />
          </Carousel>
        </div>

        <p className="text-primary w-full mb-8"></p>
      </div>
    </section>
  );
}
