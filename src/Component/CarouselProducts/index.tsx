import { useState, useRef, useEffect } from "react";

import { CardProduct } from "../CardProduct";

import { motion } from "framer-motion";
import { ContainerCarrousel } from "./style";
import { IProduct } from "../../interfaces/product";

type CarouselProps = {
  type: "carro" | "moto";
  card?: { status?: boolean };
  products: IProduct[];
  isSellerPage: boolean;
};

export const CarouselMotion = ({ type, card, products, isSellerPage }: CarouselProps) => {
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
            if (product.vehicle_type === type) {
              return (
                <motion.div className="item" key={index}>
                  <CardProduct
                    status={card?.status}
                    product={product}
                    isSellerPage={isSellerPage}
                  ></CardProduct>
                </motion.div>
              );
            }
          })}
        </motion.div>
      </motion.div>
    </ContainerCarrousel>
  );
};
