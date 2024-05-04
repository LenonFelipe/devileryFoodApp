import { db } from "../_lib/prisma";
import ProductItem from "./product-item";

const ProductList = async () => {
  const products = await db.product.findMany({
    // Procura products no db
    where: {
      discountPercentage: {
        // Apenas se o percentual do desconto for maior que 0
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div className="[&::-webkit-scrollbar]:hidden} flex gap-4 overflow-scroll">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
