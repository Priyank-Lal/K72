import React, { useRef } from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navigation/Navbar";

const App = () => {
  return (
    <>
      <div className="text-white">
        <Navbar />
        <MainRoutes />
      </div>
    </>
  );
};

export default App;
