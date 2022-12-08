import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellaction flex items-center gap-[15px]">
            <Link to="users/test">
              <div className="viewbutton cursor-pointer dark:text-gray-400 dark:border-none py-[2px] px-[5px] rounded-[5px] text-blue-900 border-[1px] border-dotted border-[blue]">
                View
              </div>
            </Link>

            <div className="deletebutton cursor-pointer dark:text-gray-400 dark:border-none py-[2px] px-[5px] rounded-[5px] text-[crimson] border-[1px]  border-dotted border-[crimson]">
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={`h-[600px] p-[20px] `}>
      <div className="w-full text-[24px] text-gray-500 mb-[10px] flex items-center justify-between">
        Add new user
        <Link
          to="/users/new "
          className="text-green-900 text-[16px] font-[400] border-[1px] border-green-900 bg-green-50 p-[5px] rounded-[5px] cursor-pointer"
        >
          Add new
        </Link>
      </div>
      <DataGrid
        className="dark:text-gray-400 dark:border-none"
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
