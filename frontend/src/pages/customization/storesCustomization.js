import {
  Page,
  Edit,
  Toolbar,
  // Resize,
  // Filter,
  // Group,
} from "@syncfusion/ej2-react-grids";

export const gridAttributes = {
  // allowResizing: true,
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
    width: "80",
    textAlign: "Left",
    type: "string",
    editType: "TextBox",
    validationRules: { required: true },
  },
  {
    field: "address",
    headerText: "Address",
    width: "250",
    textAlign: "Address",
    type: "string",
    editType: "TextBox",
  },
  {
    field: "phone",
    headerText: "Phone",
    width: "120",
    textAlign: "Center",
    type: "string",
    editType: "TextBox",
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
