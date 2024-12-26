import React from "react";

const ProductTable = ({ products }) => (
  <table border="1" style={{ width: "100%", textAlign: "left" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductTable;
