import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import "./widget.css";
const Widget = ({ type }) => {
  const amount = 200;
  const diff = `5%`;

  let data = {};

  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        link: "see all users",
        icon: (
          <PortraitOutlinedIcon className="text-[18px] p-[5px] rounded-[5px] box-content  self-end text-[crimson] bg-red-200" />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: (
          <ShoppingCartOutlinedIcon className="text-[18px] p-[5px] rounded-[5px] box-content  self-end text-[#ffd900] bg-[#ffff004a]" />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "view net earnings",
        icon: (
          <MonetizationOnOutlinedIcon className="text-[18px] p-[5px] rounded-[5px] box-content  self-end text-green-900 bg-green-100" />
        ),
      };
      break;
    case "balance":
      data = {
        title: "MY BALANCE",
        isMoney: true,
        link: "view details",
        icon: (
          <AccountBalanceWalletOutlinedIcon className="text-[18px] p-[5px] rounded-[5px] box-content  self-end text-purple-900 bg-purple-100" />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget flex flex-1 justify-between dark:shadow-purple-300 dark:shadow-sm shadow-xl rounded-[10px]">
      <div className="left flex flex-col justify-between p-2">
        <span className="font-bold text-[14px] text-gray-400">
          {data.title}
        </span>
        <span className="text-[28px] font-thin">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="text-[12px] border-b-gray-500 border-b-[1px] w-fit">
          {data.link}
        </span>
      </div>
      <div className="right flex flex-col justify-between p-2">
        <div className="percentage positive dark:text-[lightgreen]  flex items-center text-[14px] ">
          <KeyboardArrowUpOutlinedIcon />
          {diff}
        </div>
        <div>{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
