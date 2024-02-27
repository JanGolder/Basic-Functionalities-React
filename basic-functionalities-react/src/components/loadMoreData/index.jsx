import { useEffect, useState } from "react";
import '../loadMoreData/styles.css'

export default function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disabledLoad, setDisabledLoad] = useState(false);

  async function handleFetch() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setIsLoading(false);
        setProducts((prevState) => [...prevState, ...result.products]);
      }
    } catch (e) {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) {
      setDisabledLoad(true);
    }
  }, [products]);

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disabledLoad}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Load More Products
        </button>
        {disabledLoad ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
