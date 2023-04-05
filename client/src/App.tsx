import { FC } from "react";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ErrorPage, CardPage, SuccessfullOrder } from "./pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomePage />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div>
              <CardPage />
            </div>
          }
        />
        <Route path="/successfull-order" element={<SuccessfullOrder />} />
        <Route
          path="*"
          element={
            <div>
              <ErrorPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
