import React, { useEffect, useState } from "react";
import { Header, Table } from "../components";
import { columns, tableServices, gridAttributes } from "./customization/Stores";
import { api } from "../services/hooks/axios";
import { useQuery } from "react-query";
import { queryClient } from "../services/queryClient";

const Stores = () => {
  // Data
  const [stores, setStores] = useState(null);
  const { data, isFetching, refetch } = useQuery(
    "Stores",
    async () => {
      const res = await api.get("/stores");
      setStores(res.data.stores);
    },
    {}
  );
  // const [data, setData] = useState(null);
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   api
  //     .get("/stores")
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data.stores);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsFetching(false);
  //     });
  // }, []);

  // Functions
  async function handleChange(props) {
    if (props.batchChanges.addedRecords.length > 0) {
      await handleAddRecord(props.batchChanges.addedRecords);
    }
  }
  async function handleAddRecord(records) {
    for (let i = 0; i < records.length; i++) {
      console.log(records[i]);
      await api.post("/stores", records[i]).then((res) => {});
      refetch();
    }
  }

  // Component
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
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
