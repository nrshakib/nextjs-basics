import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  );
};

export default Home;
