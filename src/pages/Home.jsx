import Chart from "../components/Chart";
import Featured from "../components/featured/Featured";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../components/widget/Widget";
import Table from "../components/table/Table";

const Home = () => {
  return (
    <div className="flex flex-6">
      <Sidebar />
      <div className="flex-1 ">
        <Navbar />
        <div className="widgets flex md:flex-row flex-col gap-[20px] py-[5px] px-[10px] mt-5 shadow-sm  ">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="flex p-[20px] gap-[20px] py-[5px] px-[20px] ">
          <Featured />
          <Chart title={"Last 6 months (revenue)"} aspect={2 / 1} />
        </div>
        <div className=" shadow-lg m-[20px] p-[20px]">
          <div className="latest-transc">
            <div className="font-[500] text-gray-400 mb-[15px]">
              Latest Trasanction
            </div>

            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
