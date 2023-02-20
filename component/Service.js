import Image from "next/image";
import React from "react";
import Container from "./styled/Container";

export default function Service({ data }) {
  return (
    <>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {data.map((service) => {
                return (
                  <div key={service.id} className="d-flex align-items-center gap-15">
                    <Image width={32} height={31} alt="image" src={service.photo} />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0">{service.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
