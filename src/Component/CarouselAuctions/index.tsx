import { useState, useRef, useEffect } from "react";

import { motion } from "framer-motion";
import { ContainerCarrousel } from "./style";
import { CardAuction } from "../CardAuction";
import { IProduct } from "../../interfaces/product";


type CarouselProps = {
  products: IProduct[];
  isSellerPage: boolean;
};

export const CarouselAuction = ({ products, isSellerPage }: CarouselProps) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      (carousel.current?.scrollWidth ? carousel.current?.scrollWidth : 0) -
        (carousel.current?.offsetWidth ? carousel.current?.offsetWidth : 0) -
        0
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
          {products.map((product, index) => {
            return (
              <motion.div className="item" key={index}>
                <CardAuction product={product} isSellerPage={isSellerPage}/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </ContainerCarrousel>
  );
};
