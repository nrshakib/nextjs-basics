export const generateMetadata = ({ params }) => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetails = ({ params }) => {
  return <div>Product Details: {params.productId}</div>;
};

export default ProductDetails;
