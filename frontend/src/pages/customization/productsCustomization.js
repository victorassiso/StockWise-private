import {
  Page,
  Edit,
  Toolbar,
  Sort,
  // Resize,
  // Filter,
  // Group,
} from "@syncfusion/ej2-react-grids";

export const gridAttributes = {
  allowResizing: true,
  allowSorting: true,
  allowPaging: true,
  pageSettings: { pageSize: 20 },
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: "Batch",
  },
  toolbar: ["Add", "Edit", "Delete", "Update", "Cancel", "Search"],
};

export const tableServices = [
  Page,
  Edit,
  Toolbar,
  Sort,
  // Resize,
  // Filter,
  // Group,
];

export const columns = [
  // { type: "checkbox", width: "50" },
  {
    field: "id",
    headerText: "Id",
    width: "200",
    textAlign: "Left",
    type: "string",
    editType: "TextBox",
    allowEditing: false,
  },
  {
    field: "name",
    headerText: "Name",
    width: "200",
    textAlign: "Left",
    type: "string",
    editType: "TextBox",
    validationRules: { required: true },
  },
  {
    field: "cost",
    headerText: "Cost",
    width: "100",
    textAlign: "Address",
    type: "number",
    validationRules: { required: true },
  },
  {
    field: "price",
    headerText: "Price",
    width: "100",
    textAlign: "Center",
    type: "number",
    validationRules: { required: true },
  },
  {
    field: "status",
    headerText: "Status",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "category",
    headerText: "Category",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "created_at",
    headerText: "Create At",
    width: "150",
    textAlign: "Center",
    type: "Date",
    format: "dd/MM/yyyy HH:mm:ss",
    allowEditing: false,
  },
  {
    field: "updated_at",
    headerText: "Updated_at At",
    width: "150",
    textAlign: "Center",
    type: "Date",
    format: "dd/MM/yyyy HH:mm:ss",
    allowEditing: false,
  },
];
