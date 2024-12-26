import React, { useState } from "react";
import ProductTable from "./components/ProductTable";
import ExportButton from "./components/ExportButton";

const App = () => {
  const [products] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ]);

  return (
    <div>
      <h1>Export Products as CSV</h1>
      <ProductTable products={products} />
      <ExportButton data={products} />
    </div>
  );
};

export default App;
