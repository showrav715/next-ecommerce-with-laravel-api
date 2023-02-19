import { CategoryContext } from "@/lib/context/CategoryContext";
import Image from "next/image";
import React, { useContext } from "react";
import Container from "./styled/Container";

export default function Categories() {
  const { categories } = useContext(CategoryContext);
  console.log(categories);
  return (
    <Container class1="home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="categories d-flex justify-content-between flex-wrap align-items-center">
            {categories.map((category) => {
              return (
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>{category.name}</h6>
                    <p>{category.count}</p>
                  </div>
                  <Image src={category.image} height={110} width={110} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
