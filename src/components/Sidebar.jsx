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
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [theme, setTheme] = useState(null);
  const [change, setchange] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let userTheme = await localStorage.getItem("theme");
        if (!userTheme) {
          await localStorage.setItem("theme", "light");
          return document.documentElement.classList.remove("dark");
        }

        if (userTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else if (userTheme == "light") {
          document.documentElement.classList.remove("dark");
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, [change]);

  const darkSwitchHandle = async () => {
    try {
      await localStorage.setItem("theme", "dark");
      // setTheme("dark");
      setchange((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }
  };

  const lightSwitchHandle = async () => {
    try {
      await localStorage.setItem("theme", "light");
      // setTheme("light");
      setchange((prev) => !prev);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="sidebar h-screen flex flex-col w-[270px]  border-r-2 dark:border-slate-400  border-gray-200">
      <div className="h-[50px] flex items-center justify-center">
        <Link to="/">
          <span className="logo text-[20px] dark:text-slate-400 text-purple-500">
            Lexadmin
          </span>
        </Link>
      </div>
      <hr className="h-0 border-x-2 border-slate-700" />
      <div className="pl-[10px]">
        <ul className=" list-none m-o p-0">
          <p className=" text-[15px] font-bold dark:text-purple-400 text-gray-500 mt-[15px] mb-[5px]">
            Main
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <DashboardIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Dashboard
            </span>
          </li>
          <p className=" text-[15px] font-bold dark:text-purple-400 text-gray-500 mt-[15px] mb-[5px]">
            List
          </p>
          <Link to="/users">
            <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
              <Person2OutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
              <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
                Users
              </span>
            </li>
          </Link>
          <Link to="/products">
            <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
              <CategoryOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
              <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
                Products
              </span>
            </li>
          </Link>
          <Link>
            <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
              <BorderStyleOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
              <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
                Orders
              </span>
            </li>
          </Link>

          <p className=" text-[15px] font-bold dark:text-purple-400 text-gray-500 mt-[15px] mb-[5px]">
            USEFUL
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <QueryStatsOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Stats
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <NotificationsActiveOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Notification
            </span>
          </li>
          <p className=" text-[15px] font-bold dark:text-purple-400 text-gray-500 mt-[15px] mb-[5px]">
            SERVICE
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <MonitorHeartOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              System Health
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <PsychologyOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Logs
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <SettingsOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Settings
            </span>
          </li>
          <p className=" text-[15px] font-bold dark:text-purple-400 text-gray-500 mt-[15px] mb-[5px]">
            USER
          </p>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <SupervisedUserCircleOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              Profile
            </span>
          </li>
          <li className=" flex items-center p-[5px] cursor-pointer dark:hover:bg-slate-200 hover:bg-purple-300">
            <LogoutOutlinedIcon className="text-10px dark:text-slate-400 text-purple-400" />
            <span className="text-[13px] font-[600] ml-[10px] text-gray-500">
              0 Log Out
            </span>
          </li>
        </ul>
      </div>
      <div className="flex mt-5  items-center mx-auto duration-100 dark:bg-slate-8 00 bg-gray-400 rounded">
        <button
          className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600"
          onClick={lightSwitchHandle}
        >
          <WbSunnyOutlinedIcon />
        </button>
        <button
          className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600"
          onClick={darkSwitchHandle}
        >
          <NightsStayOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
