import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Header from "../../components/header";
import userData from "./userData"; // Assuming userData is the name of the file containing user data
import { useTheme } from "../../ThemeProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Users = () => {
  const theme = useTheme();
  const { palette } = theme.theme;

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleView = (user) => {
    console.log("View action clicked");
    console.log(user);
    handleClose();
  };

  const handleUpdate = (user) => {
    console.log("Update action clicked");
    console.log(user);
    handleClose();
  };

  const handleDelete = (user) => {
    console.log("Delete action clicked");
    console.log(user);
    handleClose();
  };

  return (
    <Box
      minHeight="100vh"
      width="100%"
      overflow="auto"
      sx={{ scrollbarWidth: "thin" }}
    >
      <Box m={2}>
        <Header
          title="USERS"
          breadcrumbs={[{ text: "Users", link: "/users" }]}
        />
        <Box p={2}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flex="0.4" display={"flex"} alignItems="center">
              <TextField
                fullWidth
                placeholder="Search Users..."
                InputProps={{ sx: { height: "2.3rem !important" } }}
                sx={{ width: "38rem" }}
              />
              <Button
                variant="contained"
                sx={{
                  marginLeft: "10px",
                  backgroundColor: palette.primary.main,
                  color: palette.text.main,
                  "&:hover": { backgroundColor: palette.secondary.main },
                  height: "100%",
                }}
              >
                Search
              </Button>
            </Box>
            <Box ml={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: palette.primary.main,
                  color: palette.text.main,
                  "&:hover": { backgroundColor: palette.secondary.main },
                  height: "100%",
                }}
              >
                ADD USER
              </Button>
            </Box>
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              mt: 2,
              borderWidth: "1px",
              borderRadius: "5px",
              borderStyle: "solid",
              borderColor: "#01012E22",
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: palette.background.header }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Image</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Full Name</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>User Type</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Phone Number</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Blood Group</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Employee Code</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Work Location</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Avatar
                        alt={`${user.firstName} ${user.lastName}`}
                        src={user.image}
                      />
                    </TableCell>
                    <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                    <TableCell>{user.user_type}</TableCell>
                    <TableCell>{user.phoneNumber}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.bloodGroup}</TableCell>
                    <TableCell>{user.employeeCode}</TableCell>
                    <TableCell>{user.workLocation}</TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        aria-controls="actions-menu"
                        aria-haspopup="true"
                        onClick={(event) => handleClick(event, user)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="actions-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={() => handleView(selectedUser)}>
                          <ListItemIcon>
                            <VisibilityIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="View" />
                        </MenuItem>
                        <MenuItem onClick={() => handleUpdate(selectedUser)}>
                          <ListItemIcon>
                            <EditIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Update" />
                        </MenuItem>
                        <MenuItem onClick={() => handleDelete(selectedUser)}>
                          <ListItemIcon>
                            <DeleteIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary="Delete" />
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Users;