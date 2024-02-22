import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <h1 className="text-4xl">
      <Hero />
      <FeaturedProducts />
    </h1>
  );
};

export default Landing;
