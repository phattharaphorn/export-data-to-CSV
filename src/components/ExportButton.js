import React from "react";
import { saveAs } from "file-saver";

const ExportButton = ({ data }) => {
  const handleExport = () => {
    const csvContent = [
      ["ID", "Name", "Price"], // Header
      ...data.map((row) => [row.id, row.name, row.price]), // Data rows
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "products.csv");
  };

  return (
    <button onClick={handleExport} style={{ marginTop: "10px" }}>
      Export to CSV
    </button>
  );
};

export default ExportButton;
