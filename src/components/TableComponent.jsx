import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import PlaceIcon from '@mui/icons-material/Place';

const rows = [
  { created: "1 Sep 2024", source: "Salla", from: "Main Branch", courier: "Aramex", cod: 0, fees: 24 },
  { created: "1 Sep 2024", source: "Zid", from: "Jeddah Branch", courier: "SPL", cod: 0, fees: 24 },
  { created: "1 Sep 2024", source: "Nitros", from: "Main Branch", courier: "DHL", cod: 248, fees: 24 } ];


const sidebarItems = [
  { icon: <DashboardIcon />, text: "Dashboard" },
  { icon: <LocalShippingIcon />, text: "Shipments" },
  { icon: <AccountBalanceWalletIcon />, text: "Wallet" },
  { icon: <SettingsIcon />, text: "Settings" },
  { icon: <HelpIcon />, text: "Help Center" },
  { icon: < PlaceIcon  />, text: "Pickup Locations" },

];

const TableComponent = () => {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <Box sx={{ display: "flex", height: "100%", backgroundColor: "#f9f9f9" }}>
    
      <Box sx={{ width: "250px", backgroundColor: "#f9f9f9", padding: "1rem" }}>
       
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem button key={index} sx={{ marginBottom: "0.5rem" }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

     
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
       
        <TextField
          variant="outlined"
          placeholder="Search by shipment number or customer name"
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
        <Paper sx={{  overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#f1f1f1" }}>
                <TableRow>
                  <TableCell>Created On</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>From</TableCell>
                  <TableCell>Courier</TableCell>
                  <TableCell>COD (SAR)</TableCell>
                  <TableCell>Shipping Fees</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice().map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f9f9f9",
                      },
                    }}
                  >
                    <TableCell>{row.created}</TableCell>
                    <TableCell>{row.source}</TableCell>
                    <TableCell>{row.from}</TableCell>
                    <TableCell>{row.courier}</TableCell>
                    <TableCell>{row.cod}</TableCell>
                    <TableCell>{row.fees}</TableCell>
                    <TableCell>
                      <Button size="small" variant="contained">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </Box>
    </Box>
  );
};

export default TableComponent;
