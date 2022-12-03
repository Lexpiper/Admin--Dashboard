import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellaction flex items-center gap-[15px]">
            <div className="viewbutton cursor-pointer py-[2px] px-[5px] rounded-[5px] text-blue-900 border-[1px] border-dotted border-[blue]">
              View
            </div>
            <div className="deletebutton cursor-pointer py-[2px] px-[5px] rounded-[5px] text-[crimson] border-[1px]  border-dotted border-[crimson]">
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={`h-[600px] p-[20px] `}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
