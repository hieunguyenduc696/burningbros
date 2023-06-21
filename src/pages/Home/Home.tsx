import { useGetProducts } from "../../api";
import { debounce } from "lodash";
import { useState } from "react";
import "./Home.css";

export const Home = () => {
  const [keyword, setKeyword] = useState("");

  const {
    data: products,
    isFetching: productsFetching,
    isLoading: productsLoading,
    hasNextPage,
    fetchNextPage,
  } = useGetProducts({ skip: 0, limit: 20, keyword });

  const handleFetchNewData = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;

    if (scrollTop + clientHeight === scrollHeight && hasNextPage) {
      fetchNextPage();
    }
  };

  const handleInputKeyword = debounce((value: string) => {
    setKeyword(value);
  }, 200);

  return (
    <div className="home-container">
      <div className="search-input">
        <input
          placeholder="Input to search..."
          onChange={(event) => handleInputKeyword(event.target.value)}
        />
      </div>
      <div className="card-list" onScroll={handleFetchNewData}>
        {products &&
          products.pages.map((product) => (
            <div key={product.id}>
              <div className="card">
                <div className="card-img">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderStartStartRadius: 12,
                      borderEndStartRadius: 12,
                    }}
                    src={product.images[product.images.length - 1]}
                    alt="thumbnail"
                  />
                </div>
                <div className="card-content">
                  <div className="card-content-header">
                    <h5 className="title">{product.title}</h5>
                    <h6 className="price">${product.price}</h6>
                  </div>
                  <div className="card-content-body">{product.description}</div>
                </div>
              </div>
            </div>
          ))}

        {(productsFetching || productsLoading) && <div>Loading...</div>}
      </div>
    </div>
  );
};
