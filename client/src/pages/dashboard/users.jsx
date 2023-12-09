import { AccountContext } from "@/context/AccountProvider";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button
  } from "@material-tailwind/react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { addUser, getUsers } from "@/service/api";

export function Users() {

  const {user, setUser, users, setUsers, addUserDialog, setAddUserDialog} = useContext(AccountContext);

  useEffect(() => {
    getAllUsers();
  }, [])
  
  const getAllUsers = async() =>{
    let response = await getUsers();
    setUsers(response.data);
  }

  const handleClickOpen = () => {
    setAddUserDialog(true);
  };

  const handleClose = () => {
    setAddUserDialog(false);
  }

  const onValueChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value });
  }

  const AddUserDetails = async () => {
    await addUser(user);
    setAddUserDialog(false);
  }

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader variant="gradient" color="gray" className="flex mb-8 p-6">
              <Typography variant="h6" color="white">
                Users Table
              </Typography>
              <Button className="ml-auto bg-blue-500" variant="outlined" onClick={handleClickOpen} >Add Users</Button>
              <Dialog className="flex flex-col md:min-w-[400px] sm:min-w-[300px]" open={addUserDialog} onClose={handleClose}>
                <DialogTitle>Add New User</DialogTitle>
                <Divider/>
                <DialogContent>
                  
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e)=> onValueChange(e)}
                    required
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    name="username"
                    label="username"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e)=> onValueChange(e)}
                    required
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e)=> onValueChange(e)}
                    required
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e)=> onValueChange(e)}
                    required
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={()=> AddUserDetails()}>Add User</Button>
                </DialogActions>
              </Dialog>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <Table className="w-full min-w-[640px] table-auto">
                <TableHead>
                  <TableRow>
                    {["id", "Name", "Username", "Email", "Phone"].map(
                      (el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-5 text-left"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    users.map(user => (
                      <TableRow>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </CardBody>
          </Card>
        </div>
      );
}