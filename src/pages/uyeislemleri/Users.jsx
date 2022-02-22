import React, {Component} from "react";
import User from "./User";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class Users extends Component {
  

render(){
  const { users,deleteUser } = this.props;
  
    return(
       <Table>
          <TableHead>
            <TableRow>
              <TableCell scope="col">İd</TableCell>
              <TableCell scope="col">Name</TableCell>
              <TableCell scope="col">Phone</TableCell>
              <TableCell scope="col">Email</TableCell>
              <TableCell scope="col">Delete</TableCell>
            </TableRow>
          </TableHead>
  <TableBody>
    {users.map( user=> {
        const {id,name,tel,email} = user;
        

        return (
         
           <User
            key={id}
            id={id} 
            name={name} 
            tel={tel} 
            email={email} 
            deleteUser ={deleteUser} 
            />
            );
      })}
  </TableBody>

</Table>
        
    );
}
}
export default Users;