import Datatable from "../components/datatable/Datatable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const List = () => {
  return (
    <div>
      <h1 className="flex w-full">
        <Sidebar />
        <div className="listcon flex-[6]">
          <Navbar />
          <Datatable />
        </div>
      </h1>
    </div>
  );
};

export default List;
