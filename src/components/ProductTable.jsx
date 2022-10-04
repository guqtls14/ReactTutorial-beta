import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable({ products, filterText, inStockOnly }) {
  // forEach이용
  //   const rows = [];
  //   let change = null;
  //   products.forEach((product) => {
  //     if (product.category !== change) {
  //       rows.push(
  //         <ProductCategoryRow
  //           category={product.category}
  //           key={product.category}
  //         />
  //       );
  //     }
  //     rows.push(<ProductRow product={product} key={product.name} />);
  //     change = product.category;
  //   });

  console.log(filterText);
  console.log(inStockOnly);

  //   map이용
  const rows = products.map((product, idx) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (idx == 0) {
      return (
        <>
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
          <ProductRow product={product} key={product.name} />
        </>
      );
    } else if (product.category === products[idx - 1].category) {
      return <ProductRow product={product} key={product.name} />;
    } else {
      return (
        <>
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
          <ProductRow product={product} key={product.name} />
        </>
      );
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
