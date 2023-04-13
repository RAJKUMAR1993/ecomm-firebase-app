import React from "react";
import productBanner from "../assests/product-banner.png";

const ProductBanner = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row ">
          <img src={productBanner} className="img-fluid" alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductBanner;
