import React from "react";
import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router";
import Results from "./Results";
import Test from "./Test";

const NavRoutes = () => {
  useEffect(() => {
    console.log("Component re-rendered");
    // Perform actions you want to do after re-render
  });
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        {/* Handle specific paths */}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Test />} />

        {/* Additional routes (if any) */}
      </Routes>
    </div>
  );
};

export default NavRoutes;
