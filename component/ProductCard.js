import ReactStars from "react-rating-stars-component";
import Link from "next/link";
const ProductCard = ({id,title,previous_price,current_price,rating,thumbnail}) => {
  let grid;
  
 

  return (
    <>
      <div
        className={`col-3 `}
      >
        <Link
          href="/product/1"
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="/images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={thumbnail} className="img-fluid" alt="product image" />
            <img src="/images/watch-1.avif" className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand my-2">Havels</h6>
            <h5 className="product-title">
              {title}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <div className="d-flex justify-content-between align-items-center">
            <p className="price">${current_price}</p>
            <del className="price"><p className="price">${previous_price}</p></del>
            </div>

          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      
    
    </>
  );
};

export default ProductCard;
