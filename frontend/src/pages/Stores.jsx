import React, { useState } from "react";
import { Header, Table } from "../components";
import { columns, tableServices, gridAttributes } from "./customization/Stores";
import { api } from "../services/hooks/axios";
import { useQuery } from "react-query";

const Stores = () => {
  // Data
  const [stores, setStores] = useState(null);
  const { isFetching, refetch } = useQuery(
    "stores",
    async () => {
      const res = await api.get("/stores");
      setStores(res.data.stores);
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
      await api.post("/stores", records[i]).then((res) => {
        console.log(res);
      });
    }
  }

  async function handleDeleteRecords(records) {
    for (let i = 0; i < records.length; i++) {
      await api.delete(`/stores/${records[i].id}`).then((res) => {
        console.log(res);
      });
    }
  }

  async function handleUpdateRecords(records) {
    for (let i = 0; i < records.length; i++) {
      const data = {
        name: records[i].name,
        address: records[i].address,
        phone: records[i].phone,
      };
      await api.put(`/stores/${records[i].id}`, data).then((res) => {
        console.log(res);
      });
    }
  }

  // Component
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Stores" />
      {!isFetching ? (
        <Table
          data={stores}
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

export default Stores;
