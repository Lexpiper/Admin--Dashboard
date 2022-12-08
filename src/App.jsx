import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import Single from "./pages/Single";
import New from "./pages/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";

function App() {
  return (
    <div className="App dark:text-gray-100 dark:bg-slate-900 duration-100">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title={"Add new user"} />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productid" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title={"Add new product"} />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
