import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../data";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  Palette,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../Header/Header";

export default function ManageTeam() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "access",
      headerName: "Access",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        let backgroundColor;
        let color = "#fff";

        if (access === "Admain") {
          backgroundColor = "#ff4d4d";
        } else if (access === "Manger") {
          backgroundColor = "#ffc107";
          color = "#212529";
        } else {
          backgroundColor = "#5bc0de";
          color = "#212529";
        }

        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              backgroundColor: backgroundColor,
              color: color,
              borderRadius: "5px",
              padding: "8px 12px",
              width: "100px",
              margin: "auto",

              transform: "translateY(20%)",
            }}
          >
            {access === "Admain" && (
              <AdminPanelSettingsOutlined
                sx={{ color: color }}
                fontSize="small"
              />
            )}

            {access === "Manger" && (
              <SecurityOutlined sx={{ color: color }} fontSize="small" />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: color }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: color }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: "70vh", mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
}
