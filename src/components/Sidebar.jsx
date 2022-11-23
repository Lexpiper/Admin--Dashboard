import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import BorderStyleOutlinedIcon from "@mui/icons-material/BorderStyleOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar flex flex-col w-[270px] h-[100vh] border-r-2 border-gray-200">
      <div className="h-[50px] flex items-center justify-center">
        <span className="logo text-[20px] text-purple-500">Lexadmin</span>
      </div>
      <hr className="h-0 border-x-2 border-slate-700" />
      <div className="pl-[10px]">
        <ul className=" list-none m-o p-0">
          <p className=" text-[15px] font-bold text-gray-500 mt-[15px] mb-[5px]">
            Main
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <DashboardIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Dashboard
            </span>
          </li>
          <p className=" text-[15px] font-bold text-gray-500 mt-[15px] mb-[5px]">
            List
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <Person2OutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Users
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <CategoryOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Products
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <BorderStyleOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Orders
            </span>
          </li>
          <p className=" text-[15px] font-bold text-gray-500 mt-[15px] mb-[5px]">
            USEFUL
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <QueryStatsOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Stats
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <NotificationsActiveOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Notification
            </span>
          </li>
          <p className=" text-[15px] font-bold text-gray-500 mt-[15px] mb-[5px]">
            SERVICE
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <MonitorHeartOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              System Health
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <PsychologyOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Logs
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <SettingsOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Settings
            </span>
          </li>
          <p className=" text-[15px] font-bold text-gray-500 mt-[15px] mb-[5px]">
            USER
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <SupervisedUserCircleOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Profile
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer hover:bg-purple-300">
            <LogoutOutlinedIcon className="text-10px text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Log Out
            </span>
          </li>
        </ul>
      </div>
      <div className="flex items-center m-[10px]">
        <div className="w-[20px] m-[5px] h-[20px] rounded-[5px] border-[1px] border-[#7451f8] bg-[whitesmoke] cursor-pointer"></div>
        <div className="w-[20px] m-[5px] h-[20px] rounded-[5px] border-[1px] border-[#333] bg-[darkblue] cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Sidebar;
