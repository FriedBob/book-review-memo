import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Add from "./pages/Add";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/add" element={<Add />}></Route>\
          <Route path="/book/:id" element={<Detail />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </HistoryRouter>
    </ErrorBoundary>
  );
}

export default App;
