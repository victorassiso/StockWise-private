import React, { useState } from "react";
import { Header, Table } from "../components";
import {
  columns,
  tableServices,
  gridAttributes,
} from "./customization/Products";
import { api } from "../services/hooks/axios";
import { useQuery } from "react-query";

const Products = () => {
  // Data
  const [products, setProducts] = useState(null);
  const { isFetching, refetch } = useQuery(
    "products",
    async () => {
      const res = await api.get("/products");
      setProducts(res.data.products);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  // Functions
  async function handleChange(props) {
    console.log(props);
    if (props.batchChanges.addedRecords.length > 0) {
      await handleAddRecords(props.batchChanges.addedRecords);
    }
    if (props.batchChanges.deletedRecords.length > 0) {
      await handleDeleteRecords(props.batchChanges.deletedRecords);
    }
    if (props.batchChanges.changedRecords.length > 0) {
      await handleUpdateRecords(props.batchChanges.changedRecords);
    }
    refetch();
  }

  async function handleAddRecords(records) {
    for (let i = 0; i < records.length; i++) {
      console.log(records[i]);
      await api.post("/products", records[i]).then((res) => {
        console.log(res);
      });
    }
  }

  async function handleDeleteRecords(records) {
    for (let i = 0; i < records.length; i++) {
      await api.delete(`/products/${records[i].id}`).then((res) => {
        console.log(res);
      });
    }
  }

  async function handleUpdateRecords(records) {
    console.log(records);
    const Status = {
      active: "active",
      inactive: "inactive",
    };
    for (let i = 0; i < records.length; i++) {
      const data = {
        name: records[i].name,
        price: records[i].price,
        cost: records[i].cost,
        status: Status.active,
        category: records[i].category,
      };
      await api.put(`/products/${records[i].id}`, data).then((res) => {
        console.log(res);
      });
    }
  }

  // Component
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Products" />
      {!isFetching ? (
        <Table
          data={products}
          columns={columns}
          gridAttributes={gridAttributes}
          tableServices={tableServices}
          handleChange={handleChange}
        />
      ) : (
        "Carregando..."
      )}
    </div>
  );
};

export default Products;
