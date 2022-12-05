import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setfile] = useState("");

  console.log(file);
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="newcont flex-[6]">
        <Navbar />
        <div className="top flex shadow-lg m-[20px] p-[10px]">
          <h1 className="text-gray-400 text-[20px]">{title}</h1>
        </div>
        <div className="botom flex shadow-lg m-[20px] p-[10px]">
          <div className=" flex-1">
            <div className="w-full">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="image"
                className="2xl:w-[200px] w-[200px] 2xl:h-[100px] h-[200px] rounded-[50%] mx-auto "
              />
            </div>
          </div>
          <div className="righ bg-red-100 flex-[2] ">
            <form className="flex flex-wrap  gap-[30px] justify-around">
              <div className="forminp w-[40%]">
                <label className="flex items-center gap-[10px]" htmlFor="file">
                  Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
                </label>
                <input
                  className="w-[100%] p-[5px] border-b-1 border-b-gray-700 border-b-[solid] border-b-2"
                  type="file"
                  id="file"
                  onChange={(e) => setfile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="forminp  w-[40%]" key={input.id}>
                  <label className="flex items-center gap-[10px]">
                    {inputs.label}
                  </label>
                  <input
                    className="w-[100%] p-[5px] border-b-1 border-b-gray-900 border-b-[solid] border-b-2"
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <button className=" w-[150px] p-[10px] border-none text-white font-bold cursor-pointer mt-[10px] bg-teal-700">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
