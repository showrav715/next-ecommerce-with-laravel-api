import { ProductContext } from "@/lib/context/ProductContext";
import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import Container from "./styled/Container";

export default function FeaturedProduct() {
    const { featuredProducts } = useContext(ProductContext);
  return (
    <Container class1="featured-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Featured Collection</h3>
        </div>
              {featuredProducts.map((product) => {
                  return <ProductCard {...product} />
              })}
        
      </div>
    </Container>
  );
}
