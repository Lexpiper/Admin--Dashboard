import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import List from "../components/Table";

const Single = () => {
  return (
    <div className="single flex w-full">
      <Sidebar />
      <div className="singlecon flex-[6]">
        <Navbar />
        <div className="top flex p-[20px] gap-[20px]">
          <div className="left flex-[1] shadow-lg relative p-[20px]">
            <div className="edit absolute top-0 right-0  p-[5px] text-[12px] text-purple-900 bg-purple-300 cursor-pointer rounded-[5px]">
              Edit
            </div>
            <h1 className="title mb-[5px] text-gray-500 text-[18px]">
              information
            </h1>
            <div className="item flex gap-[20px]">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg h-[100px] w-[100px] rounded-[50%] object-cover"
              />
              <div className="details">
                <h1 className="itemTitle font-bold text-2xl  text-gray-400 mb-[10px] ">
                  Jane Carrot
                </h1>
                <div className="detailItem mb-[10px] text-[14px]">
                  <span className="itemKey font-bold text-gray-700 mr-[10px]">
                    Email:
                  </span>
                  <span className="itemValue font-[300]">
                    janecarrot@gmail.com
                  </span>
                </div>
                <div className="detailItem mb-[10px] text-[14px]">
                  <span className="itemKey font-bold text-gray-700 mr-[10px]">
                    Phone:
                  </span>
                  <span className="itemValue font-[300]">+1 2345 67 89</span>
                </div>
                <div className="detailItem mb-[10px] text-[14px]">
                  <span className="itemKey font-bold text-gray-700 mr-[10px]">
                    Address:
                  </span>
                  <span className="itemValue font-[300]">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem mb-[10px] text-[14px]">
                  <span className="itemKey font-bold text-gray-700 mr-[10px]">
                    Country:
                  </span>
                  <span className="itemValue font-[300]">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex-[2]">
            <Chart aspect={3 / 1} title="User spending (last 6 months)" />
          </div>
        </div>
        <div className="bottom p-[20px] shadow-lg">
          <div className="title  mb-[5px] text-gray-500 text-[18px]">
            Last transactions
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
