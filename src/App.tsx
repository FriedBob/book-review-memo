import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/add" element={<Add />}></Route>\
        <Route path="/book/:id" element={<Detail />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
