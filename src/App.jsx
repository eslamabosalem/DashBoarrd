import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getTheme from './Theme';

import Dashboard from './Component/Dashboard/Dashboard';
import Layout from './Component/Layout'; // Layout فيه Topbar و Sidebar
import ManageTeam from './Component/ManageTeam/ManageTeam';
import Contacts from './Component/Contacts/Contacts';
import InvoicesBalances from './Component/InvoicesBalances/InvoicesBalances';
import From from './Component/From/From';
import Calender from './Component/Calender/Calender';
import Faq from './Component/Faq/Faq';
import Chart from './Component/Chart/Chart';
import PieChart from './Component/PieChart/PieChart';
import LineChart from './Component/LineChart/LineChart';


import PieCharts from './Component/PieChart/PieCharts';
import Geography from './Component/Geography/Geography';
import Geo from './Component/Geography/Geo';





function App() {
  const theme = getTheme(); // مش بحتاج تمرر mode

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // مش بحتاج تمرر mode ولا toggleColorMode
      children: [
        { index: true, element: <Dashboard /> },
        { path: "manageTeam", element: <ManageTeam /> },
        { path: "contacts", element: <Contacts /> },
        { path: "invoicesBalances", element: <InvoicesBalances /> },
        { path: "from", element: <From/> },
        { path: "calender", element: <Calender/> },
        { path: "faq", element: <Faq/> },
        { path: "chart", element: <Chart/> },
        { path: "pieChartt", element: <PieChart/> },
        { path: "lineChart", element: <LineChart/> },
        { path: "geographtt", element: <Geography/> },
        { path: "geographt", element: <Geo/> },
        
        { path: "pieChart", element: <PieCharts/> },
      ],
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
