import {
  Page,
  Edit,
  Toolbar,
  // Filter,
  // Group,
} from "@syncfusion/ej2-react-grids";

export const gridAttributes = {
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
    allowEditing: false,
  },
  {
    field: "name",
    headerText: "Name",
    width: "80",
    textAlign: "Left",
    editType: "TextBox",
    validationRules: { required: true },
  },
  {
    field: "address",
    headerText: "Address",
    width: "250",
    textAlign: "Address",
    editType: "TextBox",
  },
  {
    field: "phone",
    headerText: "Phone",
    width: "120",
    textAlign: "Center",
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
