import React, { useState } from "react";
import { Header, Table } from "../components";
import {
  columns,
  tableServices,
  gridAttributes,
} from "./customization/inventoriesCustomization";
import { api } from "../services/hooks/axios";
import { useQuery } from "react-query";

const Inventories = () => {
  console.log("Inventories: ", gridAttributes);
  // Data
  const [inventories, setInventories] = useState(null);
  const { isFetching, refetch } = useQuery(
    "inventories",
    async () => {
      const res = await api.get("/inventories");
      setInventories(res.data.inventories);
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  // Functions
  async function handleChange(props) {
    console.log(props);
    if (props.batchChanges.changedRecords.length > 0) {
      await handleUpdateRecords(props.batchChanges.changedRecords);
    }
    refetch();
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
      await api.put(`/inventories/${records[i].id}`, data).then((res) => {
        console.log(res);
      });
    }
  }

  // Component
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Inventories" />
      {!isFetching ? (
        <Table
          data={inventories}
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

export default Inventories;
