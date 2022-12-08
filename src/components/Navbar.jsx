import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

const Navbar = () => {
  let count = Math.floor(Math.random() * 100) + 1;

  return (
    <div className="h-[50px] dark:text-slate-400 border-b-[0.5px] dark:border-b-gray-500 border-b-[rgb(231,228,228)] flex items-center text-[14px] text-[#555]">
      <div className="flex items-center p-[20px] w-full justify-between">
        <div className="flex items-center border-[0.5px] border-solid dark:border-gray-500 border-[lightgray] p-[3px]">
          <input
            type="text"
            placeholder="search"
            className=" border-none outline-none bg-transparent"
          />
          <SearchOutlinedIcon />
        </div>
        <div className="items flex items-center">
          <div className="item flex items-center mr-[20px]">
            <LanguageOutlinedIcon className="text-[20px]" />
            English
          </div>
          <div className="item flex items-center mr-[20px]">
            <DarkModeOutlinedIcon className="text-[20px]" />
          </div>
          <div className="item flex items-center mr-[20px]">
            <FullscreenOutlinedIcon className="text-[20px]" />
          </div>
          <div className="item flex items-center mr-[20px] relative">
            <NotificationsActiveOutlinedIcon className="text-[20px]" />
            <div className="w-[15px] h-[15px] bg-red-600 rounded text-white flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">
              {count}
            </div>
          </div>
          <div className="item flex items-center mr-[20px] relative">
            <ChatBubbleOutlineOutlinedIcon className="text-[20px]" />
            <div className="w-[15px] h-[15px] bg-red-600 rounded text-white flex items-center justify-center text-[10px] font-bold absolute top-[-5px] right-[-5px]">
              {count}
            </div>
          </div>
          <div className="item flex items-center mr-[20px]">
            <FormatListBulletedOutlinedIcon className="text-[20px]" />
          </div>
          <div className="item flex items-center mr-[20px]">
            <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="profilepic"
              width={40}
              height={40}
              className="w-[30] h-[30] rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
