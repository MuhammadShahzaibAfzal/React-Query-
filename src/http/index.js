export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

export const fetchProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};
