import React, { useEffect, useState } from "react";
import "../products/product.css";
import ProductCard from "../products/ProductCard";
import { getAllProduct } from "../../api/Api";
import ProductBanner from "../products/ProductBanner";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await getAllProduct();
    setProducts(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container">
        <ProductBanner />
        <hr className="bg-warning" />
      </div>
      <div className="container">
        <h4>
          New
          <span className="text-info fst-italic text-bold py-2">Products</span>
        </h4>
        <div className="row">
          {products.map((item, index) => {
            return (
              <>
                <div className="col-md-3 col-sm-6">
                  <ProductCard key={item._id} products={item} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
