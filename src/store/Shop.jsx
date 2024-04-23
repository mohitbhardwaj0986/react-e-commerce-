import React from "react";

import { HeroSection } from "../components";
import { useSelector } from "react-redux";

import Card from "../components/Card";

function Shop() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <HeroSection />
      <div className="flex gap-10 flex-wrap justify-center">
        {products
          ? products.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                images={item.images}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Shop;
