// "use client";

// import { Button } from "@/components/ui/button";
// import RequestQuote from "../ui/RequestQuote";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useEffect, useState } from "react";

// const images = [
//   "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
//   "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
//   "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
//   "https://www.krishnasalts.com/wp-content/uploads/2024/06/salt-2.jpeg",
// ];

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
//     >
//       <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#2c847f,transparent_20%),radial-gradient(circle_at_80%_60%,#22c55e,transparent_40%)]" />

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24 lg:py-32 text-center">
//         <p className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">
//           Trusted Global Salt Exporter from India
//         </p>

//         <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4 sm:mb-6">
//           Reliable Supplier of{" "}
//           <span className="block sm:inline">
//             <br className="hidden sm:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-primary">
//               Industrial & Food Grade Salt
//             </span>
//           </span>
//         </h1>

//         <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
//           Sourced from the rich salt fields of Gujarat, India. Delivering
//           consistent quality, global logistics reliability, and transparent
//           export practices for industries worldwide.
//         </p>

//         <div className="flex flex-col w-full md:w-auto xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center items-center">
//           <RequestQuote />
//           <Button variant="outline" size="lg" className="w-full md:w-auto">
//             View Products
//           </Button>
//         </div>

//         <div className="mt-12 w-full w-full h-full mx-auto">
//           <Carousel opts={{ loop: true }}>
//             <CarouselContent>
//               {images.map((src, index) => (
//                 <CarouselItem key={index}>
//                   <div className="relative w-full h-full rounded-2xl overflow-hidden">
//                     <img
//                       src={src}
//                       alt="Salt Product"
//                       className="w-full h-full object-cover"
//                     />

//                     <div className="absolute inset-0 bg-black/30" />

//                     <div className="absolute bottom-4 left-4 text-white">
//                       <p className="text-sm sm:text-base font-medium">
//                         Premium Export Quality Salt
//                       </p>
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             <CarouselPrevious className="left-2" />
//             <CarouselNext className="right-2" />
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import RequestQuote from "../ui/RequestQuote";
import { Badge } from "../ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          fill
          src="/salt-1.png"
          alt="Salt background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-24 flex flex-col items-center text-center">
        <div className="mb-6">
          <Badge className="px-4 py-4 text-xs sm:text-sm tracking-widest uppercase font-semibold border border-white/20 bg-white/10 text-white backdrop-blur-sm rounded-full shadow-md">
            Trusted Global Salt Exporter from India
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)] mb-5 sm:mb-7">
          Reliable Supplier of{" "}
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-400 drop-shadow-none">
            Industrial &amp; Food Grade Salt
          </span>
        </h1>

        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-sky-400 to-blue-500 mb-6 sm:mb-8" />
        <p className="text-base sm:text-lg md:text-xl font-medium text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed tracking-wide [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
          Sourced from the rich salt fields of{" "}
          <span className="text-white font-semibold">Gujarat, India</span> —
          delivering consistent quality, global logistics reliability, and
          transparent export practices for industries worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
          <RequestQuote />
          <Link href="#products" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              View Products
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-white/50 tracking-wider uppercase font-medium">
          <span>ISO Certified</span>
          <span className="text-white/20">|</span>
          <span>50+ Countries Served</span>
          <span className="text-white/20">|</span>
          <span>FSSAI Approved</span>
          <span className="text-white/20">|</span>
          <span>Bulk &amp; Container Shipments</span>
        </div>
      </div>
    </section>
  );
}
