import axios from "axios";

export const getAllProduct = async () => {
  try {
    const response = await axios.get(
      "https://fakestoreapiserver.reactbd.com/products"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

// single product
export const getSingleProduct = async (title) => {
  // const products_title = String(title).toLocaleLowerCase().split(" ").join(" ");
  console.log(title, "single");
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${title}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
