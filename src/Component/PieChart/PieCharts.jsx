import { Box } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import PieChart from "./PieChart";

export default function PieCharts() {
  return (
    <div>
      <Box>
        <Header title="Pie Chart" subTitle="Simple Pie Chart" />
        <PieChart />
      </Box>
    </div>
  );
}
