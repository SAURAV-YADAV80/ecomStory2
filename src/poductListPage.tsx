import { useState, useEffect, ChangeEvent } from "react";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import { Link, useSearchParams } from "react-router-dom";
import MemoizedLoading from "./loader";
import ProductList from "./productList";
import { range } from "./range";
import 'react-toastify/dist/ReactToastify.css';

function ProductListPage() {
  const [allProducts, setAllProducts] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  let { query, sort } = params;
  let page = +params.page;

  page = +page || 1;
  query = query || "";
  sort = sort || "default";

  useEffect(() => {
    let sortType: "asc" | "desc" | undefined;
    let sortBy: string | undefined;

    if (sort === "title") {
      sortBy = "title";
    } else if (sort === "lowToHigh") {
      sortBy = "price";
    } else if (sort === "highToLow") {
      sortBy = "price";
      sortType = "desc";
    }

    getProductList(sortBy, query, +page, sortType).then((products) => {
      setAllProducts(products);
      setLoading(false);
    });
  }, [sort, query, page]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    setSearchParams({ ...params, query: event.target.value, page: '1' });

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => 
    setSearchParams({ ...params, sort: event.target.value });

  if (loading) {
    return <MemoizedLoading />;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-16 py-12 bg-white shadow-2xl rounded-lg">
      {/* Search and Sort Section */}
      <div className="w-full flex flex-col sm:flex-row justify-start md:ml-[55px] items-center mb-8 space-y-4 sm:space-y-0">
        <SearchBar
          handleChange={handleChange}
          query={query}
          className="w-full sm:w-1/2"
        />
        <Dropdown
          handleSortChange={handleSortChange}
          sort={sort}
        />
      </div>

      {/* Product List or No Matching */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full min-h-[60vh] flex items-center justify-center">
          {allProducts?.data.length > 0 ? (
            <ProductList products={allProducts.data} />
          ) : (
            <NoMatching />
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-x-1 mt-8">
        {range(1, allProducts?.meta.last_page + 1).map((pageNo) => (
          <Link
            key={pageNo}
            to={`?${new URLSearchParams({ ...params, page: pageNo.toString() })}`}
            className={`px-3 py-1 rounded ${
              pageNo === page
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition-colors duration-150`}
          >
            {pageNo}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;