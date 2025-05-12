import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../Header/Header";

const InvoicesBalances = () => {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

      <Box sx={{ height: "75vh", mx: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          localeText={{
            toolbarQuickFilterPlaceholder: "Search contacts",
          }}
          showToolbar
        />
      </Box>
    </Box>
  );
};

export default InvoicesBalances;
