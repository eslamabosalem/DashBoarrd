import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import { Avatar, styled, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ContactsOutlined, DescriptionOutlined, HomeOutlined, PeopleAltOutlined } from "@mui/icons-material";
import PermIdentityOutlined from '@mui/icons-material/PermIdentityOutlined';
import PermContactCalendarOutlined from '@mui/icons-material/PermContactCalendarOutlined';
import QuizOutlined from '@mui/icons-material/QuizOutlined';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlined from '@mui/icons-material/PieChartOutlineOutlined';
import ShowChartOutlined from '@mui/icons-material/ShowChartOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { grey } from "@mui/material/colors";
export default function SideBar({ open, handleDrawerClose }) {
  let location = useLocation()
 const Array1 =[ 
  {text:"DashBoard" , "icon":<HomeOutlined/>, "path":"/" },
  {text:"ManageTeam" , "icon":<PeopleAltOutlined/>, "path":"/manageTeam" },
  {text:"Contacts Information" , "icon":<ContactsOutlined/>, "path":"/contacts" },
  {text:"Invoices Balances" , "icon":<DescriptionOutlined/>, "path":"/invoicesBalances" }

 ]
 
 const Array2 =[ 
  {text:"Profile Form" , "icon":<PermIdentityOutlined/>, "path":"/from" },
  {text:"Calender" , "icon":<PermContactCalendarOutlined/>, "path":"/calender" },
  {text:"FAQ Page" , "icon":<QuizOutlined/>, "path":"/faq" },

 ]
 
 const Array3 =[ 
  {text:"Bar Chart" , "icon":<BarChartOutlined/>, "path":"/chart" },
  {text:"Pie Chart" , "icon":<PieChartOutlineOutlined/>, "path":"/pieChart" },
  {text:"Line Chart " , "icon":<ShowChartOutlined/>, "path":"/lineChart" },
 
  { text: "Geography Chart", icon: <MapOutlinedIcon/>, path: "/geographt"},

 ]
  const navigatorr=useNavigate()
 
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const drawerWidth = 240;
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  }));
  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Avatar sx={{mx:"auto" ,width: open? 88 : 44 , height: open? 88 : 44 , my:1,  border: "2px solid grey" ,transition: "0.25s "}}  alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rugkjZBVrQDZsS3edjCIuV_FGIvqf6OUdzI22pKUg2WchrY9CVllPu92NEJln4xwRD8&usqp=CAU" />
        <Typography align="center" sx={{fontSize: open? 17 : 0 ,transition: "0.25s "}}>Eslam</Typography>
        <Typography align="center " sx={{fontSize: open? 15 : 0 ,transition: "0.25s "}}>Admain</Typography>
        <Divider />


        <List>
          {Array1.map((item, path) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
              onClick={()=>{
                navigatorr(item.path)
              }}
                sx={[
                  {
                    minHeight: 48, px: 2.5, bgcolor: location.pathname  === item.path   ? theme.palette.mode ==="dark" ?  grey[800] : grey[300]  : null
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
           {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text}  sx={[ open ? {   opacity: 1, }  : {  opacity: 0, }, ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>









        <Divider />
        <List>
          {Array2.map((item, path) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                 onClick={()=>{
                  navigatorr(item.path)
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {Array3.map((item, path) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                 onClick={()=>{
                  navigatorr(item.path)
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                 {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
    </div>
  );
}
