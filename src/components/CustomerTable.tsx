import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ColDef } from "ag-grid-community";

const ViewClaimsButton = (params: CustomCellRendererProps) => {
  return (
    <Link
      className="border px-2 py-1 rounded-sm text-xs hover:text-white bg-slate-300 hover:bg-primary"
      to={`/customers/${params.data.id}/claims`}
    >
      View Claims
    </Link>
  );
};

const CustomerTable = () => {
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState<ColDef[]>([
    {
      headerName: "SrNo.",
      valueGetter: (p) => p.node!.rowIndex! + 1,
      flex: 0.5,
    },
    { field: "firstName", flex: 1 },
    { field: "lastName", flex: 1 },
    { field: "mainPhone", flex: 1 },
    { field: "mobilePhone", flex: 1 },
    { field: "email", flex: 1 },
    {
      headerName: "Action",
      field: "action",
      cellRenderer: ViewClaimsButton,
    },
  ]);

  const { isPending, data: customerData } = useQuery({
    queryKey: ["customerData"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/customers`
      );
      return await response.json();
    },
  });

  useEffect(() => {
    if (customerData) {
      setRowData(customerData.data);
    }
  }, [customerData]);

  if (isPending) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-xl font-semibold pb-4">List of Customers</h1>
      <div className="ag-theme-quartz" style={{ height: 600 }}>
        <AgGridReact
          headerHeight={50}
          rowHeight={50}
          pagination
          rowData={rowData}
          columnDefs={colDefs}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50]}
        />
      </div>
    </>
  );
};

export default CustomerTable;
