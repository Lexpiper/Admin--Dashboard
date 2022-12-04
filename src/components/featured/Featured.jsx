import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.css";

const Featured = () => {
  let percentage = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="featured  flex-[2] flex-col  justify-between items-center shadow-lg p-[10px]">
      <div className="top flex justify-between items-center h-fit text-gray-500">
        <h1 className="text-[16px] font-semibold">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" className="" />
      </div>
      <div className="p-[20px] flex flex-col items-center justify-center gap-[15px] ">
        <div className="text-[12px] flex h-[100px] w-[100px]">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title font-[500] text-gray-400 text-[19px]">
          Total sales made today
        </p>
        <p className="amount text-[30px]">$900</p>
        <p className="description font-[300px] text-[12px] text-gray-400 text-center ">
          Previous transactioon processing. last payment may not be included.
        </p>

        <div className="summary flex items-center w-full justify-between text-center ">
          <div className="flex flex-col text-center">
            <div className="text-gray-400 mb-3 font-semibold text-[19px]">
              Target
            </div>
            <div className=" flex negative">
              <ExpandMoreOutlinedIcon />
              <div className=" font-semi-bold text-center text-[18px]">
                $12k
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-400 mb-3 font-semibold text-[19px]">
              Last Week
            </div>
            <div className=" flex positive">
              <KeyboardArrowUpOutlinedIcon />
              <div className=" font-semi-bold text-center text-[18px] ">
                $12k
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-400 mb-3 font-semibold text-[19px]">
              Last Month
            </div>
            <div className=" flex negative">
              <KeyboardArrowUpOutlinedIcon />
              <div className=" font-semi-bold text-center text-[18px]">
                $12k
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
