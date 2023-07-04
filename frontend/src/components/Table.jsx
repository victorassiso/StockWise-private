import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
} from "@syncfusion/ej2-react-grids";
const Table = ({
  data,
  columns,
  gridAttributes,
  tableServices,
  handleChange,
}) => {
  return (
    <div>
      <GridComponent
        dataSource={data}
        allowPaging={gridAttributes.allowPaging}
        pageSettings={gridAttributes.pageSettings}
        editSettings={gridAttributes.editSettings}
        toolbar={gridAttributes.toolbar}
        beforeBatchSave={handleChange}
      >
        <ColumnsDirective>
          {columns.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={tableServices} />
      </GridComponent>
    </div>
  );
};

export default Table;
