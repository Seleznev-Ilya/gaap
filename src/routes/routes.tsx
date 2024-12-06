import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import Preview from "../pages/Preview/Preview";
import MainFlow from "../pages/MainFlow/MainFlow";
import Stats from "../pages/Stats/Stats";
import NotFound from "../pages/NotFound/NotFound";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/flow" element={<MainFlow />} />
      <Route path="/stat" element={<Stats />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesComponent;
