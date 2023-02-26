import ReactStars from "react-rating-stars-component";
import Link from "next/link";
import Container from "./styled/Container";
import { ProductContext } from "@/lib/context/ProductContext";
import { useContext } from "react";
const SpecialProduct = () => {
  const { special_offers } = useContext(ProductContext);
  return (
    <>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {special_offers.map((item, index) => {
            return (
              <div className="col-6 mb-3">
                <div className="special-product-card">
                  <div className="d-flex justify-content-between">
                    <Link href={`product/${item.id}`}>
                      <img
                        src={item.thumbnail}
                        className="img-fluid"
                        alt="watch"
                      />
                    </Link>
                    <div className="special-product-content">
                      <h5 className="brand">Havels</h5>
                      <h6 className="title">
                        {item.title}
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={item.rating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="price">
                        <span className="red-p">${item.current_price}</span>
                        <strike>${item.previous_price}</strike>
                      </p>
                      <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                          <b>5 </b>days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                          <span className="badge rounded-circle p-3 bg-danger">
                            1
                          </span>
                          :
                          <span className="badge rounded-circle p-3 bg-danger">
                            1
                          </span>
                          :
                          <span className="badge rounded-circle p-3 bg-danger">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="prod-count my-3">
                        <p>Products: 5</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <Link href={"/"} className="button">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default SpecialProduct;
