import { useState, useRef, useEffect } from "react";

import { products } from "./products";
import { Card } from "../CardProduct";

import { motion } from "framer-motion";
import { ContainerCarrousel } from "./style";

type CarouselProps = {
  type: "carro" | "moto";
  card?: { status?: boolean };
};

export const CarouselMotion = ({ type, card }: CarouselProps) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const prods = products.filter((product) => product.vehicle_type === type);
  useEffect(() => {
    setWidth(
      (carousel.current?.scrollWidth ? carousel.current?.scrollWidth : 0) -
        (carousel.current?.offsetWidth ? carousel.current?.offsetWidth : 0) -
        80
    );
  });

  return (
    <ContainerCarrousel>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="carousel"
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragElastic
          dragConstraints={{ right: 0, left: -width }}
        >
          {prods.map((product, index) => {
            return (
              <motion.div className="item">
                <Card
                  status={card?.status}
                  product={product}
                  key={index}
                ></Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </ContainerCarrousel>
  );
};
