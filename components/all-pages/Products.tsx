"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    title: "De-icing Road Salt",
    desc: "Screened and used for road and surface de-icing applications in cold climate regions.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
  {
    title: "Industrial Salt",
    desc: "Salt used in chemical processing, textile industries, water treatment and other industrial operations. Available in different granulations depending on application.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
  {
    title: "Food Grade Salt",
    desc: "High-purity salt suitable for food processing industries such as dairy, bakery, snacks and other manufacturing sectors.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
  {
    title: "Refined and Non-Refined Salt",
    desc: "Processed salt with controlled purity levels and uniform particle size used in various industrial and food applications.",
    images: [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  },
];

export default function ProductsAlt() {
  return (
    <section id="products" className="w-full py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-center items-center text-center flex-col mb-16 max-w-2xl mx-auto">
          <a
            href="/#products"
            className="text-sm bg-primary w-fit mx-auto px-3 py-2 rounded text-white uppercase tracking-widest text-primary mb-3"
          >
            Our Products
          </a>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Salt Product Range
          </h2>

          <p className="text-slate-600">
            We supply a wide range of salt products for industrial, food
            processing, and infrastructure applications across global markets.
          </p>
        </div>
        <div className="space-y-20">
          {products.map((product, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-10 items-center`}
              >
                <div className={`relative ${isReverse ? "md:order-2" : ""}`}>
                  <Carousel className="w-full group">
                    <CarouselContent>
                      {product.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <img
                            src={img}
                            alt={`${product.title}-${i}`}
                            className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-2 cursor-pointer" />
                    <CarouselNext className="right-2 cursor-pointer" />
                  </Carousel>
                </div>

                <div className={`${isReverse ? "md:order-1" : ""}`}>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                    {product.title}
                  </h3>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
