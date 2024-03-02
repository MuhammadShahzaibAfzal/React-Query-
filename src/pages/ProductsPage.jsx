import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../http";

const ProductsPage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60, // 1 minute
  });

  if (isPending) {
    return <p>Loading......</p>;
  }
  if (isError) {
    return <p>Something went wrong while fetcing data : {error.message}</p>;
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Product List
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data?.products?.map((prodcut) => (
              <ProductCard key={prodcut.id} product={prodcut} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

/* WITHOUT REACT QUERY */

// import { useState } from "react";
// import { useEffect } from "react";
// import ProductCard from "../components/ProductCard";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // Fetch data
//   const fetchProducts = async () => {
//     setLoading(true);
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       });
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <p>Loading......</p>;
//   }

//   return (
//     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//       <h2 className="text-2xl font-bold tracking-tight text-gray-900 uppercase">
//         Products List
//       </h2>

//       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//         {products?.products?.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
