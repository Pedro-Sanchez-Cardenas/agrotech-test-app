import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import ProductTable from "./components/ProductTable"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="productTable" element={<ProductTable />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
