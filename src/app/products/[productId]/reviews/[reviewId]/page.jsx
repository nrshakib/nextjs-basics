import { notFound } from "next/navigation";
import React from "react";

const ReviewDetails = ({ params }) => {
  if (parseInt(params.reviewId > 1000)) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
