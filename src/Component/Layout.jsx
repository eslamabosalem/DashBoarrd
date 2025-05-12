import React from 'react';
import Topbar from './Topbar';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Layout({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        mode={mode}
        setMode={toggleColorMode}
      />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary, // خلي النص أبيض أو فاتح حسب الثيم
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
