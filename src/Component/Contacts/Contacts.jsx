import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../component/Header.jsx/Header";

const Contacts = () => {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box sx={{ height: "75vh", width: "99%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }} // عشان يظهر الـ GridToolbar
          localeText={{
            toolbarQuickFilterPlaceholder: 'Search contacts', // تعديل نص البحث
          }}
          showToolbar
        />
      </Box>
    </Box>
  );
};

export default Contacts;