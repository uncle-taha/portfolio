import { useState } from "react";
import Cart from "../components/blogs/Cart";
import ProductsPage from "../components/blogs/ProductPage";
import Tooltip from "../components/blogs/Tooltip";
import DatePicker from "../components/blogs/DatePicker";

const allComponents = [
  <Cart />,
  <ProductsPage />,
  <Tooltip />,
  <DatePicker /> /* ... */,
];

function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleComponents = allComponents.slice(0, visibleCount);

  return (
    <div className="container mx-auto py-4 max-w-6xl bg-slate-100 rounded-2xl mt-25 mb-15  dark:bg-gray-900 border-white/80 dark:shadow-lg shadow-black/4 backdrop-blur-[5.2px] border">
      <h1 className="text-4xl font-bold mb-6 pl-6  items-center border-b-2 border-gray-300 pb-4">
        Ready to use components
      </h1>
      <div className="grid grid-cols-1   gap-6 p-6">
        {visibleComponents.map((Component, index) => (
          <div key={index}>{Component}</div>
        ))}
      </div>

      {visibleCount < allComponents.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((c) => c + 3)}
            className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
