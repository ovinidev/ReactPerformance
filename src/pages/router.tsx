import { Route, Routes } from "react-router-dom";
import { Performance } from "./Performance";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Performance />} />
      <Route path="*" element={<div />} />
    </Routes>
  );
}
