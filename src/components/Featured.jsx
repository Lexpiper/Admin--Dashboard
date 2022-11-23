import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  let percentage = Math.floor(Math.random() * 100) + 1;
  return (
    <div className="featured  flex-[2] shadow-lg p-[10px]">
      <div className="top flex justify-between items-center  text-gray-500">
        <h1 className="text-[16px] font-[500]">Total Revenue</h1>
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
        <p className="title font-[500] text-gray-400">Total sales made today</p>
        <p className="amount text-[30px]">$900</p>
        <p className="description font-[300px] text-[12px] text-gray-400 text-center ">
          Previous transactioon processing. last payment may not be included.
        </p>

        <div className="summary"></div>
      </div>
    </div>
  );
};

export default Featured;
