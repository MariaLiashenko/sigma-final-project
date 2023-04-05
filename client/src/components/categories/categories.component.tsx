import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Button, Product, Wrapper } from "..";
import { getProductsByPage } from "../../api";
import { useOutsideClick } from "../../hooks";
import styles from "./categories.module.scss";
import { ProductDetail } from "./components";
import { Product as ProductType } from "../../interfaces";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";

const Categories: FC = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productIsOpened, setProductIsOpened] = useState<boolean>(false);
  const [openedProductDetails, setOpenedProductDetails] =
    useState<ProductType | null>(null);
  const productDetailRef = useRef<HTMLDivElement>(null);

  useOutsideClick(productDetailRef, () => setProductIsOpened(false));

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsByPage(page);
      setProducts(products);
    };

    fetchProducts();
  }, [page]);

  const openProductHandler = (product: ProductType) => {
    setProductIsOpened(!productIsOpened);
    setOpenedProductDetails(product);
  };

  const nextPageHandler = () => {
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  };
  const prevPageHandler = () => {
    setPage((nextPage) => nextPage - 1);
    console.log(page);
  };

  return (
    <div className={styles.categoriesSection}>
      {productIsOpened && (
        <div ref={productDetailRef}>
          {openedProductDetails && <ProductDetail {...openedProductDetails} />}
        </div>
      )}
      <Wrapper className={styles.categoriesWrapper}>
        <p className={styles.name}>Categories </p>
        <h2 className={styles.title}>Our Products</h2>
        <div className={styles.products}>
          {products.map((product) => (
            <Product
              key={product._id}
              {...product}
              onClick={() => openProductHandler(product)}
            />
          ))}
        </div>
        {page === 1 ? (
          <Button
            variant="darkFilled"
            icon={<RightArrowIcon />}
            onClick={nextPageHandler}
            className={styles.btn}
          >
            Load More
          </Button>
        ) : (
          <Button
            variant="darkFilled"
            icon={<RightArrowIcon />}
            onClick={prevPageHandler}
            className={styles.btn}
          >
            Hide All
          </Button>
        )}
      </Wrapper>
    </div>
  );
};

export { Categories };
